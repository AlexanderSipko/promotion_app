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
                    placeholder:"0",
                    label:'Всего вариантов'
                }}
            ></LabelAndInputNumber>
            <LabelAndInputNumber
                props={{
                    inputName:'favorableEvents',
                    inputValue:probabilityCalculator.favorableEvents || '',
                    cls:probabilityCalculator,
                    funName:'addFavorableEvents',
                    placeholder:"0",
                    label:'Нужные варианты'
                }}
            ></LabelAndInputNumber>
        </div>
    );
});

const ProbabilityResult = observer(() => {
    return (
        <div className='ProbabilityResult-text'>
            <div>
                <p>Вероятность: P = {roundTo(probabilityCalculator.result, 2)}</p>
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
                
                Калькулятор вероятности при наличии нескольких исходов:
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
