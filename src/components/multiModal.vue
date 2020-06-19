<template>
    <transition name="fade">

        <component v-if="isShow" :is="modalName"></component>

    </transition>
</template>

<script>
    import { mapState } from 'vuex'
    import ModalTypeA from './ModalTypeA.vue'
    import ModalTypeB from './ModalTypeB.vue'
    import ModalTypeC from './ModalTypeC.vue'
    import ModalTypeD from './ModalTypeD.vue'
    import ModalTypeE from './ModalTypeE.vue'
    import ModalTypeF from './ModalTypeF.vue'
    import ModalTypeG from './ModalTypeG.vue'
    import ModalTypeH from './ModalTypeH.vue'
    import ModalTypeI from './ModalTypeI.vue'
    import ModalTypeJ from './ModalTypeJ.vue'
    import ModalTypeK from './ModalTypeK.vue'
    import ModalTypeL from './ModalTypeL.vue'
    import ModalTypeM from './ModalTypeM.vue'

    export default {
        name: "multiModal",
        components: {
            ModalTypeA,
            ModalTypeB,
            ModalTypeC,
            ModalTypeD,
            ModalTypeE,
            ModalTypeF,
            ModalTypeG,
            ModalTypeH,
            ModalTypeI,
            ModalTypeJ,
            ModalTypeK,
            ModalTypeL,
            ModalTypeM,
    },
        computed: {
            ...mapState('multiModal', ['modalName']),
            isShow () {
                return this.modalName !== ''
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        will-change: opacity;
        transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>