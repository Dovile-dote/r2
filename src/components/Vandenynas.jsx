import Tipas from './Tipas';
import Vardas from './Vardas';
import Spalva from './Spalva';


function Vandenynas() {
    return (
        <>
        <div className="flex">
            <div className="vidinis">
                <h3>Pagal tipa</h3>
                <Tipas></Tipas>
            </div>
            <div className="vidinis">
                <h3>Pagal varda</h3>
                <Vardas></Vardas> 
            </div>
            <div className="vidinis">
                <h3>Pagal Spalva</h3>
                <Spalva></Spalva>
            </div>
        </div>
    </>
)}

export default Vandenynas;