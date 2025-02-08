import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import HomeDepot from "@/app/images/sponsors/home-depot.jpeg"
import IntercontinentalBuckheadAtlanta from "@/app/images/sponsors/intercontinental-buckhead-atlanta.png"
import Aspiris from "@/app/images/sponsors/aspiris.png"
import Pryme from "@/app/images/sponsors/pryme.png"
import KHotels from "@/app/images/sponsors/k-hotels.png"
import IndustrialMetalSupply from "@/app/images/sponsors/industrial-metal-supply.png"
import Opennote from "@/app/images/sponsors/opennote.png"
import RobotOutlined from "@/app/images/robot-outlined.png"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function Sponsor({
    href,
    src,
    alt,
}: {
    href?: string
    src: StaticImageData
    alt: string
}) {
    if (href === undefined) {
        return (
            <Card className="flex flex-col items-center gap-2 w-auto bg-secondary-foreground text-secondary dark:bg-secondary dark:text-secondary-foreground">
                <CardHeader>
                    <CardTitle>{alt}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image src={src} alt={alt} className="h-32 w-auto" />
                </CardContent>
            </Card>
        )
    }
    return (
        <Link href={href} className="flex flex-col items-center gap-2">
            <Card className="w-auto bg-secondary-foreground text-secondary dark:bg-secondary dark:text-secondary-foreground">
                <CardHeader>
                    <CardTitle>{alt}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image src={src} alt={alt} className="h-32 w-auto" />
                </CardContent>
            </Card>
        </Link>
    )
}

export default function SponsorsPage() {
    const sponsors = [
        {
            href: "https://www.homedepot.com",
            src: HomeDepot,
            alt: "The Home Depot",
        },
        {
            src: IntercontinentalBuckheadAtlanta,
            alt: "Intercontinental Buckhead Atlanta",
        },
        {
            href: "https://www.aspiris.io",
            src: Aspiris,
            alt: "Aspiris",
        },
        {
            src: Pryme,
            alt: "Pryme",
        },
        {
            src: KHotels,
            alt: "K Hotels",
        },
        {
            src: IndustrialMetalSupply,
            alt: "Industrial Metal Supply",
        },
        {
            src: Opennote,
            alt: "Opennote",
        },
    ]

    return (
        <main className="flex flex-col items-center pt-8 w-full min-h-screen container mx-auto mb-10 text-center px-3">
            <div>
                <h1 className="text-4xl font-bold">Our Sponsors</h1>
                <div className="px-4 max-w-2xl flex flex-wrap gap-4 place-items-start justify-center">
                    {sponsors.map((sponsor) => (
                        <Sponsor key={sponsor.alt} {...sponsor} />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <Image src={RobotOutlined} alt="Robot" className="max-w-md" />
                <div className="max-w-xl mt-8">
                    <h2 className="mt-5 text-center text-3xl font-semibold">
                        Sponsor Us
                    </h2>
                    <p>
                        We rely on the gracious contributions of our sponsors to
                        help our team afford the costs of constructing our
                        robots and attending competitions, and we are very
                        grateful for any and all donations we receive. Thank you
                        so much for your consideration!
                    </p>
                    <br />
                    <p>
                        If you are interested in sponsoring our team, please
                        contact us at{" "}
                        <Link
                            className="text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200 underline"
                            href="mailto:fpahuskyteers19516@gmail.com"
                        >
                            fpahuskyteers19516@gmail.com
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </main>
    )
}
