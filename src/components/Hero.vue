<template>
    <div id="top" class="p-hero" v-bind:style="{'background-image':' url(' + heroPath+ ')'}">

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