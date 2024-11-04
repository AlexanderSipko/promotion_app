import { Header } from "@/widgets/header"
import { Outlet } from 'react-router-dom';
import { Section } from "../widgets/section";

export function HomePage () {

    return <>
            <Header/>
                {/* <Section nameClass={'left'}></Section> */}
                    <section>
                        <p>Home Page</p>
                        <article>
                            <p>удобно управлять стилями</p>
                            <p>изолированность модуля</p>
                            <p>использование общих стилей облегчает управление шрифтами и общим цветом</p>
                        </article>
                        <Outlet context={{ someValue: 1 }} />
                    </section>
                {/* <Section nameClass={'right'}></Section> */}
            </>
}