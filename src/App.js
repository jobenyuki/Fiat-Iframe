import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Fiat</h1>
      <p className="description">
        A little Italian charm goes a long way with Fiat's range of flavorful
        cars, crossovers, and sports cars. When this Italian automaker first
        teamed up with Chrysler several years ago, it decided to bring the tiny,
        iconic 500 minicar over to the states. Things grew from there as Fiat
        added the 500X crossover and the 500L wagon, both of which offer more
        space with styling similar to the 500. The Fiat 124 Spider is a sporty,
        fun convertible that shares many components with the Mazda MX-5 Miata.
      </p>
      <iframe
        title="fiat-iframe"
        src={process.env.REACT_APP_CONTENT_URL}
        allowFullScreen
      ></iframe>
      <h1 className="sub-title">Fun Imported Auto and Toys Spells FIAT</h1>
      <p className="sub-description">
        Danny O'Donnell bought his first Fiat in 1979. It turned into project he
        never put down. Today he has one of the largest stockpiles of vintage
        Fiat parts in the country.
      </p>
      <span className="author">
        BY <span>BRETT BERK</span> DEC 17, 2020
      </span>
    </div>
  );
}

export default App;
