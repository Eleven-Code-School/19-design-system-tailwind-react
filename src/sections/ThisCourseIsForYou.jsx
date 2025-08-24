import iconAppGold from "../assets/icons/icon-app-gold.png";
import iconBrainGold from "../assets/icons/icon-brain-gold.png";
import iconBulbGold from "../assets/icons/icon-bulb-gold.png";
import iconBusinessGold from "../assets/icons/icon-business-gold.png";
import { Button } from "../components/Button";
import { SectionContainer } from "../components/SectionContainer";

const thisCourseIsForYouData = [
    {
        icon: iconBulbGold,
        title: "Newcomer",
        description:
            "No prior AI or technical knowledge required. Ideal for individuals who want to add AI skills to their resume and stay ahead of the curve in their field.",
    },
    {
        icon: iconBrainGold,
        title: "Tech-savvy",
        description:
            "The course will delve deeper into the concepts, offering a more challenging and rewarding learning experience. The course will provide practical skills and resources to experiment with AI tools and applications.",
    },
    {
        icon: iconBusinessGold,
        title: "Businessman",
        description:
            "Focus on how AI can be applied to improve business processes, marketing, and decision-making. How AI can transform your organization and gain a competitive edge in the future.",
    },
    {
        icon: iconAppGold,
        title: "Developer",
        description:
            "A great starting point to explore different AI specializations and gain a solid foundation, looking to harness the power of AI for your projects.",
    },
];

export const ThisCourseIsForYouSection = () => {
    return (
        <SectionContainer title="This course is for you" bg="bg-brand-bg-darker">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg">
                {thisCourseIsForYouData.map((item, index) => (
                    <div key={index} className="p-lg flex flex-col gap-md rounded-2xl bg-brand-bg">
                        <div className="flex flex-row gap-md">
                            <img src={item.icon} alt={`icon ${item.title.toLowerCase()}`} />
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        <p className="font-extralight">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-xl flex justify-center">
                <Button>Start Learning</Button>
            </div>
        </SectionContainer>
    );
};
