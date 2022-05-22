import seaPlaners from "./Masyvas";

function Vardas() {
    seaPlaners.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    return seaPlaners.map((v, i) => <div key={i}>{v.id} {v.type} <span style={{color: v.color}}>{v.name}</span> {v.color}</div>);
}

export default Vardas;