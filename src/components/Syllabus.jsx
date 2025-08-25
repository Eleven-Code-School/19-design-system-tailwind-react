import { useContext } from "react";
import { TextsContext } from "../context/TextContexts";

const syllabusHeader = [
    {
        title: "Duration",
        content: "6 Weeks",
    },
    {
        title: "Course Format",
        content: "Video, Quiz, Article",
    },
    {
        title: "Level",
        content: "All Levels",
    },
    {
        title: "Study Method",
        content: "Online",
    },
];

const syllabusContent = [
    {
        number: "01",
        title: "Introduction to AI and Machine Learning",
        blockSummary: "6 lectures and 1 quiz",
        description:
            "Uncover the intricacies of AI, machine learning (ML), and deep learning, tracing their historical development and evolution. Navigate the expansive landscape of machine learning, distinguishing between the pivotal categories of Supervised, Unsupervised, and Reinforcement Learning.",
    },
    {
        number: "02",
        title: "Network effects and learning effects",
        blockSummary: "6 lectures and 1 quiz",
        description:
            "Uncover the intricacies of AI, machine learning (ML), and deep learning, tracing their historical development and evolution. Navigate the expansive landscape of machine learning, distinguishing between the pivotal categories of Supervised, Unsupervised, and Reinforcement Learning.",
    },
    {
        number: "03",
        title: "The AI Factory",
        blockSummary: "6 lectures and 1 quiz",
        description:
            "Uncover the intricacies of AI, machine learning (ML), and deep learning, tracing their historical development and evolution. Navigate the expansive landscape of machine learning, distinguishing between the pivotal categories of Supervised, Unsupervised, and Reinforcement Learning.",
    },
    {
        number: "04",
        title: "The AI-first company",
        blockSummary: "6 lectures and 1 quiz",
        description:
            "Uncover the intricacies of AI, machine learning (ML), and deep learning, tracing their historical development and evolution. Navigate the expansive landscape of machine learning, distinguishing between the pivotal categories of Supervised, Unsupervised, and Reinforcement Learning.",
    },
    {
        number: "05",
        title: "Ethics of AI and data",
        blockSummary: "6 lectures and 1 quiz",
        description:
            "Uncover the intricacies of AI, machine learning (ML), and deep learning, tracing their historical development and evolution. Navigate the expansive landscape of machine learning, distinguishing between the pivotal categories of Supervised, Unsupervised, and Reinforcement Learning.",
    },
    {
        number: "06",
        title: "Driving organizational transformation",
        blockSummary: "6 lectures and 1 quiz",
        description:
            "Uncover the intricacies of AI, machine learning (ML), and deep learning, tracing their historical development and evolution. Navigate the expansive landscape of machine learning, distinguishing between the pivotal categories of Supervised, Unsupervised, and Reinforcement Learning.",
    },
];

export const Syllabus = () => {
    const { texts } = useContext(TextsContext);

    return (
        <div className="">
            <div className="p-xl flex flex-col md:flex-row gap-lg rounded-2xl bg-white/10">
                {texts?.syllabusHeader?.map((item, index) => (
                    <div className="flex-1 flex flex-col gap-1.5" key={index}>
                        <p className="text-brand-gray">{item.title}</p>
                        <h5>{item.content}</h5>
                    </div>
                ))}
            </div>

            <div>
                <ul className="list-disc list-inside">
                    {texts?.syllabusContent?.map((item, index) => (
                        <li
                            className={`py-6 px-xl flex flex-col md:flex-row gap-md md:gap-2xl ${
                                index !== 0 && "border-t-[1px] border-brand-gray-light/30"
                            }`}
                            key={index}
                        >
                            <div className="flex-1 flex gap-lg">
                                <h3 className="text-primary">{item.number}</h3>
                                <div className="flex flex-col gap-md">
                                    <h3>{item.title}</h3>
                                    <small className="text-brand-gray-light">{item.blockSummary}</small>
                                </div>
                            </div>

                            <div className="flex-1">{item.description}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
