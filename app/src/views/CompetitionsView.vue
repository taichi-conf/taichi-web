<!-- DesignCompetition.vue -->
<template>
  <div class="page-container">
    <div class="inclusigen-container">
    <div style="height: 60px;"></div>
    <div class="section">
      <!-- Header Section -->
      <h1 class="page-title">設計競賽</h1>
      
      <div class="competition-title">
        <h2>GANZIN X TAICHI 學生競賽：</h2>
        <h2><span class="sol-text">用 SOL GLASSES</span></h2>
        <h2>解鎖眼動科技新未來！</h2>
      </div>
      
      <!-- Introduction Section -->
      <div class="card">
        <div class="card-content" style="text-align:center">
          <p>
            你準備好迎接眼動追蹤與 AI 運算的極限挑戰了嗎？TAICHI 首次舉辦學生競賽，真誠邀請您運用見臻科技最新研發的穿戴式眼動儀 —— SOL Glasses，打造創新應用！本次競賽鼓勵大家發揮創意，善用眼動追蹤所提供的即時資料，在各種領域中實現突破性的構想。無論是人機互動或使用者介面的優化，你的專案都可能引領眼動科技邁向全新里程碑！
          </p>
        </div>
      </div>
      
      <!-- Timeline Section -->
      <h2 class="section-title">競賽時程 TIMELINE</h2>
      <div class="card">
        <div class="card-content timeline-content">
          <ul class="timeline-list">
            <li>報名期間：2025年4月1日～6月10日</li>
            <li>請在此提交您的提案：<a href="https://docs.google.com/forms/d/e/1FAIpQLSd4paYy2YgGtsAShoZITfy5_i9JI1e2RMOeFl5Nfc60ouvD-g/viewform" class="form-link" target="_blank">GOOGLE FORM</a></li>
            <li>線上說明會：2025年5月9日 (五) 下午 15:00-17:00</li>
            <li>報名截止日：2025年6月10日</li>
            <li>晉級決審團隊通知：2025年6月24日</li>
            <li>工作坊與設備寄送期間：2025年6月30日～7月2日</li>
            <li>開發期間：2025年7月2日～7月31日</li>
            <li>在 TAICHI 2025 上成果發表：2025年8月2日</li>
          </ul>
        </div>
      </div>
      <!-- Hardware and Software Section -->
      <h2 class="section-title">硬體與軟體設備 SOL GLASSES & SOL SDK</h2>
      <div class="image-card">
        <img src="@/assets/Sol_Glasses_Banner 1.png" alt="SOL Glasses - Wearable Eye Tracker" class="product-image">
      </div>
  
      <!-- Specifications Section -->
      <div class="card">
        <div class="card-content">
          <p>
            SOL Glasses 採用 Ganzin AURORA II 眼動追蹤技術，取樣率高達 110Hz，並支援 2D/3D 注視點運算、瞳孔測量、眨眼偵測等。這款穿戴式眼動儀同時配備 1328×1200 解析度前置攝影機，FOV 達 90°×85°，適合各種應用場景。結合 SOL Software Development Kit (SDK) 和 Caelus 眼動分析軟體，可實現注視資料分析、熱點圖（Heatmap）生成，以及 AOI（Area of Interest）分析等，更能協助開發者深入地洞察使用者行為，以及提供需要實時眼動資訊的應用程式。

          </p>
          <p>想進一步了解硬體、資料格式與 SDK，請參考以下連結：</p>
          <ul class="resource-list">
            <li><a href="https://ganzin.com/tw/sol-glasses-wearable-eye-tracker/" target="_blank">SOL GLASSES 介紹</a></li>
            <li><a href="https://drive.google.com/file/d/147rqDUKUC5yGXU8sx1fMb8eSghDrDMOw/view" target="_blank">SOL GLASSES 相關規格</a></li>
            <li><a href="https://drive.google.com/file/d/1TJPiyArCK1y4WVs-MpgAmUStBzrziCJc/view" target="_blank">SOL GLASSES 資料匯出說明</a></li>
            <li><a href="https://drive.google.com/file/d/1CWCOxSLSHWKYiONA0TkwncyMkE46B8d-/view" target="_blank">SOL SDK 文件</a></li>
          </ul>
          
          <p>以下影片則示範了如何使用 SOL GLASSES 搭配 SOL SDK 完成應用程式 DEMO：</p>
          <ul class="demo-list">
            <li>FOCUS GLASSES: <a href="https://www.youtube.com/watch?v=9di5c713UYI" target="_blank">HTTPS://WWW.YOUTUBE.COM/WATCH?V=9di5c713UYIL</a></li>
            <li>SMART AI AGENT: <a href="https://www.youtube.com/watch?v=OfwwFsKtczU" target="_blank">HTTPS://WWW.YOUTUBE.COM/WATCH?V=OfwwFsKtczU</a></li>
            <li>SMART ROBOT SYSTEM: <a href="https://www.youtube.com/watch?v=5m_wpmif8FY" target="_blank">HTTPS://WWW.YOUTUBE.COM/WATCH?V=5m_wpmif8FY</a></li>
          </ul>
        </div>
      </div>
      <h1 class="section-title">競賽挑戰 CHALLENGE</h1>
      
      <!-- Challenge Description -->
      <div class="card">
        <div class="card-content">
          <p>
            此次挑戰任務是透過 SOL GLASSES 與 SOL SDK，創造一個以眼動追蹤技術為核心的應用，解決真實世界的問題或推動人機互動的進展。其中可能的應用包含遊戲、人機介面、認知分析等領域，只要能有效運用注視點資料來提升使用者體驗、改善人機互動模式，都是可行的題目。
          </p>
          
          <h3>主題方向（但不限於以下）：</h3>
          <ul class="theme-list" style="font-weight: 400;">
            <li>人機互動介面：利用眼球控制使用者介面，優化人機互動的體驗。 </li>
            <li>認知監控：偵測專注度、情緒狀態等，提供監測或輔助功能。</li>
            <li>娛樂/遊戲：將注視以及眨眼等訊號應用於互動式遊戲或體驗中。</li>
            <li>即時數據分析： 利用眼動追蹤數據創建各行各業的分析工具（例如市場研究、教育、運動等）。 </li>
          </ul>
          
          <h3>設計空間：</h3>
          <p>只要系統包含 眼動追蹤功能（必須使用 SOL GLASSES），其他搭配使用的裝置不受限制。  </p>
          
          <ul class="design-space" style="font-weight: 400;">
            <li>
              <strong>感測面：</strong>
              <ul>
                <li>來自SOL GLASSES 輸出：能取得眼睛影像、2D/3D 注視點、瞳孔直徑與眨眼資訊等，可進一步實現視線手勢、表情偵測與視線控制等功能。 </li>
                <li>額外感測器（具 Python 介面）：由於 SOL GLASSES 提供 Python 介面，若有其他同樣支援Python 介面的感測器，也能結合使用。</li>
              </ul>
            </li>
            
            <li>
              <strong>輸出與反饋：</strong>
              <ul>
                <li>螢幕與近眼顯示：與顯示器互動是最直接的方法。您可以在螢幕上顯示訊息，或使用螢幕實現進階技術，如注視點宣染技術等應用。 </li>
                <li>聲音/音訊：透過語音或音效提示，協助使用者掌握系統資訊。</li>
                <li>物聯網設備：與 IOT 系統整合，根據眼動資料自動控制或回饋，可帶來更多元的互動可能。</li>
              </ul>
            </li>
            
            <li>
              <strong>計算平台：</strong>
              <ul>
                <li>物聯網裝置：一些物聯網裝置具備執行簡單任務所需的運算能力，這些設備可以在本地執行運算。</li>
                <li>邊緣主機：您也可以使用個人電腦（edge host）進行數據收集，透過區域網路傳輸並進行更複雜的運算。 </li>
                <li>伺服器：系統可以運行於雲端伺服器上，提供更高的計算能力以處理更複雜的任務。</li>
                <li>SaaS 工具：許多雲端服務供應商提供強大的軟體工具（如 ChatGPT）。您可以將這些工具與 SOL GLASSES 結合，創造創新的應用模式。</li>
                <li>潛在應用範疇：包含 AR/VR 介面、注意力追蹤、遊戲娛樂，以及健康監測等。</li>
              </ul>
            </li>
          </ul>
          
          <h3>提案繳交以及儀器交付資訊：</h3>
          <ol class="submission-list" style="font-weight: 400;">
            <li>提案提交：請於 6月10日 前提交您的提案（2-4 頁，SIGCHI 格式），包括專案構想、技術細節及應用情境等。 </li>
            <li>設備寄送與實體工作坊：若提案通過，競賽單位將寄送 SOL GLASSES 套組，並提供 SOL SDK；並於 6 月 30 日至 7 月 2 日 舉辦實體工作坊，協助參賽者實作。</li>
            <li>
              開發期：自 7 月 2 日 起至 7 月 31 日，為期約一個月，完成專案開發。
              <ul>
                <li>成果發表前，團隊必須自行製作一個設計概念的展示海報以及一個 DEMO 說明影片來介紹您的專案。</li>
                <li>見臻也鼓勵團隊將成果上傳 Github，成功上傳 Github 且見臻可以順利執行程式碼的團隊將會獲得見臻的 IG 推廣貼文以及日後免費借用 Sol Glasses 套組的機會。</li>
              </ul>
            </li>
            <li>成果發表：請在8月1日攜帶prototype到會場進行佈置，並於研討會舉行期間進行展示您的專案成果，並引導與會者試用。</li>
          </ol>
          
          <p class="team-info" style="font-size: 20px; line-height: 26px;margin-top:30px;">團隊人數：2~5 位學生（高中、大學或研究所在學皆可）。</p>
          <p class="registration-note" style="font-size: 20px; line-height: 26px;">註冊要求：至少一名成員需註冊參加 TAICHI 2025 才能進行展示並角逐獎項。</p>
          <p class="deadline" style="font-size: 20px; line-height: 26px;margin-top:30px;">提案截止期限：2025年6月10日</p>
          <p class="submission-link" style="font-size: 20px; line-height: 26px;">提案繳交連結：<a href="https://forms.gle/TbdFy5yaQbEKgFiZ6" target="_blank">HTTPS://FORMS.GLE/TbdFy5yaQbEKgFiZ6</a></p>
        </div>
      </div>
      <h1 class="section-title">獎項 AWARDS</h1>
      <div class="card">
        <div class="card-content">
          <ul class="awards-list">
            <li>第一名 ($20,000 NTD)</li>
            <li>最佳創意應用獎 ($10,000 NTD)</li>
            <li>最佳實現獎 ($10,000 NTD)</li>
            <li>最佳人氣獎（由會議參與者投票選出）($5,000 NTD)</li>
            <li>決賽參加獎（免 TAICHI 2025 報名費）</li>
            <li>獲獎者將獲得 現金獎金、證書。</li>
          </ul>
        </div>
      </div>
      
      <!-- Questions Section -->
      <h1 class="section-title">還有其它問題嗎？ QUESTIONS?</h1>
      <div class="card">
        <div class="card-content">
          <p>見臻科技聯繫窗口：edan.chen@ganzin.com.tw </p>
          <p>這是你發揮創意、定義未來眼動應用的絕佳機會！</p>
          <p>讓我們一同在 TAICHI 2025 使用 SOL GLASSES 開啟無限可能！</p>
        </div>
      </div>

      <!-- Community Section -->
      <h1 class="section-title">社群 COMMUNITY</h1>
      <div class="card">
        <div class="card-content">
          <p>
            如果還有疑問，或正在尋找合作隊友，歡迎加入我們的 Discord 社群！在這裡你可以討論技術、尋找組隊夥伴，以及獲得最新活動公告與競賽資訊。立即加入，一起腦力激盪吧！
          </p>
          <p class="discord-link">
            <a href="https://discord.gg/3YvRpy55" target="_blank">https://discord.gg/3YvRpy55</a>
          </p>
        </div>
      </div>
    </div>
    </div>
    <div class="footer">COPYRIGHT © 2025 TAICHI</div>
  </div>
</template>

<script>
export default {
  name: 'DesignCompetition',
  data() {
    return {
      // Any data needed for the component
    }
  }
}
</script>

<style scoped>
.card-content p {
  line-height: 1.8rem;
}
.competition-title {
  color: white;
  font-size: 36px;
  margin: 30px 0;
  line-height: 1.4;
  background-image: linear-gradient(to right, #FFFFFF 40%, #B3D5B0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  letter-spacing: 4px;
}

.competition-title h2 {
  margin: 0;
  font-weight: 900;
  text-align: center;
}

.sol-text {
  font-family: sans-serif;
  font-family: 'Agressive', 'Noto Sans TC', sans-serif;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 70px;
}

.timeline-content {
  line-height: 2;
  font-size: 20px;
}

.timeline-list {
  list-style-type: '・ ';
  padding: 0;
}

.timeline-list li {
  margin-bottom: 10px;
}

.form-link {
  color: white;
  text-decoration: underline;
}

.image-card {
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 20px;
}

.product-image {
  width: 100%;
  display: block;
}

.resource-list, .demo-list {
  list-style-type: disc;
  padding-left: 20px;
  margin: 15px 0;
}

.resource-list li, .demo-list li {
  margin-bottom: 10px;
}
.resource-list li a {
  color: white;
  text-decoration: underline;
}

.demo-list a {
  color: white;
  word-break: break-all;
}

.theme-list {
  list-style-type: disc;
  padding-left: 20px;
  margin: 15px 0;
}

.theme-list li {
  margin-bottom: 10px;
}

.design-space {
  list-style-type: none;
  padding-left: 0;
}

.design-space > li {
  margin-bottom: 20px;
}

.design-space strong {
  font-weight: bold;
}

.design-space ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 10px 0;
}

.submission-list {
  padding-left: 20px;
  margin: 15px 0;
}

.submission-list li {
  margin-bottom: 15px;
}

.submission-list ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 10px 0;
}

.team-info, .registration-note, .deadline, .submission-link {
  margin: 15px 0;
  font-weight: bold;
}

.submission-link a {
  color: white;
  text-decoration: underline;
}

h3 {
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: bold;
}

.awards-list {
  list-style-type: disc;
  padding-left: 20px;
  line-height: 2;
  font-size: 20px;
  list-style-type: '・ ';
}

.awards-list li {
  margin-bottom: 15px;
}

.discord-link a {
  color: white;
  text-decoration: underline;
}

.ip-content {
  line-height: 1.6;
}

.ip-list {
  list-style-type: decimal;
  padding-left: 20px;
  font-weight: 400;
}

.ip-list li {
  margin-bottom: 25px;
}

.ip-list strong {
  display: block;
  margin-bottom: 8px;
}

.ip-list p {
  margin-bottom: 10px;
}
</style>