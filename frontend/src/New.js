import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        location: "",
        category: "",
        image: "",
        organisedBy: "",
    });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            const response = await axios.post(
                "http://localhost:8080/cards/new",
                formData
            );
            if (response.status === 201) {
                alert("Event created successfully!");
                navigate("/cards");
            } else {
                setErrorMessage("Unexpected response from the server.");
            }
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Failed to create event.");
        }
    };

    return (
        <div className="row">
            <div className="col-8 offset-2">
                <br />
                <h3>Create a New Event</h3>
                <form
                    onSubmit={handleSubmit}
                    className="needs-validation"
                    noValidate
                >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            className="form-control"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        <div className="valid-feedback">Looks good!</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter description"
                            className="form-control"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">
                            Please write something about the event.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter image URL"
                            className="form-control"
                            value={formData.image}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="row">
                        <div className="mb-3 col-md-4">
                            <label htmlFor="date" className="form-label">
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">
                                Please choose a valid date.
                            </div>
                        </div>

                        <div className="mb-3 col-md-8">
                            <label htmlFor="category" className="form-label">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Enter category"
                                className="form-control"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">
                                Please choose a category.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            className="form-control"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">
                            Please choose a location.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="organisedBy" className="form-label">
                            Organised By
                        </label>
                        <input
                            type="text"
                            name="organisedBy"
                            placeholder="Enter organiser's name"
                            className="form-control"
                            value={formData.organisedBy}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="btn btn-dark add-btn" type="submit">
                        Add
                    </button>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    );
}
