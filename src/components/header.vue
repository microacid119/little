<template lang='pug'>
header
    //- 標題
    h2(v-show="store.headerStatus === '' || store.headerStatus === 'edit'") {{ store.bookSingle.title }}
    
    //- 首頁
    img.img-logo(v-show="store.headerStatus === 'index'" src="../assets/logo.jpg" @click="$router.push('/books')")
    p(v-show="store.headerStatus === 'index'" @click="$router.push('/books/create')") +
    
    //- 上一頁
    img.icon-arrowLeft(v-show="store.headerStatus !== 'index'" src="../assets/icon-arrowLeft.png" @click="router.go(-1)")

    //- 修改
    img.icon-edit(v-show="store.headerStatus === ''" src="../assets/icon-edit.png" @click="router.push(`/books/edit/${store.bookSingle.id}`)")

</template>
<script setup>
import { watch, ref, onMounted } from 'vue'
import { useRoute, useRouter } from "vue-router";
import { useCounterStore } from '../store/index';

const store = useCounterStore()
const route = useRoute();
const router = useRouter();

watch(route, (value) => {
    if (route.path.includes('create')) {
        store.headerStatus = 'create'
    } else if (route.path.includes('edit')) {
        store.headerStatus = 'edit'
    } else if (value.params.bookId === undefined) {
        store.headerStatus = 'index'
    } else {
        store.headerStatus = ''
    }

    if (route.path === '/') {
        router.push('/books')
    }
}, { immediate: true }) 

</script>
<style lang='stylus'>
header
    text-align center
    height 60px
    line-height 60px
    background #fff
    .img-logo
        width 150px
        margin-top 10px
    p
        position fixed
        right 15px
        top -2px
        font-size 34px
        color blue
    .icon-arrowLeft
        width 18px
        height 18px
        position fixed
        left 15px
        top 22px
        transform: rotate(180deg);
        cursor pointer
    .icon-edit
        position fixed
        width 30px
        right 15px
        top 15px
</style>