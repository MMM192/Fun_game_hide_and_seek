
import React, { useState, useEffect } from "react";

const Horse = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState("right");
    const [emojiIndex, setEmojiIndex] = useState(0);
    const step = 25;
    const [hasFoundLink, setHasFoundLink] = useState(false);

    const emojis = ["🏇", "🐉", "🐖", "🏎️"]; // List of emojis
    const linkWidth = 260;
    const linkHeight = 150;

    const generateRandomPosition = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const safeZoneWidth = screenWidth * 0.3;
        const safeZoneHeight = screenHeight * 0.3;
        let randomX, randomY;

        do {
            randomX = Math.floor(Math.random() * screenWidth) - screenWidth / 2;
            randomY = Math.floor(Math.random() * screenHeight) - screenHeight / 2;
        } while (
            randomX > -safeZoneWidth / 2 &&
            randomX < safeZoneWidth / 2 &&
            randomY > -safeZoneHeight / 2 &&
            randomY < safeZoneHeight / 2
        );

        return { x: randomX, y: randomY };
    };

    const [linkPosition] = useState(generateRandomPosition);

    useEffect(() => {
        const handleKeyPress = (event) => {
            setPosition((prev) => {
                let newX = prev.x;
                let newY = prev.y;
                let newDirection = direction;

                const maxWidth = window.innerWidth / 2 - 50;
                const maxHeight = window.innerHeight / 2 - 50;
                const minWidth = -maxWidth;
                const minHeight = -maxHeight;

                switch (event.key) {
                    case "ArrowUp":
                        newY = Math.max(prev.y - step, minHeight);
                        newDirection = "up";
                        break;
                    case "ArrowDown":
                        newY = Math.min(prev.y + step, maxHeight);
                        newDirection = "down";
                        break;
                    case "ArrowLeft":
                        newX = Math.max(prev.x - step, minWidth);
                        newDirection = "left";
                        break;
                    case "ArrowRight":
                        newX = Math.min(prev.x + step, maxWidth);
                        newDirection = "right";
                        break;
                    default:
                        return prev;
                }

                setDirection(newDirection);

                const isOnLink =
                    Math.abs(newX - linkPosition.x) < linkWidth / 2 &&
                    Math.abs(newY - linkPosition.y) < linkHeight / 2;

                if (isOnLink && !hasFoundLink) {
                    setHasFoundLink(true);
                }

                return { x: newX, y: newY };
            });
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [direction, linkPosition, hasFoundLink]);

    // Separate useEffect for emoji switching
    useEffect(() => {
        const handleEmojiSwitch = (event) => {
            if (event.key.toLowerCase() === "s") {
                setEmojiIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % emojis.length;
                    console.log("New Emoji Index:", newIndex);
                    return newIndex;
                });
            }
        };

        window.addEventListener("keydown", handleEmojiSwitch);
        return () => {
            window.removeEventListener("keydown", handleEmojiSwitch);
        };
    }, []);

    const getRotation = () => {
        switch (direction) {
            case "up":
                return "rotate(90deg)";
            case "down":
                return "rotate(-90deg)";
            case "left":
                return "scaleX(1)";
            case "right":
                return "scaleX(-1)";
            default:
                return "rotate(0deg)";
        }
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden border-4 border-black">
            <div
                className="text-6xl absolute transition-transform duration-300"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) ${getRotation()}`,
                }}
            >
                {emojis[emojiIndex]} {/* Render the current emoji based on the index */}
            </div>

            {hasFoundLink && (
                <a
                    href="https://malasidha.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute text-lg bg-amber-300 text-white p-2 rounded"
                    style={{
                        transform: `translate(${linkPosition.x}px, ${linkPosition.y}px)`,
                    }}
                >
                    🌍 Visit My Website!
                </a>
            )}
        </div>
    );
};

export default Horse;
