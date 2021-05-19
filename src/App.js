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
					sort:true,
					sortWholeData:false,
					columnSelect:true,
					csvDownload:true,
					printCsv:true,
					paginationLimit:6
				}}
			/>
		</div>
	);
}

export default App;
