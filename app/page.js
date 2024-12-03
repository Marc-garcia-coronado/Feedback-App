"use client";

import {FlipWords} from "@/components/ui/flipWords";
import WobbleCards from "@/app/components/WobbleCards";
import {InfiniteMovingCardsImpl} from "@/app/components/InfiniteMovingCardsImpl";
import {HeroHighlightImpl} from "@/app/components/HeroHighlightImpl";

export default function Home() {
  const words = ['comprehensive', 'constructive', 'multi-perspective', 'balanced']

  return (
    <main>
      <section
        className="h-[25rem] lg:h-[40rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1
          className='text-2xl md:text-4xl lg:text-6xl text-start mx-auto font-normal text-neutral-600 dark:text-neutral-400 relative z-20'>
          Have a
          <FlipWords words={words}/> <br/>
          feedback with the 360 degrees method
        </h1>
      </section>

      <HeroHighlightImpl/>
      <WobbleCards/>
      <InfiniteMovingCardsImpl/>
    </main>
  );
}
