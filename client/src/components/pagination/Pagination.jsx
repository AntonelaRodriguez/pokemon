import React from "react";
import './pagination.css';

const Pagination = ({pokemonsPerPage,pokemons,pagination}) => {
    const page = [];
    
    for(let i=1; i <= Math.ceil(pokemons/pokemonsPerPage); i++) {
        page.push(i);
    };

    return(
        <div className="pagination">
                {
                    page && page.map((n) => (
                        <button onClick={() => pagination(n)}>
                            {n}
                        </button>
                    ))
                }
        </div>
    )
};

export default Pagination;