import { useReveal } from "../hooks/useReveal";

export function RevealDiv({ className, children, ...props }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className || ""}`} {...props}>
      {children}
    </div>
  );
}
