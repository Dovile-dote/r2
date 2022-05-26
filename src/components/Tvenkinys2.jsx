// DESTYTOJO SPRENDIMAS
import Daiktas2 from './Daiktas2';

function Tvenkinys2({ seaPlaners }) {
  return (
    <>
      {seaPlaners.map((p) =>
        p.id % 2 ? <Daiktas2 key={p.id} seaPlaner={p}></Daiktas2> : null
      )}
      <br />
      {seaPlaners.map((p) =>
        p.id % 2 ? null : <Daiktas2 key={p.id} seaPlaner={p}></Daiktas2>
      )}
    </>
  );
}

export default Tvenkinys2;
