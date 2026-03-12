'use client';

import { CSSProperties, useEffect, useState } from 'react';

type AlertType = 'success' | 'error' | 'info' | 'warn';

type TsetAlertHandler = (type: AlertType, message: string) => void;

interface IAlert {
  id: number;
  type: AlertType;
  message: string;
}

let showAlertFn: (type: AlertType, message: string) => void;

export const alert = {
  success: (message: string) => showAlertFn?.('success', message),
  error: (message: string) => showAlertFn?.('error', message),
  info: (message: string) => showAlertFn?.('info', message),
  warn: (message: string) => showAlertFn?.('warn', message),
};

const setAlertHandler = (fn: TsetAlertHandler) => {
  showAlertFn = fn;
};

const useAlert = () => {
  const [toasts, setAlerts] = useState<IAlert[]>([]);

  useEffect(() => {
    setAlertHandler((type, message) => {
      const id = Date.now();
      setAlerts(prev => [...prev, { id, type, message }]);

      setTimeout(() => {
        setAlerts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    });
  }, []);

  return { toasts };
};

type MyAlertProps = {
  style?: CSSProperties;
};
export function MyAlert({ style }: MyAlertProps) {
  const { toasts } = useAlert();

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        ...style,
      }}
    >
      {toasts.map(toast => (
        <div
          key={toast.id}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            color: '#fff',
            backgroundColor: {
              success: '#4caf50',
              error: '#f44336',
              info: '#2196f3',
              warn: '#ff9800',
            }[toast.type],
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
