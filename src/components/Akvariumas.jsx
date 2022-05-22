import seaPlaners from "./Masyvas";

function Akvariumas(sk) {
    return seaPlaners.map((v, i) => v.id === sk && v.type === 'fish' ? <div key={i}>{v.id} {v.type} <span style={{color: v.color}}>{v.name}</span> {v.color}</div> : <div key={i}></div>);
}

export default Akvariumas;