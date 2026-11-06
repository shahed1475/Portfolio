import type { CSSProperties } from "react";

type FlowProps = {
  steps: string[];
  label: string;
  /** Step name to emphasise, for example the review step. */
  mark?: string;
};

/**
 * A small animated pipeline diagram. Pure CSS: dots light up in order and a sweep
 * travels along each link. Content is readable with animation off (reduced motion, print).
 */
export function Flow({ steps, label, mark }: FlowProps) {
  const last = steps.length - 1;
  return (
    <div className="flow">
      <p className="flow-label">{label}</p>
      <ol className="flow-steps" style={{ "--n": String(steps.length) } as CSSProperties}>
        {steps.map((s, i) => (
          <li key={s} className={s === mark ? "is-mark" : undefined} style={{ "--i": String(i) } as CSSProperties}>
            <span className="flow-dot" aria-hidden="true" />
            {i < last ? <span className="flow-link" aria-hidden="true" /> : null}
            <span className="flow-name">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
