import { Head } from "$fresh/runtime.ts";
import { MainLayout } from "/layouts/MainLayout.tsx";
import { HomeContainer } from "/containers/Homepage/index.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <MainLayout
        heading="Title of Page"
        description="We’ve generated an email template for you. Copy and paste this email into Klaviyo or Mailchimp."
      >
        <HomeContainer/>
      </MainLayout>
    </>
  );
}
