import Exemple1 from './component/shouldcomponentupdate'
import Exemple2 from './component/componentDidUpdate'
import Exemple3 from './component/componentwillunmount'
import './App.css';

function App() {
  return (
    <div className="App">
        <Exemple1 />
        <Exemple2 />
        <Exemple3 />
    </div>
  );
}

export default App;
