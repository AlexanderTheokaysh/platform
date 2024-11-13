import React, { useState, useRef, useEffect } from 'react';
import './changeLanguage.css';
import CurrencyFlag from 'react-currency-flags';

const languages = [
    { code: 'en', name: 'English', flag: 'GBP' },  // Use 'GBP' for the British flag as per react-currency-flags
    { code: 'ru', name: 'Russian', flag: 'RUB' },  // Use 'RUB' for the Russian flag
    { code: 'uk', name: 'Ukrainian', flag: 'UAH' }, // Use 'UAH' for the Ukrainian flag
    { code: 'sr', name: 'Serbian', flag: 'RSD' },  // Use 'RSD' for the Serbian flag
    { code: 'sq', name: 'Albanian', flag: 'ALL' }, // Use 'ALL' for the Albanian flag
];

const ChangeLanguage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="language-selector" ref={dropdownRef}>
            <CurrencyFlag
                style={{
                    border: 'none',
                    width: '28px',
                    height: '28px'
                }}
                onClick={toggleDropdown}
                className='currency-flag-main'
                currency={selectedLanguage.flag}
            />
            {isOpen && (
                <div className="dropdown">
                    {languages.map((language) => (
                        <div
                            key={language.code}
                            className="dropdown-item"
                            onClick={() => selectLanguage(language)}
                        >
                            <CurrencyFlag className='currency-flag' currency={language.flag}  />
                            <p>{language.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChangeLanguage;
