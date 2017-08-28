<template>
  <div id="section5">
    <img id="icon" src="../../assets/img/05_app_web_fuhao.png">
    <span class="title">{{ title }}</span>
    <span class="desc">{{ desc }}</span>
    <img id="screenshot" src="../../assets/img/05_app_web_pic.png">
    <img id="icon1" src="../../assets/img/05_app_web_icon1.png">
    <img id="icon2" src="../../assets/img/05_app_web_icon2.png">
    <img id="icon3" src="../../assets/img/05_app_web_icon3.png">
    <img id="icon4" class="ic_ell" src="../../assets/img/05_app_web_icon4.png"> 
    <img id="icon5" class="ic_ell" src="../../assets/img/05_app_web_icon4.png">
    <div id="arrow"><img src="../../assets/img/01_app_web_arrow.png"></div>
  </div>
</template>

<script>
export default {
  name: 'section5',
  data () {
    return {
      title: '海量投资人',
      desc: '一对一投递，融资不烦恼'
    }
  }
}
</script>

<style scoped>
#icon {
  position: absolute;
  /*top: 1.49rem;*/
  top: 11.2%;
  left: 0.42rem;
  width: 1.2rem;
}
.title {
  position: absolute;
  /*top: 1.45rem;*/
  top: 11%;
  left: 2.12rem;
  font-size: 0.46rem;
  font-weight: bold;
  color: #ff8847;
  letter-spacing: 0.03rem; 
}
.desc {
  position: absolute;
  /*top: 2.2rem;*/
  top: 16.6%;
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

#icon1 {
  position: absolute;
  left: 0.6rem;
  /*top: 7.02rem;*/
  top: 52.6%;
  width: 2.9rem;
  height: 0.88rem;
}
#icon2 {
  position: absolute;
  left: 1.56rem;
  /*top: 8.95rem;*/
  top: 67.09%;
  width: 3.12rem;
  height: 0.9rem;
}
#icon3 {
  position: absolute;
  left: 0.39rem;
  /*top: 10.9rem;*/
  top: 81.71%;
  width: 2.9rem;
  height: 0.88rem;
}

.ic_ell {
  position: absolute;
  width: 0.08rem;
  height: 0.44rem;
}
#icon4 {
  left: 2.6rem;
  /*top: 8.16rem;*/
  top: 61.16%;
}
#icon5 {
  left: 2.2rem;
  /*top: 10.1rem;*/
  top: 75.7%;
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

