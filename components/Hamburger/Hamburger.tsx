import { Head, asset } from "$fresh/runtime.ts";

interface HamburgerProps{
  onClick: ()=> void;
  active: boolean;
}

export function Hamburger({active, onClick}: HamburgerProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/styles/hamburger.css")} />
      </Head>
      <div id="nav-icon" class={active? "open": ""} onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
