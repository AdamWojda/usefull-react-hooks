import { useEffect } from 'react';

const useEscape = (close: (e: any) => void) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
        e.key === 'Escape' ? close(e) : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [close]);
};

export default useEscape;
