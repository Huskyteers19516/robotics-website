import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex place-items-center place-content-center flex-col gap-3">
            Your page was lost into the deep!
            <Link href="/">
                <Button>Go back Centerstage (home)</Button>
            </Link>
        </main>
    )
}
