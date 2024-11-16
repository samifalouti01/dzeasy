import React, { useState } from "react";
import './Sub.css';

const CustomCode = () => {
    const [formData, setFormData] = useState({
        username: "",
        html: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.username || !formData.html) {
            setError("Both fields are required.");
            return;
        }
    
        setError(null); // Reset error
        setIsSubmitting(true);
    
        try {
            const url = 'https://script.google.com/macros/s/AKfycbxynClTmz4Sls2x2Xv5mrCthS8cZwSpZROV0y3Dan5mmEPAFOOeAEbq0bjAEnsbsh1_Xw/exec';
            
            const dataToSend = new URLSearchParams();
            dataToSend.append('username', formData.username);
            dataToSend.append('html', formData.html);
    
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: dataToSend,
            });
    
            if (response.ok) {
                setSuccessMessage('Form submitted successfully!');
                setFormData({ username: "", html: "" }); // Reset form after success
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError("There was an error submitting the form.");
        } finally {
            setIsSubmitting(false);
        }
    };
    

    return (
        <div className="column">
            <h1>Custom Code</h1>
            <form className="submission-form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Your Name here"
                    />
                </div>
                <div>
                    <textarea
                        type="text"
                        name="html"
                        value={formData.html}
                        onChange={handleChange}
                        placeholder="HTML Content"
                    ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </div>
    );
};

export default CustomCode;
