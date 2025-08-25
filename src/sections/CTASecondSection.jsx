import { useContext } from "react";
import bgImage from "../assets/images/bg-cta-second-section.jpg";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { SectionContainerWithBg } from "../components/SectionContainerWithBg";
import { TextsContext } from "../context/TextContexts";

export const CTASecondSection = () => {
    const { texts } = useContext(TextsContext);

    return (
        <SectionContainerWithBg bgImage={bgImage} className={"bg-center"}>
            <Container className="text-center">
                <h2 className="mb-md">
                    {texts?.ctaSecondSection?.title}{" "}
                    <span className="text-primary">{texts?.ctaSecondSection?.accent}</span>
                </h2>
                <h5 className="mb-xl text-brand-gray">— {texts?.ctaSecondSection?.author} —</h5>
                <Button>{texts?.ctaSecondSection?.ctaButton}</Button>
            </Container>
        </SectionContainerWithBg>
    );
};
