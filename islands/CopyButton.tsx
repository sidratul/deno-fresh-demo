import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { CheckIcon } from "../components/Icon/Check.tsx";

export default function CopyButton({ html }: {html: string}) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = () => {
    navigator.clipboard.writeText(html);
    setIsCopied(true);
    setTimeout(()=>{
      setIsCopied(false);
    },5000);
  }

  return (
    <Button
      class="text-sm"
      onClick={onCopy}
    >{
      !isCopied?  'Copy Html': (
        <div class="flex items-center gap-1 justify-center"><CheckIcon size="16"/> Copied</div>
      )}
    </Button>
  );
}
