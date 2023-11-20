<template>
    <div class="container">
        <h1>Our Collection</h1>
        <p>Introducing our Coffee Collection, a selection of unique coffees from diferent roast types and origins, expertly roasted in small batches and shipped fresh weekly
        </p>
        <div>
            <router-link to="/" class="link">All products</router-link>
            <router-link to="/available" class="link">Available now</router-link>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
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
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 10px;
        background: #6E757D;
        border-radius: 10px;
        color: #FEF7EF;
        text-decoration: none;
        font-size: 10px;
    }
    h1{
        margin-bottom: 10px;
        color: #FEF7EF;
        font-size: 18px;
    }
    p{
        margin-bottom: 10px;
        color: #585C62;
        font-weight: 600;
        text-align: center;
        text-wrap: wrap;
        font-size: 12px;
    }
    @media screen and (min-width: 372px){
        .link{
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