<template>
  <div class="home" v-bind:style="{ height: homeHeight + 'px' }">
    <v-touch class="divTouch" ref="divTouch"
      v-on:panstart="panstart"
      v-on:panmove="panmove"
      v-on:panend="panend"
      v-bind:swipe-options="{ direction: 'vertical', threshold: 50 }" 
      v-bind:style="{ top: top + '%' }">
      <section1 id="p1" class="page" v-bind:style="{ height: pageHeight + 'px' }"></section1>
      <section2 id="p2" class="page" v-bind:style="{ height: pageHeight + 'px' }"></section2>
      <section3 id="p3" class="page" v-bind:style="{ height: pageHeight + 'px' }"></section3>
      <section4 id="p4" class="page" v-bind:style="{ height: pageHeight + 'px' }"></section4>
      <section5 id="p5" class="page" v-bind:style="{ height: pageHeight + 'px' }"></section5>
      <section6 id="p6" class="page" v-bind:style="{ height: pageHeight + 'px' }"></section6>
    </v-touch>         
  </div>

</template>

<script>
import section1 from '../components/Section1.vue'
import section2 from '../components/Section2.vue'
import section3 from '../components/Section3.vue'
import section4 from '../components/Section4.vue'
import section5 from '../components/Section5.vue'
import section6 from '../components/Section6.vue'

export default {
  name: 'home',
  components: { section1, section2, section3, section4, section5, section6 },
  data () {
    return {
      top: 0,
      startY: 0,
      endY: 0,
      currentIndex: 0,
      homeHeight: window.innerHeight,
      pageHeight: window.innerHeight
    }
  },
  methods: {
    panstart: function (event) {
      console.error(event)
      // console.log('panStart ' + event.clientY)
      this.startY = event.clientY
    },
    panmove: function (event) {
    },
    panend: function (event) {
      console.log(event)
      console.log(event.deltaY)
      if (event.deltaY > 5) {
        console.log('down currentIndex = ' + this.currentIndex)
        if (this.currentIndex > 0) {
          this.currentIndex -= 1
          console.log(this.currentIndex)
          // this.$refs.divTouch.style.top = -this.currentIndex
          this.top = -this.currentIndex * 100
        }
      } else if (event.deltaY < -5) {
        console.log('up currentIndex = ' + this.currentIndex)
        if (this.currentIndex < 5) {
          this.currentIndex += 1
          console.log(this.currentIndex)
          // this.$refs.divTouch.style.top = -this.currentIndex
          this.top = -this.currentIndex * 100
        }
      }
    }
  }
}
</script>

<style scoped>
.home {
  position: absolute;
  overflow: hidden;  
  width: 100%; 
  /*height: 559px;*/
  text-align: center;
}
.divTouch {
  position: absolute; 
  width: 100%;
  transition: top 0.5s;
}
.page {
  position: relative; 
	width: 100%;
	/*height: 559px;*/
	background-image: url('../../assets/img/01_app_web_bg.png');   
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
  background-origin: content-box;
  margin: 0 auto;
  overflow: hidden;
}
/*#p1 {
  background-color: red;
}*/
/*#p2 {
  height: 100%;
}*/
/*#p3 {
  background-color: green;
}*/
/*#p4 {
  background-color: orange;
}*/
/*#p5 {
  background-color: orchid;
} */
/*#p6 {
  background-color: darkolivegreen; 
  background-image: url('../../assets/img/06_app_web_bg.png'); 
}*/
</style>

