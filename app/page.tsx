import { BackgroundBeams } from "@/components/ui/background-beams"
import { Timeline, TimelineEntry } from "@/components/ui/timeline"
import TextReveal from "./text-reveal"
import Image, { StaticImageData } from "next/image"
import S2024Robot from "@/app/images/2023-2024/robot.jpg"
import S2025Robot from "@/app/images/2024-2025/robot.webp"
import S2026Robot from "@/app/images/2025-2026/robot.png"
import S2027Robot from "@/app/images/robot-outlined.png"
import S2024Team from "@/app/images/2023-2024/team.png"
import S2025Team from "@/app/images/2024-2025/team.png"
import S2026Team from "@/app/images/2025-2026/team.png"
import S2027Team from "@/app/images/2026-2027/team.jpeg"
import CenterstageLogo from "@/app/images/2023-2024/logo.webp"
import DeepLogo from "@/app/images/2024-2025/logo.webp"
import DecodeLogo from "@/app/images/2025-2026/logo.webp"
import BiobuzzLogo from "@/app/images/2026-2027/logo.webp"
import Link from "next/link"
import { Users, Bot } from "lucide-react"

interface SeasonPageProps {
    href: string
    logoText?: string
    logoImage?: StaticImageData
    tags?: { label: string; variant?: "gold" | "bronze" | "gray" }[]
    teamPhoto?: StaticImageData
    robotPhoto?: StaticImageData
}

function SeasonPage({
    href,
    logoText,
    logoImage,
    tags = [],
    teamPhoto,
    robotPhoto,
}: SeasonPageProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full">
            <div className="flex flex-col gap-3">
                <div className="w-20 h-20 rounded-xl bg-white border border-dashed border-zinc-700/60 flex items-center justify-center p-2 text-center text-xs text-zinc-400">
                    {logoImage ? (
                        <Image
                            src={logoImage}
                            alt="Season Logo"
                            className="object-contain max-h-full"
                        />
                    ) : (
                        <span>{logoText || "Logo"}</span>
                    )}
                </div>

                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                        {tags.map((tag, idx) => {
                            const isGold = tag.variant === "gold"
                            const isBronze = tag.variant === "bronze"
                            return (
                                <span
                                    key={idx}
                                        className={`px-2.5 py-1 rounded text-xs font-semibold tracking-wide border ${
                                        isGold
                                            ? "bg-amber-500/10 text-amber-400 border-amber-500/60 shadow-sm" // Acts as Gold
                                            : isBronze
                                            ? "bg-orange-950/80 text-orange-400 border-orange-600/60 shadow-sm" // Acts as Bronze
                                            : "bg-zinc-900 text-zinc-300 border-zinc-500/60 shadow-sm" // Acts as Gray
                                            }`}
                                >
                                    {tag.label}
                                </span>
                            )
                        })}
                    </div>
                )}
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href={href} className="group relative">
                    <div className="h-54 w-full relative rounded-2xl bg-zinc-900/90 border border-zinc-800/80 overflow-hidden flex flex-col items-center justify-center transition-all duration-200 group-hover:border-zinc-700">
                        {teamPhoto ? (
                            <Image
                                src={teamPhoto}
                                alt="Team Photo"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        ) : (
                            <div className="p-4 flex flex-col items-center justify-center w-full h-full">
                                <Users className="w-7 h-7 text-zinc-500 mb-2 stroke-[1.5]" />
                                <span className="text-xs font-medium text-zinc-400">
                                    Team photo
                                </span>
                            </div>
                        )}
                    </div>
                </Link>

                <Link href={href} className="group relative">
                    <div className="h-54 w-full relative rounded-2xl bg-zinc-900/90 border border-zinc-800/80 overflow-hidden flex flex-col items-center justify-center transition-all duration-200 group-hover:border-zinc-700">
                        {robotPhoto ? (
                            <Image
                                src={robotPhoto}
                                alt="Robot Photo"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        ) : (
                            <div className="p-4 flex flex-col items-center justify-center w-full h-full">
                                <Bot className="w-7 h-7 text-zinc-500 mb-2 stroke-[1.5]" />
                                <span className="text-xs font-medium text-zinc-400">
                                    Robot photo
                                </span>
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    )
}

const timelineData: TimelineEntry[] = [
    {
        title: "FTC BioBuzz",
        season: "2026-2027",
        content: (
            <SeasonPage
                href="/biobuzz"
                logoImage={BiobuzzLogo}
                tags={[
                    { label: "In progress", variant: "gold" },
                ]}
                teamPhoto = {S2027Team}
                robotPhoto={S2027Robot}
            />
        ),
    },
    {
        title: "FTC Decode",
        season: "2025-2026",
        content: (
            <SeasonPage
                href="/decode"
                logoImage={DecodeLogo}
                tags={[
                    { label: "Design - 1st Place", variant: "gold" },
                    { label: "Reach - 2nt Place", variant: "gray" },
                    { label: "Leadership - Semifinalist", variant: "gray" }
                ]}
                teamPhoto = {S2026Team}
                robotPhoto={S2026Robot}
            />
        ),
    },
    {
        title: "FTC Into the Deep",
        season: "2024-2025",
        content: (
            <SeasonPage
                href="/into-the-deep"
                logoImage={DeepLogo}
                tags={[{ label: "Connect - 1st Place", variant: "gold" }]}
                teamPhoto = {S2025Team}
                robotPhoto={S2025Robot}
            />
        ),
    },
    {
        title: "FTC Centerstage",
        season: "2023-2024",
        content: (
            <SeasonPage
                href="/centerstage"
                logoImage={CenterstageLogo}
                tags={[
                    { label: "Motivate - 1st Place", variant: "gold" },
                    { label: "Control - 2nd Place",  variant: "gray" },
                    { label: "Compass - 2nd Place",  variant: "gray" },
                    { label: "Think - 3rd Place", variant: "bronze" },
                    { label: "Promote - 3rd Place", variant: "bronze" },
                ]}
                teamPhoto = {S2024Team}
                robotPhoto={S2024Robot}
            />
        ),
    },
]

export default function Home() {
    return (
        <main>
            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-background/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 lg:text-[20rem] italic md:text-[16rem] sm:text-[10rem] font-bold text-center">
                    <TextReveal text="19516" />
                    <p className="mt-4 font-normal text-base text-foreground max-w-lg text-center mx-auto not-italic">
                        Hi, we&apos;re 19516 Huskyteers, a First Tech Challenge
                        (FTC) robotics team based in Anaheim, California.
                    </p>
                </div>
                <BackgroundBeams />
            </div>
            <Timeline data={timelineData} />
        </main>
    )
}