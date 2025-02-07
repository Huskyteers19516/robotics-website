import { cn } from "@/lib/utils"
import Link from "next/link"

export default function StyledLink({
    className,
    ...props
}: React.ComponentProps<typeof Link>) {
    return (
        <Link
            {...props}
            className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                className
            )}
        />
    )
}
