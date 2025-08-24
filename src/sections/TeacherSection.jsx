import brand1 from "../assets/images/brand-1.png";
import brand2 from "../assets/images/brand-2.png";
import brand3 from "../assets/images/brand-3.png";
import brand4 from "../assets/images/brand-4.png";
import brand5 from "../assets/images/brand-5.png";
import teacherPhoto from "../assets/images/teacher-photo.png";
import { SectionContainer } from "../components/SectionContainer";
import { Timeline } from "../components/Timeline";

const timelineData = [
    { year: "1998", description: "Machine Learning Researcher at XYZ Lab" },
    { year: "2005", description: "Founder Data Science Company" },
    { year: "2015", description: "Teaching at AI Center" },
    { year: "2020", description: "PhD on neural networks" },
    { year: "now", description: "Senior Director at ModernAI" },
];

const SectionContent = ({ title, childrenContainerStyle, children }) => {
    return (
        <div className="flex flex-col max-w-[410px] lg:max-w-none gap-md">
            <h4 className="">{title}</h4>
            <div className={childrenContainerStyle}>{children}</div>
        </div>
    );
};

export const TeacherSection = () => {
    return (
        <SectionContainer
            title="Hello, I'm Juan Macías"
            bg="bg-brand-bg-darker"
            childrenContainerStyle={"grid grid-cols-1 lg:grid-cols-2 gap-lg place-items-center"}
        >
            <div className="flex items-center justify-center max-w-[380px] lg:max-w-none ">
                <img src={teacherPhoto} alt="Teacher Photo" />
            </div>

            <div className="flex flex-col gap-xl">
                <SectionContent title="My Story">
                    <p>
                        My story is one fueled by a deep passion for unraveling the mysteries of AI, leading
                        me to contribute to groundbreaking research and advancements in the industry.
                    </p>
                    <p>
                        Throughout my career, I've been at the forefront of shaping the future of technology,
                        blending theoretical knowledge with practical insights. I am committed to making AI
                        and machine learning accessible to learners at all levels, demystifying complex
                        concepts in an engaging and collaborative learning environment.
                    </p>
                    <p>
                        Beyond the classroom, I am a thought leader, continually pushing the boundaries of AI
                        research. My dedication to ethical AI development and a forward-thinking approach sets
                        the stage for you not only to understand the technology but also to contribute to its
                        responsible and innovative growth.
                    </p>
                </SectionContent>

                <SectionContent title="My experience">
                    <Timeline data={timelineData} />
                </SectionContent>

                <SectionContent title="Brands I worked with">
                    <div className="flex flex-wrap gap-md">
                        <img src={brand1} alt="Brand 1" />
                        <img src={brand2} alt="Brand 2" />
                        <img src={brand3} alt="Brand 3" />
                        <img src={brand4} alt="Brand 4" />
                        <img src={brand5} alt="Brand 5" />
                    </div>
                </SectionContent>
            </div>
        </SectionContainer>
    );
};
