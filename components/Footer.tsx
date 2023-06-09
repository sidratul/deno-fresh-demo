import { CheckIcon } from "./Icon/Check.tsx";
import { DislikeIcon } from "./Icon/Dislike.tsx";
import { LikeIcon } from "./Icon/Like.tsx";

export function Footer() {
  return (
    <div class="grid grid-cols-2 items-center text-grey-footer text-sm gap-4 sm:gap-2">
      <div class="col-span-2 md:col-span-1">
        <div class="text-base pb-2">We value your feedback</div>
        <p>Let us know if this is interesting to you and we’ll keep up the good work. Or we’ll find a new insight for your business.</p>
      </div>
      <div class="grid gap-2 md:gap-4 col-span-2 md:col-span-1 grid-cols-3 text-center">
        <a href="#" class="col-span-1 border-r-[.5px] border-black-40">
          <div class="flex flex-col items-center gap-2 justify-center h-full">
            <LikeIcon/>
            <span>This is interesting</span>
          </div>
        </a>
        <a href="#" class="col-span-1 border-r-[.5px] border-black-40">
          <div class="flex flex-col items-center gap-2 justify-center h-full">
            <CheckIcon/>
            <span>I’ve done this</span>
          </div>
        </a>
        <a href="#" class="col-span-1">
          <div class="flex flex-col items-center gap-2 justify-center h-full">
            <DislikeIcon/>
            <span>Not relevant</span>
          </div>
        </a>
      </div>
    </div>
  );
}
