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
        const apiUrl = 'http://localhost:5001/predict'; // Flask API'nin çalıştığı port ve endpoint
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
                            Woody:
                            <input
                                type="checkbox"
                                name="woody"
                                checked={inputData.woody}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Newspaper:
                            <input
                                type="checkbox"
                                name="newspaper"
                                checked={inputData.newspaper}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Mixed:
                            <input
                                type="checkbox"
                                name="mixed"
                                checked={inputData.mixed}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Inked:
                            <input
                                type="checkbox"
                                name="inked"
                                checked={inputData.inked}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Cardboard:
                            <input
                                type="checkbox"
                                name="cardboard"
                                checked={inputData.cardboard}
                                onChange={handleChange}
                            />
                        </label>
                        <button type="submit" className="submit-button">
                            Predict
                        </button>
                    </form>
                    <div className={`prediction-container ${prediction ? 'show' : ''}`}>
                                    <FaTree className="tree-icon-top" />
                                    <p className="saved-trees-label">Kurtardığınız Ağaç Sayısı:</p>
                                    {prediction && (
                                        <div className="result-box">

                                            <p className="prediction-text">{prediction}</p>
                                        </div>
                                    )}
                     </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Flask;