import About from "./components/About";
import Copyright from "./components/Copyright";
import Cover from "./components/Cover";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Member from "./components/Member";
import Photo from "./components/Photo";
import Tagline from "./components/Tagline";
import Video from "./components/Video";

function App() {
  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <Member />
      <Cover />
      <About />
      <Description />
      <Video />
      <Photo />
      <Tagline />
      <Member />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
