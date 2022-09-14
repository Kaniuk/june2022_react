import './App.css';

import SimpsonsComponent from "./components/simpsons/simpsonsComponent/SimpsonsComponent";
import Characters from "./components/rickAndMorty/characters/Characters";

function App() {

    return (
        <div className="App">
            <SimpsonsComponent/>
            <Characters/>
        </div>
    );
}

export default App;
