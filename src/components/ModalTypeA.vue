<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/html_css.png" alt="HTML&CSS">
            </div>

            <div class="p-modal__text">
                <ul>
                    <li>
                        <p>
                            ・レスポンシブ対応のwebページの制作を行えます。
                        </p>
                    </li>
                    <li>
                        <p>
                            ・デベロッパーツールを使用してページの構造を把握することができます。
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
        name: 'ModalTypeA',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>