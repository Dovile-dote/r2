import seaPlaners from './Masyvas'

function Laivas() {
    return seaPlaners.map((v, i) => v.type === 'car' ? <div key={i}>{v.id} {v.type} <span style={{color: v.color}}>{v.name}</span> {v.color}</div> : <div key={i}></div>);
}

export default Laivas;