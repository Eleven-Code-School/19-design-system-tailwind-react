import bgImage from "../assets/images/bg-cta-second-section.jpg";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { SectionContainerWithBg } from "../components/SectionContainerWithBg";

export const CTASecondSection = () => {
    return (
        <SectionContainerWithBg bgImage={bgImage} className={"bg-center"}>
            <Container className="text-center">
                <h2 className="mb-md">
                    By far, the greatest danger of Artificial Intelligence is that{" "}
                    <span className="text-primary">people conclude too early that they understand it.</span>
                </h2>
                <h5 className="mb-xl text-brand-gray">— Eliezer Yudkowsky —</h5>
                <Button>Start Learing</Button>
            </Container>
        </SectionContainerWithBg>
    );
};
