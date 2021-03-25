import "./App.css";

function App() {
  console.log(process.env);
  return (
    <iframe
      title="fiat-iframe"
      src={process.env.REACT_APP_CONTENT_URL}
      allowFullScreen
    ></iframe>
  );
}

export default App;
