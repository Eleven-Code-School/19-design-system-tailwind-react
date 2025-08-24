export const Button = ({ className, children, onClick }) => {
    return (
        <button
            className={`inline-flex bg-primary text-white lg:py-sm py-xs lg:px-6 px-4 rounded cursor-pointer elevation ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
