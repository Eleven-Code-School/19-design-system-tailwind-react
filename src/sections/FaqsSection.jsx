import { useContext } from "react";
import { Accordion } from "../components/Accordion";
import { SectionContainer } from "../components/SectionContainer";
import { TextsContext } from "../context/TextContexts";

const faqs = [
    {
        title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
        title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
        title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
        title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
];

export const FaqsSection = () => {
    const { texts } = useContext(TextsContext);
    return (
        <SectionContainer
            title="Find the answers to your questions here"
            bg="bg-brand-bg"
            childrenContainerStyle={"grid grid-cols-1 lg:grid-cols-2 gap-lg"}
        >
            <Accordion items={texts?.faqs} />

            <Accordion items={texts?.faqs} />
        </SectionContainer>
    );
};
