import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CTAFirstSection } from "./sections/CTAFirstSection";
import { CTASecondSection } from "./sections/CTASecondSection";
import { CTAThirdSection } from "./sections/CTAThirdSection";
import { ExpectationSection } from "./sections/ExpectationSection";
import { FaqsSection } from "./sections/FaqsSection";
import { Hero } from "./sections/Hero";
import { MasterContentSection } from "./sections/MasterContentSection";
import { MentorsSection } from "./sections/MentorsSection";
import { NextCourseSection } from "./sections/NextCourseSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { TeacherSection } from "./sections/TeacherSection";
import { ThisCourseIsForYouSection } from "./sections/ThisCourseIsForYou";

export const API_DEV = "http://localhost:3000/api";
export const API_PROD = "https://20-react-api.vercel.app/api";

export const App = () => {
    return (
        <div className="h-dvh min-h-screen bg-brand-bg text-white">
            <Header />

            <main className="overflow-y-auto">
                <Hero />
                <CTAFirstSection />
                <ExpectationSection />
                <MasterContentSection />
                <CTASecondSection />
                <ThisCourseIsForYouSection />
                <ReviewsSection />
                <TeacherSection />
                <MentorsSection />
                <NextCourseSection />
                <CTAThirdSection />
                <FaqsSection />
            </main>

            <Footer />
        </div>
    );
};
