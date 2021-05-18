import { DataTable } from "./Components";

function App() {
	return (
		<div className="App">
			<DataTable columns={["color", "description", "quantity"]} customWidgets={{
				color:(value) => <div style={{backgroundColor:value,width:'50px',height:'50px'}}></div>
			}} />
		</div>
	);
}

export default App;
