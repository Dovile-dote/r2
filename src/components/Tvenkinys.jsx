import Daiktas from "./Daiktas";
import seaPlaners from './Masyvas'

function Tvenkinys() { 
   return (
      <>
      <div className="flex">
         <div className="vidinis">
            <h3>Daiktas poriniams</h3>
            {seaPlaners.map((v, i) => v.id % 2 === 0 ? Daiktas(v.id) : <div key={i}></div>)}
         </div>
         <div className="vidinis">
            <h3>Daiktas neporiniams</h3>
            {seaPlaners.map((v, i) => v.id % 2 !== 0 ? Daiktas(v.id) : <div key={i}></div>)}
         </div>
      </div>
      </>
   )
}

export default Tvenkinys;