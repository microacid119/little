<template lang='pug'>
.bookDetail
    .edit(v-if="store.headerStatus === 'edit'")
        input(type="text" v-model="editBookData.title")
        input(type="text" v-model="editBookData.author")
        input.desc(type="text" v-model="editBookData.description")
        .buttons
            button(@click="router.go(-1)") 取消
            button.btn-submit(@click="editBook()") 修改

    .create(v-if="store.headerStatus === 'create'")
        input(type="text" v-model="createBook.title" placeholder="名稱")
        input(type="text" v-model="createBook.author" placeholder="作者")
        input.desc(type="text" v-model="createBook.description" placeholder="備註")
        .buttons
            button(@click="router.go(-1)") 取消
            button.btn-submit(@click="addBook()") 新增

    .read(v-if="store.headerStatus === ''")
        p {{ store.bookSingle.title }}
        p {{ store.bookSingle.author }}
        p.desc {{ store.bookSingle.description }}
    
</template>
<script setup>
import { watch, ref, onMounted, toRaw } from 'vue'
import { useCounterStore } from '@/store/index';
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const store = useCounterStore()
let createBook = ref({
    title: '',
    author: '',
    description: ''
})
let editBookData = ref({
    title: '',
    author: '',
    description: ''
})

getBookSingle()

async function getBookSingle() {
    try {
        let response = await fetch(`https://fe-interview-api.unnotech.com/books/${route.params.bookId}`)
        let data = await response.json()
        store.bookSingle = data
        editBookData.value = data
    } catch (err) {
        alert(err)
    }
}

async function addBook() {
    try {
        let response = await fetch(`https://fe-interview-api.unnotech.com/books/`, {
            method: 'POST',
            body: {
                title: createBook.value.title,
                author: createBook.value.author,
                description: createBook.value.description
            },
        })
        if (response.status === 200) {
            alert('新增成功 response status 200')
        }
    } catch (err) {
        alert(err)
    }
}

async function editBook() {
    try {
        let response = await fetch(`https://fe-interview-api.unnotech.com/books/${route.params.bookId}`, {
            method: 'PATCH',
            body: {
                title: editBookData.value.title,
                author: editBookData.value.author,
                description: editBookData.value.description
            },
        })
        if (response.status === 200) {
            alert('修改成功 response status 200')
        }
    } catch (err) {
        alert(err)
    }
}

</script>
<style lang='stylus'>
.bookDetail
    padding 1.5rem
    .read
        p
            width 100%
            height 40px
            margin-bottom 20px
            padding 0 1rem
            box-sizing border-box
            border-radius 5px
            background #fff
            line-height 40px
        .desc
            height 240px
    .edit, .create
        input
            width 100%
            height 40px
            margin-bottom 20px
            padding 0 1rem
            box-sizing border-box
            border-radius 5px
            border none
            outline none
        .desc
            height 240px
        .buttons
            display flex
            justify-content space-between
            margin-top 10px
            button
                width 45%
                height 45px
                border-radius 25px
                border none
                color white
                background rgba(0,0,0,.5)
                cursor pointer
                transition 0.5s;
                &:hover
                    color rgba(0,0,0,.5)
                    background white
                    margin-top -1.5px
                    box-shadow 0 2px 15px rgb(0 0 0 / 50%);
            .btn-submit
                background #F4E06D
                &:hover
                    color #F4E06D
                    background white
</style>