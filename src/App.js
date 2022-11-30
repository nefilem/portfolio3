import logo from './logo.svg';
import './App.css';
import Dust from "./dust.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="container">
        <Dust/>
        <main className="project-grid">
          <div className="project">
            <h1>Keiron Goodwin</h1>
            <h5>Full Stack Developer MERN/LAMP Stack</h5>
          </div>
          <div className="project">
            <p className="project-header">
            Sunset Predictor
            </p>
            <p className="project-body">
            Project was initially a weather app, however I wanted to 
            add a method whereby the app gives an idea of how photogenic
            for want of a better word the sunset will be on that evening. 
            </p>
            <p className="project-links">
            <button className="project-web-link-button"><a href="http://news.bbc.co.uk">Code</a></button>
            <button className="project-web-link-button"><a href="http://news.bbc.co.uk">APP</a></button>
            </p>
            <p className="project-info">
            React, CSS, HTML
            </p>
          </div>
          <article className="project">
            Hello this is a test
          </article>
          <article className="project">
            Hello this is a test
          </article>
          <article className="project">
            Hello this is a test
          </article>
          <article className="project">
            Hello this is a test
          </article>
          
        </main>
      </div>
      </header>
    </div>
  );
}

export default App;
