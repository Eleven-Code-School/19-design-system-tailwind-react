import bgImage from "../assets/images/bg-cta-third-section.jpg";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Input } from "../components/Input";
import { SectionContainerWithBg } from "../components/SectionContainerWithBg";

export const CTAThirdSection = () => {
    return (
        <SectionContainerWithBg bgImage={bgImage} className={"bg-center"}>
            <Container className="flex flex-col text-center gap-sm">
                <h2 className="mb-">
                    Looking for our upcoming courses? Join the waitlist to be notified when dates for future
                    course become available
                </h2>
                <div className="flex justify-center">
                    <Input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full max-w-[370px] rounded-e-none"
                    />
                    <Button className="rounded-s-none">Join the waitlist</Button>
                </div>
            </Container>
        </SectionContainerWithBg>
    );
};
