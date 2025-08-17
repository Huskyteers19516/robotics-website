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
import { SiteSettingsQuery } from "@/tina/__generated__/types"
import Image from "next/image"
import Link from "next/link"
import { tinaField, useTina } from "tinacms/dist/react"

export default function Header(props: {
    query: string
    variables: object
    data: SiteSettingsQuery
}) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    return (
        <header className="sticky top-0 z-50 bg-primary/20 backdrop-blur-3xl shadow-md min-h-12 shadow-foreground/20 py-3">
            <div className="container mx-auto px-4 flex flex-wrap gap-3 md:justify-between md:place-content-between justify-center place-content-center">
                <Link
                    href="/"
                    className="font-jockey text-foreground flex flex-row place-items-center"
                >
                    <Logo className="w-20 h-20 fill-primary mr-4" />
                    <div className="flex flex-col gap-1 justify-center">
                        <h1
                            className="text-4xl font-bold uppercase text-primary"
                            data-tina-field={tinaField(
                                data.siteSettings,
                                "teamName"
                            )}
                        >
                            {data.siteSettings?.teamName}
                        </h1>
                        <h1
                            className="text-5xl font-bold text-muted-foreground"
                            data-tina-field={tinaField(
                                data.siteSettings,
                                "teamNumber"
                            )}
                        >
                            {data.siteSettings?.teamNumber}
                        </h1>
                    </div>
                </Link>
                <div
                    className="flex items-center gap-4"
                    data-tina-field={tinaField(
                        data.siteSettings,
                        "navBarLinks"
                    )}
                >
                    <NavigationMenu>
                        <NavigationMenuList>
                            {data.siteSettings?.navBarLinks?.map((i) => {
                                return (
                                    <HeaderLink
                                        href={i?.link ?? ""}
                                        key={i?.name}
                                        data-tina-field={tinaField(i)}
                                    >
                                        {i?.name}
                                    </HeaderLink>
                                )
                            })}
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
            <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {children}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}
