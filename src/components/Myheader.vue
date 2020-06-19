<template>
    <header class="l-header p-header" :class="{'is-active' : showHeader}">
        <div class="p-header__container l-flexbox">

            <h1 class="c-site-logo">
                <a href="#top" v-smooth-scroll="{ duration: 1000}">Ryo's Portfolio</a>
            </h1>

            <div class="p-navbar-trigger" @click="navOpen" :class="{'active': active}">
                <span class="p-navbar-trigger__border"></span>
                <span class="p-navbar-trigger__border"></span>
                <span class="p-navbar-trigger__border"></span>
            </div>
            <nav class="p-navbar" :class="{'active': active}">
                <ul class="p-navbar__list l-flexbox">
                    <li class="p-navbar__item">
                        <a class="p-navbar__link" href="#profile" v-smooth-scroll="{ duration: 1000}" @click="navClose">PROFILE</a>
                    </li>
                    <li class="p-navbar__item">
                        <a class="p-navbar__link" href="#skill" v-smooth-scroll="{ duration: 1000}" @click="navClose">SKILL</a>
                    </li>
                    <li class="p-navbar__item">
                        <a class="p-navbar__link" href="#works" v-smooth-scroll="{ duration: 1000}" @click="navClose">WORKS</a>
                    </li>
                </ul>
            </nav>

        </div>
    </header>

</template>

<script>
    export default {
        name: "myheader",
        data() {
            return {
                // showHeader: false,
                scrollY: 0,
                active: false,
            }
        },
        mounted() {
            // スクロールを取得
            window.addEventListener("scroll", this.onScroll);
            window.addEventListener("load", () => {
                this.onScroll();
            });
        },
        computed: {
            // onScroll() {
            //     return this.showHeader = window.scrollY < 100
            // }
            showHeader() {
                return this.scrollY > 560;
            }
        },
        methods: {
            // スクロール値の取得
            onScroll() {
                this.scrollY = window.pageYOffset;
            },
            // ハンバーガーメニューの開閉
            navOpen: function() {
                this.active = !this.active;
            },
            navClose: function () {
                this.active = false;
            }
        },

    }
</script>

<style scoped>

</style>