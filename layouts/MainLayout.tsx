import { h, FunctionComponent, Fragment } from 'preact';
import { Head, asset, } from "$fresh/runtime.ts";
import { Navigation } from '../components/Navigation/index.ts';
import { Card } from '../components/Card.tsx';
import { ChevronLeftIcon } from '../components/Icon/ChevronLeft.tsx';
import { ExpertButton } from '../components/Actions/ExpertButton.tsx';
import { Footer } from '../components/Footer.tsx';
import { Hamburger } from '../components/Hamburger/Hamburger.tsx';
import MobileNavigation from '../islands/MobileNavigation.tsx';

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
          <div class="w-[356px] hidden lg:block"><Navigation key="navigation"/></div>
          <div class="flex-1">
            <div class="flex flex-col h-screen">
              <div class="flex flex-col items-start gap-4 py-4 px-3 md:p-6">
                <div class="grid grid-cols-2 w-full">
                  <a href="javascript:history.back()" class="text-yellow-800 flex gap-1 text-sm items-center font-medium">
                    <ChevronLeftIcon/><span>back</span>
                  </a>
                  <div class="justify-self-end lg:hidden">
                    <MobileNavigation/>
                  </div>
                </div>

                <Card class="p-6 w-full">
                  <h1 class="text-2xl font-medium">{heading}</h1>
                  <p class="text-black-60">{description}</p>
                </Card>
              </div>
              <div class="flex-1 overflow-auto pb-6">
                <div class="grid grid-cols-3 gap-3 md:gap-6 px-3 md:px-6">
                  <Card class="col-span-3 md:col-span-2">{children}</Card>
                  <div class="col-span-3 md:col-span-1">
                    <Card class="py-6 px-4 flex flex-col gap-4 font-medium">
                      <div class="text-lg">Still need some help?</div>
                      <ExpertButton href="#"/>
                      <ExpertButton href="#"/>
                      <ExpertButton href="#"/>
                    </Card>
                  </div>
                  <div class="col-span-3 px-3 py-5 md:px-6 md:py-10 ">
                    <Footer/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}