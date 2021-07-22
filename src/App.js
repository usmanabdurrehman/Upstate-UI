import { useState } from "react";
import {
  DataTable,
  CountCard,
  Container,
  FAB,
  Button,
  Switch,
  RadioGroup,
  Select,
  Progress,
  Tabs,
  Navbar,
  Tooltip,
  Accordion,
  Badge,
  Checkbox,
  Stepper,
  Chip,
  Modal,
} from "Components";
import dummyData from "Components/DataTable/DataTable.constants";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  const [prog, setProg] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div className="wrapper">
        <Modal isOpen={open} onClose={(e) => setOpen(false)}>
          <div
            style={{
              padding: 50,
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            lmao son
          </div>
        </Modal>
        <button onClick={(e) => setOpen(!open)}>invert modal open state</button>
        <Stepper />
        <Chip label="Basic" type="primary" variant="filled" />
        <Checkbox />
        <Badge number={6}>Lmao</Badge>
        <Accordion
          title="Accordion"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus risus mi, a semper nisi eleifend in. Donec vestibulum dui eget mi rutrum, eu egestas eros accumsan. Sed sem augue, aliquam et ipsum eu, ultrices egestas ex. Etiam dignissim sollicitudin nibh, a lacinia dolor ornare cursus. Aenean luctus vitae dolor vel aliquam. Nullam vel purus ac diam facilisis pretium eu tincidunt lorem. Nullam aliquet nibh eget ante malesuada, vitae ultrices ante ornare. Curabitur molestie suscipit sem sit amet placerat. Curabitur nunc nunc, bibendum eget urna a, commodo interdum purus. Quisque interdum finibus posuere. Mauris sem tellus, ullamcorper non eros nec, tristique pretium dui. "
        />
        <Tooltip title="meow">lmao</Tooltip>
        <Navbar logo={"lmao"} menuItems={["About Us", "Contact Us"]} />
        <Tabs titles={["Information", "Question"]}>
          <div>gfgfg</div>
          <div>ddfdffgfg</div>
        </Tabs>
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
          theme="navy"
          customStyles={
            {
              // stripedRows:true,
              // stripedRowsColor:'#f2f2f2'
            }
          }
        />
        <CountCard
          number={30}
          text={"Orders Completed"}
          width={250}
          type="success"
        />
        <FAB variant="filled">
          <SearchIcon style={{ color: "white" }} />{" "}
        </FAB>
        <Switch />
        <RadioGroup options={["Male", "Female"]} />
        <Select options={["Male", "Female"]} />
        <Button
          type="success"
          variant="outlined"
          onClick={(e) => console.log("lmao")}
        >
          Sign Up
        </Button>
        <Progress progress={prog} />
        <input type="number" onChange={(e) => setProg(e.target.value)} />
      </div>
      <Container></Container>
    </div>
  );
}

export default App;
