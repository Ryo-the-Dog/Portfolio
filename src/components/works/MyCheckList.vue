<template>
    <div>

        <h3>マイチェックリスト「IZA」</h3>

        <div class="p-slick-content">

            <video src="@/assets/img/mychecklist_movie.mp4" controls></video>

            <div class="p-slick-content__works-txt">

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">概要</span>
                    <p>
                        オリジナルのチェックリストを作成できるサービスです。
                    </p>
                </div>

                <div class="p-slick-content__description language">
                    <span class="c-badge p-slick-content__badge">使用言語</span>
                    <p>HTML ,CSS ,Javascript(jQuery) ,PHP ,MySQL</p>
                </div>

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">制作期間</span>
                    <p>15日間(80時間)</p>
                </div>

                <div class="p-slick-content__description">
                    <p>
                        ユーザー登録・編集、ログイン・ログアウト、バリデーション、DB登録・編集などのwebサービスに欠かせない機能を、仕組みの理解を深めるためにフレームワーク無しで実装しております。
                        <br/>
                        また独自機能として、チェックリストの追加・削除、チェックリストのフォルダ管理が行えます。
                    </p>
                    <p class="p-slick-content__login">
                        ※ 動作確認に際して、会員登録がお手数の場合は下記のアイパスでログインをお願いします。
                        <br/>
                        アドレス：test@sample.com
                        <br/>
                        パスワード：password
                    </p>
                </div>

                <div class="p-slick-content__btn-outer l-flexbox">

                    <a class="c-btn c-btn--green" href="https://ryonexta.com/iza/" target="_blank">実物はコチラ</a>

                    <a class="c-btn c-btn--blue" href="https://github.com/Ryo-the-Dog/Mychecklist-IZA" target="_blank">GitHub</a>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyCheckList"
    }
</script>

<style scoped>

</style>
