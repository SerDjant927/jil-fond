<template>
  <section class="main">
    <div class="main__top">
      <h1 class="headline headline_main">Жилфонд</h1>
      <span class="main__descr-text">Пользователь</span>
    </div>
    <MainContent />
  </section>
</template>

<script>
import MainContent from './components/MainContent.vue';

export default {
  components: {
    MainContent
  }
}
</script>

<style lang="scss">
html,
body {
  * {
    transition: all 0.4s;
  }
}

$font-stack: "Montserrat", sans-serif;
$font-style-normal: normal;
$primary-color: #000000;
$secondary-color: #76787D;
$color-red: #E31F24;

#app {
  font-family: $font-stack;
  font-optical-sizing: auto;
  font-style: $font-style-normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
  margin-top: 60px;
}

.main {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 26px;
}

.main__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1265px;
  max-width: 100%;
}

.headline {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  color: $color-red;
}

.main__descr-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #333333;
}

.main__bottom {
  display: grid;
  background-color: #FDFDFD;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;
  width: 1265px;
  max-width: 100%;
  grid-template-columns: 296px 1fr;
}
</style>
