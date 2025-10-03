import Image from "next/image"

export const BackgroundWoman = () => {
    return (
        <div className="absolute bottom-[5%] right-[20%] -z-10">
            <div className="hidden md:block">
                <Image src='/svgs/permissionless-woman.svg' alt='permissionless woman' width={370} height={430} />
            </div>
            <div className="md:hidden">
                <Image src='/svgs/permissionless-woman.svg' alt='permissionless woman' width={170} height={200} />
            </div>
        </div>
    )
}
