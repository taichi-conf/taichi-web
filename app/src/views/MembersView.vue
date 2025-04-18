// OrganizationPage.vue
<template>
  <div class="page-container">
    <div class="inclusigen-container">
    <div style="height: 60px;"></div>
    <div class="section">
      <h1 class="page-title">組織 & 成員</h1>
      
      <!-- General Chairs -->
      <div class="chair-section">
        <h2 class="section-title">會議主席 GENERAL CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in generalChairs" :key="`general-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Paper Chairs -->
      <div class="chair-section">
        <h2 class="section-title">論文主席 PAPER CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in paperChairs" :key="`paper-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Poster Chairs -->
      <div class="chair-section">
        <h2 class="section-title">海報主席 POSTER CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in posterChairs" :key="`poster-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Demo Chairs -->
      <div class="chair-section">
        <h2 class="section-title">展示主席 DEMO CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in demoChairs" :key="`demo-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Publication Chairs -->
      <div class="chair-section">
        <h2 class="section-title">出版主席 PUBLICATION CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in publicationChairs" :key="`publication-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Sponsor Chairs -->
      <div class="chair-section">
        <h2 class="section-title">贊助主席 SPONSOR CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in sponsorChairs" :key="`sponsor-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Publicity Chairs -->
      <div class="chair-section">
        <h2 class="section-title">宣傳主席 PUBLICITY CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in publicityChairs" :key="`publicity-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Panel Chairs -->
      <div class="chair-section">
        <h2 class="section-title">論壇主席 PANEL CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <h3>PANEL - 心理學與人機互動：</h3>
            <div v-for="(chair, index) in panelChairsHCI" :key="`panel-hci-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3>PANEL - 科技藝術：</h3>
            <div v-for="(chair, index) in panelChairsTechArt" :key="`panel-tech-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Design Competition Chair -->
      <div class="chair-section">
        <h2 class="section-title">設計競賽主席 DESIGN COMPETITION CHAIR</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in designCompetitionChairs" :key="`design-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Web Chairs -->
      <div class="chair-section">
        <h2 class="section-title">網路主席 WEB CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in webChairs" :key="`web-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Student Volunteer Chairs -->
      <div class="chair-section">
        <h2 class="section-title">學生志願者主席 STUDENT VOLUNTEER CHAIRS</h2>
        <div class="card">
          <div class="card-content">
            <div v-for="(chair, index) in studentVolunteerChairs" :key="`volunteer-${index}`">
              {{ chair.name }} / {{ chair.affiliation }}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="footer">COPYRIGHT © 2025 TAICHI</div>
  </div>
</template>

<script>
export default {
  name: 'OrganizationPage',
  data() {
    return {
      generalChairs: [
        { name: '游創文', affiliation: '國立清華大學科技藝術研究所' },
        { name: '莊雅量', affiliation: '國立清華大學藝術與設計系' },
        { name: '曾元琦', affiliation: '國立清華大學 AIMS FELLOWS' },
        { name: '詹力韋', affiliation: '國立陽明交通大學資訊工程系' }
      ],
      paperChairs: [
        { name: '余能豪', affiliation: '國立臺灣科技大學設計系' },
        { name: '顏羽君', affiliation: '國立陽明交通大學資訊工程系' },
        { name: '許有真', affiliation: '國立清華大學學習科學與科技研究所' },
        { name: '莊雅量', affiliation: '國立清華大學藝術與設計系' }
      ],
      posterChairs: [
        { name: '王秋玄', affiliation: '國立臺灣大學創新設計學院' },
        { name: '鄭宇婷', affiliation: '國立臺灣大學設計系' },
        { name: '謝翠如', affiliation: '國立清華大學藝術與設計系' }
      ],
      demoChairs: [
        { name: '洪靖雯', affiliation: '國立臺灣大學資訊網路與多媒體研究所' },
        { name: '蔡遵弘', affiliation: '國立清華大學科技藝術研究所' }
      ],
      publicationChairs: [
        { name: '袁千雯', affiliation: '國立臺灣大學創新設計學院' },
        { name: '畢南怡', affiliation: '國立臺灣大學資訊管理學系暨研究所' }
      ],
      sponsorChairs: [
        { name: '陳書儀', affiliation: '銘傳大學資訊管理學系' }
      ],
      publicityChairs: [
        { name: '侯宗佑', affiliation: '國立政治大學傳播學院' },
        { name: '王采翎', affiliation: '國立清華大學AIMS Fellows' }
      ],
      panelChairsHCI: [
        { name: '羅仕宇', affiliation: '國立陽明交通大學傳播所' },
        { name: '許富淞', affiliation: '國立陽明交通大學傳播所' }
      ],
      panelChairsTechArt: [
        { name: '邱誌勇', affiliation: '國立清華大學科技藝術研究所' }
      ],
      designCompetitionChairs: [
        { name: '陳炳宇', affiliation: '國立臺灣大學資訊網路與多媒體研究所' }
      ],
      webChairs: [
        { name: '鄭  棻', affiliation: '國立清華大學藝術與設計研究所 ' },
        { name: '何捷睿', affiliation: '國立清華大學服務科學研究所' }
      ],
      studentVolunteerChairs: [
        { name: '施孟廷', affiliation: '國立陽明交通大學資訊工程系' }
      ]
    }
  }
}
</script>

<style scoped>

.card-content {
  padding: 10px 30px;
  font-family: 'noto sans', sans-serif;
  font-size: 20px;
  line-height: 42px;
  font-weight: 800;
}


.card-content h3 {
  font-family: 'Agressive', 'Noto Sans TC', sans-serif;
  font-weight: 900;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 20px;
}

.chair-section {
  margin-bottom: 30px;
}
</style>