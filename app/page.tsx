import { BackgroundBeams } from "@/components/ui/background-beams"
import { Timeline, TimelineEntry } from "@/components/ui/timeline"

export default function Home() {
    const timelineData: TimelineEntry[] = [
        {
            title: "2023-2024 FTC Centerstage",
            content: (
                <div className="prose dark:prose-dark">
                    <h2>Awards</h2>
                    <ul>
                        <li>Think Award - 3rd Place</li>
                        <li>Control Award - 2nd Place</li>
                        <li>Motivate Award - 1st Place</li>
                        <li>Promote Award - 3rd Place</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2022-2023 FTC Power Play",
            content: (
                <div className="prose dark:prose-dark">
                    <h2>Awards</h2>
                    <ul>
                        <li>Promote Award - 1st Place</li>
                        <li>Compass Award - 3rd Place</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2021-2022 FTC Freight Frenzy",
            content: (
                <div className="prose dark:prose-dark">
                    <h2>Awards</h2>
                    <ul>
                        <li>Innovation Award - 1st Place</li>
                        <li>O1 Division Finalist Alliance</li>
                    </ul>
                </div>
            ),
        },
    ]

    return (
        <main>
            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-background/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <h1 className="lg:text-[20rem] italic text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-foreground bg-opacity-50 drop-shadow-lg">
                        19516
                    </h1>
                    {/* <p className="mt-4 font-normal text-base text-foreground max-w-lg text-center mx-auto">
                        The Huskyteers
                    </p> */}
                </div>
                <BackgroundBeams />
            </div>
            <Timeline data={timelineData} />
        </main>
    )
}
