import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Team } from "@/components/sections/Team";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <PracticeAreas />
            <Team />
            <Clients />
            <Contact />
        </>
    );
}
