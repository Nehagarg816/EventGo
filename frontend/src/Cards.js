import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get("http://localhost:8080/cards");
                console.log(response.data);
                setCards(response.data);
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        };

        fetchCards();
    }, []);
    return (
        <>
            <div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mt-3 p-5">
                {cards.map((card) => (
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
                ))}
            </div>
        </>
    );
}
