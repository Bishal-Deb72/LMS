import { useState } from "react";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helpers/axiosInstance";

function Contact() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if (!userInput.email || !userInput.name || !userInput.message) {
            toast.error("All fields are mandatory");
            return;
        }

        if (!userInput.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            toast.error("Invalid Email");
            return;
        }

        try {
            const response = axiosInstance.post("/contact", userInput);
            toast.promise(response, {
                loading: "Submitting your message...",
                success: "Form submitted successfully!",
                error: "Failed to submit the form"
            });

            const contactResponse = await response;
            if (contactResponse?.data?.success) {
                setUserInput({ name: "", email: "", message: "" });
            }
        } catch (err) {
            toast.error("Operation failed...");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
            <form 
                noValidate
                onSubmit={onFormSubmit}
                className="flex flex-col items-center justify-center gap-5 p-6 bg-gray-800 text-white shadow-lg rounded-lg w-[25rem] border border-gray-700"
            >
                <h1 className="text-3xl font-bold text-red-500 animate-pulse">Contact Us</h1>

                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="name" className="text-lg font-semibold">Name</label>
                    <input 
                        className="bg-gray-700 border border-gray-600 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-gray-400"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        onChange={handleInputChange}
                        value={userInput.name}
                    />
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="email" className="text-lg font-semibold">Email</label>
                    <input 
                        className="bg-gray-700 border border-gray-600 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-gray-400"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleInputChange}
                        value={userInput.email}
                    />
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="message" className="text-lg font-semibold">Message</label>
                    <textarea 
                        className="bg-gray-700 border border-gray-600 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-gray-400 resize-none h-32"
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        onChange={handleInputChange}
                        value={userInput.message}
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-md py-2 font-semibold text-lg cursor-pointer shadow-md"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
