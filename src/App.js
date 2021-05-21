import { DataTable, CountCard, Container, FAB, Button, Switch } from "Components";
import dummyData from "Components/DataTable/DataTable.constants";
import SearchIcon from "@material-ui/icons/Search";

function App() {
	return (
		<div className="App">
			<Container>
				<>
				<DataTable
					data={dummyData}
					columns={["color", "description", "quantity"]}
					customWidgets={{
						color: (value) => (
							<div
								style={{
									backgroundColor: value,
									width: "30px",
									height: "30px",
									borderRadius: "50%",
								}}
							></div>
						),
					}}
					options={{
						sort: true,
						sortWholeData: false,
						columnSelect: true,
						csvDownload: true,
						printCsv: true,
						paginationLimit: 6,
					}}
					theme='navy'
					customStyles={{
						// stripedRows:true,
						// stripedRowsColor:'#f2f2f2'
					}}
				/>
				<CountCard number={30} text={'Orders Completed'} width={250} type="success"/>
				<FAB><SearchIcon style={{color:'white'}}/> </FAB>
				<Button type="success" variant="outlined" onClick={e=>console.log('lmao')}>Sign Up</Button>
				<div style={{margin:'50px'}}><Switch/></div>
			</>
			</Container>
		</div>
	);
}

export default App;
