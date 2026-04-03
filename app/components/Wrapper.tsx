import { HTMLAttributes } from 'react';

interface WrapperProps extends HTMLAttributes<HTMLElement> {}
// bg-background grid place-items-center h-screen
export function Wrapper({ children, ...rest }: WrapperProps) {
    return (
        <section {...rest} className="grid place-items-center bg-background h-screen">
            {children}
        </section>
    );
}
