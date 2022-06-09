import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import {getAll} from "../components/perros/perros";
import Razas from "../components/perros/Razas";
function Perros() {
    const perros=getAll();
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="container">   
            <h1 className="text-center me-2">Listado de Perros</h1>
            <div class="row row-cols-1 row-cols-md-3 g-5">
                {
                    perros.map(p=>(
                        <Razas 
                        p1={p.id}
                        p2={p.thumbnail}
                        p3={p.raza}
                        p4={p.descripcion}
                        p5={p.acercade}
                        p6={p.imagen}
                        p7={p.pais}
                        p8={p.vida}
                        />   
                    ))
                }
            </div> 
        </div>
        <br/>
        <Footer/>
        </>
    );                       
}

export default Perros;