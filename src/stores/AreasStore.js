import {makeAutoObservable} from "mobx";

const urlAreas = "http://showroom.eis24.me/api/v4/test/areas/"

class AreasStore {

    areas = []

    constructor() {
        makeAutoObservable(this)
    }

    getFetchAreasData = async () => {
        return await fetch(urlAreas, {
            method: "GET",
        }).then(res => res.ok ? res.json().then(res => this.areas = [...this.areas, ...res.results]) : res.json().then((res) => Promise.reject(res)))
    }
}

export default new AreasStore();