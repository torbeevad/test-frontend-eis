import {makeAutoObservable} from "mobx";

const urlMeters = "http://showroom.eis24.me/api/v4/test/meters/"
const urlDel = "http://showroom.eis24.me/api/v4/test/meters/)."

class MeterStore {

    meters = []


    constructor() {
        makeAutoObservable(this)
    }

    firstPage = () => {
        return this.meters = this.meters.filter((el, i) => i < 20)
    }

    deleteMeter = (id) => {
        return this.meters = this.meters.filter((elem) => elem.id !== id)
    }

    getFetchMetersData = async () => {
        return await fetch(urlMeters, {
            method: "GET",
        }).then(res => res.ok ? res.json().then(res => this.meters = [...this.meters, ...res.results]) : res.json().then((res) => Promise.reject(res)))
    }

    deleteFetchMeter = async (id) => {
        return await fetch(`${urlDel}:${id}`, {
            method: "DELETE",
        }).then(res => res.ok ? res.json() : res.json().then((res) => Promise.reject(res)))
    }
}

export default new MeterStore();