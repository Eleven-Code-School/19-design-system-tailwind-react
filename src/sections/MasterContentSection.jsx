import { useContext } from "react";
import { SectionContainer } from "../components/SectionContainer";
import { Syllabus } from "../components/Syllabus";
import { TextsContext } from "../context/TextContexts";

export const MasterContentSection = () => {
    const { texts } = useContext(TextsContext);
    return (
        <SectionContainer className="w-full" title={texts?.syllabusTitle}>
            <Syllabus />
        </SectionContainer>
    );
};
