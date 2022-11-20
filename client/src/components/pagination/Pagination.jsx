import React from "react";
import './pagination.css';

const Pagination = ({pokemonsPerPage,pokemons,pagination,prev,next}) => {
    const page = [];
    
    for(let i=1; i <= Math.ceil(pokemons/pokemonsPerPage); i++) {
        page.push(i);
    };

    return(
        <div className="page">
            <button className="prevNext" onClick={() => prev()}>PREV</button>
            <div className="pagination">
                
                {
                    page && page.map((n) => (
                        <button onClick={() => pagination(n)}>
                            {n}
                        </button>
                    ))
                }
            </div>
            <button className="prevNext" onClick={() => next()}>NEXT</button>
        </div>
    )
};

export default Pagination;