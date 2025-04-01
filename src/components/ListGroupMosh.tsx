import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void;
}

function ListGroupMosh({ items, heading, onSelectItem }: Props) {
    // let items = ["Scarborough", "North York", "East York", "Toronto"];

    //Hook
    let [selectedIndex, setSelectedIndex] = useState(-1);

    // items.map(item => <li>{item}</li>)
    const message = items.length === 0 ? <p>No values found</p> : null;

    return (
        <>
            <h1 className="text-5xl">{heading}</h1>
            {message}
            <ul className="list-disc">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
                                : "list-disc"
                        }
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroupMosh;

