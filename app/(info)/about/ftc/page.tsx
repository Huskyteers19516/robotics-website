import { BackgroundBeams } from "@/components/ui/background-beams"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import React from "react"

export default function FTCPage() {
    return (
        <main className="flex flex-col items-center pt-8 w-full min-h-screen container mx-auto mb-10 text-center">
            <div className="w-full px-5">
                <h1 className="font-bold text-4xl mb-5">What is FTC?</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-left">
                    <div>
                        <h2 className="text-2xl mb-5 text-primary">
                            Basics of FTC
                        </h2>
                        <p>
                            FIRST Tech Challenge is an international robotics
                            competition designed for students in grades 7-12.
                            Teams design, build, and program robots to compete
                            head-to-head in alliance-based matches. The
                            competition includes local qualifiers,
                            regional/state championships, and culminates at the
                            world-level FIRST Championship. Teams are also
                            judged in areas such as design, community outreach,
                            and technical innovation.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-5 text-primary">
                            Who Participates
                        </h2>
                        <ul className="list-inside list-disc space-y-2">
                            <li>
                                <span className="text-primary">
                                    Students (grades 7-12)
                                </span>
                                : The core team members who design, build, and
                                program the robot.
                            </li>
                            <li>
                                <span className="text-primary">
                                    Mentors and Coaches
                                </span>
                                : Often volunteer engineers, educators, or
                                parents who guide teams through technical
                                development and strategy.
                            </li>
                            <li>
                                <span className="text-primary">
                                    Volunteers and Event Staff
                                </span>
                                : Assist with running events and supporting
                                teams throughout the season.
                            </li>
                            <li>
                                <span className="text-primary">
                                    FIRST Organization & Regional Partners
                                </span>
                                : They set the rules, game themes, organize the
                                season, provide resources, and manage
                                progression through the competition hierarchy.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-5 text-primary">
                            Decode 2025-26 Game
                        </h2>
                        <h2 className="text-xl mb-2 text-primary">
                            Autonomous (30 s)
                        </h2>
                        <p className="mb-2">
                            Robots decode motif, score artifacts, build
                            patterns, move off launch line
                        </p>
                        <h2 className="text-xl mb-2 text-primary">
                            Driver-Control (2 min)
                        </h2>
                        <p className="mb-2">
                            Teams collect and score artifacts, finish pattern,
                            return robots to base
                        </p>
                        <h2 className="text-xl mb-2 text-primary">Scoring</h2>
                        <p className="mb-2">
                            Points for artifacts, patterns, maze decoding, robot
                            returns; ranking points also
                        </p>
                        <h2 className="text-xl mb-2 text-primary">
                            Strategic Themes
                        </h2>
                        <p className="mb-2">
                            Randomization, teamwork, dual-phase planning,
                            cooperative gameplay
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
