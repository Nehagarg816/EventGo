import React from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cards/new");
    };

    return (
        <button className="btn btn-dark create" onClick={handleClick}>
            Create New Event
        </button>
    );
}
