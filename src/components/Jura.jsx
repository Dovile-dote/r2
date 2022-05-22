import Valtis from "./Valtis";
import Laivas from "./Laivas";
import Sala from "./Sala";
import seaPlaners from './Masyvas';

function Jura() {
    return (
        <>
            <div className="flex">   
                <div className="vidinis">
                    <h3>Valtis</h3>
                    <Valtis></Valtis>
                </div>
                <div className="vidinis">
                    <h3>Laivas</h3>
                    <Laivas></Laivas>
                </div>
                <div className="vidinis">
                <h3>Sala</h3>
                <Sala></Sala> 
                </div>
            </div>
            <div>{ seaPlaners.map((v, i) => v.type === 'fish' ? <div key={i}>{v.id} {v.type} <span style={{color: v.color}}>{v.name}</span> {v.color}</div> : <div key={i}></div>)}</div>
        </>
    )
}

export default Jura;