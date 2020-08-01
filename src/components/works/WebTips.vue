<template>

    <div>
        <h3>WebTips</h3>

        <div class="p-slick-content">

            <video src="@/assets/img/web-tips_movie.mp4" controls></video>

            <div class="p-slick-content__works-txt">

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">概要</span>
                    <p>
                        LaravelとVue.jsで制作した、web開発のための情報をシェアできるサービスです。
                    </p>
                </div>

                <div class="p-slick-content__description language">
                    <span class="c-badge p-slick-content__badge">使用言語</span>
                    <p>
                        HTML・Sass(SCSS)・Laravel・Vue.js・MySQL
                        <br/>
                        LEMP環境(Docker)
                    </p>
                </div>

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">制作期間</span>
                    <p>60日間(180時間)</p>
                </div>

                <div class="p-slick-content__description">
                    <p class="about-product">
                        要件定義・デザイン・コーディング・DB設計・デプロイなど全て独力で行いました。
                        <br/>
                        特にデザインにこだわり、「note」や「qiita」など人気のあるサービスを参考にして、ユーザーにとって馴染みのあるものになるようにしました。
                        <br/>
                        会員機能、バリデーション、投稿、画像アップロード、マイリスト機能などのwebサービスに必要な機能を一通り実装しています。
                        <br/>
                        また、マイリスト機能はaxiosを使った非同期通信で実装しました。
                    </p>
                    <p class="p-slick-content__login">
                        ※ 動作確認に際して、会員登録がお手数の場合は下記のアイパスでログインをお願いします。
                        <br/>
                        アドレス：yusuke@test.com
                        <br/>
                        パスワード：password
                    </p>
                </div>

                <div class="p-slick-content__btn-outer l-flexbox">

                    <a class="c-btn c-btn--green" href="http://web-tips.herokuapp.com/" target="_blank">実物はコチラ</a>

                    <a class="c-btn c-btn--red" href="https://github.com/Ryo-the-Dog/WebTips" target="_blank">GitHub</a>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WebTips"
    }
</script>

<style scoped>

</style>
