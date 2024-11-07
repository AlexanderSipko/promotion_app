import { useState } from 'react'
import { Link } from "react-router-dom";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import './style.scss'

export function Header () {

    const [ themeDark, setThemeDark ] = useState(false)

    const changeGlobalTheme = () => {
        document.body.classList.toggle('light-theme')
        setThemeDark(!themeDark)
    }

    return <nav>
                <ul>
                    <li>LOGO</li>
                    <li><Link to={''}>Home</Link></li>
                    <li><Link to={'Probability'}>Probability</Link></li>
                    <li><Link to={'ToDo'} >ToDo</Link></li>
                    <li>
                        <p onClick={() => {changeGlobalTheme()}}>{themeDark ? <MoonOutlined /> : <SunOutlined />}</p>
                    </li>
                </ul>
            </nav>
}