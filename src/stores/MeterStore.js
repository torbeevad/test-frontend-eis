import {makeAutoObservable} from "mobx";

const urlMeters = "http://showroom.eis24.me/api/v4/test/meters/"
const urlDel = "http://showroom.eis24.me/api/v4/test/meters/)."

class MeterStore {

    meters = []
    meterPages = []

    constructor() {
        makeAutoObservable(this)
    }

    setMeterPage = (qty) => {
        this.meterPages = this.meters.slice(qty - 1, qty - 1 + 20)
    }

    deleteMeter = (id) => {
        return this.meters = this.meters.filter((elem) => elem.id !== id)
    }

    getFetchMetersData = async (limit = 100, offset = 100) => {
        return await fetch(`${urlMeters}?limit=${limit}&offset=${offset}`, {
            method: "GET",
        }).then(res => res.ok ? res.json().then(res => {
                this.meters = [...this.meters, ...res.results]
                this.setMeterPage(1)
            }
        ) : res.json().then((res) => Promise.reject(res)))
    }

    deleteFetchMeter = async (id) => {
        return await fetch(`${urlDel}:${id}`, {
            method: "DELETE",
        }).then(res => res.ok ? res.json() : res.json().then((res) => Promise.reject(res)))
    }
}

export default new MeterStore();