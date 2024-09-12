import React from "react";
import styles from "./meterList.module.css";
import {Meter} from "../MeterData/Meter";
import {observer} from "mobx-react-lite";
import MeterStore from "../../stores/MeterStore";


export const MeterList = observer(() => {

    return (
        <ul className={styles.meterList}>
            {MeterStore.meterPages?.map((meter, i) => <Meter meter={meter} i={i} key={meter.id} />)}
        </ul>
    )
})