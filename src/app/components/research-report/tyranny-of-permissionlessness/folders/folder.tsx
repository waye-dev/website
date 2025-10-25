"use client"

import { forwardRef, useImperativeHandle, useRef, ReactNode, useState, useEffect } from "react"
import { SvgTab } from "./svg-tab";

interface FolderProps {
    position: number;
    label: string;
    fillColor: string;
    backgroundColor: string;
    children: ReactNode;
    tabWidth: number;
    tabLeftPosition: number;
    navbarHeight: number;
    tabScaleCorrection?: number;
    onTabClick?: () => void;
}

export interface FolderRef {
    folderRef: HTMLDivElement;
    contentRef: HTMLDivElement;
}

export const Folder = forwardRef<FolderRef, FolderProps>(({
    label,
    fillColor,
    backgroundColor,
    children,
    tabWidth,
    tabLeftPosition,
    navbarHeight,
    tabScaleCorrection = 0.7,
    onTabClick
}, ref) => {
    const folderRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [tabHeight, setTabHeight] = useState(0)

    useImperativeHandle(ref, () => ({
        get folderRef() {
            return folderRef.current!
        },
        get contentRef() {
            return contentRef.current!
        }
    }))

    // Calculate tab height based on tabWidth
    useEffect(() => {
        const SVG_VIEWBOX_WIDTH = 399
        const SVG_VIEWBOX_HEIGHT = 55
        const aspectRatio = SVG_VIEWBOX_HEIGHT / SVG_VIEWBOX_WIDTH
        const isMobile = window.innerWidth < 768
        const scale = isMobile ? 2 : 1
        const height = tabWidth * aspectRatio * scale
        setTabHeight(height)

        const handleResize = () => {
            const isMobile = window.innerWidth < 768
            const scale = isMobile ? 2 : 1
            const height = tabWidth * aspectRatio * scale
            setTabHeight(height)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [tabWidth])

    // Calculate folder height: viewport height minus navbar height minus tab height
    const availableHeight = navbarHeight > 0 && tabHeight > 0
        ? `calc(100vh - ${navbarHeight + tabHeight}px)`
        : 'calc(100vh - 140px)' // fallback

    return (
        <div
            ref={folderRef}
            className="absolute inset-0 w-full h-full text-black"
            style={{
                isolation: 'isolate',
                pointerEvents: 'none'
            }}
        >
            <div
                className="relative w-full flex flex-col justify-end"
                style={{
                    marginTop: navbarHeight > 0 ? `${navbarHeight}px` : '70px',
                    height: `calc(100vh - ${navbarHeight > 0 ? navbarHeight : 70}px)`
                }}
            >
                {/* Tab positioned above the folder body */}
                <div className="relative w-full" style={{ height: `${tabHeight}px` }}>
                    <div className="absolute bottom-0 left-0 w-full">
                        <SvgTab
                            label={label}
                            fillColor={fillColor}
                            width={tabWidth}
                            leftPosition={tabLeftPosition}
                            scaleCorrection={tabScaleCorrection}
                            onClick={onTabClick}
                        />
                    </div>
                </div>

                {/* Folder body */}
                <div className="w-full relative" style={{ height: availableHeight }}>


                    <div className={`h-full rounded-t-[1rem] rounded-b-[1.5rem] 'rounded-b-[3rem] ${backgroundColor} overflow-hidden relative`} style={{ pointerEvents: 'auto' }}>
                        <div
                            ref={contentRef}
                            className="h-full absolute overflow-hidden"
                            style={{
                                top: '1.5rem',
                                left: '1.5rem',
                                right: '1.5rem',
                                bottom: '1.5rem',
                                pointerEvents: 'none',
                                opacity: 0,
                                visibility: 'hidden'
                            }}
                        >
                           <div className="content-inner p-0 pb-[3rem] md:p-[1.5rem] md:pb-[4rem] md:px-[10rem] max-w-[98%] md:max-w-[95%] space-y-[1.5rem] my-[3rem]">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

Folder.displayName = 'Folder'
