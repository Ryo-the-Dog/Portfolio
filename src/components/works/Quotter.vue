<template>

    <div>
        <h3>Quotter（クオッター）</h3>

        <div class="p-slick-content">

            <video src="@/assets/img/quotter_movie.mp4" controls></video>

            <div class="p-slick-content__works-txt">

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">概要</span>
                    <p>
                        本や映画の好きなフレーズを「引用」(quote)して共有できるサービスです。
                        <br/>
                        「flier」という本の要約サービスから着想を得て、さらに手軽に本の内容を知れるサービスがあれば良いと考え制作しました。
                    </p>
                </div>

                <div class="p-slick-content__description language">
                    <span class="c-badge p-slick-content__badge">使用言語</span>
                    <p>
                        HTML・Sass(SCSS)・Laravel・Vue.js・MySQL
                        <br/>
                        MAMP環境
                    </p>
                </div>

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">制作期間</span>
                    <p>30日間(120時間)</p>
                </div>

                <div class="p-slick-content__description">
                    <p class="about-product">
                        要件定義・デザイン・コーディング・DB設計・デプロイなど全て独力で行いました。
                        <br/>
                        会員機能、バリデーション、投稿、画像アップロード、いいね機能などのwebサービスに必要な機能を一通り実装しています。
                        <br/>
                        また、いいね機能はaxiosを使った非同期通信で実装しました。
                    </p>
                    <p class="p-slick-content__login">
                        ※ 動作確認に際して会員登録がお手数の場合は、リンク先右上からログイン画面に進み、アイパスがデフォルトで入力されておりますのでそのままログインしていただけます。
                        <br/>
                        アドレス：tanaka@gmail.com
                        <br/>
                        パスワード：password
                    </p>
                </div>

                <div class="p-slick-content__btn-outer l-flexbox">

                    <a class="c-btn c-btn--green" href="http://quotter-share.herokuapp.com/" target="_blank">実物はコチラ</a>

                    <a class="c-btn c-btn--red" href="https://github.com/Ryo-the-Dog/Quotter" target="_blank">GitHub</a>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Quotter"
    }
</script>

<style scoped>

</style>
