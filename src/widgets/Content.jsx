import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';


const TYPE_CONTENT = {
    default:"",
    info:"Outlet 2' - it's children element",
    todo:<>
        <ul>
            <li>подключить MobX</li>
            <li>реализовать вложенный оутлет</li>
            <li>на каждом уровне вложенности сделать возврат</li>
            <li>реализовать хлебные крошки</li>
            <li><strike>разделить глобальные стили и локальные</strike></li>
            <li><strike>сделать шапку приложения</strike></li>
            <li><strike>сделать ссылки роутинга в шапке</strike></li>
        </ul>
    </>,
}

export function Content ({type}) {
    const context = useOutletContext();
    const navigate = useNavigate();

    const content = TYPE_CONTENT[type]
    return <div>
                <button onClick={() => navigate(-1)}>go back</button>
                {content}
                <p>{context.someValue}</p>
            </div>
}
