<template>
  <div class="page-container">
    <div class="inclusigen-container">
      <div style="height: 60px;"></div>
      <h1 class="page-title">議程</h1>
        <div class="agenda-days">
          <div class="agenda-day">
            <h2 class="agenda-day-title">DAY 1</h2>
            <div v-for="(slot, idx) in day1Agenda" :key="'d1-' + idx" class="agenda-drawer">
              <div
                class="agenda-drawer-header"
                :class="{ clickable: slot.detail }"
                @click="slot.detail && toggleDrawer('day1', idx)"
                :style="!slot.detail ? 'cursor:default;' : ''"
              >
                <span class="agenda-time">{{ slot.time }}</span>
                <span class="agenda-title">{{ slot.title }}</span>
                <span v-if="slot.detail" class="agenda-arrow" :class="{ open: isOpen('day1', idx) }">
                  <!-- Rounded chevron down SVG -->
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="10" fill="#e0e7ef"/>
                    <path d="M7.5 10L11 13.5L14.5 10" stroke="#4a5a6a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
              <transition name="drawer">
                <div v-if="isOpen('day1', idx) && slot.detail" class="agenda-drawer-content">
                  <div v-html="slot.detail"></div>
                </div>
              </transition>
            </div>
          </div>
          <div class="agenda-day">
            <h2 class="agenda-day-title">DAY 2</h2>
            <div v-for="(slot, idx) in day2Agenda" :key="'d2-' + idx" class="agenda-drawer">
              <div
                class="agenda-drawer-header"
                :class="{ clickable: slot.detail }"
                @click="slot.detail && toggleDrawer('day2', idx)"
                :style="!slot.detail ? 'cursor:default;' : ''"
              >
                <span class="agenda-time">{{ slot.time }}</span>
                <span class="agenda-title">{{ slot.title }}</span>
                <span v-if="slot.detail" class="agenda-arrow" :class="{ open: isOpen('day2', idx) }">
                  <!-- Rounded chevron down SVG -->
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="10" fill="#e0e7ef"/>
                    <path d="M7.5 10L11 13.5L14.5 10" stroke="#4a5a6a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
              <transition name="drawer">
                <div v-if="isOpen('day2', idx) && slot.detail" class="agenda-drawer-content">
                  <div v-html="slot.detail"></div>
                </div>
              </transition>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgendaView',
  data() {
    return {
      openDrawers: {
        day1: [],
        day2: [],
      },
      day1Agenda: [
        {
          time: '09:00 - 09:30',
          title: 'Opening',
          detail: '',
        },
        {
          time: '09:30 - 10:30',
          title: 'Opening Keynote: Writing Now! Keeping the Human Voice in AI-Assisted Writing',
          detail: `<span class='agenda-speaker'>講者：<b>Duncan Brumby</b><br>Professor, University College London<br><br>主持人：曾元琦 國立清華大學</span>`,
        },
        {
          time: '10:30 - 10:50',
          title: 'Coffee Break',
          detail: '',
        },
        {
          time: '10:50 - 11:38',
          title: 'Paper Session 1: 人工智慧、人際關係與社會連結 / AI, Relationships, and Social Connection',
          detail: `<span class='agenda-speaker'>主持人：許有真 國立清華大學</span><div class='poster-flexbox'>
  <div class='poster-item'><span class='poster-id'>10:50 - 11:02</span><div class='poster-info'><span class='poster-title'><span class='award-tag'>🎖️ Honorable Mentioned Award</span>From Message Assistants to Relational Mediators: Rethinking AI's Role in Shaping Early Disclosure in Online Dating</span><span class='poster-author'>Pei-Hua Tsai, Anthony Tang, and Yung-Ju Chang</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>11:02 - 11:14</span><div class='poster-info'><span class='poster-title'>拉近與「擬」的距離：以想像力為調節，探討VTuber直播特性對觀眾社會臨場感與擬社會互動之影響</span><span class='poster-author'>王昭雲</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>11:14 - 11:26</span><div class='poster-info'><span class='poster-title'><span class='award-tag'>🎖️ Honorable Mentioned Award</span>人工智慧對調解群體極化效應之研究： 以數位身分證議題為例</span><span class='poster-author'>廖語岑,  陳宜秀</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>11:26 - 11:38</span><div class='poster-info'><span class='poster-title'>Past Tense, Present Love: How Revisiting Nostalgic Instant Message History Supports Intimate Relationships</span><span class='poster-author'>Yi-Tong Chen, Ping-Jung Chiu, and Chien-Wen Yuan</span></div></div>
</div>`,
        },
        {
          time: '11:38 - 13:20',
          title: 'Lunch Break',
          detail: '',
        },
        {
          time: '13:20 - 14:20',
          title: 'Paper Session 2: 人機協作與創意設計 / Human-AI Collaboration and Creative Design',
          detail: `<span class='agenda-speaker'>主持人：張永儒 國立陽明交通大學</span><div class='poster-flexbox'>
  <div class='poster-item'><span class='poster-id'>13:20 - 13:32</span><div class='poster-info'><span class='poster-title'><span class='award-tag'>🎖️ Honorable Mentioned Award</span>Seeing Us in Our Stories: Co-designing Storytelling Chatbots with Southeast Asian Immigrant Mothers in Taiwan</span><span class='poster-author'>Yu-Rou Lin, Yang Hong, En-Kai Chang, Kuan-Lun Ho, Ke-Yu Wu, and Ying-Yu Chen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>13:32 - 13:44</span><div class='poster-info'><span class='poster-title'>Designing with AI: A Comparative Study of Human and AI-Assisted Logo Designs for Brand Communication</span><span class='poster-author'>Arian Ettefaghpour and Yaliang Chuang</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>13:44 - 13:56</span><div class='poster-info'><span class='poster-title'>促進多角色大型語言模型創意發想的人機協作：以人類引導策略為中心的探討</span><span class='poster-author'>曾昱婷, 劉劭禹, 李圯瀞, 畢南怡, 陳炳宇</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>13:56 - 14:08</span><div class='poster-info'><span class='poster-title'><span class='award-tag'>🎖️ Honorable Mentioned Award</span>MuseExplorer: An AI-Powered System to Scaffold Problem Framing for Novice Designers</span><span class='poster-author'>Guan Xiu Jin and Neng Hao Yu</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>14:08 - 14:20</span><div class='poster-info'><span class='poster-title'>Challenges to Co-Design with Marginalized Groups in Non-Western Contexts: A Systematic Literature Review</span><span class='poster-author'>Yang Hong, Yu-Rou Lin, En-Kai Chang, and Ying-Yu Chen</span></div></div>
</div>`,
        },
        {
          time: '14:20 - 17:00',
          title: 'Poster session 1',
          detail: `<div class='poster-flexbox'>
  <div class='poster-item'><span class='poster-id'>Poster #1</span><div class='poster-info'><span class='poster-title'>從溝通到創造： 融合多模態互動與人際關係視覺化的科技藝術創作研究</span><span class='poster-author'>Chieh Ju Huang, Hsuan-Fang Yuan, Yun-Hsiang Tsai, Yu-Hua Hsiao, Yu-An Chen, Jia-Zhen Chan and Yi-Ling Shen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #2</span><div class='poster-info'><span class='poster-title'>結合生成式AI與互動設計轉化「美麗羞恥」之情緒體驗設計</span><span class='poster-author'>Chieh Ju Huang, Tzu-Hui Hung, Chih-Yu Chang, Wan-Yu Yang, Hsin-Ying Tsai, Rou-Tong Chen and Chia-Chin Wu</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #3</span><div class='poster-info'><span class='poster-title'>誰被它關懷？數位接待員在民宿的關懷與設計實踐</span><span class='poster-author'>蕭伊辰</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #4</span><div class='poster-info'><span class='poster-title'>Towards Understanding How Healthcare Professionals Revise AI Responses to Common Diabetes Questions</span><span class='poster-author'>Cai-Ling Wang and Yuan-Chi Tseng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #5</span><div class='poster-info'><span class='poster-title'>「build cool stuff plz」 ——人工智慧圖像生成技術的使用者建構與規範性政治</span><span class='poster-author'>王璟</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #6</span><div class='poster-info'><span class='poster-title'>不只是圖像被修復：AI修復中的情境知識與隱藏勞動力探討</span><span class='poster-author'>Xian Xing Hung</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #7</span><div class='poster-info'><span class='poster-title'>From Flat Screens to Immersive Space: Rethinking Multimodal Learning of Complex Systems</span><span class='poster-author'>Shih-Yu Ma, Sandra Bae, Ellen Yi-Luen Do, Tom Yeh and Elizabeth Bradley</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #8</span><div class='poster-info'><span class='poster-title'>革新音樂製作的未來技術－探討使用者對於語音克隆技術所製成AI Cover歌曲的聆聽體驗</span><span class='poster-author'>鄭仲珈</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #9</span><div class='poster-info'><span class='poster-title'>結合多代理(Multi-Agent)技術的企業營運分析與決策支援系統設計及應用</span><span class='poster-author'>蔡銘城, 曾元琦</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #10</span><div class='poster-info'><span class='poster-title'>探討設計如何影響線上會議中的實體感</span><span class='poster-author'>Ziling Cai</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #11</span><div class='poster-info'><span class='poster-title'>當機器人毒舌起來：風格如何影響使用者的依附關係</span><span class='poster-author'>王紫琪</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #12</span><div class='poster-info'><span class='poster-title'>Mema!d ——結合遊戲化認知檢測與家庭共享機制之高齡健康應用設計</span><span class='poster-author'>陳妍真, 侯家安</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #13</span><div class='poster-info'><span class='poster-title'>探索人機協作中溝通意圖對信任感和協作效能的影響</span><span class='poster-author'>Yunyu Hu and Yihsiu Chen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #14</span><div class='poster-info'><span class='poster-title'>探究人們如何透過民間理論理解使用生成式 AI 的詭異經驗-以ChatGPT為例</span><span class='poster-author'>翁基紘</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #15</span><div class='poster-info'><span class='poster-title'>這是禮貌還是討好? 探討使用者對 ChatGPT 奉承語氣的辨識與感知</span><span class='poster-author'>Yi-Shan Cheng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #16</span><div class='poster-info'><span class='poster-title'>From Fatigue to Affirmation - A Biopsychosocial Approach to Reframing Nighttime Caregiving Through Emotionally Intelligent Interaction Design</span><span class='poster-author'>Yi-Ai Lin, Mi-To Hou, Ting-Shan Pan, Ching-Jung Cheng, Tzu-Ling Chen and Zi-Ling Cai</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #17</span><div class='poster-info'><span class='poster-title'>數位職場中的非語言符號使用：表意方式、溝通情境、組織內溝通方向與訊息正負性對工作滿意度的影響</span><span class='poster-author'>Tzu-Jung Chang and Chu-Han Chen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #18</span><div class='poster-info'><span class='poster-title'>新塑時代的可食植物圖鑑：從實證研究到感官推測的設計</span><span class='poster-author'>鄭秀芳, 梁容輝</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #19</span><div class='poster-info'><span class='poster-title'>明日吐司：感知化設計在心理消耗時代的反思應用</span><span class='poster-author'>鄭秀芳, 梁容輝</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #20</span><div class='poster-info'><span class='poster-title'>遺忘的場所——數位記憶的侘寂式消逝</span><span class='poster-author'>鄭秀芳, 劉怡萱, 魏芷榆, 梁容輝</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #21</span><div class='poster-info'><span class='poster-title'>Analysis of physiological synchrony in Acts of Appreciation</span><span class='poster-author'>Makoto Shinnishi, Mutsumi Suganuma, Mizuki Kato and Yuri Tanaka</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #22</span><div class='poster-info'><span class='poster-title'>探討非人代理者於互動設計中之情感陪伴效益</span><span class='poster-author'>陳妏欣, 陳姿汝, 李婉貞</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #23</span><div class='poster-info'><span class='poster-title'>Botender: Toward Human-AI Collaboration in Taste Exploration through Portable Cocktail Sensing System</span><span class='poster-author'>Po-Yu Chen, Tsung-Han Hsiao and Lung-Pan Cheng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #24</span><div class='poster-info'><span class='poster-title'>Open Your Mouth, Please?-Tangible VR Simulation for Pediatric Dental Education</span><span class='poster-author'>Chia-Ying Wu, Chia-Hsuan Chiu and Yi-Chun Ko</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #25</span><div class='poster-info'><span class='poster-title'>非語言符碼在情緒互動設計中的應用—以Ficho裝置為例</span><span class='poster-author'>林亞涵, 夏涓, 陳姿汝, 李婉貞</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #26</span><div class='poster-info'><span class='poster-title'>Toward Multi-Device Interaction for On-Site Troubleshooting: Integrating AR Glasses, Tablet, and Voice Assistant</span><span class='poster-author'>Chin-Lang Peng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #27</span><div class='poster-info'><span class='poster-title'>探討初學者在生成式AI輔助下故事板敘述表現研究</span><span class='poster-author'>連恒, 游翔衣, 陳姿汝, 李婉貞</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #28</span><div class='poster-info'><span class='poster-title'>生成式AI工具協同設計流程與設計思考4D模型的框架：在互動設計課程中的行動研究</span><span class='poster-author'>許安岑, 陳昱君, 陳姿汝, 李婉貞</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #29</span><div class='poster-info'><span class='poster-title'>NTHUnlock——國際學生在清大校園的適應系統</span><span class='poster-author'>林宜德, 李秉諭, 洪卉然, 吳庭儀, 許有真</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #30</span><div class='poster-info'><span class='poster-title'>Evidence of What, from Where, and by Which Calculations? The Cultural Labor of Automated Policing</span><span class='poster-author'>Wei Jie Hsiao and Ke Yu Tsao</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #31</span><div class='poster-info'><span class='poster-title'>設備背後的生活世界：以設計研究方法反思遊戲互動技術的社會影響</span><span class='poster-author'>陳智芳, 謝恩</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #32</span><div class='poster-info'><span class='poster-title'>360 虛擬環景網頁可用性設計 : 以資訊搜尋過程四階段模型探索影響互動滿意度的可用性關鍵指標與設計建議</span><span class='poster-author'>Tzu-Jung Chang, Chen-Shi Liu, Zheng-Hsin Yang, and Jiunde Lee</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #33</span><div class='poster-info'><span class='poster-title'>讀書帳的說服力：探討筆記字體、內容與貼文讚數如何影響購買意願</span><span class='poster-author'>Chu-Han Chen and Chih-Yen Yeh</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #34</span><div class='poster-info'><span class='poster-title'>探討校園聊天機器人之角色設定研究</span><span class='poster-author'>Zhao Yun Wang, Li Yu Wu and Jiun De Lee</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #35</span><div class='poster-info'><span class='poster-title'>Puzzle Me This: Generating Playful Challenges by Repurposing Everyday Objects</span><span class='poster-author'>Alvaro Lopez, Yee Kit Chan and Lung-Pan Cheng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #41</span><div class='poster-info'><span class='poster-title'>當 AI 傾聽你，從感覺結構觀點探討大型語言模型中的 人機情感互動與自我揭露</span><span class='poster-author'>劉沐恩, 游絲涵</span></div></div>
</div>`,
        },
        {
          time: '14:20 - 17:00',
          title: 'GANZIN X TAICHI 學生競賽',
          detail: `<div class='poster-flexbox'>
  <div class='poster-item'><span class='poster-id'>OptiBotics</span><div class='poster-info'><span class='poster-title'>基於人類視覺策略之機器學習模型於工具辨識系統開發</span><span class='poster-author'>Yi-Chih Chu, Kuang-Jou Chen, Chen-Yin Nien, Yun-Ju Lee, Shao-Yuan Huang</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>我是偷看小班長</span><div class='poster-info'><span class='poster-title'>Peeking Simulator: An Immersive Game Simulating the Social Dynamics of Gaze</span><span class='poster-author'>CheHan Hsieh, YuTing Tseng, ChuChi Chang, YinTing Lu</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>GazeCraft</span><div class='poster-info'><span class='poster-title'>Visualizing Everything in 3D Real-Time 3D Content Generation Using Eye-Tracking and Generative Models</span><span class='poster-author'>Suibi Che-Chuan Weng, Shih-Yu Ma, Hsiang-Ling Chang, Ellen Yi-Luen Do</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>ＭochiSol</span><div class='poster-info'><span class='poster-title'>提升社群數位覺察的眼動眼鏡情境感知介入設計</span><span class='poster-author'>魏秭翊，郭瑞晴，林筱于，張婷艾，陳冠宇</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Tsukumo</span><div class='poster-info'><span class='poster-title'>How to find invisible existence- Experience Japanese culture with SOL GLASSES</span><span class='poster-author'>Suzuki Keita, Ozu Akira, Kotaro Sato</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Baby in Car</span><div class='poster-info'><span class='poster-title'>基於 SOL Glasses 的智慧型駕駛安全評估系統</span><span class='poster-author'>Sz Wei, Chen, Jui I, Peng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>心眼 (xīn yǎn)</span><div class='poster-info'><span class='poster-title'>Real-Time Eye-Tracking Feedback for Basketball Training</span><span class='poster-author'>Tahmida Fatmala Zulva, Benedikta Anna Haulian Siboro</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>用路安全比麻醬麵重要（路比醬）</span><div class='poster-info'><span class='poster-title'>Guide Glasses–行人安全街景導覽眼鏡</span><span class='poster-author'>洪翠憶，李唯綸</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>我住在十八尖山</span><div class='poster-info'><span class='poster-title'>Smart Driving Safety Assistant System Using Sol Glasses Eye-Tracking and Context-Aware Warning</span><span class='poster-author'>胡凱泓，陳羿華，張成宇，趙祥宇</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>為什麼要眼動春日儀</span><div class='poster-info'><span class='poster-title'>超越螢幕的視界: 不靠手、不靠聲，只靠一雙眼 —— 打造融於生活中的視線控制平台</span><span class='poster-author'>謝恩，郭昶佑，陳寬銘，郝宇宏</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>瞳瞳是道</span><div class='poster-info'><span class='poster-title'>透過眼動儀探索觀看影音內容時的生理反應與主觀喜好之關聯性</span><span class='poster-author'>羅詩妤，楊佳蓁，蘇禹丞，林祁緯</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>The Xperts</span><div class='poster-info'><span class='poster-title'>An Expert-Guided Learning Framework with SOL Glasses</span><span class='poster-author'>Cathy Hou, Yang Chen Lin, Po-Chih Kuo</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>DesGlasses</span><div class='poster-info'><span class='poster-title'>New Audio guide for an art museum</span><span class='poster-author'>大岡千咲，福島花音，栁澤孝彰，高田澪，Nathan Proud'hon</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>ARC_方舟計劃</span><div class='poster-info'><span class='poster-title'>洞悉學習盲點:GazePro 眼動科技翻轉外語閱讀學習</span><span class='poster-author'>陳育陞，余明倢，陳韋蓉</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>0809</span><div class='poster-info'><span class='poster-title'>Unlocking Inner Vision: Consciousness Visualization with SOL GLASSES and Generative Art</span><span class='poster-author'>李欣霏，鞏持靚</span></div></div>
</div>`,
        },
        {
          time: '14:30 - 16:00',
          title: 'Panel 1: 心理學與人機互動',
          detail: '',
        },
        {
          time: '16:00 - 17:00',
          title: 'Tutorial: A tutorial on LLM-based HCI Research ',
          detail: `<span class='agenda-speaker'>講者：<b>Uichin Lee</b><br>Professor, KAIST</span>`,
        },
        {
          time: '18:00 - 21:00',
          title: 'Banquet at 清大風雲樓4F:湖漾餐廳',
          detail: '',
        },
      ],
      day2Agenda: [
        {
          time: '09:00 - 10:00',
          title: 'Paper Session 3: 創新技術與智慧系統 / Emerging Technologies and Intelligent Systems',
          detail: `<span class='agenda-speaker'>主持人：陳盈羽 國立陽明交通大學</span><div class='poster-flexbox'>
  <div class='poster-item'><span class='poster-id'>9:00 - 9:12</span><div class='poster-info'><span class='poster-title'>Beyond 'You Are Stressed': Exploring Supportive Feedback Modalities in Emotion Tracking Systems</span><span class='poster-author'>Wen-Wei Chen, Tsai-Hsuan Lin, Wan-Che Hung, Yi-Ching Li, Ming-Yu Ku, and Si-Yu Lai</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>9:12 - 9:24</span><div class='poster-info'><span class='poster-title'><span class='award-tag'>🎖️ Honorable Mentioned Award</span>FlueBricks: A Modular Toolkit for Interactive Flute-like Instrument Systems</span><span class='poster-author'>Bo-Yu Chen, Chiao-Wei Huang, and Lung-Pan Cheng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>9:24 - 9:36</span><div class='poster-info'><span class='poster-title'>利用多模態輸入於大型語言模型以理解使用者與機器人溝通之意圖</span><span class='poster-author'>劉彥廷, 王秋玄, 陳姿伶, 李婷穎, 王子華, 林建銘, 陳炳宇, 蔡欣叡</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>9:36 - 9:48</span><div class='poster-info'><span class='poster-title'><span class='award-tag'>🎖️ Honorable Mentioned Award</span>探索非牛頓流體結合日常用品之運動應用</span><span class='poster-author'>許柏潁, 洪靖雯, Hamza Shah Khan, 陳炳宇, and Jun Nishida</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>9:48 - 10:00</span><div class='poster-info'><span class='poster-title'>Adapting the Message: How Feedback Delivery Styles Shape Students' Visualization Construction Literacy</span><span class='poster-author'>Nathania Josephine, Michelle Meng-Ding Liu, Yu-Ling Wang, Zheng-Han Huang, and Ko-Chih Wang</span></div></div>
</div>`,
        },
        {
          time: '10:00 - 10:20',
          title: 'Coffee Break',
          detail: '',
        },
        {
          time: '10:20 - 11:20',
          title: 'Paper Session 4: 沉浸式體驗與混合實境 / Immersive Experiences and Mixed Reality',
          detail: `<span class='agenda-speaker'>主持人：鄧善元 國立台灣大學</span><div class='poster-flexbox'>
  <div class='poster-item'><span class='poster-id'>10:20 - 10:32</span><div class='poster-info'><span class='poster-title'><span class='award-tag'>🎖️ Honorable Mentioned Award</span>虛擬實境正面心理意象訓練對面試焦慮與自我效能之影響</span><span class='poster-author'>昌易臻, 許有真</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>10:32 - 10:44</span><div class='poster-info'><span class='poster-title'>MORTIS: Morphing Object Appearance through Personal Affordance Substitution for Proxy-Based Virtual Experiences</span><span class='poster-author'>Yu-Wei Chang, De-Yuan Lu, Po-Yu Chen, and Lung-Pan Cheng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>10:44 - 10:56</span><div class='poster-info'><span class='poster-title'>FisheyeVR: Extending the Field of View by Dynamic Zooming in Virtual Reality</span><span class='poster-author'>De-Yuan Lu and Lung-Pan Cheng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>10:56 - 11:08</span><div class='poster-info'><span class='poster-title'>MRfidget: Creating Fidgets in Mixed Reality</span><span class='poster-author'>Shun-Hsun Liang, Janghyeon Lee, Suyeon Shin, Xing-Dong Yang, Lung-Pan Cheng, and Lawrence H. Kim</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>11:08 - 11:20</span><div class='poster-info'><span class='poster-title'>Gaze-to-Body: Addressing Expressive Gaps of Desktop Users in Hybrid VR Meetings through Gaze-Driven Head-Controlled Avatars</span><span class='poster-author'>Ching Huang, Yu Chuan Chen, Meng Ting Shih, Rong-Hao Liang, and Liwei Chan</span></div></div>
</div>`,
        },
        {
          time: '11:20 - 13:00',
          title: 'Lunch Break',
          detail: '',
        },
        {
          time: '13:00 - 15:40',
          title: 'Poster session 2 and Demo',
          detail: `<div class='poster-flexbox'>
  <div class='poster-item'><span class='poster-id'>Poster #36</span><div class='poster-info'><span class='poster-title'>生成式AI於國小教師備課於數位教學政策實踐中之設計探討: ChatGPT在國小數學科之備課與教學成效之反思</span><span class='poster-author'>Kang Hsin Hsu and Wei-Chi Chien</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #37</span><div class='poster-info'><span class='poster-title'>基於順從性的AI生成式圖像性別偏見研究： 人機互動中提示詞的方法</span><span class='poster-author'>Tzu Yu Chen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #38</span><div class='poster-info'><span class='poster-title'>不只輸入年齡與個人資訊：人們如何理解並使用ChatGPT作占卜</span><span class='poster-author'>冉志杰</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #39</span><div class='poster-info'><span class='poster-title'>以侘寂美學轉譯的 AI 數位儀式設計實踐</span><span class='poster-author'>Hsin-Ting Chung, Wei-Chen Chen, Si-Ying Chen and Rung-Huei Liang</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #40</span><div class='poster-info'><span class='poster-title'>探索企業電子郵件助理的人機協作流程設計 —以AI分類與回覆原型為例</span><span class='poster-author'>林義登, 曾元琦</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #42</span><div class='poster-info'><span class='poster-title'>Tending to Things: An Animistic Service Design Framework for Non-Human Stakeholders</span><span class='poster-author'>Chang-Gu Lin</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #43</span><div class='poster-info'><span class='poster-title'>Social Talk and Asymmetric Knowledge: How Small Talk and Information Access Shape Human Perceptions in Human-Robot Collaboration</span><span class='poster-author'>Yu-Hsuan Lin, Yung-Han Fan and Yoyo Tsung-Yu Hou</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #44</span><div class='poster-info'><span class='poster-title'>結合肢體與音訊特徵之個人化鋼琴演奏視覺系統設計</span><span class='poster-author'>蔡岱臻, 黃稚筌, 許程胤, 張舜涵, 李炘穎, 胡敏君, 潘則佑</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #45</span><div class='poster-info'><span class='poster-title'>Papillon：結合視覺辨識的視障女性生理期應用設計</span><span class='poster-author'>郭瑞晴, 張芷榕, 蕭孟菱, 張雅婷, 郭哲豪</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #46</span><div class='poster-info'><span class='poster-title'>人智協作中人工智慧代理人的回饋取向與形式對設計構思之影響</span><span class='poster-author'>Hsuan-Ming Huang and Yihsiu Chen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #47</span><div class='poster-info'><span class='poster-title'>Context Avatar: Dynamic Event Representation for Improved Avatar Comprehension and Privacy-Aware Content-Sharing</span><span class='poster-author'>Yi-Lien Chang, Sheng-Cian Lee, Ting-Han Wu and Liwei Chan</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #48</span><div class='poster-info'><span class='poster-title'>應用說服式理論於情緒紀錄功能的數位日記工具設計</span><span class='poster-author'>Ting-Chen Lu, Chia-Chi Lin, Chiau-Le Lio, Jian-Jhan Sun, Tu-Tong Li, Chee-Yee Kuah, Hsiu-Ping Yueh and Hung-Chun Chang</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #49</span><div class='poster-info'><span class='poster-title'>AI代理人作為參與者對團體決策的影響</span><span class='poster-author'>Ching-Chun Hsu and Yihsiu Chen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #50</span><div class='poster-info'><span class='poster-title'>以AI 生成閾限圖像探索個人記憶場域的詩意地圖 A Poetic Map of Personal Memory Through AI-Generated Liminal Imagery</span><span class='poster-author'>Lin Hong-Ru and Liang Rung-Huei</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #51</span><div class='poster-info'><span class='poster-title'>移動環境下混合實境互動模式對自動駕駛車輛乘客之影響：基於手勢、眼動及射線指向技術之實驗分析</span><span class='poster-author'>Chih-Heng Tam and Neng-Hao Yu</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #52</span><div class='poster-info'><span class='poster-title'>以 MarTech 打造高互動品牌行銷與顧客旅程設計</span><span class='poster-author'>Tzu-Yi Wei and Hui-Ping Liao</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #53</span><div class='poster-info'><span class='poster-title'>Developing Non-verbal Behaviors for an MR Tour Avatar</span><span class='poster-author'>An Hsu and Liwei Chan</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #54</span><div class='poster-info'><span class='poster-title'>互動式餅乾設計App與永續 3D 食品列印流程</span><span class='poster-author'>Tzu Jung Wang and Tsuei Ju Hsieh</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #55</span><div class='poster-info'><span class='poster-title'>結合生成式AI之數位筆記工具對使用者認知負荷之影響—認知卸載的視角</span><span class='poster-author'>林耕締, 俞齊山, 范丙林</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #56</span><div class='poster-info'><span class='poster-title'>Action Recognition and Visualization System based on Deep Learning for Analyzing Habitual Basketball Movements</span><span class='poster-author'>Min-Syuan Chen, Sin-En Lee, Cheng-Chih Tsai, Tzu-Cheng Lo, Min-Chun Hu, Tse-Yu Pan and Yi-Fen Chen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #57</span><div class='poster-info'><span class='poster-title'>Integrating Generative AI and Extended Reality with Physical Prototyping and User Testing</span><span class='poster-author'>Ching Chou and Neng-Hao Yu</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #58</span><div class='poster-info'><span class='poster-title'>AI協作產生行為建議對個體生涯自我效能的影響</span><span class='poster-author'>Wen-Ling Chi and Yihsiu Chen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #59</span><div class='poster-info'><span class='poster-title'>MusicMorph: Transforming Music into Immersive Visuals with Motion and Scene Creation</span><span class='poster-author'>Chi Tsao, Tai-Chen Tsai, Tzu-Cheng Lo, Yu-Hsuan Cheng and Tse-Yu Pan</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #60</span><div class='poster-info'><span class='poster-title'>Exploring Interactive 3D Scene Creation in Virtual Reality with Generated Panoramas</span><span class='poster-author'>Cheng-Chih Tsai and Tse-Yu Pan</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #61</span><div class='poster-info'><span class='poster-title'>Is It More Acceptable When AI Speaks Bluntly? Understanding the Impact of Direct Feedback on User Perception</span><span class='poster-author'>Ming-Jie Yu, Wei-Rong Chen and Tsung-Yu Hou</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #62</span><div class='poster-info'><span class='poster-title'>透過改造互動式家具探索延展實境中虛擬寵物的具身陪伴體驗</span><span class='poster-author'>Jung Shen, Meng-Wei Lu, Chieh-Hsin Liu, Yen-Hua Lai and Ping-Hsuan Han</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #63</span><div class='poster-info'><span class='poster-title'>A Design Study on How Generative AI Tools Support Storybook Creation Workshops for Older Adults</span><span class='poster-author'>Yu-Hsuan Lin and Yoyo Tsung-Yu Hou</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #64</span><div class='poster-info'><span class='poster-title'>被設計的同理心：企業如何建構 Empathic AI 與情緒福祉的未來想像</span><span class='poster-author'>Yi-Ting Hsieh</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #65</span><div class='poster-info'><span class='poster-title'>透過喝水習慣建立創造屬於自己的水滴寶寶-水水出沒</span><span class='poster-author'>陳孟渘, 簡廷曆, 朱蕾靜, 游雅昀, 許有真</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #66</span><div class='poster-info'><span class='poster-title'>若祂在場：賽博神聖空間建構的增強體驗設計</span><span class='poster-author'>廖國伶, 陳宜秀</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #67</span><div class='poster-info'><span class='poster-title'>設計聊天機器人促進大學生校園內容參與與價值共創</span><span class='poster-author'>林子晴, 鐘明倢, 林宇柔, 陳唯一, 許峻誠</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #68</span><div class='poster-info'><span class='poster-title'>AI 圖形生成中的人機協作策略觀察</span><span class='poster-author'>鄭秀芳, 鄭司維</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #69</span><div class='poster-info'><span class='poster-title'>Illusory Eyescape — Visualizing Consciousness through Generative Art and Gaze Interaction</span><span class='poster-author'>Sin-Fei Lee and Ming-Te Chi</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #70</span><div class='poster-info'><span class='poster-title'>虛擬訓練對兒童粗大動作運動協調的成效</span><span class='poster-author'>吳柏徴, 何基辰, 張晏齊, 劉佳柔, 黃怡錚</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #71</span><div class='poster-info'><span class='poster-title'>Skill Map: A Graph-Based Visual Interface for Scaffolding Skill Acquisition and Exploration</span><span class='poster-author'>Yu-Chen Chuang, Xin-Ti Wu, Mi-To Hou, and Sheng-Wen Chen</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Poster #72</span><div class='poster-info'><span class='poster-title'>驅動銀髮族的內在動機：從自我決定理論建構AI互動人物誌</span><span class='poster-author'>Wan Lin Sun, Hung Yu Chen, Li Yu Wu, Ya Ting Chang and Jiunde Lee</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #1</span><div class='poster-info'><span class='poster-title'>TitanFeel, A Body-Worn Haptic VR System for Enhancing Attack on Titan Gameplay</span><span class='poster-author'>Tsai-Ni Chen, Yun Huang, Wen-Tzu Huang and Wei-Jhen Wu</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #2</span><div class='poster-info'><span class='poster-title'>TAG: Enhancing the horror game experience with a Cooling system and a 3DoF device</span><span class='poster-author'>Hsiang-Chih Chiu, Yi-Cheng Huang and Yun-Chen Cheng</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #3</span><div class='poster-info'><span class='poster-title'>AI驅動互動敘事遊戲〈SLAVR〉 - 以AI輔助玩家對話功能影響遊戲 AI NPC 好感度的機制設計探索</span><span class='poster-author'>Ling-Qiao Huang and Jiunde Lee</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #4</span><div class='poster-info'><span class='poster-title'>MRDAW: Towards Collaborative Digital Audio Workstations in Mixed Reality</span><span class='poster-author'>Shih-Yu Ma, Torin Hopkins, Ming-Yuan Pai, Suibi Che-Chuan Weng, Ellen Yi-Luen Do and Luca Turchet</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #5</span><div class='poster-info'><span class='poster-title'>Open Your Mouth, Please?-Tangible VR Simulation for Pediatric Dental Education</span><span class='poster-author'>Chia-Ying Wu, Chia-Hsuan Chiu and Yi-Chun Ko</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #6</span><div class='poster-info'><span class='poster-title'>生成式AI引導失智症長者藝術創作可行性研究</span><span class='poster-author'>黃慧蓮, 陳一平</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #7</span><div class='poster-info'><span class='poster-title'>清醒夢境-虛實交界的情境敘事</span><span class='poster-author'>Yu-Tung Wu, Chia-Yu Wang and Shih-Wei Sun</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #8</span><div class='poster-info'><span class='poster-title'>A Versatile and Expandable VR Content Authoring Tool : VRsatilis</span><span class='poster-author'>Norimichi Idehara, Guilhem Mas and Kenji Fujioka</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #9</span><div class='poster-info'><span class='poster-title'>促進酒精使用障礙復原的協作式聊天機器人行動支援系統</span><span class='poster-author'>Yu-Ching Lin, Yan-Ming Chen, Chih-Ching Chuang, Pin-Yu Liu, Yun-Jen Wu, Hsiang-Yen Fan, Chien Wen Yuan, Nanyi Bi, Shu-Hao Hsu, Hu-Ming Chang, Ming-Chyi Huang and Chuang-Wen You</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #10</span><div class='poster-info'><span class='poster-title'>DinoForce-An Immersive Haptic Experience System for Dinosaur Apocalypse Simulation</span><span class='poster-author'>Yu-Chieh Chao, Tzu-Chia Fu and Yu-Ching Wu</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #11</span><div class='poster-info'><span class='poster-title'>探索非牛頓流體結合日常用品之運動應用</span><span class='poster-author'>許柏潁, 洪靖雯, Hamza Shah Khan, 陳炳宇, and Jun Nishida</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #12</span><div class='poster-info'><span class='poster-title'>A VR Rhythm Dance Game Driven by Wotagei</span><span class='poster-author'>Kalin Lai, Guan-Wen Wang, Yi Ting, Heng-Hao Wang, Hsuan-Tung Lai, Zhe-Cheng Chang, Po-Hung Chiang and Wen-Kai Tai</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #13</span><div class='poster-info'><span class='poster-title'>Foot Joystick: a Foot-based Input Device Designed for Joystick-like Input Interaction</span><span class='poster-author'>Cheng-Kai Tu and Liwei Chan</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #14</span><div class='poster-info'><span class='poster-title'>Eye-Foot Movement of Objects in Extended Reality</span><span class='poster-author'>Chih-Jou Li, Hsuan-Hsuan Lee and Liwei Chan</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>Demo #15</span><div class='poster-info'><span class='poster-title'>若祂在場：賽博神聖空間建構的增強體驗設計</span><span class='poster-author'>廖國伶, 陳宜秀</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>OpenHCI #1</span><div class='poster-info'><span class='poster-title'>DearPlanet</span><span class='poster-author'>張上元、鄭羽芹、林履杰、許安、鄭婷云、魏秭翊、傅鈺婷、李佳蓉</span></div></div>
  <div class='poster-sep'></div>
  <div class='poster-item'><span class='poster-id'>OpenHCI #2</span><div class='poster-info'><span class='poster-title'>Oblivilight 憶光：探索情感支持生成式人工智慧的遺忘機制</span><span class='poster-author'>湯宇、張韻柔、邱馨論、李思穎、陶俊儒、周杰穎、巫芊瑩</span></div></div>
</div>`,
        },
        {
          time: '13:00 - 14:30',
          title: 'Panel 2: 科技藝術與人機互動',
          detail: '',
        },
        {
          time: '15:40 - 16:40',
          title: 'Closing Keynote: Data-Driven Digital Health and Wellbeing',
          detail: `<span class='agenda-speaker'>講者：<b>Uichin Lee</b><br>Professor, KAIST<br><br>主持人：游創文 國立清華大學</span>`,
        },
        {
          time: '16:40 - 17:00',
          title: 'Award ceremony and Closing',
          detail: '',
        },
      ],
    };
  },
  methods: {
    toggleDrawer(day, idx) {
      const arr = this.openDrawers[day];
      const i = arr.indexOf(idx);
      if (i > -1) {
        arr.splice(i, 1);
      } else {
        arr.push(idx);
      }
      // force reactivity
      this.openDrawers[day] = [...arr];
    },
    isOpen(day, idx) {
      return this.openDrawers[day].includes(idx);
    },
  },
};
</script>

<style scoped>
.page-title {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
  margin-bottom: 32px;
  letter-spacing: 2px;
  text-align: center;
}
.agenda-bg-wrap {
  background: rgba(255,255,255,0.25);
  border-radius: 24px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  padding: 32px 0 32px 0;
  margin: 30px auto 32px auto;
  max-width: 1000px;
  position: relative;
}
.agenda-days {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.agenda-day {
  flex: 1 1 400px;
  min-width: 320px;
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.02);
  padding: 24px 18px 18px 18px;
  margin-bottom: 24px;
}
.agenda-day-title {
  font-family: 'Agressive', 'Noto Sans TC', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 18px;
  color: #ffffff;
  letter-spacing: 2px;
  text-align: left;
}
.agenda-drawer {
  margin-bottom: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 1px 6px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: box-shadow 0.2s, background 0.2s;
  border: 2px solid #A3D0B7;
  outline: 2px solid transparent;
  outline-offset: 0px;
}
.agenda-drawer-header {
  display: flex;
  align-items: center;
  padding: 18px 20px;
  font-size: 1.1rem;
  font-weight: 700;
  background: rgba(255,255,255,0.04);
  color: #fff;
  border: none;
  outline: none;
  transition: background 0.2s, color 0.2s;
}
.agenda-drawer-header.clickable {
  cursor: pointer;
}
.agenda-drawer-header.clickable:hover {
  background: rgba(255,255,255,0.32);
  color: #ffe082;
}
.agenda-drawer-header.clickable.open,
.agenda-drawer-header.clickable:active {
  background: rgba(255,255,255,0.38);
  color: #ffd54f;
}
.agenda-time {
  min-width: 120px;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 1rem;
  color: #fff;
  margin-right: 18px;
}
.agenda-title {
  flex: 1;
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
}
.agenda-arrow {
  display: flex;
  align-items: center;
  margin-left: 12px;
  transition: transform 0.2s;
}
.agenda-arrow.open {
  transform: rotate(180deg);
}
.agenda-drawer-content {
  background: rgba(255,255,255,0.12);
  padding: 18px 24px 18px 24px;
  font-size: 1rem;
  color: #fff;
  border-top: 1px solid rgba(255,255,255,0.18);
  animation: fadeIn 0.2s;
}
.agenda-speaker {
  display: block;
  margin-top: 8px;
  font-size: 0.98rem;
  color: #fff;
}
@media (max-width: 900px) {
  .agenda-days {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
  .agenda-day {
    max-width: 100vw;
    min-width: 0;
    width: 100%;
  }
}
@media (max-width: 600px) {
  .agenda-bg-wrap {
    padding: 8px 0 8px 0;
    border-radius: 8px;
  }
  .agenda-day {
    padding: 12px 6px 8px 6px;
    border-radius: 8px;
  }
  .agenda-day-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  .agenda-drawer-header {
    font-size: 0.98rem;
    padding: 12px 10px;
  }
  .agenda-drawer-content {
    padding: 12px 10px;
  }
}
.drawer-enter-active, .drawer-leave-active {
  transition: max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-enter, .drawer-leave-to {
  max-height: 0;
  opacity: 0;
}
.drawer-enter-to, .drawer-leave {
  max-height: 300px;
  opacity: 1;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

<style>
.award-tag {
  display: block;
  width: fit-content;
  background: linear-gradient(180deg, #fffde4 60%, #ffe082 100%);
  color: #ad6500;
  font-weight: 500;
  font-size: 0.95em;
  border-radius: 12px;
  padding: 2px 10px 2px 8px;
  margin-bottom: 6px;
  vertical-align: middle;
  box-shadow: 0 1px 4px rgba(0,0,0,0.38);
  letter-spacing: 0.5px;
}
.poster-flexbox {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: none;
  border-radius: 0;
  overflow: hidden;
  flex-wrap: wrap;
}
.poster-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 18px 24px 12px 24px;
  border-radius: 12px;
  margin-bottom: 0;
  position: relative;
  min-height: 70px;
  min-width: 300px;
}
.poster-id {
  flex: 0 0 80px;
  font-weight: 700;
  font-size: 1.1rem;
  color: #fff;
  margin-right: 18px;
  margin-top: 2px;
  min-width: 120px;
}
.poster-info {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
}
.poster-title {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 4px;
  font-family: 'Noto Sans TC', sans-serif;
}
.poster-author {
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
  margin-top: 2px;
  font-family: 'Noto Sans TC', sans-serif;
  display: block;
}
.poster-sep {
  height: 1px;
  width: 100%;
  background: rgba(255,255,255,0.7);
  border: none;
  margin: 0 0 8px 0;
}
@media (max-width: 900px) {
  .poster-item {
    padding: 14px 10px 8px 10px;
    border-radius: 10px;
  }
  .poster-id {
    margin-bottom: 4px;
    margin-right: 0;
  }
}
</style>