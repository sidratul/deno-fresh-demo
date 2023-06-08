import { Head } from "$fresh/runtime.ts";
import { MainLayout } from "/layouts/MainLayout.tsx";
import { HomeContainer } from "/containers/Homepage/index.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

export interface HomeData {
  html: string;
  subject: string;
}

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    /** TODO: get data from API */
    const html = await Deno.readTextFile(`${Deno.cwd()}/static/html/design.html`);
    return ctx.render({
      html,
      subject: "Get spotted in our Polkadot leather ballerinas",
    });
  },
};

export default function Home({ data }: PageProps<HomeData>) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <MainLayout
        heading="Title of Page"
        description="We’ve generated an email template for you. Copy and paste this email into Klaviyo or Mailchimp."
      >
        <HomeContainer {...data}/>
      </MainLayout>
    </>
  );
}
