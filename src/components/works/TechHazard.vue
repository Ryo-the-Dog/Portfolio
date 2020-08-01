<template>
    <div>

        <h3>TECH HAZARD</h3>

        <div class="p-slick-content">

            <video src="@/assets/img/techhazard_play.mp4"  controls></video>

            <div class="p-slick-content__works-txt">

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">概要</span>
                    <p>
                        コマンドを選択して敵を倒すゲームです。<br/>
                        PHPオブジェクト指向学習のアウトプットとして制作しました。
                    </p>
                </div>

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">使用言語</span>
                    <p>HTML・CSS・Javascript(jQuery)・PHP(オブジェクト指向)</p>
                </div>

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">制作期間</span>
                    <p>８日間(35時間)</p>
                </div>

                <div class="p-slick-content__description">
                    <p class="about-product">
                        オブジェクト指向によるプログラミングで制作しました。保守性の高いコーディングを意識しました。<br>
                        また攻撃時のエフェクトや、獲得ポイントのツイートシステムなどゲームとして楽しめる要素も実装しました。
                    </p>
                </div>

                <div class="p-slick-content__btn-outer l-flexbox">
                    <a class="c-btn c-btn--green" href="https://ryonexta.com/portfolio/techhazard/" target="_blank">実物はコチラ</a>

                    <a class="c-btn c-btn--red" href="https://github.com/Ryo-the-Dog/techhazard/" target="_blank">GitHub</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TechHazard"
    }
</script>

<style scoped>

</style>
