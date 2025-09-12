import Logo from "@/components/logo"
import { ModeToggle } from "@/components/mode-toggle"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"
import { tinaField, useTina } from "tinacms/dist/react"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-primary/20 backdrop-blur-3xl shadow-md min-h-12 shadow-foreground/20 py-3">
            <div className="container mx-auto px-4 flex flex-wrap gap-3 md:justify-between md:place-content-between justify-center place-content-center">
                <Link
                    href="/"
                    className="font-jockey text-foreground flex flex-row place-items-center"
                >
                    <Logo className="w-20 h-20 fill-primary mr-4" />
                    <div className="flex flex-col gap-1 justify-center">
                        <h1 className="text-4xl font-bold uppercase text-primary">
                            The Huskyteers
                        </h1>
                        <h1 className="text-5xl font-bold text-muted-foreground">
                            19516
                        </h1>
                    </div>
                </Link>
                <div className="flex items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <HeaderLink href="/">Home</HeaderLink>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    About
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink asChild>
                                        <Link href="/about/team">Our Team</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/about/ftc">
                                            What is FTC?
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/about/mentors">
                                            Mentors
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <HeaderLink href="/events">Events</HeaderLink>
                            <HeaderLink href="/contact">Contact</HeaderLink>
                            <HeaderLink href="/sponsors">
                                Sponsors Info/Donations
                            </HeaderLink>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

function HeaderLink({
    href,
    children,
    ...props
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <NavigationMenuItem {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>{children}</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}
