import "./App.css";

function App() {
  return (
    <iframe
      title="fiat-iframe"
      src={process.env.REACT_APP_CONTENT_URL}
      allowFullScreen
    ></iframe>
  );
}

export default App;
