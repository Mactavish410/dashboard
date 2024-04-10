import styled from "./App.module.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./pages/Home/Dashboard";

function App() {
  return (
    <div className={styled.main}>
      <header>
        <Header />
      </header>
      <div className={styled.container}>
        <div className={styled.nav}>
          <Navigation />
        </div>
        <div className={styled.content}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
