<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/git.png" alt="Git">
            </div>

            <div class="p-modal__text">
                <p>
                    Gitの基本操作やコマンドを理解し、コマンドラインから操作を行えます。
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
        name: 'ModalTypeK',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>