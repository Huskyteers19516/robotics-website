import { BackgroundBeams } from "@/components/ui/background-beams"
import { Timeline, TimelineEntry } from "@/components/ui/timeline"
import TextReveal from "./text-reveal"
import Image, { StaticImageData } from "next/image"
import Season2024Image from "@/app/images/2023-2024/robot.jpg"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

function SeasonPage({
    href,
    awards,
    image,
    video,
}: {
    href: string
    awards: string[]
    image?: StaticImageData
    video?: string
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
                <h2 className="font-semibold text-xl mb-3">Awards</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                    {awards.map((award) => (
                        <li key={award}>{award}</li>
                    ))}
                </ul>
                {/* <Link href={href}>
                    <Button className="mt-4">
                        Learn More <ArrowUpRight />
                    </Button>
                </Link> */}
            </div>
            <Link href={href}>
                {image && (
                    <Image
                        src={image}
                        alt="Season Image"
                        className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                )}
                {video && (
                    <video
                        width="320"
                        height="240"
                        autoPlay
                        muted
                        loop
                        className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </Link>
        </div>
    )
}

export default function Home() {
    const timelineData: TimelineEntry[] = [
        {
            title: "FTC Centerstage",
            season: "2023-2024",
            content: (
                <SeasonPage
                    href="/centerstage"
                    image={Season2024Image}
                    awards={[
                        "Think Award - 3rd Place",
                        "Control Award - 2nd Place",
                        "Motivate Award - 1st Place",
                        "Promote Award - 3rd Place",
                    ]}
                />
            ),
        },
        {
            title: "FTC Power Play",
            season: "2022-2023",
            content: (
                <SeasonPage
                    href="power-play"
                    awards={[
                        "Promote Award - 1st Place",
                        "Compass Award - 3rd Place",
                    ]}
                    video="/images/2022-2023/robot.mp4"
                />
            ),
        },
        {
            title: "FTC Freight Frenzy",
            season: "2021-2022",
            content: (
                <SeasonPage
                    href="freight-frenzy"
                    awards={[
                        "Innovation Award - 1st Place",
                        "O1 Division Finalist Alliance",
                    ]}
                />
            ),
        },
    ]

    return (
        <main>
            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-background/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 lg:text-[20rem] italic md:text-[16rem] sm:text-[10rem] font-bold text-center">
                    <TextReveal text="19516" />
                    <p className="mt-4 font-normal text-base text-foreground max-w-lg text-center mx-auto not-italic">
                        Hi, we're 19516 Huskyteers, a First Tech Challenge (FTC)
                        robotics in Anaheim, California.
                    </p>
                </div>
                <BackgroundBeams />
            </div>
            <Timeline data={timelineData} />
        </main>
    )
}
