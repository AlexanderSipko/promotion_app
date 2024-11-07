import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import probabilityCalculator from '@/app/store/probabilityCalculator';
import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons';
import {roundTo, getProbabilityDescription} from './utils'
import { LabelAndInputNumber } from '../../components/input';
// import './style.css';


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
                    label:'все варианты'
                }}
            ></LabelAndInputNumber>
            <LabelAndInputNumber
                props={{
                    inputName:'favorableEvents',
                    inputValue:probabilityCalculator.favorableEvents || '',
                    cls:probabilityCalculator,
                    funName:'addFavorableEvents',
                    placeholder:"0",
                    label:'ожидаемые варианты'
                }}
            ></LabelAndInputNumber>
        </div>
    );
});

const ProbabilityResult = observer(() => {
    return (
        <div className='ProbabilityResult-text'>
            <div>
                
                <p>
                    {roundTo(probabilityCalculator.result * 100, 2)} %
                </p>
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
                <h1>Расчет вероятности наступления события: 
                    {probabilityCalculator.isWrite && 
                        <span className='probability-save' onClick={() => {probabilityCalculator.save();}}>
                            сохранить расчет
                            <EditOutlined />
                        </span>
                    }
                </h1>
            </div>
            <InputFields/>
            {(probabilityCalculator.result > 0) && <ProbabilityResult />}
            
            {probabilityCalculator.history.length > 0 &&
            <>
                <span onClick={handleReset}>
                    <CloseCircleOutlined />
                </span>
                <ul className='history-probability-result'>
                    {probabilityCalculator.history.map((el, index) => {
                        return <li key={index + '_history'}>
                            {roundTo(el.result * 100, 2)} % = {el.favorableEvents} / {el.totalEvents}
                            </li>
                    })}
                </ul>
            </>
            }
            
        </div>
    );
});

export { Probability };
