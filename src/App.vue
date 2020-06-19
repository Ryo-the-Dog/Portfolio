<template>
  <div id="app">

    <myheader></myheader>

    <section id="hero">

      <hero></hero>

    </section>

    <section id="profile">

      <profile></profile>

    </section>

    <section id="skill">

      <skill></skill>

    </section>

    <section id="works">

      <works></works>

    </section>

    <myfooter></myfooter>

  </div>
</template>

<script>
import myheader from './components/Myheader'
import hero from './components/Hero'
import profile from './components/Profile'
import skill from './components/Skill'
import works from './components/Works'
import myfooter from './components/Myfooter'

export default {
  components: {
    myheader,
    hero,
    profile,
    skill,
    works,
    myfooter,
  },
  data() {
    return {

    }
  },
  methods: {

  },
  created () {
    fetch('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US')
            .then( response => {
              return response.json()
            })
            .then( json => {
              this.msg = json.postalcodes[0].adminName1
            })
            .catch( (err) => {
              this.msg = err // エラー処理
            });
  }
}
</script>

<style>

</style>
