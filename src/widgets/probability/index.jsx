import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import probabilityCalculator from '@/app/store/probabilityCalculator';
import { CloseCircleOutlined } from '@ant-design/icons';
import {roundTo, getProbabilityDescription} from './utils'
import './style.css';


const InputFields = observer(({ handleReset }) => {
    return (
        <div>
            <label htmlFor="totalEvents">количество событий</label>
            <input
                type="number"
                value={probabilityCalculator.totalEvents || ''}
                name='totalEvents'
                onChange={(e) => probabilityCalculator.addTotalEvents(Number(e.target.value))}
                placeholder="Введите общее количество событий"
            />
            <label htmlFor="favorableEvents">количество благоприятных событий</label>
            <input
                type="number"
                value={probabilityCalculator.favorableEvents || ''}
                name='favorableEvents'
                onChange={(e) => probabilityCalculator.addFavorableEvents(Number(e.target.value))}
                placeholder="Введите количество благоприятных событий"
            />
            <br />
            <span onClick={handleReset}>
                <CloseCircleOutlined />
            </span>
        </div>
    );
});

const ProbabilityResult = observer(() => {
    return (
        <div>
            <div>
                Вероятность: P = {roundTo(probabilityCalculator.result, 2)}
            </div>
            <div>
                <p>{getProbabilityDescription(probabilityCalculator.result)}</p>
            </div>
            <div>
                <p>Важно учитывать другие факторы, которые могут повлиять на результат.</p>
            </div>
        </div>
    );
});


const Probability = observer(({ type }) => {
    const navigate = useNavigate();

    const handleReset = () => {
        probabilityCalculator.reset();
    };

    return (
        <div className='shadow-01 margin-1-04-center padding-05 width-height'>
            <div>
                Чтобы вычислить вероятность, используйте калькулятор ниже.
                Введите общее количество событий и количество благоприятных событий, затем нажмите кнопку Вычислить:
            </div>
            <InputFields handleReset={handleReset} />
            {(probabilityCalculator.result > 0) && <ProbabilityResult />}
        </div>
    );
});

export { Probability };
