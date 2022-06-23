<template lang='pug'>
#main
    Header
    router-view
    
</template>
<script setup>
import { useCounterStore } from './store/index';
import Header from './components/header.vue';

const store = useCounterStore()

</script>
<style lang='stylus'>
body,h1,h2,h3,h4,p
    margin 0
    padding 0
body
    background gray
    margin 0
    padding 0
</style>