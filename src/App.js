import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Examen <code>Intégration-Déploiement continu</code>.
        </p>
        <a
          className="App-link"
          href="https://github.com/charlottesaidi/exam-oc-web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lien vers le répo
        </a>
      </header>
    </div>
  );
}

export default App;
