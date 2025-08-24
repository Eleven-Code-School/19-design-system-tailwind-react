import iconCheckGold from "../assets/icons/icon-check-gold.png";
export const ExpectationCard = (props) => {
    const { title, features } = props.card;

    return (
        <div className="p-md xl:p-lg rounded-2xl bg-brand-bg">
            <h4 className="mb-lg">{title}</h4>
            <ul className="flex flex-col gap-md">
                {features.map((feature, index) => (
                    <li key={index} className="flex gap-4">
                        <img className="w-6 h-6" src={iconCheckGold} alt="icono de verificación dorado" />
                        <p>{feature}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
