import { Header, Posts, Users} from "./components";
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'content'}>
                <Users/>
                <Posts/>
            </div>
        </div>
    );
}

export default App;
