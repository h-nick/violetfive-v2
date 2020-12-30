import {
  useState, useEffect, RefObject, useRef,
} from 'react';

const useOnScreen = (
  ref: RefObject<HTMLElement> | null,
  track = false,
  offset = '0px',
): boolean => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [isObservable, setIsObservable] = useState<boolean>(false);

  const obvCallback = ([entry]: IntersectionObserverEntry[]) => {
    setIsObservable(entry.isIntersecting);
  };

  const obvOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: offset,
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(obvCallback, obvOptions);
    if (ref?.current) {
      observer?.current.observe(ref.current);
    }

    return () => observer?.current?.unobserve(ref?.current as Element);
  }, []);

  if (isObservable && ref?.current && !track) {
    observer.current?.unobserve(ref?.current);
  }

  return isObservable;
};

export default useOnScreen;
