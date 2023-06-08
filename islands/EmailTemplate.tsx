import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { HomeData } from "../routes/index.tsx";
import { Tab } from "../components/Tab.tsx";
import CopyButton from "./CopyButton.tsx";

type TabItem = 'content'|'code';

export default function EmailTemplate({ html, subject }: HomeData) {
  const [activeTab, setActiveTab] = useState<TabItem>('content');

  return (
    <div class="flex flex-col p-6 gap-10">
      <div class="grid grid-cols-4 items-center gap-4 font-medium">
        <Tab
          tabs={['content', 'code']}
          onClick={(tab)=>{setActiveTab(tab as TabItem)}}
          active={activeTab}
        />
        <Button class="text-sm">Edit Template</Button>
        <CopyButton html={html}/>
      </div>
      <div>
        <div class="text-black-40">Subject:</div>
        <div class="font-medium">{subject}</div>
      </div>
      {activeTab === 'content' ? (
        <div dangerouslySetInnerHTML={{
          __html: html
        }} />
      ): (
        <code><pre class="overflow-auto">{html}</pre></code>
      )}
    </div>
  );
}
