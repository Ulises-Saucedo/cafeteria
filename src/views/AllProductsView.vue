<template>
    <NavegationLayout>
        <template #content>
            <section class="cards">
                <SingularCard
                    v-for="(card, i) in cards" 
                    :key="i" 
                    :title="card.title" 
                    :popular="card.popular" 
                    :price="card.price" 
                    :stock="card.stock" 
                    :img="card.img">
                </SingularCard>
            </section>
        </template>
    </NavegationLayout>
</template>

<script setup>
    import SingularCard from '../components/SingularCard.vue';
    import NavegationLayout from '../layouts/NavegationLayout.vue';
    import cardsUtilities from "../utilities/cards.js";
    const cards = cardsUtilities
</script>

<style scoped>
    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
        padding: 20px;
    }
    @media screen and (min-width: 372px){
        .cards{
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            padding: 25px;
        }
    }
    @media screen and (min-width: 992px){
        .cards{
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            padding: 100px;
        }
    }
    @media screen and (min-width: 1400px){
        .cards{
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            padding: 50px 200px;
        }
    }
</style>