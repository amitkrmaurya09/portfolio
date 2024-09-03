import About from "./Components/About/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Intro from "./Components/Main/Intro";
import Project from "./Components/Projects/Project";
import Skill from "./Components/Skill/Skill";
function App() {
  const screenWidth = window.innerWidth;
  console.log(`Screen width is: ${screenWidth}px`);

  let components = (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className="w-72 h-72 bg-slate-600 flex justify-center items-center rounded-xl">
          <p className="font-bold text-black text-center p-8 text-2xl">
            Currently page Only Available for screen greater than 1200px{" "}
          </p>
        </div>
      </div>
    </>
  );
  if (screenWidth > 1200) {
    components = (
      <>
        {" "}
        <Header />
        <Intro />
        <About />
        <Skill />
        <Project />
        <Footer />
      </>
    );
  }

  return <>{components}</>;
}

export default App;
