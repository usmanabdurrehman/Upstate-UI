import {DataTable} from './Components'

function App() {
  return (
    <div className="App">
      <DataTable columns={['color','description','quantity']}/>
    </div>
  );
}

export default App;
