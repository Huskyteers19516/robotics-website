"use client"

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

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-primary/20 backdrop-blur-3xl shadow-md min-h-12 shadow-foreground/20">
            <div className="container mx-auto px-4 flex justify-between items-center">
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
                            <HeaderLink href="/about">About</HeaderLink>
                            <HeaderLink href="/sponsors">Sponsors</HeaderLink>
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
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {children}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}
