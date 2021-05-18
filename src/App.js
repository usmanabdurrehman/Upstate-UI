import { DataTable } from "./Components";

function App() {
	return (
		<div className="App">
			<DataTable 
				columns={["color", "description", "quantity"]}
				customWidgets={{
					color:(value) => <div style={{backgroundColor:value,width:'30px',height:'30px',borderRadius:'50%'}}></div>
				}}
				options={{
					sort:false,
					columnSelect:true,
					csvDownload:true
				}}
			/>
		</div>
	);
}

export default App;
