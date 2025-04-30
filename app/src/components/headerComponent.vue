<!-- Navigation.vue -->
<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="logo" @click="changePath('/')">
        <img :src="iconSrc" alt="TAICHI'25 Logo" />
      </div>
      
      <!-- Desktop Menu -->
      <div class="menu-desktop">
        <router-link 
          v-for="(item, index) in menuList" 
          :key="index" 
          :to="item.url"
          class="menu-item">
          {{ item.name }}
        </router-link>
        <!-- <router-link to="/submit" class="submit-button">論文徵稿</router-link> -->
        <a href="https://easychair.org/conferences/?conf=taichi2025" class="submit-button" target="_blank">論文徵稿</a>
      </div>
      
      <!-- Mobile Menu Icon -->
      <div 
        class="menu-mobile-icon" 
        :class="menuclassList"
        @click="opentheDrawer">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
    
    <!-- Mobile Drawer -->
    <transition name="drawer">
      <div v-if="drawerStatus" class="mobile-drawer">
        <div 
          v-for="(item, index) in menuList" 
          :key="index"
          class="drawer-item"
          @click="changePath(item.url)">
          {{ item.name }}
        </div>
        <a href="" class="drawer-submit-button" target="_blank">論文徵稿</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      menuList: [
        { name: '首頁', url: '/' },
        { name: '組織&成員', url: '/members' }, //members
        { name: '場地', url: '/venues' }, //venues
        { name: '設計競賽', url: '/competitions' }, //competitions
      ],
      iconSrc: require('@/assets/TAICHI’25.svg'),
      drawerStatus: false,
      menuclassList: {
        menuIconContainer: true,
        change: false
      }
    }
  },
  methods: {
    opentheDrawer: function() {
      this.drawerStatus = !this.drawerStatus;
      this.menuclassList.change = !this.menuclassList.change;
    },
    changePath: function(path) {
      if (this.drawerStatus) {
        this.opentheDrawer();
      }
      this.$router.push({ path: path });
    }
  }
}
</script>

<style scoped>
.navbar-container {
  position: relative;
  width: 100%;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 65px;
}

.logo img {
  height: 25px;
  cursor: pointer;
}

.menu-desktop {
  display: flex;
  align-items: center;
  gap: 30px;
}

.menu-item {
  text-decoration: none;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s;
}

.menu-item:hover, .menu-item.router-link-active {
  font-size: 600;
}

.submit-button {
  background: linear-gradient(to right, #632566, #C64BCC);
  padding: 6px 15px;
  border-radius: 80px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s;
  cursor: pointer;
}

.submit-button:hover {
  opacity: 0.9;
}

/* Mobile Menu Icon */
.menu-mobile-icon {
  display: none;
  cursor: pointer;
  width: 30px;
  position: relative;
}

.bar1, .bar2, .bar3 {
  width: 30px;
  height: 3px;
  background-color: #632566;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 3px;
}

/* Icon Animation */
.change .bar1 {
  transform: translateY(9px) rotate(-45deg);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  transform: translateY(-9px) rotate(45deg);
}

/* Mobile Drawer */
.mobile-drawer {
  position: absolute;
  top: 70px;
  right: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 99;
}

.drawer-item {
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.3s;
}

.drawer-item:hover {
  background-color: #f5f5f5;
  color: #632566;
}

.drawer-submit-button {
  margin: 15px auto;
  background: linear-gradient(to right, #632566, #C64BCC);
  padding: 8px 20px;
  border-radius: 80px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 80%;
}

/* Drawer Animation */
.drawer-enter-active, .drawer-leave-active {
  transition: transform 0.3s ease;
}

.drawer-enter-from, .drawer-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Media Queries */
@media (max-width: 768px) {
  .menu-desktop {
    display: none;
  }
  
  .menu-mobile-icon {
    display: block;
  }

  .navbar {
    padding: 10px 15px;
  }
}
</style>