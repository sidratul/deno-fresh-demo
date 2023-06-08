import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

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
    >{isCopied? 'Html Copied': 'Copy Html'}</Button>
  );
}
