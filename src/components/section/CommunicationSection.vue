<script setup></script>

<template>
  <section class="communationSection">
    <h2 class="communationMainTitle">BİR KAHVE UZAKTA</h2>
    <div class="mainContainer">
      <div class="leftSection">
        <h3 class="cardSectionTitle">İLETİŞİM</h3>
        <div class="cardContainer">
          <div class="cardInfo">
            <div class="cardInfoIcon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
            </div>
            <div class="cardInfoContent">
              <h5>TELEFON</h5>
              <p>
                Atatürk Mahallesi, Gıda Sitesi Cad. No:45 Karşıyaka, İzmir 35540
              </p>
            </div>
          </div>
          <div class="cardInfo">
            <div class="cardInfoIcon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="cardInfoContent">
              <h5>E-POSTA</h5>
              <p>
                Atatürk Mahallesi, Gıda Sitesi Cad. No:45 Karşıyaka, İzmir 35540
              </p>
            </div>
          </div>
          <div class="cardInfo">
            <div class="cardInfoIcon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div class="cardInfoContent">
              <h5>ÇALIŞMA SAATLERİ</h5>
              <p>
                Atatürk Mahallesi, Gıda Sitesi Cad. No:45 Karşıyaka, İzmir 35540
              </p>
            </div>
          </div>
          <div class="cardInfo">
            <div class="cardInfoIcon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="cardInfoContent">
              <h5>Adres</h5>
              <p>
                Atatürk Mahallesi, Gıda Sitesi Cad. No:45 Karşıyaka, İzmir 35540
              </p>
            </div>
          </div>
        </div>
        <div class="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.635769043272!2d29.001294275503568!3d37.7751377719852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7417a88601545%3A0x3a0bae1d9a266a84!2sBermas%20G%C4%B1da%20Sanayi%20ve%20Ticaret%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1762607187847!5m2!1str!2str"
            width="100%"
            height="450"
            style="border: 0; border-radius: 12px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="rightSection">
        <div class="contactFormContent">
          <h3 class="contactFormTitle">BİZE ULAŞIN</h3>
          <form class="contactForm" id="contactForm">
            <div class="nameMailGrid">
              <input type="text" name="name" placeholder="Ad Soyad" required />
              <input type="email" name="email" placeholder="E-Posta" required />
            </div>
            <input type="tel" name="phone" placeholder="Telefon (Opsiyonel)" />
            <textarea
              rows="5"
              name="message"
              placeholder="Mesajınız"
              required
            ></textarea>
            <button type="submit" class="contactFormBtn">GÖNDER</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.communationSection {
  padding: 100px 20px;
}
.communationMainTitle {
  position: relative;
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  color: #d4a574;
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 20px;
  animation: fadeInUp 0.8s ease-out;
}
.communationMainTitle::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #d4a574, transparent);
}

.mainContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.leftSection {
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 14px;
  margin-top: 10%;
  border: 2px solid #d4a574;
  border-radius: 30px;
}

.rightSection {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  border: 2px solid #d4a574;
  border-radius: 30px;
}

.cardSectionTitle {
  margin: 0 auto;
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 800;
  color: #d4a574;
}

.cardContainer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cardInfo {
  display: flex;
  gap: 16px;
  padding: 28px;
  background: #fff;
  border: 2px solid #1b0000;
  border-radius: 12px;
  transition: all 0.3s ease;
  min-height: 140px;
  height: 100%;
}
.cardInfoIcon {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  display: grid;
  padding: 20px;
  place-items: center;
  background: #d4a574;
  color: #fff;
  border-radius: 10px;
}
.cardInfoContent {
  flex: 1;
}
.cardInfoContent h5 {
  color: #d4a574;
}
.cardInfoContent p {
  color: #1b0000;
}

.mapContainer {
  margin-top: 16px;
}

.contactFormContent {
  padding: 40px;
  border-radius: 14px;
  position: relative;
}
.contactFormTitle {
  margin: 0 0 24px;
  font-size: clamp(22px, 2.5vw, 28px);
  font-weight: 800;
  color: #d4a574;
  text-align: center;
}
.nameMailGrid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
}
.contactForm {
  display: grid;
  gap: 16px;
}
.contactForm input {
  width: 100%;
  padding: 12px 14px;
  border: 2px solid #1b0000;
  border-radius: 10px;
  font: inherit;
  outline: none;
  transition: all 0.3s ease;
}
.contactForm textarea {
  width: 100%;
  padding: 12px 14px;
  border: 2px solid #1b0000;
  border-radius: 10px;
  font: inherit;
  outline: none;
  transition: all 0.3s ease;
}
.contactFormBtn {
  padding: 24px 48px;
  border-radius: 999px;
  border: 0;
  cursor: pointer;
  background: #d4a574;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.06em;
  transition: all 0.3s ease;
  font-size: 18px;
}

@media (max-width: 992px) {
  .mainContainer {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
