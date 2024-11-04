import { Header } from "@/widgets/header"
import { Outlet } from 'react-router-dom';


export function HomePage () {

    return <>
            <Header/>
                <Outlet context={{ someValue: 1 }} />
                <p>Home Page</p>
                <article>
                    <p>удобно управлять стилями</p>
                    <p>изолированность модуля</p>
                    <p>использование общих стилей облегчает управление шрифтами и общим цветом</p>
                </article>
            </>
}