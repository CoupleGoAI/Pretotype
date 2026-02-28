import Grainient from "@/components/reactbits/Grainient";

/**
 * Shared Grainient background used in the quiz CTA and the waitlist section.
 * Renders as an absolute-positioned fill behind sibling content.
 */
export default function QuizGrainient() {
    return (
        <div className="absolute inset-0 z-[0]">
            <Grainient
                color1="#f48ba6"
                color2="#cc7be8"
                color3="#e16bb5"
                timeSpeed={4}
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
