"use client"

import { forwardRef, useImperativeHandle, useRef, ReactNode } from "react"
import { SvgTab } from "./svg-tab";

interface FolderProps {
    position: number;
    label: string;
    fillColor: string;
    backgroundColor: string;
    children: ReactNode;
    xPosition?: number; // x position for svg-tab in percentage (0-100)
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
    xPosition = 50
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
                <div className="w-full h-[94%] flex flex-col">
                    <SvgTab
                        label={label}
                        fillColor={fillColor}
                        isInteracted={false}
                        xPosition={xPosition}
                    />
                    <div className={`flex-1 rounded-tr-[1rem] ${backgroundColor} p-[1.5rem] md:p-[3rem] overflow-hidden`}>
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
