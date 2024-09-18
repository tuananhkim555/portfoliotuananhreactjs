/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useContext} from 'react';
import Reveal from './Reveal';
import { AuthContext } from "../context/AuthContext";

// API Key và cấu hình
const apiKey = import.meta.env.VITE_IMAGE_AI_API_KEY;
const maxImages = 4;
const retryLimit = 3;

// Component ImageAim
const ImageAim = ({ isLoggedIn }) => {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    const fetchImage = async (prompt, retryCount = 0) => {
        try {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({ inputs: prompt }),
                }
            );

            if (!response.ok) {
                if (response.status === 500 && retryCount < retryLimit) {
                    console.warn(`Retry ${retryCount + 1}/${retryLimit} for prompt: ${prompt}`);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    return fetchImage(prompt, retryCount + 1);
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.blob();
        } catch (error) {
            console.error("Error fetching image:", error);
            throw error;
        }
    };

    const generateImages = async (input) => {
        setLoading(true);
        setImages([]);
        setError(null);

        for (let i = 0; i < maxImages; i++) {
            const randomNumber = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
            const prompt = `${input} ${randomNumber}`;

            try {
                const blob = await fetchImage(prompt);
                const imgUrl = URL.createObjectURL(blob);
                setImages(prevImages => [...prevImages, { url: imgUrl, index: i }]);
            } catch (error) {
                setError(`An error occurred while generating image ${i + 1}: ${error.message}`);
                setLoading(false);
                return;
            }

            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        setLoading(false);
    };

    const handleGenerate = () => {
        const input = document.getElementById("user-prompt").value;
        if (!input.trim()) {
            setError("Please enter a prompt before generating images.");
            return;
        }
        generateImages(input);
    };

    return (
        <Reveal>
            <section id="imageAim" className={`bg-transparent py-12 flex flex-col items-center justify-center ${isLoggedIn ? 'min-h-screen' : 'h-[500px]'}`}>
                {!isLoggedIn && <h1 className="text-4xl font-bold text-center mb-6 text-white">AI Image Generator</h1>}
                <div className="containerAim w-full max-w-4xl mx-auto px-4 border-4 border-purple-900 rounded-lg bg-opacity-50 bg-black text-white p-8">
                    {isLoggedIn ? (
                        <>
                            <h1 className="text-3xl font-bold text-center mb-6">AI Image Generator</h1>
                            <p className="text-gray-300 text-center mb-8 text-[18px]">AI Photo Image is a powerful tool for React developers. It enhances user experience through AI-driven image optimization, resizing, and compression without quality loss. This tool saves time and effort, improves page load speed, and is essential for web applications handling numerous images.</p>
                            <form className="gen-form mb-8" onSubmit={(e) => e.preventDefault()}>
                                <input className="aim w-full p-3 border-2 border-purple-900 rounded-md mb-4 bg-transparent text-white placeholder-gray-400" type="text" id="user-prompt" placeholder="Type your prompt here..." autoComplete="off" />
                                <button type="button" id="generate" onClick={handleGenerate} disabled={loading} className="w-full bg-purple-900 text-white py-3 rounded-md hover:bg-purple-800 transition duration-300 disabled:opacity-50">
                                    {loading ? 'Generating...' : 'Generate'}
                                </button>
                            </form>
                            <div className="result">
                                {loading && <div id="loading" className="text-center text-gray-300 mb-4">Generating...</div>}
                                {error && <div className="error text-red-400 text-center mb-4">{error}</div>}
                                <div id="image-grid" className="grid grid-cols-2 gap-4">
                                    {images.map((image, index) => (
                                        <img key={index} src={image.url} alt={`art-${index + 1}`} onClick={() => downloadImage(image.url, index)} className="w-full h-48 object-cover rounded-md cursor-pointer hover:opacity-80 transition duration-300" />
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-300 mb-4">You need to log in with Google to use this service.</p>
                            <p className="text-gray-300 mb-4">Please use the Google login button in the navigation bar.</p>
                        </>
                    )}
                </div>
            </section>
        </Reveal>
    );
};

// Function to download the image
const downloadImage = (imgUrl, imageNumber) => {
    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = `image-${imageNumber + 1}.jpg`;
    link.click();
};

// Component chính
const BotImageAi = () => {
    const { user } = useContext(AuthContext);
    const isLoggedIn = !!user;

    return (
        <div className="flex justify-center items-center w-full">
            <ImageAim isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default BotImageAi;
