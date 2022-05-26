import Tipas from './Tipas';
import Vardas from './Vardas';
import Spalva from './Spalva';

function Vandenynas({ seaPlaners }) {
  return (
    <>
      <div className="flex">
        <div className="vidinis">
          <h3>Pagal tipa</h3>
          <Tipas seaPlaners={seaPlaners}></Tipas>
        </div>
        <div className="vidinis">
          <h3>Pagal varda</h3>
          <Vardas seaPlaners={seaPlaners}></Vardas>
        </div>
        <div className="vidinis">
          <h3>Pagal Spalva</h3>
          <Spalva seaPlaners={seaPlaners}></Spalva>
        </div>
      </div>
    </>
  );
}

export default Vandenynas;
