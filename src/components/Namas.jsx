import seaPlaners from './Masyvas';

function Namas(sk) {
  return seaPlaners.map((v, i) =>
    v.id === sk && v.type === 'man' ? (
      <div key={i}>
        {v.id} {v.type} <span style={{ color: v.color }}>{v.name}</span>{' '}
        {v.color}
      </div>
    ) : null
  );
}

export default Namas;
