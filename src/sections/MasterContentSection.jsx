import { SectionContainer } from "../components/SectionContainer";
import { Syllabus } from "../components/Syllabus";

export const MasterContentSection = () => {
    return (
        <SectionContainer className="w-full" title={"What you’ll learn on this course"}>
            <Syllabus />
        </SectionContainer>
    );
};
