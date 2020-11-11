<template>
    <div id="profile" class="l-container">

        <h2 class="c-section-title">PROFILE</h2>

        <div class="p-profile">

<!--            <div class="p-profile__left">-->
<!--                <div class="p-profile__img-outer">-->
<!--                    <img class="p-profile__img" src="@/assets/img/profile.jpeg" alt="プロフィール画像">-->
<!--                </div>-->
<!--                <div class="p-profile__icon-outer">-->
<!--                    <a href="https://twitter.com/ryonextStandard" target="_blank">-->
<!--                        <i class="fab fa-twitter c-icon&#45;&#45;twitter"></i>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->

            <div class="p-profile__txt l-flexbox">

                <div class="p-profile__left">

                    <div class="p-profile__description">
                        <span class="c-badge p-profile__badge">名前</span>
                        <p>
                            りょう
                        </p>
                    </div>

                    <div class="p-profile__description">
                        <span class="c-badge p-profile__badge">年齢</span>
                        <p>
                            30歳
                        </p>
                    </div>

                    <div class="p-profile__description">
                        <span class="c-badge p-profile__badge">居住地</span>
                        <p>
                            東京都
                        </p>
                    </div>

                </div>

                <div class="p-profile__center">
                    <div class="p-profile__career">
                        <span class="c-badge p-profile__badge">経歴</span>
                        <p class="p-profile__aboutMe">
                            ＜2013年〜2016年＞<br/>販売の仕事をしておりました。<br/>
                            ＜2016年〜2020年＞<br/>販売兼接客の仕事をしておりました。<br/>
                            ＜2019年10月〜＞<br/>プログラミング学習を開始しました。<br/>
                        </p>
                    </div>
                </div>

                <div class="p-profile__right">
                    <div class="p-profile__career">
                        <span class="c-badge p-profile__badge">SNS</span>
                        <div class="l-flexbox p-profile__btn-outer">
                            <a class="c-btn c-btn--blue p-profile__btn" href="https://twitter.com/ryonextStandard" target="_blank">Twitter</a>

                            <a class="c-btn c-btn--red p-profile__btn" href="https://github.com/Ryo-the-Dog/" target="_blank">GitHub</a>

                            <a class="c-btn c-btn--green p-profile__btn" href="https://qiita.com/ryonextStandard" target="_blank">Qiita</a>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <p class="p-profile__detail">
                    現場経験はまだありませんが、実務にもすぐ対応できるようにフルスクラッチでwebサービスを開発するなど、エンジニアとして必要な技術を身に付けて参りました。<br>
                    入社後も技術の向上を怠らず、常に主体性を持って業務に臨みます。
                </p>
            </div>

        </div>



    </div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped>

</style>
