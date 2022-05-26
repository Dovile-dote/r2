function Sala({ seaPlaners }) {
  return seaPlaners.map((v, i) =>
    v.type === 'animal' ? (
      <div key={i}>
        {v.id} {v.type} <span style={{ color: v.color }}>{v.name}</span>{' '}
        {v.color}
      </div>
    ) : null
  );
}

export default Sala;
