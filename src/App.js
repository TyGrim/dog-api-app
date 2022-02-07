import "./App.scss";

function App() {
  return (
    <div className="App">
      <section className="Controls">
        <h1>Who let the Dogs out?</h1>
        <form>
          <button type="button">+1</button>
          <button type="button">+5</button>
          <button type="button">-1</button>
          <button type="button">-5</button>
        </form>
      </section>
      <section className="Gallery">
        <div className="ImageBox"></div>
        <div className="ImageBox"></div>
        <div className="ImageBox"></div>
        <div className="ImageBox"></div>
        <div className="ImageBox"></div>
      </section>
    </div>
  );
}

export default App;
