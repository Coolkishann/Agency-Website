import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import Transition from './Transition';

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The secret of getting ahead is getting started. - Mark Twain",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "It always seems impossible until it's done. - Nelson Mandela",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
];

// import { Orbitron } from 'next/font/google';
import { Orbitron } from 'next/font/google'
const orbitron = Orbitron({ subsets: ['latin'], weight: '600', variable: '--font-orb' });


const PreLoader = () => {
    const [percentage, setPercentage] = useState(0);
    const [randomQuote, setRandomQuote] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prevPercentage => {
                if (prevPercentage < 100) {
                    return prevPercentage + 1;
                } else {
                    clearInterval(interval);
                    return 100;
                }
            });
        }, 35);

        const randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
            <motion.div className="magicpattern p-8 flex sm:flex-col items-center justify-center">
                <h2 className="text-white text-3xl font-bold">Hi, there <span className="inline-block text-3xl animate-waving-hand">👋🏻</span></h2>
                <h1
                    className={`${orbitron.className} text-[8rem] inline-block font-orb font-bold text-gray-600 absolute -top-8 right-5 sm:bottom-3 md:text-[6rem] sm:!text-[3rem] md:top-1 md:right-5`}
                >
                    {percentage}
                    <small className="text-[3rem] md:text-[2rem] sm:!text-xl">%</small>
                </h1>

                <p className="text-sm mt-4 absolute right-[70%] bottom-10 text-gray-400 italic text-wrap text-center sm:text-xs sm:left-[0%] sm:w-full sm:px-4">{randomQuote}</p>
            </motion.div>
        </>
    );

};

export default PreLoader;