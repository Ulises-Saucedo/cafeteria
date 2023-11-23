import { defineStore } from "pinia"

export const useTheme = defineStore('useTheme',{
    state: () => {
        return {
            theme: true
        }
    },
    actions: {
        toggleTheme(){
            this.theme = !this.theme
        }
    },
    persist: true
})