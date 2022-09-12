import './styles/reset.css';
import './styles/main.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Character from './components/Character';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Character></Character>
      <Skills></Skills>
      <Project1></Project1>
      <Project2></Project2>
      <Footer></Footer>
    </div>
  );
}

export default App;
