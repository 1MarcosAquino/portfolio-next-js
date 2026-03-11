import MyIcon from './MyIcon';

interface SectionProps extends React.HTMLAttributes<HTMLSelectElement> {}

export const Section = ({ children, title, ...rest }: SectionProps) => {
  return (
    <section className="mt-10" {...rest}>
      <div className="section-wrapper">
        <h2 className="mb-0 flex justify-center items-center uppercase text-3xl font-semibold tracking-widest">
          <MyIcon icon="token:wing" className="mt-2" />
          {title}
          <MyIcon className="text-sky-400 transform scale-x-[-1] mt-2" icon="token:wing" />
        </h2>
        <hr className="h-px mt-3 mb-12 bg-sky-400 border-0 opacity-[0.25]" />
        {children}
      </div>
    </section>
  );
};
