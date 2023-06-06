import { FunctionComponent } from 'preact';
import { ChatIcon } from '../Icon/Chat.tsx';
import { GraphIcon } from '../Icon/Graph.tsx';
import { ListIcon } from '../Icon/List.tsx';
import { MenuIcon } from '../Icon/Menu.tsx';
import { CoinIcon } from '../Icon/Coin.tsx';
import { LogoutIcon } from '../Icon/Logout.tsx';
import { QuestionIcon } from '../Icon/Question.tsx';
import { Button } from '../Button.tsx';

const icons = [ChatIcon, GraphIcon, ListIcon, MenuIcon, CoinIcon];

const menus = [...Array(5)].map((_, i) => {
  return {
    label: `Menu ${i+1}`,
    icon: icons[i],
    href: '/',
  }
});

export const Navigation: FunctionComponent = () => {
  return (
    <div class="grid h-screen bg-nav-bg text-white p-[24px] pt-[50px] overflow-auto content-between">
      <div class="grid gap-6">
        {menus.map(menu => (
          <a key={menu.href} href={menu.href} class="flex gap-2"><menu.icon/>{menu.label}</a>
        ))}
      </div>
      <div>
        <div class="grid gap-6">
          <a href="#" class="flex gap-2"><LogoutIcon/>Logout</a>
          <a href="#" class="flex gap-2"><QuestionIcon/>FAQ</a>
          <div>Any questions? Request to speak to a growth advisor.</div>
          <Button><span class="text-black font-medium">Speak to an Advisor</span></Button>
        </div>
      </div>
    </div>
  );
}