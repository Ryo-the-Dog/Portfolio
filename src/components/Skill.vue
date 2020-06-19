<template>
    <div id="skill" class="l-bg-gray">
        <div class="l-container">

            <h2 class="c-section-title">SKILL</h2>

            <div class="p-skill-panels l-flexbox">

                <multi-modal></multi-modal>

                <div class="c-panel" @click="showModalTypeA">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/html_css.png" alt="HTML&CSS">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">HTML & CSS</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeB">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/sass.png" alt="Sass">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">Sass</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeC">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/javascript.png" alt="JavaScript">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">JavaScript</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeD">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/jquery.png" alt="jQuery">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">jQuery</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeE">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/react.png" alt="React">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">React</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeF">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/vue.png" alt="Vue.js">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">Vue.js</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeG">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/php.png" alt="PHP">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">PHP</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeH">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/laravel.png" alt="Laravel">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">Laravel</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeI">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/mysql.png" alt="MySQL">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">MySQL</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeJ">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/vagrant.png" alt="Vagrant">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">Vagrant</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeK">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/git.png" alt="Git">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">Git</h3>
                    </div>
                </div>

                <div class="c-panel" @click="showModalTypeL">
                    <div class="c-panel__img-outer l-flexbox">
                        <img class="c-panel__img" src="@/assets/img/photoshop.png" alt="Photoshop">
                    </div>
                    <div class="c-panel__title-outer l-flexbox">
                        <h3 class="c-panel__title">Photoshop</h3>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>

    // import { mapMutations } from 'vuex'
    import { mapActions, mapMutations } from 'vuex'
    // import BasicModal from '@/components/BasicModal.vue'
    import MultiModal from '@/components/multiModal.vue'

    export default {
        name: "skill",
        components: {
          // BasicModal,
          MultiModal
        },
        data() {
            return {
                isModalActive: false,
            }
        },
        methods: {
            ...mapMutations('BasicModal', {
                basicModalShow: 'show'
            }),
            ...mapActions('multiModal',
                [
                    'showModalTypeA',
                    'showModalTypeB',
                    'showModalTypeC',
                    'showModalTypeD',
                    'showModalTypeE',
                    'showModalTypeF',
                    'showModalTypeG',
                    'showModalTypeH',
                    'showModalTypeI',
                    'showModalTypeJ',
                    'showModalTypeK',
                    'showModalTypeL',
                    'showModalTypeM',
                ])
            // /**
            //  * clickイベントが発火されたタイミングで、
            //  * オーバーレイコンテンツを表示するフラグを持つdata(isModalActive)を切り替える
            //  */
            // openItem() {
            //     this.toggleModal();
            // },
            // /**
            //  * active状態を切り替える。
            //  */
            // toggleModal() {
            //     this.isModalActive = ! this.isModalActive;
            // },
        },

    }
</script>

<style scoped>

</style>