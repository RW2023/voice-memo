import React from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, buttonLabel, onButtonClick }) => {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div
            className="hero min-h-screen"
            style={heroStyle}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{subtitle}</p>
                    {buttonLabel && (
                        <button className="btn btn-primary" onClick={onButtonClick}>
                            {buttonLabel}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;
