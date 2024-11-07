import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import './style.css'

const Content = observer(({ type }) => {
    const navigate = useNavigate();


    return (
        <div className='margin-1-04-center padding-05 width-height'>
            some content
            <div style={{'height':'2000px'}}></div>
        </div>
    );
});

export {Content};

