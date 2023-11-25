import Header from "./components/header/header";
import AmazingCard from "./components/main/amazingcard/amazing";
import PopularArtist from "./components/main/artist/artist";
import CreateNFTs from "./components/main/createNFTs/createnfts";
import Intro from "./components/main/intro/intro";
import "./App.css";
import Subs from "./components/main/subscribe/subscribe";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <AmazingCard />
      <CreateNFTs />
      <PopularArtist />
      <Subs />
      <Footer />
    </>
  );
}

export default App;
