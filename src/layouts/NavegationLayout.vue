<template>
    <div class="container" :class="{'dark-mode': store.theme}">
        <h1>Our Collection</h1>
        <p>Introducing our Coffee Collection, a selection of unique coffees from diferent roast types and origins, expertly roasted in small batches and shipped fresh weekly
        </p>
        <button @click="store.toggleTheme()">
            <v-icon :name="store.theme === true ? 'md-lightmode-round' : 'md-darkmode-round'"></v-icon>
        </button>
        <div>
            <router-link to="/" :class="{ 'active-link': isRouteActive('/') }" class="link">All products</router-link>
            <router-link to="/available" :class="{ 'active-link': isRouteActive('/available') }" class="link">Available now</router-link>
        </div>
    </div>
    <slot name="content"></slot>
</template>

<script setup>
    import { useTheme } from '../store/useTheme'
    import { useRoute } from 'vue-router';
    const store = useTheme()
    const route = useRoute();
    
    const isRouteActive = (path) => route.path === path;
</script>

<style scoped>
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
    .container{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 500px;
        margin: 0 auto;
        padding-top: 50px;
    }
    .link{
        color: #484B6A;
        text-decoration: none;
        margin-right: 10px;
        border-radius: 10px;
        text-decoration: none;
        font-size: 10px;
        margin-top: 10px;
        display: inline-block;
        padding: 10px;
    }
    .active-link{
        background: rgb(212, 216, 247);
        box-shadow: var(--shadow-elevation-low);
    }
    h1{
        margin-bottom: 10px;
        color: #484B6A;
        font-size: 18px;
    }
    p{
        margin-bottom: 10px;
        color: #9a9a9c;
        font-weight: 600;
        text-align: center;
        text-wrap: wrap;
        font-size: 12px;
    }
    /* DARK MODE */
    .dark-mode button{
        color: #EFF0F2;
    }
    .dark-mode h1{
        color: #EFF0F2;
    }
    .dark-mode p{
        color: #585C62;
    }
    .dark-mode .link{
        color: #FEF7EF;
    }
    .dark-mode .active-link{
        background: #6E757D;
    }
    @media screen and (min-width: 372px){
        .active-link, .link{
            font-size: 13px;
        }
        h1{
            font-size: 20px;
        }
        p{
            font-size: 15px;
        }
    }
</style>