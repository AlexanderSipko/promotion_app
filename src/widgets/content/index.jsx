import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import './style.css'


const Content = observer(({ type }) => {
    const navigate = useNavigate();


    return (
        <div className='margin-1-04-center padding-05 width-height'>
            some content
            <h1 className="text-3xl font-bold uppercase underline">
      Hello world!
    </h1>
        </div>
    );
});

export {Content};

