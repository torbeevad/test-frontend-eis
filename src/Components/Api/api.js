// const urlMeters = "http://showroom.eis24.me/api/v4/test/meters/"
//
// class api {
//     constructor(url) {
//         this.url = url
//     }
//
//     async getFetchMeters(limit = 100, offset = 20) {
//         return await fetch(`${this.url}?limit=${limit}&offset=${offset}`, {
//             method: "GET",
//         }).then(res => res.json().then(res => res.results))
//     }
// }
//
// export default new api(urlMeters)