import './App.css';
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";

function App() {
    return (
        <div className="App">
            <div className={'pets'}>
                <Dogs/>
                <Cats/>
            </div>
        </div>
    );
}

export default App;
