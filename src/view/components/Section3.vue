<template>
  <div id="section3">
    <img id="icon" src="../../assets/img/03_app_web_fuhao.png">
    <span class="title">{{ title }}</span>
    <span class="desc">{{ desc }}</span>
    <img id="screenshot" src="../../assets/img/03_app_web_pic.png">
    <img id="icon1" class="icon" src="../../assets/img/03_app_web_icon1.png">
    <img id="icon2" class="icon" src="../../assets/img/03_app_web_icon2.png">
    <img id="icon3" class="icon" src="../../assets/img/03_app_web_icon3.png"> 
    <div id="arrow"><img src="../../assets/img/01_app_web_arrow.png"></div>
  </div>
</template>

<script>
export default {
  name: 'section3',
  data () {
    return {
      title: '优质模板',
      desc: '路演神器，全面提升BP质感'
    }
  }
}
</script>

<style scoped>
#icon {
  position: absolute;
  /*top: 1.5rem;*/
  top: 11.2%;
  left: 0.46rem;
  width: 1.2rem;
}
.title {
  position: absolute;
  /*top: 1.45rem;*/
  top: 11.4%;
  left: 2.12rem;
  font-size: 0.46rem;
  font-weight: bold;
  color: #ff8847;
  letter-spacing: 0.03rem; 
}
.desc {
  position: absolute;
  /*top: 2.2rem;*/
  top: 17%;
  left: 2.12rem;
  font-size: 0.36rem;
  color: #333;
  letter-spacing: 0.03rem; 
}
#screenshot {
  position: absolute; 
  right: 0;
  /*bottom: 0;*/
  top: 28%;
  width: 4.53rem;
}
.icon {
  position: absolute;
}
#icon1 {
  left: 0.74rem;
  /*top: 5.64rem;*/
  top: 40%;
  width: 1.58rem;
  height: 1.58rem;
}
#icon2 {
  left: 1.54rem;
  /*top: 8.01rem;*/
  top: 57%;
  width: 1.84rem;
  height: 1.84rem;
}
#icon3 {
  left: 0.47rem;
  /*top: 10.64rem;*/
  top: 76%;
  width: 1.58rem;
  height: 1.58rem;
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

