import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import probabilityCalculator from '../../app/store/зrobabilityСounter'
import { RightCircleFilled } from '@ant-design/icons';
import './style.css'

const Probability = observer(({ type }) => {
    const navigate = useNavigate();

    return (
        <div className='content'>
            some content
        </div>
    );
});

export {Content};

