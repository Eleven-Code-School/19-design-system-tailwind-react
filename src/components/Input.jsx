// Input Desktop: Use for desktop
// text size: 16px; Line height: 150%
// Padding: 12px; 24px

// Input Mobile: Use for mobile
// Text size: 16px; Line height: 150%
// Padding: 12px; 20px

export const Input = ({ ...props }) => {
    return (
        <input
            {...props}
            className={`bg-white border text-brand-gray text-lg placeholder:text-brand-gray rounded-xl py-3 px-6 focus:outline-none focus:ring-2 transition ${props.className}`}
        />
    );
};
