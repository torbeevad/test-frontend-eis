import {types} from "mobx-state-tree";
import {flow} from "mobx";
import api from "../Components/Api/api";

export const Meterx = types.model("Meterx", {
    id: types.identifier,
    _type: types.array(
        types.string,
        types.string
    ),
    area: types.maybe(types.string),
    is_automatic: types.boolean,
    communication: types.string,
    description: types.string,
    serial_number: types.string,
    installation_date: types.Date,
    brand_name: types.maybe(types.string),
    model_name: types.string,
    initial_values: types.array(types.number),
});


const MeterStorex = types.model("MeterStorex", {
    metersx: types.maybe(types.array(Meterx)),
}).actions(self => {
    return {
        load: flow(function* () {
            self.metersx = yield api.getFetchMeters().then(res => res.results);
        }),
        // afterCreate () {
        //     self.load()     не обновляет состояние, не понял почему, ошибка
        // }
    }
})

export default MeterStorex;