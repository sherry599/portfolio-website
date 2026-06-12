import { ParticleButton } from "@/Components/ui/particle-button"
import { Button } from "@/Components/ui/button"
import { LucideIcon } from "lucide-react"

function ParticleButtonDemo() {
    return (
        <ParticleButton successDuration={1000} variant="default">
            Click me!
        </ParticleButton>
    )
}

export { ParticleButtonDemo }
