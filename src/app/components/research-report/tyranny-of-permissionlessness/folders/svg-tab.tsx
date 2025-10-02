"use client"

interface SvgTabProps {
    label: string;
    fillColor: string;
    isInteracted: boolean;
    className?: string;
    xPosition?: number; // x position in percentage (0-100)
}

export const SvgTab = ({ label, fillColor, isInteracted, className = "", xPosition = 50 }: SvgTabProps) => {
    return (
        <svg 
            className={`${isInteracted ? "w-[12rem] md:w-[32rem]" : "w-[12rem] md:w-[23rem]"} mb-[-0.5%] ${className} ml-[${xPosition}%]`} 
            viewBox="0 0 399 55" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                id="Rectangle 18" 
                d="M19.0525 14.5368C22.1981 5.81401 30.4753 0 39.7479 0H346.675C355.06 0 362.717 4.76689 366.417 12.2917L371.323 22.2691C377.411 34.648 386.673 45.1907 398.164 52.8219C398.164 52.8219 3.13892e-06 57.4827 1.56946e-06 52.8219C-1.85806e-06 42.6434 11.2175 36.2632 14.6704 26.6882L19.0525 14.5368Z" 
                fill={fillColor}
            />
            <text 
                className="inline-block text-[1.25rem] font-inknutAntiqua" 
                x={`50%`}
                y="54%" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                fill="#222222" 
                fontSize="16"
            >
                {label}
            </text>
        </svg>
    )
}
