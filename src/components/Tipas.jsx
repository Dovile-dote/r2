function Tipas({ seaPlaners }) {
  seaPlaners.sort((a, b) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });
  return seaPlaners.map((v, i) => (
    <div key={i}>
      {v.id} {v.type} <span style={{ color: v.color }}>{v.name}</span> {v.color}
    </div>
  ));
}

export default Tipas;
