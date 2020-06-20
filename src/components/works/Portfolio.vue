<template>
    <div>

        <h3>Ryo's Portfolio(当サイト)</h3>

        <div class="p-slick-content">

            <video src="@/assets/img/portfolio_movie.mp4" controls></video>

            <div class="p-slick-content__works-txt">

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">概要</span>
                    <p>
                        今までの制作物を集めたポートフォリオサイトです。
                    </p>
                </div>

                <div class="p-slick-content__description language">
                    <span class="c-badge p-slick-content__badge">使用言語</span>
                    <p>HTML ,Sass(SCSS), Vue.js</p>
                </div>

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">制作期間</span>
                    <p>４日間(15時間)</p>
                </div>

                <div class="p-slick-content__description">
                    <p class="about-product">
                        Vue.js(単一ファイルコンポーネント)で制作しました。パーツをコンポーネントで切り分けることで保守性の高い設計になっております。
                        <br/>
                        ページが単調にならないように、制作物をサムネイルとムービーの形式で表示しました。
                    </p>
                </div>

                <div class="p-slick-content__btn-outer l-flexbox">

                    <a class="c-btn c-btn--green" href="https://ryonexta.com/iza/" target="_blank">実物はコチラ</a>

                    <a class="c-btn c-btn--blue" href="https://github.com/Ryo-the-Dog/Portfolio" target="_blank">GitHub</a>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Portfolio"
    }
</script>

<style scoped>

</style>
