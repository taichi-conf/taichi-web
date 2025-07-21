<!-- InclosiGen.vue -->
<template>
  <div class="page-container">
    <div class="inclusigen-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <img src="https://raw.githubusercontent.com/taichi-conf/taichi-web/refs/heads/develop/app/src/assets/logo.gif" alt="INCLUSIGEN" class="logo" />
        <div style="width: 90%;margin: auto;">
          <h2 class="subtitle">第十一屆台灣人機互動研討會</h2>
          <h3 class="english-subtitle">The 11th Annual Conference of Taiwan Association of Computer Human Interaction</h3>
          
          <div class="conference-info">
            <div>
              <div class="date">2025.8.2-3</div>
              <div class="location">國立清華大學 National Tsing Hua University</div>
            </div>
            <a href="https://easychair.org/conferences/?conf=taichi2025" class="submit-button" target="_blank"><img src="@/assets/論文投稿.png" alt="submition-button"/></a>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="description">
            <p>InclusiGen是一個我們針對此研討會所共創的新概念，其融合了Inclusive跟Generative兩個字，表明對生成式人工智慧或生成式設計的潮流，要優先考慮包容性--無論是在易使用性、多樣性、乃至於科技創新背後的道德及哲學考量等方面。我們冀望用InclusiGen體現一充滿憧憬的永續願景：運用人工智慧所生成的內容、創建的系統或創新應用，都能經過精心的設計，使之具有公平性，並且能夠為多元的使用者群體提供支援。無論是應用於以人為本的人工智慧研究、包容性設計方法、或負責任的人工智慧框架，這個新概念都蘊含了運用新科技創建公平服務予所有社群的人性關懷及共融價值。</p>
        </div>
      </section>

      <!-- Registration Section -->
      <section class="section">
        <h2 class="section-title">註冊會議 REGISTRATION</h2>
        <div class="card">
          <div class="card-content">
            <div class="card-info" style="flex-wrap: wrap; flex-direction: column; align-items: flex-start; gap: 20px;">
              <div style="width: 100%;">
                <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 10px;">個人報名</h3>
                <div class="deadline">早鳥期限：2025/07/25</div>
              </div>
              <div style="width: 100%;margin-top: 20px;">
                <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 10px;">團體報名</h3>
                <div class="deadline">團體報名期限：2025/07/27</div>
              </div>
              <a href="https://taichi2025.taiwanchi.org/#/register" target="_blank" class="purple-button" style="align-self: flex-end;">註冊會議</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Keynote Speakers Section -->
      <section class="section">
        <h2 class="section-title">主講者 KEYNOTE SPEAKERS</h2>
        <div class="card">
            <div class="card-content">
              <div class="speakers-container">
                <!-- Speaker 1 -->
                <div class="speaker">
                    <img src="@/assets/speakers1.jpg" alt="Professor Duncan P Brumby" class="speaker-image">
                    <div class="speaker-content">
                        <h1 class="speaker-title">Generative AI: Lessons from Dickens for the Information Age</h1>
                        <h2 class="speaker-name">Professor Duncan P Brumby</h2>
                        <p class="speaker-affiliation">UCLIC, University College London</p>
                    </div>
                </div>

                <!-- Speaker 2 -->
                <div class="speaker">
                    <img src="@/assets/speakers2.jpg" alt="Professor Uichin Lee" class="speaker-image">
                    <div class="speaker-content">
                        <h1 class="speaker-title">Data-Driven Digital Health and Wellbeing</h1>
                        <h2 class="speaker-name">Professor Uichin Lee</h2>
                        <p class="speaker-affiliation">School of Computing, KAIST<br>Graduate School of Data Science, KI Health Science Institute</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Agenda Section -->
      <section class="section">
        <h2 class="section-title">議程 AGENDA</h2>
        <div class="card">
          <div class="agenda-table-wrap">
            <h3 class="agenda-date">DAY 1</h3>
            <table class="agenda-table">
              <tbody>
                <tr><td class="agenda-time">09:00 - 09:30</td><td>Opening</td></tr>
                <tr><td class="agenda-time">09:30 - 10:30</td><td><b>Opening Keynote: Generative AI: Lessons from Dickens for the Information Age</b><br><span class="agenda-speaker">講者：<b>Duncan Brumby</b><br>Professor, University College London<br>主持人：曾元琦 國立清華大學</span></td></tr>
                <tr><td class="agenda-time">10:30 - 10:50</td><td>Coffee Break</td></tr>
                <tr><td class="agenda-time">10:50 - 11:50</td><td><b>Paper Session 1: title TBA</b><br>主持人：TBD</td></tr>
                <tr><td class="agenda-time">11:50 - 13:20</td><td>Lunch Break</td></tr>
                <tr><td class="agenda-time">13:20 - 14:20</td><td><b>Paper Session 2: title TBA</b><br>主持人：TBD</td></tr>
                <tr><td class="agenda-time">14:20 - 17:00</td><td>Poster session 1 and Demo<br><b>GANZIN X TAICHI 學生競賽</b><br>14:30 - 16:00 Panel 1: 心理學與人機互動<br>16:00 - 17:00 Tutorial: A tutorial on LLM-based HCI Research<br><span class="agenda-speaker">講者：<b>Uichin Lee</b><br>Professor, KAIST</span></td></tr>
                <tr><td class="agenda-time">18:00 - 21:00</td><td>Banquet at 清大風雲樓4F:湖漾餐廳</td></tr>
              </tbody>
            </table>
            <h3 class="agenda-date">DAY 2</h3>
            <table class="agenda-table">
              <tbody>
                <tr><td class="agenda-time">09:00 - 10:00</td><td><b>Paper Session 3: title TBA</b><br>主持人：TBD</td></tr>
                <tr><td class="agenda-time">10:00 - 10:20</td><td>Coffee Break</td></tr>
                <tr><td class="agenda-time">10:20 - 11:20</td><td><b>Paper Session 4: title TBA</b><br>主持人：TBD</td></tr>
                <tr><td class="agenda-time">11:20 - 13:00</td><td>Lunch Break</td></tr>
                <tr><td class="agenda-time">13:00 - 15:40</td><td>Poster session 2 and Demo<br>13:00 - 14:30 Panel 2: 科技藝術與人機互動<br>14:30 - 15:30 CSCW workshop</td></tr>
                <tr><td class="agenda-time">15:40 - 16:40</td><td><b>Closing Keynote: Data-Driven Digital Health and Wellbeing</b><br><span class="agenda-speaker">講者：<b>Uichin Lee</b><br>Professor, KAIST<br>主持人：游創文 國立清華大學</span></td></tr>
                <tr><td class="agenda-time">16:40 - 17:00</td><td>Award ceremony and Closing</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            <!-- Call for Participations Section -->
            <section class="section">
        <h2 class="section-title">徵稿資訊 CALL FOR PARTICIPATIONS</h2>
        
        <div class="card">
          <div class="card-content">
            <h3 class="card-title">論文 FULL PAPER & 設計論文 PICTORIAL</h3>
            <div class="card-info" style="flex-wrap: wrap;">
              <div class="deadline">截稿日：2025/06/20 (extended and final)<br>
                結果通知：2025/07/21 (extended and final)<br>
                完稿日：2025/07/28 (extended) </div>
              <a href="https://easychair.org/cfp/TAICHI2025" target="_blank" class="purple-button">了解更多</a>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-content">
            <h3 class="card-title">海報論文 POSTER AND LATE-BREAKING WORK & 互動展示論文 INTERACTIVITY AND DEMO</h3>
            <div class="card-info">
              <div class="deadline">截稿日：2025/06/23 (extended) <br>
                結果通知：2025/07/17 (extended)<br>
                完稿日：2025/07/28</div>
              <!-- <router-link to="/submit#poster" class="purple-button">了解更多</router-link> -->
              <a href="https://easychair.org/cfp/TAICHI2025" target="_blank" class="purple-button">了解更多</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Design Competition Section -->
      <section class="section">
        <h2 class="section-title">設計競賽 DESIGN COMPETITIONS</h2>
        
        <div class="competition-card">
          <div class="competition-content">
            <h3 class="competition-question">你準備好挑戰眼動追蹤與 AI 運算的極限了嗎？</h3>
            <p class="competition-text">TAICHI 2025 首次舉辦學生競賽，誠摯邀請你運用見臻科技開發的最先進穿戴式眼動儀——Sol Glasses，打造創新應用！本次競賽鼓勵你發揮創意，利用眼動追蹤與即時數據，在各種領域開發突破性的應用。無論是互動式環境還是人機介面的提升，你的專案都可能開創眼動科技的新可能性！
              本次競賽設有四種獎項，最高獎金高達 2 萬元！快來挑戰，讓你的創意成為眼動技術的未來！</p>
            <!-- <div class="competition-logos">
              <img src="@/assets/TAICHI.webp" alt="TAICHI" class="logo">
              <span class="logo-separator">×</span>
              <img src="@/assets/anzin-logo.png" alt="CANZIN" class="logo">
            </div> -->
            
            <div class="glasses-section">
              <!-- <h4 class="glasses-title">Try out the Sol Glasses!</h4>
              <div class="glasses-subtitle">The Simplest and Most User Friendly Eye Tracker for Research</div> -->
              <router-link to="/competitions" class="competion-button">
                <img src="@/assets/competionButton.png" alt="Design Competition">
              </router-link>
              <div class="glasses-image-container">
                <img src="@/assets/sol-glasses.png" alt="SOL Glasses" class="glasses-image">
                <!-- <div class="prize-tag">Get the chance to win 20,000 NTD</div> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Venue Section -->
      <section class="section">
        <h2 class="section-title">舉辦地點 VENUE & FACILITIES</h2>
        
        <div class="venue-card">
          <div class="venue-image-container">
            <VenueSlideshow />
          </div>
          
          <div class="venue-description">
            <p>國立清華大學（NTHU）鄰近新竹科學園區，具備深厚的科技與人文底蘊。清大校園環境優美，融合自然景觀與現代建築，是激發創意與交流的理想場域。2025研討會將於學習資源中心（旺宏館）前棟的國際會議廳舉辦，其位於清華校園核心地帶，為現代化多功能演講與表演場地，擁有優雅建築與先進設備，提供研討會舉辦大師講座、論文及互動作品的發表和討論。TAICHI學會以推動台灣的人機互動研究與發展和交流為使命，期待大家蒞臨參與今年暑假的研討會，共同激盪創新的火花。</p>
          </div>
        </div>
      </section>

      <!-- Organizers Section -->
      <section class="section">
        <h2 class="section-title">主辦單位 ORGANIZERS</h2>
        
        <div class="organizers-card">
          <h3 class="organizers-subtitle">主辦單位</h3>
          <div class="organizers-logo-container" style="justify-content: flex-start;">
            <img src="@/assets/TAICHI.webp" alt="TAICHI" class="organizer-logo">
          </div>
          
          <h3 class="organizers-subtitle">協辦單位</h3>
          <div class="organizers-logo-container">
            <img src="@/assets/nthu-logo.png" alt="國立清華大學" class="organizer-logo">
            <img src="@/assets/nycu-logo.png" alt="國立陽明交通大學" class="organizer-logo">
            <img src="@/assets/anzin-logo.png" alt="ANZIN" class="organizer-logo">
          </div>
        </div>
      </section>

      <!-- Sponsors Section -->
      <section class="section">
        <h2 class="section-title">贊助單位 SPONSORS</h2>
        <div class="sponsors-card">
          <div class="sponsors-logo-container">
            <img src="@/assets/贊助單位/Ganzin_dark_square@800px.png 的副本.png" alt="Ganzin" class="sponsor-logo">
            <img src="@/assets/贊助單位/國科會標誌組合PNG.png" alt="國科會" class="sponsor-logo">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VenueSlideshow from '@/components/VenueSlideshow.vue';
export default {
  name: 'InclosiGenPage',
  components: {
    VenueSlideshow // Register the component
  },
  data() {
    return {
      // Data if needed
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  color: white;
  padding: 90px 20px 0px 20px;
  text-align: left;
  position: relative;
  width: 90%;
  margin: auto;
}

/*mobile*/
@media screen and (max-width: 768px) {
  .hero-section {
    padding: 20px 20px;
    width: 90%;
  }
}

.subtitle {
  font-size: 3.2rem;
  margin: 30px 0 0 0;
  font-weight: 900;
}

.english-subtitle {
  font-size: 1.3rem;
  margin: 5px 0 20px 0;
  font-weight: 900;
}

.conference-info {
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}

.date {
  font-size: 3.5rem;
  font-weight: bold;
  font-weight: 900;
}

.location {
  font-size: 1.5rem;
  font-weight: 900;
}

.submit-button {
  text-decoration: none;
  display: inline-block;
  margin-left: auto;
  height: 120px;
}

.submit-button > img {
  width: 120px;
  height: auto;
}

@media screen and (max-width: 768px) {
  .submit-button {
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
}


.description {
  padding: 30px 70px;
  margin: auto;
  margin-top: 30px;
  text-align: center;
  background-color: RGB(153, 153, 153, 30%);
  border-radius: 30px;
  margin-bottom: 20px;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.description > p {
  font-size: 16px;
  line-height:32px;
  color: #fff;
  font-weight: bold;
  word-spacing: 1rem !important;
}


@media screen and (max-width: 768px) {
  .description {
    margin-top: 0;
    padding: 20px 20px;
  }
}

/* Card Styles */
.card, .competition-card, .venue-card, .organizers-card, .sponsors-card {
  background-color: rgba(153, 153, 153, 0.4);
  border-radius: 30px;
  margin-bottom: 20px;
  overflow: hidden;
  color: #fff;
  font-weight: bold;
  padding: 40px 30px;
}

@media screen and (max-width: 768px) {
  .card, .competition-card, .venue-card, .organizers-card, .sponsors-card {
    padding: 20px 0px;
  }
}

.card-content {
  padding: 10px 30px;
  font-family: 'noto sans', sans-serif;
}

.card-title {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 0 0 25px 0;
  color: white;
}

.card-info {
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.deadline {
  font-size: 26px;
  line-height: 1.8;
}

/* Competition Styles */
.competition-content {
  padding: 20px 40px;
  color: white;
  text-align: center;
}

.competition-question {
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1px;
  margin: 0 0 15px 0;
}

.competion-button {
  width: 216px;
  height: 0;
  position: relative;
  float: right;
  z-index: 999;
}

.competition-text {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 32px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.competition-logos {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.logo {
  width: 100%;
  height: auto;
}

.logo-separator {
  margin: 0 15px;
  font-size: 1.5rem;
}

.glasses-section {
  margin-top: 30px;
}

.glasses-title {
  color: #9be0b2;
  font-size: 1.5rem;
  margin: 0;
}

.glasses-subtitle {
  font-size: 0.9rem;
  color: #dddddd;
  margin-bottom: 20px;
}

.glasses-image-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.glasses-image {
  width: 100%;
  height: auto;
  display: block;
}


.prize-tag {
  position: absolute;
  right: 0;
  bottom: 10px;
  background-color: #ff9966;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .competion-button {
    height: auto;
    margin-bottom: 20px;
  }
  .competion-button > img {
    width: 200px;
    height: auto;
    display: block;
  }
  .glasses-section {
    margin-top: 30px;
  }
}

/* Venue Styles */
@media (max-width: 768px) {
  .venue-description {
    padding: 20px 10px;
  }
}

.venue-description {
  padding: 20px 40px;
  font-size: 16px;
  line-height: 32px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  color: white;
}

/* Organizers Styles */
.organizers-subtitle {
  font-size: 1.1rem;
  margin: 10px 0;
  color: white;
  padding: 0 20px;
}

.organizers-logo-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.organizer-logo {
  width: 30%;
  object-fit: contain;
}

.sponsors-logo-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
}

/* Add sponsor-logo style for consistency */
.sponsor-logo {
  width: 30%;
  object-fit: contain;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .subtitle {
    font-size: 1.5rem;
  }
  
  .english-subtitle {
    font-size: 1rem;
    max-width: 100%;
  }
  
  .conference-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .submit-button {
    margin-left: 0;
  }
  
  .glasses-image-container {
    width: 100%;
  }
}

.speakers-container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
}

.speaker {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
}

.speaker-image {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    flex-shrink: 0;
}

.speaker-content {
    flex: 1;
    color: white;
}

.speaker-title {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 20px;
    line-height: 1.2;
}

.speaker-name {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
}

.speaker-affiliation {
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.9;
    line-height: 1.4;
}

/* Responsive design */
@media (max-width: 768px) {
    .speaker {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .speaker-image {
        width: 150px;
        height: 150px;
    }

    .speaker-title {
        font-size: 1.8rem;
        letter-spacing: 2px;
    }

    .speaker-name {
        font-size: 1.5rem;
        letter-spacing: 1px;
    }

    .speaker-affiliation {
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .speakers-container {
        gap: 40px;
    }

    .speaker-title {
        font-size: 1.4rem;
        letter-spacing: 1px;
    }

    .speaker-name {
        font-size: 1.2rem;
    }

    .speaker-affiliation {
        font-size: 0.9rem;
    }
}

.inclusigen-container {
  flex: 1 0 auto;
}
</style>