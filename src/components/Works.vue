<template>
    <div id="works" class="l-container">

        <h2 class="c-section-title">WORKS</h2>

        <!--メイン-->
        <slick ref="slick" :options="slickOptions" class="slider-for">

            <web-tips></web-tips>

            <quotter></quotter>

            <portfolio></portfolio>

            <vue-todo></vue-todo>

            <verde-al-mare></verde-al-mare>

<!--            <tech-hazard></tech-hazard>-->

            <my-check-list></my-check-list>

        </slick>

        <!--サムネイル-->
        <slick ref="slick" :options="slickNavOptions" class="slider-nav">

            <img src="@/assets/img/webtips_top.png" alt="WebTips">

            <img src="@/assets/img/quotter_top.png" alt="Quotter">

            <img src="@/assets/img/portfolio_top.png" alt="portfolio">

            <img src="@/assets/img/vue_todo.png" alt="portfolio">

            <img src="@/assets/img/verde-al-mare_top.png" alt="verde-al-mare">

<!--            <img src="@/assets/img/tech_hazard_top.png" alt="TECH HAZARD">-->

            <img src="@/assets/img/mychecklist_img.png" alt="マイチェックリスト">

        </slick>
    </div>
</template>

<script>
    import Slick from 'vue-slick'
    import '../../node_modules/slick-carousel/slick/slick.css'
    // 制作物のコンポーネント
    import WebTips from "./works/WebTips"
    import Quotter from "./works/Quotter"
    import Portfolio from "./works/Portfolio"
    import VueTodo from "./works/VueTodo"
    import VerdeAlMare from "./works/VerdeAlMare"
    // import TechHazard from "./works/TechHazard"
    import MyCheckList from "./works/MyCheckList"

    // スワイプアイコンの画像
    import leftIconPath from '@/assets/img/swipe-left.png';
    import rightIconPath from '@/assets/img/swipe-right.png';

    export default {
        name: "works",
        data() {
            return {
                leftIconPath,
                rightIconPath,
                slickOptions: {
                    slidesToShow: 1,
                    asNavFor: '.slider-nav',
                    arrows: false, //矢印非表示
                    fade: true, //フェードの有効化
                    responsive: [{
                        // breakpoint: 980,
                        // breakpoint: 767,
                        breakpoint: 414,
                        settings: {
                            draggable: true,
                        },
                    }]
                },
                //サムネイル
                slickNavOptions: {
                    slidesToShow: 8,
                    asNavFor: '.slider-for',
                    focusOnSelect: true,
                },
            }
        },
        components: {
            Slick,
            WebTips,
            Quotter,
            Portfolio,
            VueTodo,
            VerdeAlMare,
            // TechHazard,
            MyCheckList,
        },
    }
</script>

<style scoped>
    /*.slick-prev:before, .slick-next:before{*/
    /*    font-size: 30px !important;*/
    /*}*/
    /*.works-txt div{*/
    /*    margin-bottom: 0;*/
    /*}*/
    /*========================================
      slick
    ========================================*/
    /*!*サムネイルを非表示にする*!*/
    /*.thumbnail-thumb{*/
    /*    display: none !important;*/
    /*}*/
    /*.slick-prev, .slick-next{*/
    /*    width: 0 !important;*/
    /*    top: 20% !important;*/
    /*}*/
    /*.slick-prev{*/
    /*    left: 2px !important;*/
    /*    z-index: 1000 !important;*/
    /*}*/
    /*.slick-next{*/
    /*    right: 28px !important;*/
    /*}*/
    /*.slick-prev:before,*/
    /*.slick-next:before{*/
    /*    color: #000 !important;*/
    /*    font-size: 40px !important;*/
    /*}*/
    .slick-prev:before{
        content: '' !important;
        display: inline-block !important;
        background-image: url("../../src/assets/img/swipe-left.png") !important;
        background-repeat: no-repeat !important;
        background-size: contain !important;
        width: 30px !important;
        height: 30px !important;
        vertical-align: middle !important;
    }
    .slick-next:before{
        content: '' !important;
        display: inline-block !important;
        background-image: url("../../src/assets/img/swipe-right.png") !important;
        background-repeat: no-repeat !important;
        background-size: contain !important;
        width: 30px !important;
        height: 30px !important;
        vertical-align: middle !important;
    }
</style>
