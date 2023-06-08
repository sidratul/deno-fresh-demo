import { FunctionComponent } from "preact";
import { HomeData } from "../../routes/index.tsx";

export const HomeContainer: FunctionComponent<HomeData> = ({ html, subject }) => {
  return (
    <div class="p-6 gap-10">
      <div>
        <div class="text-black-40">Subject:</div>
        <div class="font-medium">{subject}</div>
      </div>
      <div dangerouslySetInnerHTML={{
        __html: html
      }} />
    </div>
  );
}
