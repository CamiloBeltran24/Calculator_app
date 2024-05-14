import './App.css';
import { Button } from './components/Button';
import { symbols } from './components/symbols';

const numbers = new Array(10).fill(null);

function App({ value}) {
  return (
    <div className="App">
      <section className='App__container'>
        <div className={'App__container__buttons'}>
          { numbers.map(( _, index ) => {
            return(
              <Button key={index} value={index}/>
            );
          })}
        </div>
        <div>{index}</div>

      </section>
        <div>{ value }</div>
    </div>
  );
}

export default App;
