import { ref } from "vue";

class shopService {
    constructor(){
        this.cards = ref([])
    }

    getCards(){
        return this.cards
    }

    async fetchAll(){
        try{
            const response = await fetch('./data.json')
            const json = await response.json()
            this.cards.value = await json
        }catch(e){
            console.log(e)
        }
    }
}

export default shopService;