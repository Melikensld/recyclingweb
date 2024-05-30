import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar';
import Footer from '../Footer/footer';
import './flask.css'; // CSS dosyasını import et
import { FaTree } from 'react-icons/fa';

const Flask = () => {
    const [inputData, setInputData] = useState({
        paperAmount: '',
        woody: false,
        newspaper: false,
        mixed: false,
        inked: false,
        cardboard: false
    });
    const [prediction, setPrediction] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInputData({
            ...inputData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const apiUrl = 'http://localhost:5001/predict';
        try {
            const response = await axios.post(apiUrl, inputData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error fetching prediction:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flask-page">
            <Navbar />
            <div className="flask-content">
                <div className="header">
                    <h1>Calculate how many trees you save by recycling paper!</h1>
                </div>
                <div className="form-and-prediction">
                    <form onSubmit={handleSubmit} className={`flask-form ${prediction ? 'move-left' : ''}`}>
                        <label>
                            Paper Amount:
                            <input
                                type="number"
                                name="paperAmount"
                                value={inputData.paperAmount}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="woody"
                                checked={inputData.woody}
                                onChange={handleChange}
                            />
                            Woody
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="newspaper"
                                checked={inputData.newspaper}
                                onChange={handleChange}
                            />
                            Newspaper
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="mixed"
                                checked={inputData.mixed}
                                onChange={handleChange}
                            />
                            Mixed
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="inked"
                                checked={inputData.inked}
                                onChange={handleChange}
                            />
                            Inked
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="cardboard"
                                checked={inputData.cardboard}
                                onChange={handleChange}
                            />
                            Cardboard
                        </label>
                        <button type="submit" className="submit-button">
                            {isSubmitting ? <div className="loading-spinner"></div> : 'Predict'}
                        </button>
                    </form>
                    <div className={`prediction-container ${prediction ? 'show' : ''}`}>
                        <FaTree className="tree-icon" />
                        <p className="saved-trees-label">The Number of Saved Trees:</p>
                        {prediction && (
                            <p className="prediction-text">{prediction}</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Flask;
