import { TopJaw } from "./top-jaw"
import { BottomJaw } from "./bottom-jaw"
import { Body } from "./body"

interface CrocodileSvgProps {
    className?: string
}

export const CrocodileSvg = ({ className }: CrocodileSvgProps) => {
    return (
        <svg className={className} viewBox="0 -100 2150 671" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="croc2">
                <TopJaw />
                <Body />
                <BottomJaw />
            </g>
        </svg>
    )
}
