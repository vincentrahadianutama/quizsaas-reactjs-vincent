import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import ClickCounter from './ClickCounter';
import DisplayProp from './DisplayProp';
import UseEffectExample from './UseEffectExample';
import SimpleForm from './SimpleForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          SELAMAT DATANG DI AKADEMI CRYPTO
        </h1>

        <div>
        <ClickCounter />
        </div>

        <div>
        <DisplayProp message="TUTORIAL CEPET KAYA !!!" />
        </div>

        <div>
        <UseEffectExample />
        </div>

        <div>
        <SimpleForm />
        </div>
        
      </header>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
