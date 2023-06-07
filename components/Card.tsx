import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Card(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      class={`rounded-lg bg-white ${props.class}`}
    />
  );
}
