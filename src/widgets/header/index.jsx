import { useState } from 'react'
import { Link } from "react-router-dom";
import './style.css'

export function Header () {

    const [ themeDark, setThemeDark ] = useState(false)

    const changeGlobalTheme = () => {
        document.body.classList.toggle('light-theme')
        setThemeDark(!themeDark)
    }

    return <header>
        <ul>
            <li>LOGO</li>
            <li><Link to={''}>Home</Link></li>
            <li><Link to={'info'}>inform</Link></li>
            <li><Link to={'todo'}>inform</Link></li>
            <li><Link to={'info'}>My</Link></li>
            <li>
                <p onClick={() => {changeGlobalTheme()}}>{themeDark ? 'Dark' : 'White'}</p>
            </li>
        </ul>
        
    </header>
}