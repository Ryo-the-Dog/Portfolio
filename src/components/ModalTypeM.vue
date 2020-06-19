<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/photoshop.png" alt="Photoshop">
            </div>

            <div class="p-modal__text">
                <ul>
                    <li>
                        <p>
                            デザインカンプの作成や画像・写真の加工を行えます。
                        </p>
                    </li>
                </ul>

            </div>

            <button class="p-modal__close" @click="hideModal"><font-awesome-icon icon="times" /></button>

        </div>
    </div>
</template>

<script>
    // import { mapMutations } from 'vuex'
    import MultiModalMixin from '@/mixins/MultiModalMixin'
    export default {
        name: 'ModalTypeM',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>