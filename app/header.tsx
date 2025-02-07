"use client"

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
import Link from "next/link"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-primary/20 backdrop-blur-3xl shadow-md min-h-12 shadow-accent">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="font-jockey text-foreground">
                    <h1 className="text-4xl font-bold uppercase text-primary">
                        The Huskyteers
                    </h1>
                    <h1 className="text-5xl font-bold text-muted-foreground">
                        19516
                    </h1>
                </Link>
                <div className="flex items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <HeaderLink href="/">Home</HeaderLink>
                            <HeaderLink href="/about">About</HeaderLink>
                            <HeaderLink href="/contact">Contact</HeaderLink>
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
