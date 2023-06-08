import { FunctionComponent } from "preact";
import { HomeData } from "../../routes/index.tsx";
import EmailTemplate from "../../islands/EmailTemplate.tsx";

export const HomeContainer: FunctionComponent<HomeData> = (props) => {
  return (
    <EmailTemplate {...props}/>
  );
}
