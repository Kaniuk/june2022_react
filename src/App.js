import Pets from "./components/Pets";
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="pets">
                <Pets pet="dog"/>
                <Pets pet="cat"/>
            </div>
        </div>
    );
}

export default App;
