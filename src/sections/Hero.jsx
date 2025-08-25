import { useContext } from "react";
import bgHero from "../assets/images/bg-hero.jpg";
import { Container } from "../components/Container";
import { HeroTag } from "../components/HeroTag";
import { TextsContext } from "../context/TextContexts";

const tags = ["Industry connected", "Supported Community", "Real world skills"];

export const Hero = () => {
    const { texts } = useContext(TextsContext);
    return (
        <div
            style={{ backgroundImage: `url(${bgHero})` }}
            className="relative flex flex-col items-center justify-center max-h-[900px] min-h-[860px] w-full bg-cover bg-center"
        >
            <Container className="text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10" />

                <h4 className="mb-sm z-10">{texts?.hero?.eyebrow}</h4>
                <h1 className="mb-lg z-10">{texts?.hero?.title}</h1>

                <div className="flex flex-col md:flex-row gap-lg justify-center z-10">
                    {texts?.hero?.bullets?.map((text) => (
                        <HeroTag key={text} text={text} />
                    ))}
                </div>
            </Container>
        </div>
    );
};
