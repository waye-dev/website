import { BackgroundWoman } from "./background-woman"
import { Crocodile } from "./crocodile/crocodile"
import { useCrocodileAnimation } from "./use-crocodile-animation"


export const CrocAnimation = () => {
    const { containerRef, crocRef } = useCrocodileAnimation()

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-visible">
            <BackgroundWoman />
            <span ref={crocRef} className="absolute -bottom-10 left-0 inline-block will-change-transform">
                <Crocodile  />
                {/* className="w-[50rem] h-[20rem] md:w-[120rem] md:h-[40rem]" */}
            </span>
        </div>
    )
}
