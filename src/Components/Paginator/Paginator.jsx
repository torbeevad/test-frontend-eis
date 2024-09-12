import React from "react";
import styles from "./paginator.module.css";
import {observer} from "mobx-react-lite";
import MeterStore from "../../stores/MeterStore";


export const Paginator = observer(() => {

    const paginator = (event) => {
        MeterStore.setMeterPage(event.target.innerText)
    }

    return (
        <div className={styles.paginator}>
            {MeterStore?.meters.map((meter, i) => ((i + 1) % 20) === 0 ?
                <button onClick={paginator} key={meter.id + "1"}>{(i + 1) / 20}</button> : ""
            )}
        </div>
    )
})