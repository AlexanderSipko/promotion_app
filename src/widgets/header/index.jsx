import { useState } from 'react'
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
            <li>home</li>
            <li>inform</li>
            <li>About us</li>
            <li>My</li>
            <li>
                <p onClick={() => {changeGlobalTheme()}}>{themeDark ? 'Dark' : 'White'}</p>
            </li>
        </ul>
        
    </header>
}