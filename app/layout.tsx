import type { Metadata } from "next"
import { Inter, Jockey_One } from "next/font/google"
import "./globals.css"
import Footer from "./footer"
import Header from "./header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
    variable: "--font-inter-next",
    subsets: ["latin"],
})

const jockeyOne = Jockey_One({
    variable: "--font-jockey-one-next",
    weight: "400",
})

export const metadata: Metadata = {
    title: "Huskyteers FTC 19516",
    description:
        "The Huskyteers are a FIRST Tech Challenge team based in the Anaheim, California.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.variable} ${jockeyOne.variable} font-inter bg-background text-foreground transition-colors duration-500`}
        >
            <body className={`antialiased`}>
                <ThemeProvider
                    disableTransitionOnChange={false}
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
