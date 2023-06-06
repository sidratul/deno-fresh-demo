import { h, FunctionComponent } from 'preact';
import { Navigation } from '../components/Navigation/index.ts';

export const MainLayout: FunctionComponent = ({children}) => {
  return (
    <div class="bg-grey-bg min-h-screen">
      <div class="flex">
        <div class="w-[356px]"><Navigation/></div>
        <div class="">{children}</div>
      </div>

    </div>
  );
}