// stores/counter.js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const bookList = ref([])
    const bookSingle = ref({ title: '' })
    const headerStatus = ref('index')

    return {
        bookList, bookSingle, headerStatus
    }
})