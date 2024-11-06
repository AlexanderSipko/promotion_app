import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import probabilityCalculator from '@/app/store/probabilityCalculator';
import { CloseCircleOutlined } from '@ant-design/icons';
import {roundTo, getProbabilityDescription} from './utils'
import { LabelAndInputNumber } from '../../components/input';
import './style.css';


const InputFields = observer(() => {

    return (
        <div>
            <LabelAndInputNumber
                props={{
                    inputName:'totalEvents',
                    inputValue:probabilityCalculator.totalEvents || '',
                    cls:probabilityCalculator,
                    funName:'addTotalEvents',
                    placeholder:"Введите общее количество событий",
                    label:'Всего вариантов'
                }}
            ></LabelAndInputNumber>
            <LabelAndInputNumber
                props={{
                    inputName:'favorableEvents',
                    inputValue:probabilityCalculator.favorableEvents || '',
                    cls:probabilityCalculator,
                    funName:'addFavorableEvents',
                    placeholder:"Введите количество благоприятных событий",
                    label:'Количество вариантов которое вас устраивает'
                }}
            ></LabelAndInputNumber>
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
            <InputFields/>
            {(probabilityCalculator.result > 0) && <ProbabilityResult />}
            <span onClick={handleReset}>
                <CloseCircleOutlined />
            </span>
        </div>
    );
});

export { Probability };
