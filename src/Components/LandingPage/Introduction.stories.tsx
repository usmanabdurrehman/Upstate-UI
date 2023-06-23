import { Checkbox } from "../Checkbox";
import { Chip } from "../Chip";
import { CountCard } from "../CountCard";
import { FAB } from "../FAB";
import { Switch } from "../Switch";
import styles from "./LandingPage.module.css";
import FaceIcon from "@material-ui/icons/Face";
import { Progress } from "../Progress";
import { Table } from "../Table";

import { dummyTableData } from "../../constants";
import { ComboBox } from "../ComboBox";
import { dummyOptions } from "../ComboBox/ComboBox.constants";

export default {
  title: "Introduction",
};

export const Introduction = () => (
  <div className={styles.landingpage}>
    <div>
      <Switch onClick={() => {}} checked />
    </div>
    <div>
      <CountCard number={40} text="Orders Completed" width={250} height={150} />
    </div>
    <div>
      <Chip label="Alex" avatar={<FaceIcon />} />
    </div>
    <div>
      <Checkbox checked />
    </div>
    <div>
      <FAB onClick={() => {}} variant="filled">
        +
      </FAB>
    </div>
    <div className={styles.table}>
      <Table
        data={dummyTableData.slice(0, 4)}
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
      />
    </div>
    <div>
      <Progress progress={40} />
    </div>
    <div>
      <ComboBox
        options={dummyOptions}
        selectedOptions={dummyOptions.slice(0, 2)}
        onChange={() => {}}
      />
    </div>
    <div>
      <h1>And More...</h1>
    </div>
  </div>
);
