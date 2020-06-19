<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/sass.png" alt="Sass">
            </div>

            <div class="p-modal__text">
                <ul>
                    <li>
                        <p>
                            ・保守性を考えたクラス命名とファイル設計に基づいてコーディングを行えます。
                        </p>
                    </li>
                    <li>
                        <p>
                            ・FLOCSS設計に基づいた実装の経験があります。
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
        name: 'ModalTypeB',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>