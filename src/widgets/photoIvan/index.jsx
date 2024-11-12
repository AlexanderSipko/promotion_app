import React from 'react';
import './style.scss';

const PhotoIvan = () => {
    const photos = [
        './0452_90.jpg', './0453_90.jpg',
        './0454_90.jpg', './0455_90.jpg',
        './0456_90.jpg', './0457_90.jpg',
    ];

    return (
        <div className='content'>
            {photos.map((el, index) => {
                return (
                    <div className="photo-container" key={el}>
                        <img src={el} alt={`Фото ${index + 1}`} />
                        <a className="download-link" href={el} download>Скачать</a>
                    </div>
                );
            })}
        </div>
    );
};

export { PhotoIvan };
