"use client"
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
interface Props {
  from: number;
  to: number;
  styles: string;
}
export default function Counter({ from, to, styles }: Props) {
  const nodeRef = useRef();
  // @ts-ignore

  const isInView = useInView(nodeRef)
  useEffect(() => {
    const node = nodeRef.current;


    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        // @ts-ignore
        node.textContent = parseInt(value.toFixed(2));
      }
    });

    return () => controls.stop();
  }, [isInView, from, to]);
  // @ts-ignore

  return <p ref={nodeRef} className={styles} />;
}