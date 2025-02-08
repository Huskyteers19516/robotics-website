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
                { name: "Ethan Henry", roles: [captain] },
                { name: "Tommy Ho", roles: [coCaptain] },
            ],
        },
        {
            people: [
                { name: "Luna Joo", roles: [buildLead] },
                { name: "Wolfgang Lengsfeld", roles: [buildLead] },
                { name: "Jacob Wang", roles: [businessLead] },
                { name: "Ryan Kim", roles: [softwareLead] },
            ],
        },
        {
            title: "Members",
            people: [
                { name: "Erin Henry", roles: [buildTeam] },
                { name: "Ethan Zhang", roles: [buildTeam] },
                { name: "Iris Nguyen", roles: [buildTeam] },
                { name: "Justin Wang", roles: [buildTeam] },
                { name: "Karen Zhang", roles: [buildTeam] },
                { name: "Lynnie Cao", roles: [buildTeam] },
                { name: "Ming Zhong", roles: [buildTeam] },
                { name: "Rain Ip", roles: [buildTeam] },
                { name: "Stephen Yuan", roles: [buildTeam] },
                { name: "Tim Jung", roles: [buildTeam] },
                { name: "Yun Long", roles: [buildTeam] },
                { name: "Mike Nam", roles: [softwareTeam] },
                { name: "Ryan You", roles: [softwareTeam] },
                { name: "Tristan Lee", roles: [businessTeam] },
            ],
        },
    ]

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
