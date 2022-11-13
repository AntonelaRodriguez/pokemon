import React from "react";

const Filter = () => {
    return(
        <div>
            <ul>
                <li>
                    <select name="" id="">
                        <option value="">Filter by: Type</option>
                    </select>
                </li>
                <li>
                    <select name="" id="">
                        <option value="">Filter by : Existing or Created</option>
                        <option value="existing">Existing</option>
                        <option value="created">Created</option>
                    </select>
                </li>
                <li>
                    <select>
                        <option value="title">Order by : Alphabet</option>
                        <option value="asc">A to Z</option>
                        <option value="desc">Z to A</option>
                    </select>
                </li>
                <li>
                    <select name="" id="">
                        <option value="">Filter by: Attack Power</option>
                        <option value="Weak">Weak</option>
                        <option value="Powerful">Powerful</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}

export default Filter;