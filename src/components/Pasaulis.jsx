import Namas from './Namas';
import Narvas from './Narvas';
import Garazas from './Garazas'
import Akvariumas from './Akvariumas';
import seaPlaners from './Masyvas';

function Pasaulis() {
    return (
        <>
        <div className="flex">
            <div className="vidinis">
                <h2>Pasaulis poriniams</h2>
                <div className="vidinis">
                    <h3>Namas</h3>
                    {seaPlaners.map((v, i) => v.id % 2 === 0 ? Namas(v.id) : <div key={i}></div>)}
                </div>
                <div className="vidinis">
                    <h3>Garazas</h3>
                    {seaPlaners.map((v, i) => v.id % 2 === 0 ? Garazas(v.id) : <div key={i}></div>)}
                </div>
                <div className="vidinis">
                    <h3>Narvas</h3>
                    {seaPlaners.map((v, i) => v.id % 2 === 0 ? Narvas(v.id) : <div key={i}></div>)}
                </div>          
                <div className="vidinis">
                    <h3>Akvariumas</h3>
                    {seaPlaners.map((v, i) => v.id % 2 === 0 ? Akvariumas(v.id) : <div key={i}></div>)}
                </div>
            </div>
        
            <div className="vidinis">
                <h2>Pasaulis neporiniams</h2>  
                <div className="vidinis">
                    <h3>Namas</h3>
                    {seaPlaners.map((v, i) => v.id % 2 !== 0 ? Namas(v.id) : <div key={i}></div>)}
                </div>
                <div className="vidinis">
                    <h3>Garazas</h3>
                    {seaPlaners.map((v, i) => v.id % 2 !== 0 ? Garazas(v.id) : <div key={i}></div>)}
                </div>
                <div className="vidinis">
                    <h3>Narvas</h3>
                    {seaPlaners.map((v, i) => v.id % 2 !== 0 ? Narvas(v.id) : <div key={i}></div>)}
                </div>          
                <div className="vidinis">
                    <h3>Akvariumas</h3>
                    {seaPlaners.map((v, i) => v.id % 2 !== 0 ? Akvariumas(v.id) : <div key={i}></div>)}
                </div>
            </div>    
        </div>
        </>
    )
}

export default Pasaulis;