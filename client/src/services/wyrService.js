
export default {
    getRandomWYR() { //retuns a promsie
        return fetch('/wyr').then(response =>{
            return response.json()
        })
    }
}