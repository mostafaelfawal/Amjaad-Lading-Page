import About from "./Components/About";
import Articles from "./Components/Articles/Articles";
import Features from "./Components/Features/Features";
import Header from "./Components/Header";
import Companies from "./Components/Hero/Companies";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import TeamFind from "./Components/TeamFind";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Companies />
        <Services />
        <Features />
        <TeamFind />
        <About />
        <Articles />
        <Projects />
      </main>
    </>
  );
}
