import "./App.css";

function Header() {
  return <h1>Header</h1>;
}

function Banner() {
  return (
    <div className="border">
      <h1>Banner</h1>
      <p>Bu mening birinchi REACT loyiham!</p>
    </div>
  );
}

function Footer() {
  return <h1>Footer</h1>;
}

function App() {
  let name = "Feruza`s";
  return (
    <div className="App">
      <h1>Hello , {name} World!</h1>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}
export default App;
