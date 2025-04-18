<template>
  <div>
    <headerComponent class="header-container"></headerComponent>
    <router-view/>
  </div>
</template>
<script>
import headerComponent from '@/components/headerComponent.vue'

export default {
  components: {
    headerComponent
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

@font-face {
  font-family: 'Agressive';
  src: url('@/assets/Agressive-OVVzO.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: 'Noto Sans TC', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  background-image: url("@//assets/Group 1.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

body::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 100vh;
  background: radial-gradient(
    ellipse at center,
    rgba(180, 210, 180, 0.2) 0%,
    rgba(90, 107, 92, 0) 70%
  );
  z-index: 1;
  pointer-events: none;
}

.header-container {
  position: fixed;
  width: 100%;
}

.purple-button {
  font-size: 16px;
  font-weight: bolder;
  background: linear-gradient(to right, #632566, #C64BCC);
  padding: 6px 20px;
  display: flex;
  align-items: center;
  border-radius: 80px;
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
}

.purple-:hover {
  opacity: 0.9;
}

.footer {
  position: relative;
  top: 10px;
  left: 0;
  width: calc(100% - 40px);
  height: 50px;
  background-color: #f2f2f2;
  line-height: 50px;
  padding: 0 0 0 40px;
  font-size: 14px;
  color: #000;
  font-weight: 500;
  letter-spacing: 1.4px;
}
/* General Styles */
.inclusigen-container {
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}
.page-container {
  overflow-y: auto;
  height: calc(100vh - 65px);
  color: #fff;
}
@media (max-width: 768px) {
  .page-container {
    height: calc(100vh - 85px);
  }
}

.page-title {
  font-size: 3.2rem;
  margin: 30px 0 0 0;
  font-weight: 900;
  letter-spacing: 1px;
}
/* Section Styles */
.section {
  padding: 10px 20px;
  width: 90%;
  margin: auto;
}

@media screen and (max-width: 768px) {
  .section {
    padding: 0px 20px;
  }
  .description {
    margin-top: 0;
    padding: 20px 20px;
  }
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 2.3rem;
  margin-bottom: 20px;
  color: white;
  background-color: transparent;
  font-family: 'Agressive', 'Noto Sans TC', sans-serif;
  background-image: linear-gradient(to right, #FFFFFF, #999999);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

/* Card Styles */
.card {
  background-color: rgba(153, 153, 153, 0.3);
  border-radius: 30px;
  margin-bottom: 20px;
  overflow: hidden;
  color: #fff;
  font-weight: bold;
  padding: 20px 40px;
}

@media screen and (max-width: 768px) {
  .card {
    padding: 10px 10px;
  }
}

.card-content {
  padding: 10px 30px;
  font-family: 'noto sans', sans-serif;
  letter-spacing: 1px;
}

.card-title {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 0 0 25px 0;
  color: white;
  line-height: 40px;
}


</style>
