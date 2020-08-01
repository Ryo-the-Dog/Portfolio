<template>
    <div id="top" class="p-hero" v-bind:style="{'background-image':' url(' + heroPath+ ')'}">
        <h2 class="p-hero__title">
            Web Engineer
            <br/>
            <span class="p-hero__language">HTML&CSS , JS , jQuery , PHP , Vue.js , Laravel and more...</span>
        </h2>
    </div>
</template>

<script>
    import heroPath from '@/assets/img/hero.jpg';

    export default {
        name: "hero",
        data() {
            return {
                heroPath,
            }
        }

    }
</script>

<style scoped>

</style>
