import { useEffect, useLayoutEffect, useRef } from "react";

export default function useDelayAnimation() {
  const Ref = useRef(null);

  useLayoutEffect(() => {
    Ref.current.classList.add("no-animation");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(() => {
      Ref.current?.classList?.remove("no-animation");
    });
    observer.observe(Ref.current);
  }, []);

  return Ref;
}
