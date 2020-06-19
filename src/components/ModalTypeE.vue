<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/react.png" alt="React">
            </div>

            <div class="p-modal__text">
                <p>
                    基礎を理解し、TODOアプリなどの簡単なアプリケーションを制作できます。
                </p>
            </div>

            <button class="p-modal__close" @click="hideModal"><font-awesome-icon icon="times" /></button>

        </div>
    </div>
</template>

<script>
    // import { mapMutations } from 'vuex'
    import MultiModalMixin from '@/mixins/MultiModalMixin'
    export default {
        name: 'ModalTypeE',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>