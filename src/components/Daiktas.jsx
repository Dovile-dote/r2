import seaPlaners from './Masyvas';

function Daiktas(sk) {
  return seaPlaners.map((v, i) =>
    v.id === sk ? (
      <div key={i}>
        {v.id} {v.type} <span style={{ color: v.color }}>{v.name}</span>{' '}
        {v.color}
      </div>
    ) : null
  );
}

export default Daiktas;
