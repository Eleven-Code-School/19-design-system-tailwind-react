import logo from "../assets/images/logo.png";
import { Button } from "./Button";
import { Container } from "./Container";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <header className="sticky top-0 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-brand-bg/70 bg-brand-bg/60 border-b border-b-white/5">
            <Container>
                <div className="h-16 flex items-center justify-between">
                    <img src={logo} alt="Logo" className="h-12 p-3" />

                    <div className="flex gap-16">
                        <Navbar />

                        <Button onClick={() => console.log("Button clicked")}>Start Learning</Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
