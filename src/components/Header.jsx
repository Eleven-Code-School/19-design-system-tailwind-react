import { useContext } from "react";
import logo from "../assets/images/logo.png";
import { TextsContext } from "../context/TextContexts";
import { Button } from "./Button";
import { Container } from "./Container";
import { Navbar } from "./Navbar";

export const Header = () => {
    const { texts } = useContext(TextsContext);

    return (
        <header className="sticky top-0 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-brand-bg/70 bg-brand-bg/60 border-b border-b-white/5">
            <Container>
                <div className="h-16 flex items-center justify-between">
                    <img src={logo} alt="Logo" className="h-12 p-3 scale-500 ml-8" />

                    <div className="flex gap-16">
                        <Navbar />

                        <Button onClick={() => console.log("Button clicked")}>{texts?.header?.button}</Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
