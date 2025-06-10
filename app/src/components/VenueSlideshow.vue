<template>
    <div class="venue-image-container">
        <transition-group name="fade" tag="div" class="slideshow-wrapper">
            <img 
                v-for="(image, index) in images" 
                :key="image.src"
                :src="image.src" 
                :alt="image.alt" 
                class="venue-image"
                v-show="index === currentImageIndex"
                @contextmenu.prevent
            >
      </transition-group>
      <div class="venue-image-caption" :class="{ 'caption-fade-in': captionVisible }">
      {{ images[currentImageIndex].caption }}
    </div>
    
    </div>
  </template>
  
  <script>
  export default {
    name: 'VenueSlideshow',
    data() {
      return {
        images: [
          { 
            src: require('@/assets/清大校門.jpg'), 
            alt: '清大校門', 
            caption: '清大校門' 
          },
          { 
            src: require('@/assets/成功湖-0.jpg'), 
            alt: '成功湖', 
            caption: '成功湖' 
          },
          { 
            src: require('@/assets/樹蔭走道.jpg'), 
            alt: '樹蔭走道', 
            caption: '樹蔭走道' 
          },
          {
            src: require('@/assets/國際會議廳-1.png'),
            alt: '國際會議廳',
            caption: '國際會議廳'
          },
          {
            src: require('@/assets/國際會議廳-2.jpg'),
            alt: '國際會議廳',
            caption: '國際會議廳'
          }
          // { 
          //   src: require('@/assets/台達館.jpg'), 
          //   alt: '台達館', 
          //   caption: '台達館' 
          // },
          // { 
          //   src: require('@/assets/台達館廣場.jpg'), 
          //   alt: '台達館廣場', 
          //   caption: '台達館廣場' 
          // }
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
  overflow: hidden;
  width: 100%;
  height: 542px; /* Fixed height on desktop */
  margin: 0 auto;
}

.slideshow-wrapper {
  position: relative;
  width: 100%;
  height: 100%; /* Fill the container */
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

.venue-image-caption {
  position: absolute;
  bottom: 30px;
  left: calc(10% + 30px);
  color: white;
  font-size: 26px;
  padding: 3px 8px;
  border-radius: 3px;
  z-index: 2; /* Ensure caption stays on top */
}

@media (max-width: 768px) {
  .venue-image-container {
    height: 400px; /* Smaller height on mobile */
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
  
.caption-fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* Enhanced fade transitions for images */
.fade-enter-active {
  animation: fade-in 1.8s;
}
.fade-leave-active {
  animation: fade-out 1.8s;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
    filter: brightness(1);
  }
  100% {
    opacity: 0;
    filter: brightness(1.3);
  }
}
  </style>