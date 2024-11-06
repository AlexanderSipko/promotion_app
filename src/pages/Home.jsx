import { Header } from "@/widgets/navigate"
import { Outlet } from 'react-router-dom';
import { DevInfo } from "../widgets/info";

export function HomePage () {

    return <>
                <Header/>
                <DevInfo/>
                <Outlet/>
            </>
}