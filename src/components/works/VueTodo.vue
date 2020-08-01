<template>
    <div>

        <h3>TODOリスト(Vue.js)</h3>

        <div class="p-slick-content">

            <video src="@/assets/img/vue_todo.mp4" controls></video>

            <div class="p-slick-content__works-txt">

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">概要</span>
                    <p>
                        Vue.jsで制作したTODOリストです。
                    </p>
                </div>

                <div class="p-slick-content__description language">
                    <span class="c-badge p-slick-content__badge">使用言語</span>
                    <p>HTML・CSS・Vue.js</p>
                </div>

                <div class="p-slick-content__description">
                    <span class="c-badge p-slick-content__badge">制作期間</span>
                    <p>５日間(21時間)</p>
                </div>

                <div class="p-slick-content__description">
                    <p class="about-product">
                        追加・検索・編集・削除機能のあるTODOリストです。
                    </p>
                </div>

                <div class="p-slick-content__btn-outer l-flexbox">
                    <a class="c-btn c-btn--green" href="https://vuejs-todo-test.herokuapp.com/" target="_blank">実物はコチラ</a>
                    <a class="c-btn c-btn--red" href="https://github.com/Ryo-the-Dog/Vue.js-ToDo" target="_blank">GitHub</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VueTodo"
    }
</script>

<style scoped>

</style>
