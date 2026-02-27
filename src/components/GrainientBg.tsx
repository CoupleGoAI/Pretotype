"use client";

import Grainient from "./Grainient";

/**
 * Fixed full-screen Grainient background using brand colours.
 * pointer-events: none so it never blocks interactions.
 */
export default function GrainientBg() {
    return (
        <div
            className="fixed inset-0 -z-10 pointer-events-none"
            aria-hidden="true"
            style={{ opacity: 0.12 }}
        >
            <Grainient
                color1="#f48ba6"
                color2="#cc7be8"
                color3="#e16bb5"
                timeSpeed={1.6}
                colorBalance={-0.27}
                warpStrength={0}
                warpFrequency={12}
                warpSpeed={2}
                warpAmplitude={50}
                blendAngle={0}
                blendSoftness={0.05}
                rotationAmount={500}
                noiseScale={2}
                grainAmount={0.1}
                grainScale={2}
                grainAnimated={false}
                contrast={1.5}
                gamma={1}
                saturation={1}
                centerX={0}
                centerY={0}
                zoom={0.9}
            />
        </div>
    );
}
