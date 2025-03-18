import { useEffect, useState } from "react"
import FAQ from "./Api/faq.json"
import { Faq } from "./UI/FAQ";

export const Accordion = () => {
    const [activeId, setActiveId] = useState(false);

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(FAQ);
    }, []);

    const handleButton = (id) => {
        setActiveId((prevId) => (prevId === id ? false : id));
    };

    return (
        <>
            <h1>The Accordion</h1>
            <ul className="section-accordion">
                {
                    data.map((curElem) => {
                        return <Faq
                            key={curElem.id}
                            curData={curElem}
                            isActive={activeId === curElem.id}
                            onToggle={() => handleButton(curElem.id)} />
                    })
                }
            </ul>
        </>
    )
}