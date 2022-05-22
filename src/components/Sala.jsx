import seaPlaners from './Masyvas';

function Sala() {
    return seaPlaners.map((v, i) => v.type === 'animal' ? <div key={i}>{v.id} {v.type} <span style={{color: v.color}}>{v.name}</span> {v.color}</div> : <div key={i}></div>);
}

export default Sala;