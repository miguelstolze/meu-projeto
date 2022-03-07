import logo from './logo.svg';
import './App.css';
import HelloWolrd from './componets/HelloWolrd'


function App() {

  const nome = "Miguel"
  const newName = nome.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  function sun(a, b){
    return a + b
  }

  return (
    <div className="App">
      <h1>Olá {newName}</h1>
      <p>soma: {sun(1, 2)}</p>
      <img src={url} alt="my-image"/>
      <HelloWolrd/>
      
      
    </div>
  );
}

export default App;
