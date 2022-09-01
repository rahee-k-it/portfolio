import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Character from './components/Character';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Character></Character>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
