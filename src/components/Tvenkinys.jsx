import Daiktas from './Daiktas';

function Tvenkinys({ seaPlaners }) {
  return (
    <>
      <div className="flex">
        <div className="vidinis">
          <h3>Daiktas poriniams</h3>
          {seaPlaners.map((v, i) => (v.id % 2 === 0 ? Daiktas(v.id) : null))}
        </div>
        <div className="vidinis">
          <h3>Daiktas neporiniams</h3>
          {seaPlaners.map((v, i) => (v.id % 2 !== 0 ? Daiktas(v.id) : null))}
        </div>
      </div>
    </>
  );
}

export default Tvenkinys;
