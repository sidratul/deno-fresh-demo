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
        <div class="col-span-4 md:col-span-2">
          <Tab
            tabs={['content', 'code']}
            onClick={(tab)=>{setActiveTab(tab as TabItem)}}
            active={activeTab}
          />
        </div>
        <Button class="text-sm col-span-2 md:col-span-1">Edit Template</Button>
        <div class="col-span-2 w-full md:col-span-1 h-full">
          <CopyButton html={html}/>
        </div>
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
