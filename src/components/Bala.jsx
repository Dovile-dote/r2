import seaPlaners from './Masyvas'

  function Bala() {
    return seaPlaners.map((v, i) => <div key={i}>{v.id} {v.type} <span style={{color: v.color}}>{v.name}</span> {v.color}</div>)
    }

  export default Bala;