<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/photoshop.png" alt="Photoshop">
            </div>

            <div class="p-modal__text">
                <p>
                    デザインカンプの作成や画像・写真の加工を行えます。
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
        name: 'ModalTypeL',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>