import {WobbleCard} from "@/components/ui/wobble-card";
import Image from "next/image";


export default function WobbleCards(props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Comprehensive Evaluation
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Multiple Perspectives: Provides a well-rounded view of an employee’s performance by incorporating feedback from various sources.
          </p>
        </div>
        {/*TODO: fix on mobile size to be smaller*/}
        <Image
          src="/comprehensive.jpg"
          alt="linear demo image"
          width={500}
          height={500}
          className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-16 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-teal-600">
        <h2
          className="lg:max-w-80 text-center lg:text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Enhanced Self-Awareness
        </h2>
        <p className="mt-4 lg:max-w-[26rem] text-center lg:text-left text-base/6 text-neutral-200">
          Identifying Blind Spots: Helps employees recognize overlooked aspects of their performance, facilitating personal and professional growth.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-yellow-600">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Employee Development
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Targeted Training: Identifies specific areas for improvement, enabling more effective and focused development opportunities.
          </p>
        </div>
        <Image
          src="/development.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-16 object-contain rounded-2xl"
        />
      </WobbleCard>

    </div>
  )
}