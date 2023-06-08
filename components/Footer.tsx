import { CheckIcon } from "./Icon/Check.tsx";
import { DislikeIcon } from "./Icon/Dislike.tsx";
import { LikeIcon } from "./Icon/Like.tsx";

export function Footer() {
  return (
    <div class="grid grid grid-cols-2 items-center text-grey-footer text-sm px-6 py-10">
      <div>
        <div class="text-base pb-2">We value your feedback</div>
        <p>Let us know if this is interesting to you and we’ll keep up the good work. Or we’ll find a new insight for your business.</p>
      </div>
      <div class="grid grid-cols-3 text-center">
        <a href="#">
          <div class="flex flex-col items-center gap-2 border-r-[.5px] border-black-40">
            <LikeIcon/>
            <span>This is interesting</span>
          </div>
        </a>
        <a href="#">
          <div class="flex flex-col items-center gap-2 border-r-[.5px] border-black-40">
            <CheckIcon/>
            <span>I’ve done this</span>
          </div>
        </a>
        <a href="#">
          <div class="flex flex-col items-center gap-2">
            <DislikeIcon/>
            <span>Not relevant</span>
          </div>
        </a>
      </div>
    </div>
  );
}
