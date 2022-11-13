import React from "react";

const Pagination = ({pokemonsPerPage,pokemons,pagination}) => {
    const page = [];
    
    for(let i=1; i <= Math.ceil(pokemons/pokemonsPerPage); i++) {
        page.push(i);
    };

    return(
        <div>
            <ul>
                {
                    page && page.map((n) => (
                        <li>
                            <a onClick={() => pagination(n)}>{n}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default Pagination;