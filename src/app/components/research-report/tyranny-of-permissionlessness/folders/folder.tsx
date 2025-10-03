"use client"

import { forwardRef, useImperativeHandle, useRef, ReactNode } from "react"
import { SvgTab } from "./svg-tab";

interface FolderProps {
    position: number;
    label: string;
    fillColor: string;
    backgroundColor: string;
    children: ReactNode;
    tabWidth: number;
    tabLeftPosition: number;
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
    tabScaleCorrection = 0.7,
    onTabClick
}, ref) => {
    const folderRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
        get folderRef() {
            return folderRef.current!
        },
        get contentRef() {
            return contentRef.current!
        }
    }))

    return (
        <div
            ref={folderRef}
            className="absolute inset-0 w-full h-full text-black"
            style={{ isolation: 'isolate', pointerEvents: 'none' }}
        >
            <div className="relative h-full w-full flex items-end justify-center">
                <div className="w-full h-[54rem] relative">
                    <div className="absolute top-0 left-0 w-full" style={{ transform: 'translateY(-100%)' }}>
                        <SvgTab
                            label={label}
                            fillColor={fillColor}
                            width={tabWidth}
                            leftPosition={tabLeftPosition}
                            scaleCorrection={tabScaleCorrection}
                            onClick={onTabClick}
                        />
                    </div>

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
