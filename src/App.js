import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import UserList from './components/UsersList/UserList';

function App() {
  return (
    <div className="App">
      <Calculator />
      <UserList />
    </div>
  );
}

export default App;
