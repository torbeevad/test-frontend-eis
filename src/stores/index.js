import {types} from "mobx-state-tree";
import MeterStorex from "./meters";
import AreasStorex from "./areas";

const RootStore = types.model("RootStore", {
    metersx: types.optional(MeterStorex, {}),
    areasx: types.optional(AreasStorex,{}),
});

export default RootStore;