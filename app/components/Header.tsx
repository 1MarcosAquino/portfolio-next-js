import { NavMenu } from './NavMenu';

export const Header = ({ title }: { title: string }) => {
    return (
        <header className="fixed top-0 left-0 w-full bg-background shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
                <NavMenu />
            </div>
        </header>
    );
};
