<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/php.png" alt="PHP">
            </div>

            <div class="p-modal__text">
                <p>
                    会員機能やバリデーション、投稿などのwebサービスに必要な機能を実装することができます。
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
        name: 'ModalTypeG',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>