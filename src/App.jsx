import './App.css';
import Bala from './components/Bala';
import Tvenkinys from './components/Tvenkinys';
import Jura from './components/Jura';
import Vandenynas from './components/Vandenynas';
import Pasaulis from './components/Pasaulis';
import Tvenkinys2 from './components/Tvenkinys2';
import seaPlaners from './components/Masyvas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners. */}
        <section>
          <h2>Bala</h2>
          <Bala seaPlaners={seaPlaners}></Bala>
        </section>
        {/* Sukurti du komponentus Tvenkinys, Daiktas -  tėvinį ir vaikinį atitinkamai. Tvenkinys komponente du kartus panaudokite komponentą Daiktas atvaizduoti masyvą seaPlaners - vieną kartą poriniams kitą kartą neporiniams įrašams (pagal id, ne masyvo indeksą).
         */}
        <section>
          <h2>Tvenkinys</h2>
          <Tvenkinys seaPlaners={seaPlaners}></Tvenkinys>
        </section>
        {/* Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura tėvinis komponentas, kiti trys vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Valtis, “car” - Laivas, “animal” - Sala, “fish” - tiesiai Jura komponente (be jokio vaikinio komponento). */}
        <section>
          <h2>Jura</h2>
          <Jura seaPlaners={seaPlaners}></Jura>
        </section>
        {/* Sukurti keturis komponentus Vandenynas, Tipas, Vardas, Spalva. Vandenynas tėvinis komponentas kiti trys vaikiniai. Vaikiniuose komponentuose atvaizduoti tą patį masyvą, tik išrūšiuotą pagal komponento vardą (pvz Tipas išrūšiuota pagal tipą ir t.t.). */}
        <section>
          <h2>Vandenynas</h2>
          <Vandenynas seaPlaners={seaPlaners}></Vandenynas>
        </section>
        {/* Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. Pasaulis tėvinis komponentas, kiti keturi vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Namas, “car” - Garazas, “animal” - Narvas, “fish” - Akvariumas. Komponentas Pasaulis turi būti padalintas į dvi dalis- porinę ir neporinę (pagal id, ne masyvo indeksą). Visus keturis vaikinius komponentus panaudoti po du kartus - porinėje ir neporinėje dalyje, atvaizduojant porinius ir neporinius masyvo įrašus.
         */}
        <section>
          <h1>Pasaulis</h1>
          <Pasaulis seaPlaners={seaPlaners}></Pasaulis>
        </section>

        <section>
          <h2>detytojo sprendimas</h2>
          <Tvenkinys2 seaPlaners={seaPlaners}></Tvenkinys2>
        </section>
      </header>
    </div>
  );
}

export default App;

// kazkaip nesigauna perduoti seaPlaners Daiktas, Narvas, Namas, Garazas, Akvariumas uzd.
