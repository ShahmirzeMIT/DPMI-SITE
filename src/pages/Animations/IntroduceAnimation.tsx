"use client"

import { animate, motion, useMotionValue } from "motion/react"
import { interpolate } from "flubber"
import { MotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function IntroduceAnimation() {
    const [pathIndex, setPathIndex] = useState(0)
    const progress = useMotionValue(pathIndex)
    const fill = useTransform(progress, paths.map(getIndex), colors)
    const path = useFlubber(progress, paths)

    useEffect(() => {
        const animation = animate(progress, pathIndex, {
            duration: 0.8,
            ease: "easeInOut",
            onComplete: () => {
                if (pathIndex === paths.length - 1) {
                    progress.set(0)
                    setPathIndex(1)
                } else {
                    setPathIndex(pathIndex + 1)
                }
            },
        })

        return () => animation.stop()
    }, [pathIndex, progress])

    return (
        <svg width="400" height="400">
            <g transform="translate(10 10) scale(17 17)">
                <motion.path fill={fill} d={path} />
            </g>
        </svg>
    )
}

/**
 * ==============   Utils   ================
 */

const getIndex = (_: string, index: number) => index

function useFlubber(progress: MotionValue<number>, paths: string[]) {
    return useTransform(progress, paths.map(getIndex), paths, {
        mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
    })
}

/**
 * ==============   Shape data (Improvement & Course Advancement)   ================
 */

const book =
    "M2 6V22H20V6H2ZM18 20H4V8H18V20ZM6 10H16V12H6V10ZM6 14H14V16H6V14Z";
const pencil =
    "M3 21L14.34 9.66L12.66 7.98L1.32 19.32L2.68 20.68L3 21ZM19.71 7.04C20.1 6.65 20.1 6.02 19.71 5.63L16.37 2.29C15.98 1.9 15.35 1.9 14.96 2.29L13.12 4.12L17.88 8.88L19.71 7.04Z";
const growthArrow =
    "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 18.26L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z";
const pathToSuccess =
    "M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z";

const paths = [book, pencil, growthArrow, pathToSuccess];
const colors = [
    "#FF5733", // Orange for energy and creativity
    "#C70039", // Crimson for passion and commitment
    "#28B463", // Green for growth and success
    "#3498DB", // Blue for wisdom and calmness
];
