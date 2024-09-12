import React from 'react';
import styles from "./meter.module.css"
import {ReactComponent as Trash} from "../assets/trash.svg";
import {ReactComponent as ColdWater} from "../assets/coldWater.svg";
import {ReactComponent as HotWater} from "../assets/hotWater.svg";
import MeterStore from "../../stores/MeterStore";
import AreasStore from "../../stores/AreasStore";

export const Meter = ({meter, i}) => {

    const date = new Date(meter.installation_date).toLocaleDateString();

    const [address] = AreasStore.areas.filter(el => el.id === meter.area.id);

    const delMeter = () => {
        MeterStore.deleteMeter(meter.id)
        MeterStore.setMeterPage(1)
    }

    return (
        <li className={styles.meter}>
            <span>{i + 1}</span>
            <div>{meter._type[0] === "ColdWaterAreaMeter" ?
                <div className={styles.meter__type}><ColdWater/><span>ХВС</span></div> :
                <div className={styles.meter__type}><HotWater/><span>ГВС</span></div>}</div>
            <span>{date}</span>
            <span>{meter.is_automatic ? "Да" : "Нет"}</span>
            <span>{meter.initial_values}</span>
            <span>{address.house.address} {address.str_number_full}</span>
            <span>{meter.description}</span>
            <span onClick={delMeter} className={styles.trash}><Trash/></span>
        </li>
    )
}