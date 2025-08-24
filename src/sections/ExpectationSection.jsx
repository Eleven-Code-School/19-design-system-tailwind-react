import { ExpectationCard } from "../components/ExpectationCard";
import { SectionContainer } from "../components/SectionContainer";

const cards = [
    {
        title: "Understanding about AI",
        features: [
            "Understand core concepts like machine learning, deep learning, and algorithms in a clear and practical way.",
            "Learn how to apply these concepts in real-world scenarios.Speak confidently about AI topics with colleagues, friends, and even potential employers.",
        ],
    },
    {
        title: "Take advantage of AI",
        features: [
            "Apply your newly acquired knowledge by creating a simple project like an image classifier or a chatbot.",
            "Identify real-world challenges in your field and explore how AI can be used to address them.",
            "Learn industry-recognized skills to list on your resume and shine out in job applications.",
        ],
    },
    {
        title: "Make more, work less",
        features: [
            "Learn how to use popular AI frameworks and tools like TensorFlow or PyTorch to build more complex projects.",
            "Learn how to use AI to automate repetitive tasks and free up valuable time for more strategic work.",
            "Apply AI to enhance your current projects, whether it's optimizing marketing campaigns, improving customer service, or streamlining supply chains.",
            "Open doors to exciting new positions in the booming AI field, like data scientist, AI engineer, or machine learning specialist.",
        ],
    },
];

export const ExpectationSection = () => {
    return (
        <SectionContainer
            title="What to Expect from this course"
            bg="bg-brand-bg-darker"
            childrenContainerStyle={"grid grid-cols-1 lg:grid-cols-3 gap-lg"}
        >
            {cards.map((card, index) => (
                <ExpectationCard key={index} card={card} />
            ))}
        </SectionContainer>
    );
};
