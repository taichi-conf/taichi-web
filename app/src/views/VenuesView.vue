<template>
    <div class="page-container">
    <div class="inclusigen-container">
      <div style="height: 60px;"></div>
        <div class="section">
            <h1 class="page-title">場地</h1>
            <div style="height: 30px;"></div>
            <div class="card venue-card">
                <div class="card-content">
                    <p class="venue-description">
                      國立清華大學位於新竹市，鄰近科學園區，環境優美、學術氛圍濃厚。清華大學以卓越的科研表現與多元學術資源聞名，是臺灣頂尖的高等學府之一。校園綠意盎然，湖光山色交映，是進行學術交流與靜心思考的理想場所。從臺北出發可搭乘高鐵至新竹站，再轉乘計程車或接駁公車約20分鐘可達。亦可從新竹火車站搭乘公車或計程車前往校園，交通相當便捷。
                    </p>
                    
                    <div class="map-slide-container">
                      <VenueSlideshow />
                    </div>
                    
                    <p class="venue-description">
                      本屆研討會將於國立清華大學學習資源中心（旺宏館）前棟的國際會議廳隆重登場。會議廳位於校園中央大草坪旁，距光復路正門僅 7–10 分鐘步程，動線清晰且無障礙友善。採階梯式劇院設計的會場共設 404 席（含 4 席無障礙座位）。本次研討會匯聚國內外人機互動領域的學者與實務專家，勢必激盪出嶄新的研究視角與產業火花，展現清華大學深厚的科技與人文底蘊。
                    </p>
                </div>
            </div>
            
            <!-- <div class="card">
                <div class="card-content">
                    <h2 class="section-title">路線指南 GUIDE TO NTHU DELTA HALL</h2>
                    
                    <div class="venue-routes-likes">
                      <router-link
                        v-for="place in places"
                        :key="place.id"
                        :to="{ hash: `#${place.id}` }"
                        class="route-link"
                      >
                        • 由 <strong>{{ place.name }}</strong> 到 <strong>台達館</strong>
                      </router-link>
                    </div>

                    <section
                      v-for="place in places"
                      :key="place.id"
                      :id="place.id"
                      class="venue-routes"
                    >
                      <h3>• 由 <strong>{{ place.name }}</strong> 到 <strong>台達館</strong></h3>
                      <div class="map-image-container">
                        <img
                          :src="require(`@/assets/venue/route/${place.id}.jpg`)"
                          :alt="`${place.name} 路線圖`"
                          class="glasses-image"
                        />
                      </div>
                    </section>
                    
                </div>
            </div> -->
        </div>
      </div>
      <div style="height: 60px;"></div>
      <div class="footer">COPYRIGHT © 2025 TAICHI</div>
  </div>
</template>
  
<script>
// @ is an alias to /src
import VenueSlideshow from '@/components/VenueSlideshowLeft.vue';
export default {
  name: 'VenuesView',
  components: {
    VenueSlideshow
  },
  data() {
    return {
      places: [
        { id: '光復路校門', name: '光復路校門' },
        { id: '東校門',     name: '東校門' },
        { id: '水源街西校門', name: '水源街西校門' },
        { id: '寶山路南校門', name: '寶山路南校門' }
      ]
    }
  },
  watch: {
    '$route.hash': function(newHash) {
      if (newHash) {
        const el = document.querySelector(newHash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
  
<style scoped>
.venue-description {
  text-align: center;
  line-height: 1.8;
}
.map-image-container {
  width: 100%;
  height: 697px; /* Fixed height on desktop */
  border-radius: 40px;
}
.map-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
}
.venue-routes {
  margin: 50px 0;
}

.venue-routes-likes {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.venue-routes-likes .route-link {
  flex: 0 0 calc(50% - 0.5rem);
  box-sizing: border-box;
  padding: 0.5rem;
  font-size: 18px;
  color: #E1FFDF;
  font-weight: 500;
  text-align: center;
  min-width: 270px;
  text-align: left !important;
}

@media (max-width: 768px) {
  .map-image-container {
    height: 360px; /* Smaller height on mobile */
  }
}

.map-slide-container {
  margin: 40px 0;
}
</style>