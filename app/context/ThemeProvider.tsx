'use client';
import React, { createContext, useContext, useState } from 'react';

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
        icon: <MyIcon icon="line-md:moon-alt-to-sunny-outline-loop-transition" width="24" height="24" />,
        label: 'Tema padrão do sistema',
    },
    [Theme.light]: {
        icon: <MyIcon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" width="24" height="24" />,
        label: 'Trocar para o tema  claro',
    },
    [Theme.system]: {
        icon: <MyIcon icon="lucide:sun-moon" width="24" height="24" />,
        label: 'Trocar para o tema escuro',
    },
};

const ThemeContext = createContext({});

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [currentTheme, setCurrentTheme] = useState<Theme.dark | Theme.light | Theme.system>(Theme.dark);

    return (
        <ThemeContext.Provider value={{}}>
            <div data-theme={currentTheme}>
                <button
                    title={NEXT_METADATA[currentTheme].label}
                    onClick={() => setCurrentTheme(NEXT_THEME[currentTheme])}
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
