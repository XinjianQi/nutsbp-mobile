<template>
  <div id="section4">
    <img id="icon" src="../../assets/img/04_app_web_fuhao.png">
    <span class="title">{{ title }}</span>
    <span class="desc">{{ desc }}</span>
    <img id="screenshot" src="../../assets/img/04_app_web_pic.png">
    <img id="icon1" class="icon" src="../../assets/img/04_app_web_icon1.png">
    <img id="icon2" class="icon" src="../../assets/img/04_app_web_icon2.png">
    <img id="icon3" class="icon" src="../../assets/img/04_app_web_icon3.png"> 
    <div id="arrow"><img src="../../assets/img/01_app_web_arrow.png"></div>
  </div>
</template>

<script>
export default {
  name: 'section4',
  data () {
    return {
      title: '指导内容',
      desc: 'BP案例分析，指导你的BP书写'
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
  /*top: 1.5rem;*/
  top: 11.4%;
  left: 2.12rem;
  font-size: 0.46rem;
  font-weight: bold;
  color: #ff8847;
  letter-spacing: 0.03rem; 
}
.desc {
  position: absolute;
  /*top: 2.25rem;*/
  top: 17%;
  left: 2.12rem;
  font-size: 0.36rem;
  color: #333;
  letter-spacing: 0.03rem; 
}
#screenshot {
  position: absolute; 
  left: 0;
  /*bottom: 0;*/
  top: 28%;
  width: 4.52rem;
  z-index: 0;
}
.icon {
  position: absolute;
  width: 1.38rem;
  height: 1.37rem;
  left: 5.31rem;
}
#icon1 {
  /*top: 6.11rem;*/
  top: 40%;
}
#icon2 {
  /*top: 8.31rem;*/
  top: 58%;
}
#icon3 {
  /*top: 10.51rem;*/
  top: 76%;
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

