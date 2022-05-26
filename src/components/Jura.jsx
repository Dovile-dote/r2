import Valtis from './Valtis';
import Laivas from './Laivas';
import Sala from './Sala';

function Jura({ seaPlaners }) {
  return (
    <>
      <div className="flex">
        <div className="vidinis">
          <h3>Valtis</h3>
          <Valtis seaPlaners={seaPlaners}></Valtis>
        </div>
        <div className="vidinis">
          <h3>Laivas</h3>
          <Laivas seaPlaners={seaPlaners}></Laivas>
        </div>
        <div className="vidinis">
          <h3>Sala</h3>
          <Sala seaPlaners={seaPlaners}></Sala>
        </div>
      </div>
      <div>
        {seaPlaners.map((v, i) =>
          v.type === 'fish' ? (
            <div key={i}>
              {v.id} {v.type} <span style={{ color: v.color }}>{v.name}</span>{' '}
              {v.color}
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

export default Jura;
