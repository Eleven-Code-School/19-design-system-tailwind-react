import { useContext } from "react";
import avatar1 from "../assets/images/review-1.png";
import avatar2 from "../assets/images/review-2.png";
import avatar3 from "../assets/images/review-3.png";
import avatar4 from "../assets/images/review-4.png";
import { SectionContainer } from "../components/SectionContainer";
import { TextsContext } from "../context/TextContexts";

const reviewsData = [
    {
        author: "David, 32, Software Developer",
        content:
            "I always knew AI was the future, but I didn't know where to start. This course gave me the practical skills and knowledge I needed to transition from web development to AI development. I landed my dream job at a top tech company, and I'm using AI to solve real-world problems every day.",
        stars: 5,
        image: avatar1,
    },
    {
        author: "David, 32, Software Developer",
        content:
            "The impact on my career has been incredible. My clients are blown away by the fresh, innovative designs I'm producing. I'm landing bigger projects, winning awards, and feeling more fulfilled than ever before. This course wasn't just about learning AI, it was about unlocking my own creative potential.",
        stars: 5,
        image: avatar2,
    },
    {
        author: "Maria, 24, Data Analyst",
        content:
            "I was stuck in a data analysis rut, just crunching numbers without any real impact. This course showed me how AI can unlock the power of data. Now, I'm using AI to predict customer behavior, optimize business processes, and even identify fraud. My work is finally making a tangible difference, and it's incredibly rewarding.",
        stars: 5,
        image: avatar3,
    },
    {
        author: "Sarah, 27, Marketing Specialist",
        content:
            "I love the experiece! Before this course, AI was just a buzzword to me. Now, I'm using it to personalize customer experiences, analyze campaign data, and even generate creative content. My boss is blown away by my results, and I'm finally feeling challenged and fulfilled in my work.",
        stars: 5,
        image: avatar4,
    },
];

const imageMap = {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
};

function getImage(imageKey) {
    return imageMap[imageKey];
}

const renderStars = (stars) => {
    return Array.from({ length: stars }, (_, i) => (
        <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path d="M10 15l-5.878 3.09 1.121-6.535L1 7.545l6.545-.954L10 1l2.455 5.591L19 7.545l-4.243 3.005 1.121 6.535z" />
        </svg>
    ));
};

const ReviewCard = ({ author, content, stars, image }) => {
    return (
        <div className="border p-lg flex gap-md md:gap-lg rounded-2xl">
            <img
                className="w-16 h-16 md:w-24 md:h-24 rounded-full"
                src={getImage(image)}
                alt={`imagen de ${author}`}
            />
            <div className="flex flex-col">
                <div className="flex mb-sm gap-xs">{renderStars(stars)}</div>
                <p className="mb-md">{content}</p>
                <div className="flex-1 flex items-end">
                    <p className="font-bold text-primary">{author}</p>
                </div>
            </div>
        </div>
    );
};

export const ReviewsSection = () => {
    const { texts } = useContext(TextsContext);
    return (
        <SectionContainer
            title={texts?.reviewsTitle}
            bg="bg-brand-bg"
            childrenContainerStyle={"grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-lg"}
        >
            {texts?.reviewsData?.map((review, index) => (
                <ReviewCard key={index} {...review} />
            ))}
        </SectionContainer>
    );
};
