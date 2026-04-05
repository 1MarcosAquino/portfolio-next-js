import MyIcon from './MyIcon';

interface SectionProps extends React.HTMLAttributes<HTMLSelectElement> {}

export const Section = ({ children, title, ...rest }: SectionProps) => {
    return (
        <section className="bg-background" {...rest}>
            <div className="section-wrapper">
                <div className="sticky z-50 top-0 left-0 pt-5 max-w-fit">
                    <h2 className="flex gap-2 text-foreground text-xl md:text-2xl uppercase font-bold">
                        <MyIcon icon="token:wing" />
                        {title}
                        <MyIcon className="text-highlight transform scale-x-[-1]" icon="token:wing" />
                    </h2>

                    {/* <hr className="h-px mt-3 mb-12 bg-sky-400 border-0 opacity-[0.25]" /> */}
                </div>
                {children}
            </div>
        </section>
    );
};
