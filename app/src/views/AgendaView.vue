<template>
    <div class="page-container">
      <div class="inclusigen-container">
        <div style="height: 60px;"></div>
        <h1 class="page-title">議程</h1>
        <div class="agenda-bg-wrap">
          <div class="agenda-tab-view">
            <button
              class="agenda-tab"
              :class="{ active: selectedDay === 1 }"
              @click="selectedDay = 1"
            >
              DAY 1
            </button>
            <button
              class="agenda-tab"
              :class="{ active: selectedDay === 2 }"
              @click="selectedDay = 2"
            >
              DAY 2
            </button>
          </div>
          <div class="agenda-image-container">
            <img
              v-if="selectedDay === 1"
              src="@/assets/議程/議程1.png"
              alt="Day 1 Agenda"
              class="agenda-image"
            />
            <img
              v-else
              src="@/assets/議程/議程2.png"
              alt="Day 2 Agenda"
              class="agenda-image"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'AgendaView',
    data() {
      return {
        selectedDay: 1,
      };
    },
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
  
  
  .card-content >>> h3 {
    font-family: 'Agressive', 'Noto Sans TC', sans-serif;
    font-weight: 900;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .deadline h4 {
    margin: 5px;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 800;
  }
  
  .card-content p {
    margin: 5px;
    line-height: 1.8;
    letter-spacing: 1px;
  }
  
  .card-content ul {
    margin: 5px 0 20px 0;
    font-size: 16px;
    line-height: 1.5;
    list-style-type: '・ ';
    padding-left: 50px;
  }
  
  .card-content ul li {
    margin: 5px 0;
  }
  
  @media screen and (max-width: 768px) {
    .card-content ul {
      padding-left: 20px;
    }
    
  }
  
  .card-content >>> a {
    color: white;
  }
  
  .small-content {
    margin: 20px 0;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
  }
  
  .page-title {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 900;
    font-size: 2.5rem;
    margin-bottom: 32px;
    letter-spacing: 2px;
  }
  .agenda-bg-wrap {
    background: rgba(255,255,255,0.2);
    border-radius: 18px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    padding: 0 0 32px 0;
    margin: 30px auto 32px auto;
    max-width: 900px;
    position: relative;
  }
  .agenda-tab-view {
    display: flex;
    gap: 16px;
    position: relative;
    margin-bottom: -8px;
    justify-content: flex-start;
    padding-left: 12px;
    z-index: 2;
    top: 15px;
  }
  .agenda-tab {
    background: none;
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: #bfc5be;
    padding: 12px 36px 16px 36px;
    border-radius: 16px 16px 0 0;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    outline: none;
    position: relative;
    box-shadow: none;
    z-index: 3;
    font-family: 'Agressive', sans-serif;
  }
  .agenda-tab.active {
    color: #fff;
    box-shadow: 0 -2px 8px rgba(0,0,0,0.06);
  }
  .agenda-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    margin-bottom: 40px;
    padding-top: 30px;
  }
  .agenda-image {
    width: 80%;
    max-width: 720px;
    height: auto;
  }
  @media (max-width: 768px) {
    .agenda-bg-wrap {
      border-radius: 8px;
      padding: 0 0 16px 0;
      max-width: 100vw;
    }
    .agenda-image {
      width: 100%;
    }
    .agenda-tab-view {
      gap: 4px;
      padding-left: 8px;
    }
    .agenda-tab {
      font-size: 1.1rem;
      padding: 8px 16px 12px 16px;
      border-radius: 8px 8px 0 0;
    }
  }
  

  .inclusigen-container {
    flex: 1 0 auto;
  }
  .footer {
    flex-shrink: 0;
    width: 100%;
    text-align: center;
    color: #000;
    font-size: 1rem;
    letter-spacing: 2px;
    padding: 0;
    position: relative;
    height: 50px;
  }
  </style>