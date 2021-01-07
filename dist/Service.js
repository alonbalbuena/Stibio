export default class Service {
    constructor(request) {
        this.request = request;
    }
    getResults() {
        return fetch(`https://api.themoviedb.org/${this.request}`, {
            method: 'GET',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVlMjZiYWQ4OGNlYjM3ODEzMjhiYmI2MGRjMTA5NCIsInN1YiI6IjVmNzllMDBiOWE2NDM1MDAzNmE2NTdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWjSac35Ni053K6oss4iD7qM9IWeM-TT2zb3DQhbACw",
                "Content-Type": "application/json;charset=utf-8",
            },
            credentials: 'same-origin'
        }).then((response) => response.json());
    }
}
//# sourceMappingURL=Service.js.map