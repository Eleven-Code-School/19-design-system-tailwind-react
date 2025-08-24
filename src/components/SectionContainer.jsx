import { Container } from "./Container";

export const SectionContainer = ({ bg, title, children, childrenContainerStyle }) => {
    return (
        <section className={`py-3xl ${bg}`}>
            <Container className="w-full flex flex-col md:gap-2xl gap-lg">
                {title && <h2 className="text-center">{title}</h2>}
                <div className={childrenContainerStyle}>{children}</div>
            </Container>
        </section>
    );
};
