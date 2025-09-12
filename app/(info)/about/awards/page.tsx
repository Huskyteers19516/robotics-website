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

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center pt-8 w-full min-h-screen container mx-auto mb-10 text-center">
            <div className="max-w-128">
                <h1 className="font-bold text-4xl mb-5">Our Team</h1>
                <p>
                    We are an FTC team from Fairmont Preparatory Academy,
                    entering our third year in the FIRST Tech Challenge.
                    Combining business and technical skills, our team thrives on
                    collaboration and innovation, driven by strong bonds and a
                    shared commitment to STEM excellence.
                    <br />
                    <br />
                    Fairmont Prep Robotics is dedicated to building a culture of
                    teamwork and creativity. Our mission is to inspire future
                    STEM leaders, excel in FIRST programs, and make a meaningful
                    impact on our school and community.
                </p>
            </div>
        </main>
    )
}
