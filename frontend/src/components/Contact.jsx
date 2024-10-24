import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white max-w-3xl w-full rounded-lg shadow-lg p-8 space-y-6">
                <h1 className="text-3xl font-bold border-b border-white pb-4">Contact Us</h1>
                <p className="text-lg">
                    Have any questions or need assistance? Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="message">Your Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg text-gray-800 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Write your message here"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
