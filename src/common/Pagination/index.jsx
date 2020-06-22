import React from 'react'
import s from './Pagination.module.scss'
import arrow from '../../img/arrow.svg'


const Paginator = ({ totalUsers, usersCountPerPage, onPortionNext, onPortionPrev,
    usersPageNumber, portionNumber, onPageChanged }) => {

    const portionSize = 5;
    let pageCount = Math.ceil(totalUsers / usersCountPerPage); // number of pages
    let sectionCount = Math.ceil(pageCount / portionSize); // portion number
    let portionLeft = (portionNumber - 1) * portionSize + 1;
    let portionRight = portionLeft + portionSize;
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.paginator} >
            <button className={s.paginator__prev}
                onClick={onPortionPrev}
                disabled={portionNumber <= 1 ? true : false}
            ><img src={arrow} alt="" /></button>
            <div className={s.paginator__pages}>
                {pages
                    .filter((item) => item >= portionLeft && item < portionRight)
                    .map((item, index) => {
                        return (<span key={index} onClick={() => onPageChanged(item)}
                            className={usersPageNumber === item ? s.paginator__pages_count : s.paginator__pages_items}>{item}</span>)
                    })}
            </div>
            <button className={s.paginator__next}
                onClick={onPortionNext}
                disabled={portionNumber >= sectionCount ? true : false}
            ><img src={arrow} alt="" /></button>
        </div>
    )
}


export default Paginator