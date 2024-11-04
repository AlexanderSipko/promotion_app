// src/pages/home/index.js
import React from 'react';

const HomePage = () => {
    return <div>
                <h1>Welcome to the Home Page</h1>
                <ul>
                    <li>App - глобальная логика и настройка</li>
                    <li>Pages - уровни приложения разделенные по основным направлениям</li>
                    <li>Features (фичи): независимые модули, которые представляют определённые функциональные блоки.</li>
                </ul>
                <article>
                    <p>Фишка слоев в том что модули на одном уровне могут знать только о модулях со слоев строго ниже,
                        как следствие импорт только с них </p>
                </article>
            </div>
};

export default HomePage;