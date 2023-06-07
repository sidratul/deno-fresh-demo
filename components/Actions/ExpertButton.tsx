import { JSX } from "preact";
import { ChevronRightIcon } from "../Icon/chevronRight.tsx";
import { Button } from "../Button.tsx";

interface ExpertButtonProps {
  href: string;
}

export function ExpertButton(props: ExpertButtonProps ) {
  return (
    <a href={props.href}>
      <Button class="flex gap-4 py-4 px-6 items-center">
        <span class="text-left  font-medium">Connect me with experts to do this</span>
        <ChevronRightIcon/>
      </Button>
    </a>
  );
}
