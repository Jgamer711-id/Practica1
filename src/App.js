
import './App.css';
import Mensaje from './Mensaje.js';


const Descripcion = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
  }

const App = () => {
  return (
    <div className="App">
<Mensaje color = 'blue' message= 'Estamos trabajando'/>
<Mensaje color = 'red' message= 'En un curso'/>
<Mensaje color = 'brown' message= 'de React '/>
<Descripcion/>

    </div>
  );
}

export default App;
