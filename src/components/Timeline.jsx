const TimelineItem = ({ year, description }) => {
    return (
        <li className="relative -ms-1.5 flex items-start gap-4">
            <span className="size-3 shrink-0 rounded-full bg-brand-gray-dark"></span>

            <div className="-mt-1 flex gap-2 text-brand-gray-light">
                <p className="mr-6">{year}</p>
                <p className="">{description}</p>
            </div>
        </li>
    );
};

export const Timeline = ({ data }) => {
    return (
        <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
            {data.map((item, index) => (
                <TimelineItem key={index} year={item.year} description={item.description} />
            ))}
        </ol>
    );
};
