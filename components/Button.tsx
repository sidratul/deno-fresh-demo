import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class={`bg-green px-[20px] py-[8px] rounded-lg ${props.class}`}
    />
  );
}
