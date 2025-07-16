<template>
  <div class="page-container">
    <div class="inclusigen-container">
      <div style="height: 60px;"></div>
        <h1 class="page-title">註冊會議</h1>
        <div style="height: 30px;"></div>
        <div class="container">
          <div class="register-section">
            <h2 class="section-title">個人報名</h2>
            <p>請至 KKTIX 頁面連結進行報名。</p>
            <a href="https://taiwanchi.kktix.cc/events/202508020803" target="_blank" class="register-button">前往 KKTIX 報名</a>
          </div>
          <div class="register-section">
            <h2 class="section-title">團體報名 <span style="font-size: 16px; color: #888;">(截止日至 2025/7/25 )</span></h2>
            <p>為提供學校、實驗室、機構中心或公司行號等單位進行團體報名 (無折扣優惠)，團體報名可填寫Excel表單 (範例：
              <a href="https://docs.google.com/spreadsheets/d/1azzmT4kD52mMuT8ENujrTun1Pb-cj-sK/edit?usp=share_link&ouid=114976198777232289975&rtpof=true&sd=true" target="_blank">Excel表單下載</a> )。
              請自行結算出正確團體報名金額後，匯款至下列華南商業銀行帳戶，進行團體報名：</p>
            <div class="bank-info">
              <div>戶名：社團法人台灣人機互動學會</div>
              <div>銀行名稱：華南商業銀行</div>
              <div>銀行代號：008</div>
              <div>帳號：154100091731</div>
            </div>
            <p>匯款完成後請將匯款收據清楚拍照，將所填寫的「團體報名Excel表單」連同「匯款單照片」透過上面的團體報名Google 表單連結上傳。</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScXQjq2Xj1ZzXSXLuv_V8q3tOLaJKHgL0VEYMD461Pog2SDTA/viewform?usp=dialog" target="_blank" class="register-button group">前往團體報名 Google 表單</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
}
</script>

<style scoped>
.inclusigen-container {
    max-width: 900px;
    margin: auto;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    padding: 30px 20px 40px 20px;
    flex: 1 0 auto;
}
.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.register-section {
    background: #fff2;
    border-radius: 12px;
    padding: 20px 40px 30px 40px;
  box-shadow: 0 1px 4px rgba(99,37,102,0.06);
  margin-bottom: 10px;
}
.register-section >>> a {
    color: #fff;
}
.register-button {
  display: inline-block;
  margin-top: 16px;
  background: linear-gradient(to right, #632566, #C64BCC);
  color: #fff;
  font-weight: bold;
  padding: 10px 28px;
  border-radius: 80px;
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.13);
  transition: opacity 0.3s;
}
.register-button:hover {
  opacity: 0.9;
}
.register-button.group {
  background: linear-gradient(to right, #C64BCC, #632566);
}
.bank-info {
  background: #f2e6fa;
  border-radius: 8px;
  padding: 12px 18px;
  margin: 18px 0;
  font-size: 1rem;
  color: #632566;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .inclusigen-container {
    padding: 10px 0 20px 0;
  }
  .container {
    gap: 24px;
  }
  .register-section {
    padding: 16px 15px;
  }
}
</style> 