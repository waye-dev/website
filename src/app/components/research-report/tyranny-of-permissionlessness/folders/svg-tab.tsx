"use client"

import { useState, useEffect } from "react"

interface SvgTabProps {
    label: string;
    fillColor: string;
    className?: string;
    width: number;
    leftPosition: number;
    onClick?: () => void;
    scaleCorrection?: number;
}

export const SvgTab = ({ label, fillColor, className = "", width, leftPosition, onClick, scaleCorrection = 1 }: SvgTabProps) => {
    const SVG_VIEWBOX_WIDTH = 399
    const SVG_VIEWBOX_HEIGHT = 55
    const aspectRatio = SVG_VIEWBOX_HEIGHT / SVG_VIEWBOX_WIDTH

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const scale = isMobile ? 2 : 1
    const scaledWidth = width * scale
    const height = width * aspectRatio
    const scaledHeight = height * scale

    const correctedLeft = leftPosition * scaleCorrection + (isMobile ? 10 : 5)

    return (
        <div
            className={`absolute ${className}`}
            style={{
                right: `${correctedLeft}px`,
                width: `${scaledWidth}px`,
                height: `${scaledHeight}px`,
                bottom: -5,
                cursor: onClick ? 'pointer' : 'default',
                pointerEvents: 'auto'
            }}
            onClick={onClick}
        >
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    id="Rectangle 18"
                    d="M19.0525 14.5368C22.1981 5.81401 30.4753 0 39.7479 0H346.675C355.06 0 362.717 4.76689 366.417 12.2917L371.323 22.2691C377.411 34.648 386.673 45.1907 398.164 52.8219C398.164 52.8219 3.13892e-06 57.4827 1.56946e-06 52.8219C-1.85806e-06 42.6434 11.2175 36.2632 14.6704 26.6882L19.0525 14.5368Z"
                    fill={fillColor}
                />
            </svg>

            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ paddingBottom: `${height * 0.08}px` }}
            >
                <span className="tab-label text-[0.65rem] sm:text-[0.875rem] md:text-[0.85rem] font-inknutAntiqua text-[#222222]">
                    {label}
                </span>
            </div>
        </div>
    )
}
