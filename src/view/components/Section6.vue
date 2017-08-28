<template>
  <div id="section6">
    <img id="logo" src="../../assets/img/01_app_web_logo.png">
    <span>{{ slogan }}</span>
    <img id="download" src="../../assets/img/06_app_web_download.png" @click="download">
    <div class="info">
      <span class="info_once">{{ company }}</span>
      <span class="info_once">{{ wechat }}</span>
      <span class="info_once">{{ phone }}</span>
      <span class="info_once">{{ address }}</span>
    </div>
    <img class="qrcode" src="../../assets/img/06_app_web_qrcode.png"> 
  </div>
</template>

<script>
export default {
  name: 'section6',
  data () {
    return {
      slogan: '创建投资人想要的商业计划书',
      company: '厦门头家信息科技有限公司',
      wechat: '微信：nutsbp',
      phone: '电话：0592-2577214',
      address: '地址：厦门市软件园一期'
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
  margin-top: 1rem;
  width: 1.8rem;
} 
span {
  color: #666;
  font-size: 0.36rem; 
  /* margin-top: 0.02rem;   */
  letter-spacing: 0.03rem;
  display: block;
}
#download {
  margin-top: 0.8rem;
  width: 6.02rem;
} 
.info {
  position: absolute;
  margin-left: 0.45rem;
  bottom: 1.5rem;
}
.info_once {
  font-size: 0.24rem;
  text-align: left;
  color: #333;
}
.qrcode {
  position: absolute; 
  bottom: 1.5rem;  
  right: 0.45rem;
  width: 1.54rem;
}

</style>

