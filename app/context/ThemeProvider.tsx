'use client';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

import MyIcon from '@/components/MyIcon';

enum Theme {
    dark = 'dark',
    light = 'light',
    system = 'system',
}

const NEXT_THEME: Record<Theme, Theme> = {
    [Theme.dark]: Theme.system,
    [Theme.light]: Theme.dark,
    [Theme.system]: Theme.light,
};

const NEXT_METADATA = {
    [Theme.dark]: {
        icon: <MyIcon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" width="24" height="24" />,
        label: 'Tema padrão do sistema',
    },
    [Theme.light]: {
        icon: <MyIcon icon="line-md:moon-alt-to-sunny-outline-loop-transition" width="24" height="24" />,
        label: 'Trocar para o tema  claro',
    },
    [Theme.system]: {
        icon: <MyIcon icon="lucide:sun-moon" width="24" height="24" />,
        label: 'Trocar para o tema escuro',
    },
};

const ThemeContext = createContext({});

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [currentTheme, setCurrentTheme] = useState<Theme.dark | Theme.light | Theme.system>(Theme.system);
    const [menuIsHidden, setMenuIsHidden] = useState(true);
    const menuRef = useRef<HTMLUListElement>(null);

    const showMenu = (event: React.MouseEvent) => {
        event.stopPropagation();
        setMenuIsHidden(prev => !prev);
    };

    useEffect(() => {
        const handler = function (event: PointerEvent) {
            if (!menuRef.current?.contains(event.target as Node)) {
                setMenuIsHidden(true);
            }
        };

        window.addEventListener('click', handler);

        return () => window.removeEventListener('click', handler);
    }, []);

    return (
        <ThemeContext.Provider value={{}}>
            <div data-theme={currentTheme}>
                <ul
                    ref={menuRef}
                    hidden={menuIsHidden}
                    className="overflow-hidden flex flex-col gap-2 text-foreground z-100 cursor-pointer fixed bottom-16 right-4"
                >
                    {Object.entries(NEXT_METADATA).map(([k, v], i) => (
                        <li
                            onClick={() => setCurrentTheme(k)}
                            title={v.label}
                            key={i}
                            className="group flex items-center gap-2 w-full px-2 rounded-sm bg-sky-900/30 border border-sky-700/30 hover:border-highlight hover:bg-sky-900/50 transition cursor-pointer"
                        >
                            <span className="group-hover:scale-90 transition">{v.icon}</span>
                            <span>{k}</span>
                        </li>
                    ))}
                </ul>

                <button
                    title="Clique para alterar o tema"
                    onClick={showMenu}
                    className="text-foreground z-100 cursor-pointer fixed bottom-4 right-4"
                >
                    <span>{NEXT_METADATA[currentTheme].icon}</span>
                </button>

                {children}
            </div>
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}

export { ThemeProvider, useTheme };
