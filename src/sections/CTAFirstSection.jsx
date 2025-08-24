import bgImage from "../assets/images/bg-cta-first-section.jpg";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { SectionContainerWithBg } from "../components/SectionContainerWithBg";

export const CTAFirstSection = () => {
    return (
        <SectionContainerWithBg
            bgImage={bgImage}
            className="flex flex-col items-start justify-center w-full bg-start"
        >
            <Container className="w-full">
                <div className="flex flex-col gap-lg w-full md:w-1/2 text-center md:text-left">
                    <h2>AI is no longer science fiction.</h2>
                    <p>
                        This course will show you what exactly AI is, how it works, and more importantly, how
                        you can harness its power to make a difference!
                    </p>
                    <div>
                        <Button onClick={() => console.log("Button clicked")}>Enroll Now</Button>
                    </div>
                </div>
            </Container>
        </SectionContainerWithBg>
    );
};
