'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ReactNode, useCallback, useRef } from 'react';

type ButtonProps = { onClick?: () => void };

function CarouselRoot({ children, delay = 4000 }: { children: ReactNode; delay?: number }) {
  const autoplay = useRef(Autoplay({ delay, stopOnInteraction: true, stopOnMouseEnter: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplay.current]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-[90dvw] sm:w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">{children}</div>
      </div>
      <CarouselPrev onClick={scrollPrev} /> <CarouselNext onClick={scrollNext} />
    </div>
  );
}
function CarouselContent({ children }: { children: ReactNode }) {
  return <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">{children}</div>;
}
function CarouselPrev({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className=" absolute hidden md:inline left-2 top-1/2 -translate-y-1/2 z-10 backdrop-blur bg-white/30 hover:bg-white/50 px-3 py-2 rounded-xl shadow border border-white/40 cursor-pointer transition "
    >
      ‹
    </button>
  );
}
function CarouselNext({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className=" absolute hidden md:inline right-2 top-1/2 -translate-y-1/2 z-10 backdrop-blur bg-white/30 hover:bg-white/50 px-3 py-2 rounded-xl shadow border border-white/40 cursor-pointer transition "
    >
      ›
    </button>
  );
}
export const Carousel = { Root: CarouselRoot, Content: CarouselContent, Prev: CarouselPrev, Next: CarouselNext };
