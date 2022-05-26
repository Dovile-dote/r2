function Valtis({ seaPlaners }) {
  return seaPlaners.map((v, i) =>
    v.type === 'man' ? (
      <div key={i}>
        {v.id} {v.type} <span style={{ color: v.color }}>{v.name}</span>{' '}
        {v.color}
      </div>
    ) : null
  );
}

export default Valtis;
