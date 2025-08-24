import social1 from "../assets/icons/social-1.png";
import social2 from "../assets/icons/social-2.png";
import social3 from "../assets/icons/social-3.png";
import social4 from "../assets/icons/social-4.png";
import social5 from "../assets/icons/social-5.png";
import { Container } from "./Container";

export const Footer = () => {
    return (
        <footer className="py-2xl bg-brand-bg-darker text-white px-6">
            <Container className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-center text-sm text-brand-gray-light">
                    &copy; {new Date().getFullYear()} Master de Programación. Todos los derechos reservados.
                </p>

                <div className="flex flex-col sm:items-center md:items-end gap-2">
                    <p className="text-center text-sm text-brand-gray-light">
                        Diseño y código: Juan Macías con ❤️
                    </p>
                    <div className="flex justify-center md:justify-end items-baseline gap-2">
                        <img className="h-5" src={social1} alt="Icono social 1" />
                        <img className="h-5" src={social2} alt="Icono social 2" />
                        <img className="h-5" src={social3} alt="Icono social 3" />
                        <img className="h-5" src={social4} alt="Icono social 4" />
                        <img className="h-5" src={social5} alt="Icono social 5" />
                    </div>
                </div>
            </Container>
        </footer>
    );
};
