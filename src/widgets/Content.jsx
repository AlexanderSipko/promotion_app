import React from 'react';
import { useOutletContext, Outlet } from 'react-router-dom';


const TYPE_CONTENT = {
    default:"Outlet' - it's children element",
    info:"Outlet 2' - it's children element",
    todo:<>
        <ul>
            <li><strike>сделать шапку приложения</strike></li>
            <li>сделать ссылки роутинга в шапке</li>
            <li>подключить MobX</li>
            <li><strike>разделить глобальные стили и локальные</strike></li>
            <li>реализовать вложенный оутлет</li>
            <li>на каждом уровне вложенности сделать возврат</li>
            <li>реализовать хлебные крошки</li>
        </ul>
    </>,
}

export function Content ({type}) {
    const context = useOutletContext();

    const content = TYPE_CONTENT[type]
    return <div>
                {content}
                <p>{context.someValue}</p>
            </div>
}
