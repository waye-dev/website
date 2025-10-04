import Image from "next/image"

export const BackgroundWoman = () => {
    return (
        <div className="absolute bottom-[30px] right-[40%] -z-10 scale-150 md:scale-100 origin-bottom-right">
            <div className="hidden md:block">
                <Image src='/svgs/permissionless-woman.svg' alt='permissionless woman' width={370} height={430} />
            </div>
            <div className="md:hidden">
                <Image src='/svgs/permissionless-woman.svg' alt='permissionless woman' width={170} height={200} />
            </div>
        </div>
    )
}
