<template>
<!--    <div class="p-modal" :class="{'is-open': isModalActive}">-->
<!--        { clickで表示したいmodal_content部分 }-->
<!--    </div>-->

    <transition name="fade">
        <div class="p-modal" v-if="isShow">
            <div class="p-modal__bg"></div>
            <div class="p-modal__content">
                <p>BasicModal</p>
                <button @click="hide">closeModal</button>
            </div>
        </div>
    </transition>

</template>

<script>

    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "BasicModal",
        computed: {
            ...mapState('BasicModal', ['isShow'])
        },
        methods: {
            ...mapMutations('BasicModal', ['hide'])
        },
    }
</script>

<style scoped>

</style>