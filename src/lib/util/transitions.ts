import type { TransitionConfig } from "svelte/transition";

export type TypewriterParams = {
  speed?: number;
};

export function typewriter(
  node: Node,
  { speed = 1 }: TypewriterParams = {}
): TransitionConfig {
  const valid =
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE;

  if (!valid) {
    throw new Error(
      `This transition only works on elements with a single text node child`
    );
  }

  const text = node.textContent ?? "";
  const duration = text.length / (speed * 0.01);

  return {
    duration,
    tick: (t) => {
      const i = Math.trunc(text.length * t);
      node.textContent = text.slice(0, i);
    },
  };
}
