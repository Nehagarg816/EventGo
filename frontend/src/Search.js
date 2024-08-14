import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSearch}
                className="d-flex search"
                role="search"
            >
                <input
                    type="text"
                    placeholder="Search for events..."
                    value={query}
                    className="form-control me-2"
                    style={{ width: "10rem" }}
                    aria-label="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-outline-success">
                    Search
                </button>
            </form>
        </>
    );
}
