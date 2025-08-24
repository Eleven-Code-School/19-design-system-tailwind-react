import mentor1 from "../assets/images/mentor-1.png";
import mentor2 from "../assets/images/mentor-2.png";
import mentor3 from "../assets/images/mentor-3.png";
import { SectionContainer } from "../components/SectionContainer";

const MentorPhotoCard = ({ image, name, title }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-2xl">
                <img src={image} alt={name} />
            </div>
            <div className="flex flex-col gap-3">
                <h4>{name}</h4>
                <p>{title}</p>
            </div>
        </div>
    );
};

export const MentorsSection = () => {
    return (
        <SectionContainer
            title="Our excellent mentors"
            bg="bg-brand-bg"
            childrenContainerStyle={"grid grid-cols-1 lg:grid-cols-3 gap-lg place-items-center"}
        >
            <MentorPhotoCard
                image={mentor1}
                name="Mentor Kate Green"
                title="Director at AI Company, Founder of AI Community"
            />

            <div className="flex flex-col gap-6 h-full">
                <div className="p-lg h-full flex flex-col gap-6 bg-brand-bg-darker rounded-2xl items-center sm:max-w-[410px] lg:items-start">
                    <div>
                        <img src={mentor2} alt="Mentor Dos" />
                    </div>
                    <p>
                        Throughout my career, I've been at the forefront of shaping the future of technology,
                        blending theoretical knowledge with practical insights. I am committed to making AI
                        and machine learning accessible to learners at all levels, demystifying complex
                        concepts in an engaging and collaborative learning environment.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h4>Mentor Kate Green</h4>
                    <p>Director at AI Company, Founder of AI Community</p>
                </div>
            </div>

            <MentorPhotoCard
                image={mentor3}
                name="Mentor Thomas Winsley"
                title="Director at AI Company, Founder of AI Community"
            />
        </SectionContainer>
    );
};
