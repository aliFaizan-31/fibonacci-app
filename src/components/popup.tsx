import React from 'react';
import '../App.css';

export const Popup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <p className='f-24 w-600 align-left' style={{ color: '#4F4F4F' }}>Current Index is 10</p>
                <p className='f-16 w-400 align-left' style={{ color: '##717171' }}>The game will restart.</p>
                <button className="popup-ok-button" onClick={onClose}>
                    OK
                </button>
            </div>
        </div>
    );
};