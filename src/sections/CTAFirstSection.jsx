import { useContext } from "react";
import bgImage from "../assets/images/bg-cta-first-section.jpg";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { SectionContainerWithBg } from "../components/SectionContainerWithBg";
import { TextsContext } from "../context/TextContexts";

export const CTAFirstSection = () => {
    const { texts } = useContext(TextsContext);

    return (
        <SectionContainerWithBg
            bgImage={bgImage}
            className="flex flex-col items-start justify-center w-full bg-start"
        >
            <Container className="w-full">
                <div className="flex flex-col gap-lg w-full md:w-1/2 text-center md:text-left">
                    <h2>{texts?.ctaSection?.title}</h2>
                    <p>{texts?.ctaSection?.subtitle}</p>
                    <div>
                        <Button onClick={() => console.log("Button clicked")}>
                            {texts?.ctaSection?.buttonText}
                        </Button>
                    </div>
                </div>
            </Container>
        </SectionContainerWithBg>
    );
};
