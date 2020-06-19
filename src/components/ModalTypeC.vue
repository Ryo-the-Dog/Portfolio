<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/javascript.png" alt="JavaScript">
            </div>

            <div class="p-modal__text">
                <ul>
                    <li>
                        <p>
                            ・this・クロージャ・プロトタイプなどのJavaScriptの基礎を理解しています。
                        </p>
                    </li>
                    <li>
                        <p>
                            ・クロージャーを使った保守性の高いコードを書けます。
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
        name: 'ModalTypeC',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>