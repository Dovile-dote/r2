function Laivas({ seaPlaners }) {
  return seaPlaners.map((v, i) =>
    v.type === 'car' ? (
      <div key={i}>
        {v.id} {v.type} <span style={{ color: v.color }}>{v.name}</span>{' '}
        {v.color}
      </div>
    ) : null
  );
}

export default Laivas;
