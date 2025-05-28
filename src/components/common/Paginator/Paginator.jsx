import s from "./Paginator.module.css";
import React, {useState} from "react";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10,  ...props}) => {
    const pagesCount = Math.ceil((totalItemsCount / pageSize) / 100);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        { portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>
        }
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p, index) => (
                <span key={index} className={currentPage === p ? s.selectedPage : ""}
                      onClick={() => onPageChanged(p)}>
            {p}
        </span>
            ))}
        { portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
        }

        </div>
}

export default Paginator;