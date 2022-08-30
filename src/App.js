import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Header></Header>
      <Skills></Skills>
      <Project></Project>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
