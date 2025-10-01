"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CardOne } from "./_components/cards/card-one"
import { CardTwo } from "./_components/cards/card-two"
import { CardThree } from "./_components/cards/card-three"
import { CardFour } from "./_components/cards/card-four"

gsap.registerPlugin(ScrollTrigger)

export const FolderAnimation = () => {
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set([0]))
    const [isInteracted, setIsInteracted] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsWrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(!containerRef.current) return;

        gsap.fromTo(cardsWrapperRef, { scale: 0.8 }, {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom",
                markers: true,
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    const handleLabelClick = (index: number) => {
        if(!isInteracted) {
            setIsInteracted(true)
        }

        setExpandedCards((prev) => {
            const newSet = new Set(prev)
            const isExpanded = newSet.has(index)
            const nextIndex = index + 1

            if (isExpanded && newSet.size > 1) {
                const lastItem = Array.from(newSet).at(-1)
                if (lastItem !== undefined) {
                    newSet.delete(lastItem)
                }
            } else if (!isExpanded) {
                newSet.add(index)
            }

            return newSet
        })
    }

    const handleScroll = (index: number, e: React.UIEvent<HTMLDivElement>) => {
        const scrollable = e.currentTarget
        const scrollTop = scrollable.scrollTop
        const scrollHeight = scrollable.scrollHeight
        const clientHeight = scrollable.clientHeight

        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5

        if (isAtBottom) {
            const nextIndex = index + 1
            if (nextIndex < 4 && !expandedCards.has(nextIndex)) {
                setExpandedCards((prev) => new Set(prev).add(nextIndex))
            }
        }
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full transition-all duration-300 ease-in-out"
        >
            <div
                ref={cardsWrapperRef}
                className={`relative left-1/2 -translate-x-1/2 overflow-hidden transition-all duration-700 ease-in-out ${
                    isInteracted ? "w-full h-full md:h-[90%] rounded-b-0" : "w-full md:w-[50rem] h-[40rem] rounded-b-[55px]"
                }`}
            >
                <CardOne
                    isExpanded={expandedCards.has(0)}
                    onLabelClick={() => handleLabelClick(0)}
                    onScroll={(e) => handleScroll(0, e)}
                    position={0}
                    isInteracted={isInteracted}
                />
                <CardTwo
                    isExpanded={expandedCards.has(1)}
                    onLabelClick={() => handleLabelClick(1)}
                    onScroll={(e) => handleScroll(1, e)}
                    position={1}
                    isInteracted={isInteracted}
                />
                <CardThree
                    isExpanded={expandedCards.has(2)}
                    onLabelClick={() => handleLabelClick(2)}
                    onScroll={(e) => handleScroll(2, e)}
                    position={2}
                    isInteracted={isInteracted}
                />
                <CardFour
                    isExpanded={expandedCards.has(3)}
                    onLabelClick={() => handleLabelClick(3)}
                    onScroll={(e) => handleScroll(3, e)}
                    position={3}
                    isInteracted={isInteracted}
                />
            </div>
        </div>
    )
}