import { useState } from "preact/hooks";
import { Hamburger } from "../components/Hamburger/Hamburger.tsx";
import { Navigation } from "../components/Navigation/Navigation.tsx";

export default function MobileNavigation() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <Hamburger
        onClick={()=>setActive(true)}
        active={active}
      />
      <div class={`absolute top-0 max-w-full ${active? "left-0 w-full" : "w-[356px] left-[-356px]"}`} onClick={()=>setActive(false)}>
        <div class="w-[356px] max-w-[85%]">
          <Navigation key="navigation"/>
        </div>
      </div>
    </>
  );
}
