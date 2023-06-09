import { JSX } from "preact";

interface TabProps {
  tabs: string[],
  onClick: (tab: string) => void;
  active: string;
}

export function Tab(props: TabProps ) {
  const activeClass = "border-b-[1px] boerder-[#365940]";
  const inActiveClass = "text-black-30";
  return (
    <div class="flex gap-4">
      {
        props.tabs.map(tab => (
          <button
            onClick={()=> props.onClick(tab)}
            style="outline:none"
            class={`${props.active === tab ? activeClass : inActiveClass} capitalize`}
          >{tab}</button>
        ))
      }
    </div>
  );
}