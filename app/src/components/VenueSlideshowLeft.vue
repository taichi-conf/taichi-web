<template>
    <div class="venue-image-container">
      <!-- SLIDING IMAGES -->
      <transition-group
        name="slide-img"
        tag="div"
        class="slideshow-wrapper"
      >
        <img
          v-for="(image, index) in images"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          class="venue-image"
          v-show="index === currentImageIndex"
          @contextmenu.prevent
        />
      </transition-group>

      <!-- SLIDING CAPTION -->
      <transition name="slide-cap" mode="out-in">
        <div
          key="caption-{{ currentImageIndex }}"
          class="venue-image-caption"
        >
          {{ images[currentImageIndex].caption }}
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VenueSlideshow',
    data() {
      return {
        images: [
          { 
            src: require('@/assets/venue/slider/校門.jpg'), 
            alt: '校門', 
            caption: '校門' 
          },
          // 大草坪
          { 
            src: require('@/assets/venue/slider/大草坪.jpg'), 
            alt: '大草坪', 
            caption: '大草坪' 
          },
          // 學習資源中心
          { 
            src: require('@/assets/venue/slider/旺宏館.jpg'), 
            alt: '學習資源中心', 
            caption: '學習資源中心（旺宏館）' 
          },
          // 成功湖
          { 
            src: require('@/assets/venue/slider/成功湖.jpg'), 
            alt: '成功湖', 
            caption: '成功湖' 
          },
          // 教育館
          { 
            src: require('@/assets/venue/slider/教育館.jpg'), 
            alt: '教育館', 
            caption: '教育館' 
          },
          // 第二綜合大樓
          { 
            src: require('@/assets/venue/slider/第二綜合大樓.jpg'), 
            alt: '第二綜合大樓', 
            caption: '第二綜合大樓' 
          },
          // 野台
          { 
            src: require('@/assets/venue/slider/野台.jpg'), 
            alt: '野台', 
            caption: '野台' 
          },
          // 台達館
          { 
            src: require('@/assets/venue/slider/台達館.jpg'), 
            alt: '台達館', 
            caption: '台達館' 
          },
          // 台達館廣場
          { 
            src: require('@/assets/venue/slider/台達館廣場.png'), 
            alt: '台達館廣場', 
            caption: '台達館廣場' 
          },
        ],
        currentImageIndex: 0,
        timer: null
      }
    },
    mounted() {
    this.startSlideshow();
    window.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeUnmount() {
    this.stopSlideshow();
    window.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
  methods: {
    startSlideshow() {
      this.timer = setInterval(this.changeImage, 5000);
    },
    stopSlideshow() {
      clearInterval(this.timer);
    },
    changeImage() {
      // First fade out the caption
      this.captionVisible = false;
      
      // After a brief delay, change the image
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        
        // Then fade in the new caption
        setTimeout(() => {
          this.captionVisible = true;
        }, 100);
      }, 200);
    },
    setImage(index) {
      if (index === this.currentImageIndex) return;
      
      this.captionVisible = false;
      setTimeout(() => {
        this.currentImageIndex = index;
        setTimeout(() => {
          this.captionVisible = true;
        }, 100);
      }, 200);
      
      // Reset timer when manually changing images
      this.stopSlideshow();
      this.startSlideshow();
    },
    handleVisibilityChange() {
      if (document.hidden) {
        this.stopSlideshow();
      } else {
        this.startSlideshow();
      }
    }
    }
  }
  </script>
  
<style scoped>
.venue-image-container {
  position: relative;
  width: 80%;
  /* Enforce 908:631 ratio */
  aspect-ratio: 908 / 631;
  max-width: 908px;       /* optional: cap it at the “native” width */
  margin: 0 auto;
  border-radius: 40px;
  overflow: hidden;
}
.venue-image {
  position: absolute; /* Position absolutely to overlay */
  top: 0;
  left: 0;
  right: 0;
  width: 80%;
  height: 100%; /* Will maintain aspect ratio with object-fit */
  margin: 0 auto;
  border-radius: 40px;
  object-fit: cover; /* Ensures image covers the area properly */
  display: block;
}
.slideshow-wrapper,
.venue-image {
  position: absolute;
  inset: 0;               /* top:0; right:0; bottom:0; left:0 */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.venue-image-caption {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  font-size: 26px;
  padding: 3px 8px;
  border-radius: 3px;
  z-index: 2; /* Ensure caption stays on top */
}

@media (max-width: 768px) {
  .venue-image-container {
    width: 100%;
  }
  
  .venue-image {
    width: calc(100% - 20px);
    border-radius: 20px;
  }
  
  .venue-image-caption {
    left: 10%;
    font-size: 20px;
  }
}

/* =========== IMAGE SLIDE =========== */
.slide-img-enter-active,
.slide-img-leave-active {
  transition: transform 0.6s ease;
  position: absolute;  /* so they stack */
  inset: 0;
}

.slide-img-enter-from {
  transform: translateX(100%);
}
.slide-img-enter-to {
  transform: translateX(0);
}
.slide-img-leave-from {
  transform: translateX(0);
}
.slide-img-leave-to {
  transform: translateX(-100%);
}

/* =========== CAPTION SLIDE =========== */
.slide-cap-enter-active,
.slide-cap-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
  position: absolute;
  bottom: 30px;
  left: calc(10% + 30px);
  width: 80%;
}

.slide-cap-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-cap-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-cap-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-cap-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}


</style>