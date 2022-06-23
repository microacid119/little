<template lang='pug'>
.bookList
    .bookCard(v-for="(book, i) in store.bookList" :key="i" @click="$router.push(`/books/${book.id}`)")
        div
            p 書名: {{ book.title }}
            p 作者: {{ book.author }}
    
</template>
<script setup>
import { onMounted } from 'vue'
import { useCounterStore } from '@/store/index';

const store = useCounterStore()

onMounted(() => {
    getBookList()
})

async function getBookList() {
    try {
        let response = await fetch('https://fe-interview-api.unnotech.com/books/');
        store.bookList = await response.json();
    } catch (err) {
        alert(err);
    }
}

</script>
<style lang='stylus'>
.bookList
    display flex
    justify-content space-between
    flex-flow wrap
    padding 0 1rem
    margin-top 1rem
    @media (min-width: 650px)
        padding 0 5rem
        margin-top 2rem
    .bookCard
        width 48%
        height 240px
        border-radius 5px
        background white
        color black
        font-weight bold
        margin-bottom 1rem
        cursor pointer
        display flex
        justify-content center
        align-items center
        box-shadow 0 2px 5px rgb(0 0 0 / 50%);
        transition 0.5s;
        font-size 20px
        box-sizing border-box
        padding 1rem
        &:hover
            margin-top -15px
            box-shadow 0 2px 15px rgb(0 0 0 / 50%);
            transform  scale(1.1)
        @media (min-width: 650px)
            width 24%
</style>