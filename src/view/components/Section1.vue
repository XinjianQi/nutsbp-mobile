<template>
  <div class="section1">
    <img id="logo" src="../../assets/img/01_app_web_logo.png">
    <span>{{ slogan }}</span>
    <img id="download" src="../../assets/img/01_app_web_download.png" @click="download">
    <img id="screenshot" src="../../assets/img/01_app_web_pic.png"> 
    <div id="arrow"><img src="../../assets/img/01_app_web_arrow.png"></div>
  </div>
</template>

<script>
export default {
  name: 'section1',
  data () {
    return {
      slogan: '创建投资人想要的商业计划书'
    }
  },
  methods: {
    download: function () {
      // alert('download clicked')
      window.open('http://download.nutsbp.com', '_self')
    }
  }
}
</script>

<style scoped>
#logo {
  /*margin-top: 1rem;*/
  margin-top: 7.5%;
  width: 1.8rem;
} 
span {
  color: #666;
  font-size: 0.36rem; 
  /* margin-top: 0.02rem;   */
  letter-spacing: 0.03rem;
  top: 27.5%;
  display: block;
}
#download {
  /*position: absolute;*/
  margin-top: 0.6rem;
  width: 6.02rem;
} 
#screenshot {
  position: absolute; 
  top: 56.4%;
  /*bottom: 0;  */
  left: 0;
  right: 0;
  margin: auto;
  max-width: 100%; 
}
#arrow { 
  position: absolute;
  width: 100%;
  height: 24px;
  bottom: 0;
  text-align: center;
}

#arrow img {
  position: absolute;
}

</style>

