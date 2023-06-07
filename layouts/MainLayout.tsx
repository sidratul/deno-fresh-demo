import { h, FunctionComponent, Fragment } from 'preact';
import { Head, asset, } from "$fresh/runtime.ts";
import { Navigation } from '../components/Navigation/index.ts';
import { Card } from '../components/Card.tsx';
import { ChevronLeftIcon } from '../components/Icon/ChevronLeft.tsx';

interface MainLayoutProps {
  heading: string;
  description: string;
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ heading, description, children }) => {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href={asset("/styles/global.css")} />
      </Head>
      <div class="bg-grey-bg min-h-screen">
        <div class="flex">
          <div class="w-[356px]"><Navigation/></div>
          <div class="flex-1">
            <div class="flex flex-col items-start gap-4 p-6">
              <a href="javascript:history.back()" class="text-yellow-800 flex gap-1 text-sm items-center font-medium">
                <ChevronLeftIcon/><span>back</span>
              </a>
              <Card class="p-6 w-full">
                <h1 class="text-2xl font-medium">{heading}</h1>
                <p class="text-black-60">{description}</p>
              </Card>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}