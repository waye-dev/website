"use client"

import { forwardRef, useImperativeHandle, useRef, ReactNode } from "react"
import { SvgTab } from "./svg-tab";

interface FolderProps {
    position: number;
    label: string;
    fillColor: string;
    backgroundColor: string;
    children: ReactNode;
    tabWidth: number; // Width in pixels for the tab
    tabLeftPosition: number; // Left position in pixels for the tab
}

export interface FolderRef {
    folderRef: HTMLDivElement;
    contentRef: HTMLDivElement;
}

export const Folder = forwardRef<FolderRef, FolderProps>(({
    position,
    label,
    fillColor,
    backgroundColor,
    children,
    tabWidth,
    tabLeftPosition
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
            style={{ isolation: 'isolate' }}
        >
            <div className="relative h-full w-full flex items-end justify-center">
                <div className="w-full h-[54rem] relative">
                    {/* Tab positioned absolutely above the folder */}
                    <div className="absolute top-0 left-0 w-full" style={{ transform: 'translateY(-100%)' }}>
                        <SvgTab
                            label={label}
                            fillColor={fillColor}
                            width={tabWidth}
                            leftPosition={tabLeftPosition}
                        />
                    </div>

                    {/* Folder content */}
                    <div className={`h-full rounded-tr-[1rem] ${backgroundColor} p-[1.5rem] md:p-[3rem] overflow-hidden`}>
                        <div
                            ref={contentRef}
                            className="h-full scrollbar overflow-y-auto"
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

Folder.displayName = 'Folder'
