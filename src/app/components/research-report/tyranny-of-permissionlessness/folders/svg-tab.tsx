"use client"

interface SvgTabProps {
    label: string;
    fillColor: string;
    className?: string;
    width: number; // Width in pixels for the tab
    leftPosition: number; // Left position in pixels
}

export const SvgTab = ({ label, fillColor, className = "", width, leftPosition }: SvgTabProps) => {
    // SVG original viewBox dimensions
    const SVG_VIEWBOX_WIDTH = 399
    const SVG_VIEWBOX_HEIGHT = 55
    const aspectRatio = SVG_VIEWBOX_HEIGHT / SVG_VIEWBOX_WIDTH

    // Calculate height based on width to maintain aspect ratio
    const height = width * aspectRatio

    return (
        <div
            className={`absolute ${className}`}
            style={{
                left: `${leftPosition}px`,
                width: `${width}px`,
                height: `${height}px`,
                bottom: -5
            }}
        >
            {/* SVG Path - absolute positioned */}
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

            {/* Text - absolute positioned on top */}
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ paddingBottom: `${height * 0.08}px` }} // Slight adjustment for visual centering
            >
                <span className="text-[0.875rem] md:text-[1rem] font-inknutAntiqua text-[#222222]">
                    {label}
                </span>
            </div>
        </div>
    )
}
