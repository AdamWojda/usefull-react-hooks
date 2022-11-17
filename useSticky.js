import { RefObject, useEffect, useRef, useState } from 'react';

function useSticky(): {
  isSticky: boolean;
  placeHolderRef: RefObject<HTMLDivElement>;
} {
  const placeHolderRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPosition(placeHolderRef, setIsSticky);
    });
  }, []);

  return { isSticky, placeHolderRef };
}

function setPosition(
    placeHolderRef: RefObject<HTMLDivElement>,
    setIsSticky: (newState: boolean) => void
) {
  const element = placeHolderRef?.current;
  const topDistance = element?.getBoundingClientRect().top;

  if (!topDistance) return;

  if (topDistance >= 0) setIsSticky(false);
  if (topDistance < 0) setIsSticky(true);
}

export default useSticky;
