import { Button } from "../components/Button";
import { SectionContainer } from "../components/SectionContainer";

export const NextCourseSection = () => {
    return (
        <SectionContainer
            bg="bg-brand-bg-darker"
            childrenContainerStyle={"flex items-center flex-col  xl:flex-row justify-between gap-xl"}
        >
            <h2>Now opening</h2>

            <div className="flex flex-col xl:flex-row gap-xl xl:gap-2xl">
                <div className="flex flex-col gap-1.5">
                    <p>Starting at</p>
                    <h5>Feb 15 2024</h5>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p>Price</p>
                    <h5>$150</h5>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p>Early bird discount</p>
                    <h5>10% off for register before Feb 05 2024</h5>
                </div>
            </div>
            <Button>Start Learning</Button>
        </SectionContainer>
    );
};
