import React, { useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import counter from '../../app/store/counter'
import './style.css'

const TYPE_CONTENT = {
    default:"",
    info:"Outlet 2' - it's children element",
    todo:<>
        <ul className='fake-todo'>
            <li>сделать калькулятор теории вероятности</li>
            <li>реализовать вложенный оутлет</li>
            <li>на каждом уровне вложенности сделать возврат</li>
            <li>реализовать хлебные крошки</li>
            <li><strike>навести порядок в структуре контента</strike></li>
            <li><strike>разделить глобальные стили и локальные</strike></li>
            <li><strike>сделать шапку приложения</strike></li>
            <li><strike>сделать ссылки роутинга в шапке</strike></li>
            <li><strike>подключить MobX</strike>
                <button onClick={() => {counter.increment()}}>+</button>
                <br />
                <button onClick={() => {counter.decrement()}}>-</button>
            </li>
        </ul>
    </>,
}

const Content = observer(({ type }) => {
    const context = useOutletContext();
    const navigate = useNavigate();

    const content = TYPE_CONTENT[type];


    return (
        <div>
            {counter.count}
            <button onClick={() => navigate(-1)}>Go back</button>
            {content}
            <p>{context?.someValue}</p>
        </div>
    );
});

export {Content};
