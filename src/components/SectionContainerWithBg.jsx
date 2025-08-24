export const SectionContainerWithBg = ({ className, bgImage, children }) => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImage})` }}
            className={`relative w-full bg-cover py-3xl ${className}`}
        >
            {children}
        </div>
    );
};
