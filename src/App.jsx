
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Evolutions from "./pages/Evolutions";
import { Navbar } from "./components/Navbar";
import Pokemones from "./pages/Pokemones";

export const App = ()=>{

    return ( 
    <>  
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<></>}></Route>
                <Route path="/Pokemones" element={ <Pokemones/>}></Route>
                <Route path="/Evoluciones" element={ <Evolutions />}></Route>
            </Routes>
           
        </BrowserRouter>
    </>
    )
}