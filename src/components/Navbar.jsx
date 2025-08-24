import { NavLink } from "react-router-dom";

const NavItem = ({ text, to }) => {
    return (
        <NavLink to={to}>
            <p className="group relative w-max">
                <span>{text}</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
            </p>
        </NavLink>
    );
};

const links = [
    { text: "Goals", to: "/goals" },
    { text: "Curriculum", to: "/curriculum" },
    { text: "Testimonial", to: "/testimonial" },
    { text: "Instructors", to: "/instructors" },
    { text: "FAQs", to: "/faqs" },
];

export const Navbar = () => {
    return (
        <nav className="hidden md:flex items-center gap-10 text-sm">
            {links.map(({ text, to }) => (
                <NavItem key={text} text={text} to={to} />
            ))}
        </nav>
    );
};
