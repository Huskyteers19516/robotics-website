"use client"

import { Mail, Pin } from "lucide-react"
import {
    SiDiscord,
    SiGithub,
    SiInstagram,
    SiYoutube,
} from "@icons-pack/react-simple-icons"
import { Separator } from "@/components/ui/separator"
import StyledLink from "@/components/styled-link"
import { SiteSettingsQuery } from "@/tina/__generated__/types"
import { tinaField, useTina } from "tinacms/dist/react"

const Footer = (props: {
    query: string
    variables: object
    data: SiteSettingsQuery
}) => {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    return (
        <footer className="bg-accent text-accent-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex gap-3 flex-col">
                        <h3
                            className="text-lg font-semibold mb-3"
                            data-tina-field={tinaField(
                                data.siteSettings,
                                "contactUsText"
                            )}
                        >
                            {data.siteSettings?.contactUsText}
                        </h3>
                        <StyledLink
                            href={`mailto:${data.siteSettings?.email}`}
                            className="flex items-center gap-2 truncate"
                            data-tina-field={tinaField(
                                data.siteSettings,
                                "email"
                            )}
                        >
                            <Mail size={24} className="shrink-0" />
                            {data.siteSettings?.email}
                        </StyledLink>
                        <StyledLink
                            href={data.siteSettings?.addressLink ?? ""}
                            target="_blank"
                            className="flex items-center gap-2 whitespace-pre-wrap"
                            data-tina-field={tinaField(
                                data.siteSettings,
                                "address"
                            )}
                        >
                            <Pin size={24} />
                            {data.siteSettings?.address}
                        </StyledLink>
                    </div>

                    <div>
                        <h3
                            className="text-lg font-semibold mb-4"
                            data-tina-field={tinaField(
                                data.siteSettings,
                                "quickLinksText"
                            )}
                        >
                            {data.siteSettings?.quickLinksText}
                        </h3>
                        <ul
                            className="space-y-2"
                            data-tina-field={tinaField(
                                data.siteSettings,
                                "quickLinks"
                            )}
                        >
                            {data.siteSettings?.quickLinks?.map((link) => (
                                <li key={link?.name}>
                                    <StyledLink
                                        href={link?.link ?? ""}
                                        data-tina-field={tinaField(link)}
                                    >
                                        {link?.name}
                                    </StyledLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3
                            className="text-lg font-semibold mb-4"
                            data-tina-field={tinaField(
                                data.siteSettings,
                                "socialsText"
                            )}
                        >
                            {data.siteSettings?.socialsText}
                        </h3>
                        <div className="flex space-x-4">
                            <StyledLink
                                href={data?.siteSettings?.instagram ?? ""}
                                data-tina-field={tinaField(
                                    data.siteSettings,
                                    "instagram"
                                )}
                            >
                                <SiInstagram size={24} />
                            </StyledLink>
                            <StyledLink
                                href={data?.siteSettings?.youtube ?? ""}
                                data-tina-field={tinaField(
                                    data.siteSettings,
                                    "youtube"
                                )}
                            >
                                <SiYoutube size={24} />
                            </StyledLink>
                            <StyledLink
                                href={data?.siteSettings?.discord ?? ""}
                                data-tina-field={tinaField(
                                    data.siteSettings,
                                    "discord"
                                )}
                            >
                                <SiDiscord size={24} />
                            </StyledLink>
                            <StyledLink
                                href={data?.siteSettings?.github ?? ""}
                                data-tina-field={tinaField(
                                    data.siteSettings,
                                    "github"
                                )}
                            >
                                <SiGithub size={24} />
                            </StyledLink>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="text-center text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} The Huskyteers. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
