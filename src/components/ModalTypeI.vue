<template>
    <div class="p-modal">

        <div class="p-modal__overlay" @click="hideModal"></div>

        <div class="p-modal__content">

            <div class="p-modal__img-outer l-flexbox">
                <img class="p-modal__img" src="@/assets/img/mysql.png" alt="MySQL">
            </div>

            <div class="p-modal__text">
                <ul>
                    <li>
                        <p>
                            データベースの構築やSQL文によるデータの操作を行えます。
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
        name: 'ModalTypeI',
        mixins: [MultiModalMixin]
    }
</script>

<style scoped>

</style>