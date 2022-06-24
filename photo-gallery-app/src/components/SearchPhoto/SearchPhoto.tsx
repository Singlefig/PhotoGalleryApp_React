import React, { useState } from "react";
import { testData } from "../../testData";

export const SearchPhoto = () => {
    const [query, setQuery] = useState('');
    const [pics, setPics]: [any, any] = useState([]);
    const getPhotos = (e: any) => {
        e.preventDefault();
        setPics(testData);
    };

    return (
        <>
            <form className="form" onSubmit={getPhotos} >
                <label className="label" htmlFor="query">
                    {" "}
                    📷
                </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Try "dog" or "apple"`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">
                    Search
                </button>
            </form>
            <div className="card-list">
                {pics.map((pic: {
                    id: string,
                    alt_description: string,
                    url: string,
                }) =>
                    <div className="card" key={pic.id}>
                        <img
                            className="card--image"
                            alt={pic.alt_description}
                            src={pic.url}
                            width="50%"
                            height="50%"
                        />
                    </div>
                )}
            </div>
        </>
    );
};