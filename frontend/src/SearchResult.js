import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
    const [results, setResults] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search).get("query");

        const fetchResults = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/search",
                    {
                        params: { query },
                    }
                );
                setResults(response.data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        if (query) {
            fetchResults();
        }
    }, [location.search]);

    return (
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 p-5">
            {results.length > 0 ? (
                results.map((card) => (
                    <a href="#" class="listing-link">
                        <div class="card col listing-card mb-5">
                            <img
                                src={card.image}
                                className="card-img-top img"
                                alt={card.title}
                            />
                            <div class="card-img-overlay"></div>
                            <div class="card-body">
                                <h6 className="card-title">{card.title}</h6>
                                <p className="card-text">
                                    {card.description.length > 100
                                        ? card.description.slice(0, 80) + "..."
                                        : card.description}
                                </p>
                                <p>
                                    <strong>Date:</strong>{" "}
                                    {new Date(card.date).toLocaleDateString()}
                                    <br />
                                    <strong>Location:</strong> {card.location}
                                    <br />
                                    <strong>Category:</strong> {card.category}
                                    <br />
                                    <strong>Organised By:</strong>{" "}
                                    {card.organisedBy}
                                </p>
                            </div>
                        </div>
                    </a>
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}
