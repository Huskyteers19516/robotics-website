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
import tommyHo from "@/app/images/2026-2027/tommyho.png 
import willLi from "@/app/images/2026-2027/willLi.png"
import paigeBantz from "@/app/images/2026-2027/paigeBantz.png"
import aaronSun from "@/app/images/2026-2027/aaronSun.png"
import maxKu from "@/app/images/2026-2027/maxKu.png" 
import elizabethHyodo from "@/app/images/2026-2027/elizabethHyodo.png"
import timJung from "@/app/images/2026-2027/timJung.png"
import adenNunes from "@/app/images/2026-2027/adenNunes.png"
import aliceWang from "@/app/images/2026-2027/aliceWang.png"
import brandonShu from "@/app/images/2026-2027/brandonShu.png"
import ethanZhang from "@/app/images/2026-2027/ethanZhang.png"
import felixGu from "@/app/images/2026-2027/felixGu.png"
import frankWang from "@/app/images/2026-2027/frankWang.png"
import grantStory from "@/app/images/2026-2027/grantStory.png"
import gwenLengsfeld from "@/app/images/2026-2027/gwenLengsfeld.png"
import ianNguyen from "@/app/images/2026-2027/ianNguyen.png"
import jackHu from "@/app/images/2026-2027/jackHu.png"
import jackLuo from "@/app/images/2026-2027/jackLuo.png"
import jasonLuo from "@/app/images/2026-2027/jasonLuo.png"
import jaylenHon from "@/app/images/2026-2027/jaylenHon.png"
import michaelHyodo from "@/app/images/2026-2027/michaelHyodo.png"
import msRamirez from "@/app/images/2026-2027/ms.Ramirez.png"
import stephenYuan from "@/app/images/2026-2027/stephenYuan.png"
import williamMan from "@/app/images/2026-2027/williamMan.png"
import wolfgangLengsfeld from "@/app/images/2026-2027/wolfgangLengsfeld.png"
function Person({
    name,
    roles,
    image,
}: {
    name: string
    roles: string[]
    image?: StaticImageData
}) {
    return (
        <Card className="w-48">
            <CardHeader className="pb-3 pt-5">
                <CardTitle className="text-center min-h-8">{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
                {image ? (
                    <Image
                        src={image}
                        width={128}
                        height={128}
                        alt={name + "'s profile picture"}
                        className="w-32 h-32 rounded-full"
                    />
                ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-300"></div>
                )}
            </CardContent>

            <CardFooter>
                <CardDescription className="text-center mx-auto">
                    {roles}
                </CardDescription>
            </CardFooter>
        </Card>
    )
}

const compareStrings = (a: string, b: string) => {
    if (a < b) return -1
    if (a > b) return 1

    return 0
}

const compare = (a: string, b: string) => {
    const splitA = a.split(" ")
    const splitB = b.split(" ")
    const lastA = splitA[splitA.length - 1]
    const lastB = splitB[splitB.length - 1]

    return lastA === lastB
        ? compareStrings(splitA[0], splitB[0])
        : compareStrings(lastA, lastB)
}

const captain = "Captain"
const coCaptain = "Co-Captain"
const buildLead = "Build Lead"
const businessLead = "Business Lead"
const softwareLead = "Software Lead"
const buildTeam = "Build Team"
const softwareTeam = "Software Team"
const businessTeam = "Business Team"
const designTeam = "Design Team"
const alumni = "Alumni"
const mentor = "Mentor"

export default function AboutPage() {
    const sections = [
        {
            title: "Leadership",
            people: [
                { name: "Tommy Ho", roles: [captain] },
            ],
        },
        {
            people: [
                { name: "Grant Story", roles: [buildLead], image: grantStory },
                { name: "Wolfgang Lengsfeld", roles: [buildLead], image: wolfgangLengsfeld },
                { name: "Ethan Zhang", roles: [buildLead], image: ethanZhang },
                { name: "Gwendolyn Lengsfeld", roles: [businessLead], image: gwenLengsfeld },
                { name: "Jack Luo", roles: [softwareLead], image: jackLuo },
            ],
        },
        {
            title: "Members",
            people: [
                { name: "Maximus Ku", roles: [buildTeam], image: maxKu },
                { name: "Michael Hyodo", roles: [softwareTeam], image: michaelHyodo },
                { name: "Tim Jung", roles: [softwareTeam], image: timJung },
                { name: "Elizabeth Hyodo", roles: [businessTeam], image: elizabethHyodo },
                { name: "Viraaj Gaggar", roles: [businessTeam] },
                { name: "Alivia Hsu", roles: [businessTeam] },
                { name: "Jason Luo", roles: [businessTeam], image: jasonLuo },
                { name: "Tiffany Yang", roles: [businessTeam] },
                { name: "Felix Gu", roles: [softwareTeam], image: felixGu },
                { name: "Jack Hu", roles: [softwareTeam], image: jackHu },
                { name: "Brandon Shu", roles: [softwareTeam], image: brandonShu },
                { name: "Alice Wang", roles: [softwareTeam], image: aliceWang },
                { name: "Frank Wang", roles: [softwareTeam], image: frankWang },
                { name: "Stephen Yuan", roles: [softwareTeam], image: stephenYuan },
                { name: "Paige Bantz", roles: [buildTeam], image: paigeBantz },
                { name: "Daksh Bhatnagar", roles: [buildTeam] },
                { name: "Jaylen Hon", roles: [buildTeam], image: jaylenHon },
                { name: "Will Li", roles: [buildTeam], image: willLi },
                { name: "William Man", roles: [buildTeam], image: williamMan },
                { name: "Ian Nguyen", roles: [buildTeam], image: ianNguyen },
                { name: "Aden Nunes", roles: [buildTeam], image: adenNunes },
                { name: "Aaron Sun", roles: [buildTeam], image: aaronSun },
                
            ],
        },
    ]

    return (
        <main className="flex flex-col items-center pt-8 w-full min-h-screen container mx-auto mb-10 text-center">
            <div className="max-w-128">
                <h1 className="font-bold text-4xl mb-5">Our Team</h1>
                <p>
                    We are an FTC team from Fairmont Preparatory Academy,
                    entering our sixth year in the FIRST Tech Challenge.
                    Combining business and technical skills, our team thrives on
                    collaboration and innovation, driven by strong bonds and a
                    shared co   mmitment to STEM excellence.
                    <br />
                    <br />
                    Fairmont Prep Robotics is dedicated to building a culture of
                    teamwork and creativity. Our mission is to inspire future
                    STEM leaders, excel in FIRST programs, and make a meaningful
                    impact on our school and community.
                </p>
            </div>
            {sections.map(({ title, people }) => (
                <div
                    key={title || ""}
                    className="flex gap-3 flex-col items-center"
                >
                    {title && (
                        <h2 className="text-bold text-3xl text-center mt-10 font-semibold">
                            {title}
                        </h2>
                    )}
                    <div
                        className={
                            "flex flex-row gap-3 flex-wrap place-content-center" +
                            (title ? "" : " mt-3")
                        }
                    >
                        {people
                            .toSorted((a, b) => compare(a.name, b.name))
                            .map((person) => (
                                <Person key={person.name} {...person} />
                            ))}
                    </div>
                </div>
            ))}
        </main>
    )
}
