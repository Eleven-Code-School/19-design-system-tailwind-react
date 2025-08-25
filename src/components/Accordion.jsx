import classNames from "classnames";
import { useState } from "react";

const AccordionItem = ({ title, content, defaultOpen = false }) => {
    const [open, setOpen] = useState(!!defaultOpen);

    return (
        <section
            className={classNames(
                "flex flex-col gap-md md:gap-md p-md md:p-lg pb-0! rounded-2xl bg-brand-bg-darker cursor-pointer"
            )}
            onClick={() => setOpen((prev) => !prev)}
        >
            <header className="flex w-full items-center justify-between gap-4">
                <h5 className="font-sans">{title}</h5>

                <button
                    type="button"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition hover:bg-white/10"
                >
                    <span
                        aria-hidden
                        className={classNames(
                            "relative block h-4 w-4",
                            "before:absolute before:inset-x-0 before:top-1/2 before:h-[2px] before:-translate-y-1/2 before:rounded before:bg-white",
                            "after:absolute after:left-1/2 after:top-0 after:h-4 after:w-[2px] after:-translate-x-1/2 after:rounded after:bg-white transition",
                            { "after:opacity-0": open, "after:opacity-100": !open }
                        )}
                    />
                </button>
            </header>

            <div
                className={classNames("grid transition-[grid-template-rows] duration-200 ease-out", {
                    "pb-md md:pb-lg [grid-template-rows:1fr]": open,
                    "[grid-template-rows:0fr]": !open,
                })}
            >
                <div className="min-h-0 overflow-hidden">
                    <div>{typeof content === "string" ? <p>{content}</p> : content}</div>
                </div>
            </div>
        </section>
    );
};

export const Accordion = ({ items = [], defaultOpen = 0 }) => {
    return (
        <div className="flex flex-col gap-lg">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    defaultOpen={defaultOpen}
                />
            ))}
        </div>
    );
};
