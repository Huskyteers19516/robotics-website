import { Mail, Pin } from "lucide-react"
import {
    SiDiscord,
    SiInstagram,
    SiYoutube,
} from "@icons-pack/react-simple-icons"
import { Separator } from "@/components/ui/separator"
import StyledLink from "@/components/styled-link"

const Footer = () => {
    return (
        <footer className="bg-accent text-accent-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex gap-3 flex-col">
                        <h3 className="text-lg font-semibold mb-3">
                            Contact The Huskyteers
                        </h3>
                        <StyledLink
                            href="mailto:fpahuskyteers19516@gmail.com"
                            className="flex items-center gap-2 truncate"
                        >
                            <Mail size={24} className="shrink-0" />
                            fpahuskyteers19516@gmail.com
                        </StyledLink>
                        <StyledLink
                            href="https://www.google.com/maps/search/?api=1&query=Fairmont+Preparatory+Academy&query_place_id=ChIJl5NscI8p3YARFUgyxdOSU2c"
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            <Pin size={24} />
                            2200 W Sequoia Ave
                            <br />
                            Anaheim, CA 92801
                        </StyledLink>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <StyledLink href="#">Home</StyledLink>
                            </li>
                            <li>
                                <StyledLink href="#">About</StyledLink>
                            </li>
                            <li>
                                <StyledLink href="#">Services</StyledLink>
                            </li>
                            <li>
                                <StyledLink href="#">Contact</StyledLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Socials</h3>
                        <div className="flex space-x-4">
                            <StyledLink href="https://www.instagram.com/ftc19516/">
                                <SiInstagram size={24} />
                            </StyledLink>
                            <StyledLink href="https://www.youtube.com/channel/UC0NosafokRUY4pVAHCzd94Q">
                                <SiYoutube size={24} />
                            </StyledLink>
                            <StyledLink href="https://discord.gg/JZuEqanpV3">
                                <SiDiscord size={24} />
                            </StyledLink>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="mt-8 pt-8 text-center text-muted-foreground">
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
