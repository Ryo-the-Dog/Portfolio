<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/laravel.png" alt="Laravel">
            </div>

            <div class="p-modal__text">
                <ul>
                    <li>
                        <p>・環境構築からデプロイまで行えます。</p>
                    </li>
                    <li>
                        <p>・会員機能、バリデーション、投稿、画像アップロード、いいね機能などのwebサービスに必要な機能を実装できます。</p>
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
        name: 'ModalTypeH',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>