import Users from "./components/Users/Users";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className="App">
            <Users/>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;
/*
Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
    Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments*/
