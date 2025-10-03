import { BackgroundWoman } from "./background-woman"
import { Crocodile } from "./crocodile/crocodile"
import { useCrocodileAnimation } from "./use-crocodile-animation"


export const CrocAnimation = () => {
    const { containerRef, crocRef } = useCrocodileAnimation()

    return (
        <div ref={containerRef} className="relative h-[60vh] w-full z-[1]" suppressHydrationWarning>
            <BackgroundWoman />
            <span ref={crocRef} className="absolute -bottom-10 left-0 inline-block will-change-transform z-[1]" suppressHydrationWarning>
                <Crocodile />
            </span>
        </div>
    )
}
