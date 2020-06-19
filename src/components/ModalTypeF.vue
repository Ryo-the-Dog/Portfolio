<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/vue.png" alt="Vue.js">
            </div>

            <div class="p-modal__text">
                <ul>
                    <li>
                        <p>
                            ・vue-cliによる環境構築を行えます。また、gulp・babel・webpackなどのパッケージを個別にインストールして構築することもできます。
                        </p>
                    </li>
                    <li>
                        <p>
                            ・Vueを主としたホームページを制作できます。
                        </p>
                    </li>
                    <li>
                        <p>
                            ・パーツをコンポーネントに切り分けて、保守性の高い設計を行えます。
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
        name: 'ModalTypeF',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>