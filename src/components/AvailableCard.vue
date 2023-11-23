<template>
    <div class="card" v-if="props.stock" :class="{'dark-mode': store.theme}">
        <img :src="props.img" :alt="props.title">
        <span v-if="props.popular" class="popular">Popular</span>
        <p class="content__1"><span>{{ title }}</span><span class="price">${{ props.price }}</span></p>
    </div>
</template>

<script setup>
    import { useTheme } from '../store/useTheme'
    const store = useTheme()
    const props = defineProps({
        title: {
            String,
            required: true,
        },
        popular: {
            Boolean,
            default: false,
        },
        price:{
            String,
            required: true
        },
        stock:{
            Boolean,
            default: true
        },
        img: {
            String,
            required: true
        }
    })
</script>

<style scoped>
    .card{
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: auto 35px 25px;
        position: relative;
        gap: 10px;
        color: #F9F2E8;
    }
    img{
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 10px;
    }
    .popular{
        position: absolute;
        left: 10px;
        top: 10px;
        padding: 5px;
        background: #F5C768;
        border-radius: 10px;
        font-size: 12px;
        color: #1c1c1c;
    }
    .content__1{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }
    .price{
        background: #BEE3CB;
        border-radius: 5px;
        padding: 5px;
        color: #1c1c1c;
    }
    /* DARK MODE */
    .dark-mode .popular{
        background: #F5C768;
        color: #1c1c1c;
    }
    .dark-mode .price{
        background: #BEE3CB;
        color: #1c1c1c;
    }
    .dark-mode .content__1{
        color: #F9F2E8;
    }
</style>