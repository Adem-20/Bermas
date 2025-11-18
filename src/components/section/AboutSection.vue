<script setup>
import { ref, onMounted } from "vue";

const stats = ref([
  { value: 0, target: 2024, label: "Kuruluş Yılı", suffix: "" },
  { value: 0, target: 100, label: "Mutlu İş OrtaĞı", suffix: "+" },
  { value: 0, target: 50, label: "ÜRÜN ÇEŞİDİ", suffix: "+" },
  { value: 0, target: 24, label: "KESİNTİSİZ Hİzmet", suffix: "/7" },
]);

const animateValue = (stat, duration = 2000) => {
  const start = 0;
  const end = stat.target;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    stat.value = Math.floor(progress * (end - start) + start);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.value.forEach((stat) => animateValue(stat));
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsSection = document.querySelector(".statsGrid");
  if (statsSection) {
    observer.observe(statsSection);
  }
});
</script>

<template>
  <section class="aboutSection">
    <div class="aboutContainer">
      <div class="aboutHeader" data-aos="fade-up">
        <span class="aboutBadge">Bermas Gıda</span>
        <h1 class="aboutTitle">Kalİte ve Lezzet Tutkumuz</h1>
        <div class="titleDecoration"></div>
      </div>

      <div class="aboutContent">
        <div class="storySection" data-aos="fade-right">
          <div class="storyCard">
            <h3>HİKAYEMİZ</h3>
            <p>
              2024 yılında kurulan <strong>Bermas Gıda</strong>, kahve ve
              dondurulmuş pasta sektöründe yenilikçi yaklaşımıyla hızla büyüyen
              bir tedarik markasıdır. Kahve tutkusuyla başlayan yolculuğumuz,
              bugün kendi kahve markamız ve premium pasta çeşitlerimizle
              müşterilerimize en üst düzey hizmeti sunmaktadır.
            </p>
          </div>

          <div class="storyCard">
            <h3>Vİzyonumuz</h3>
            <p>
              Toptan ve perakende sektöründe, müşterilerimize en taze ve
              kaliteli ürünleri sunmak için durmaksızın çalışıyoruz. Özel kahve
              markamızla sektörde fark yaratırken, dondurulmuş pasta
              çeşitlerimizle de işletmelerin vazgeçilmez iş ortağı olmayı
              hedefliyoruz.
            </p>
          </div>
        </div>

        <div class="featuresSection" data-aos="fade-left">
          <div class="featureCard">
            <h4>Özel Kahve Markamız</h4>
            <p>
              Dünyanın dört bir yanından özenle seçtiğimiz çekirdeklerle
              hazırladığımız kendi kahve markamız, taze kavrum ve benzersiz tat
              profilleriyle öne çıkıyor.
            </p>
          </div>

          <div class="featureCard">
            <h4>Dondurulmuş Pasta TedarİKİ</h4>
            <p>
              Premium kalitede dondurulmuş pasta çeşitlerimiz, işletmenizin
              ihtiyaç duyduğu pratiklik ve lezzeti bir arada sunuyor. Hijyenik
              koşullarda üretim ve hızlı teslimat garantisi.
            </p>
          </div>

          <div class="featureCard">
            <h4>Toptan & Perakende</h4>
            <p>
              Kafeler, restoranlar ve pastanelerden bireysel müşterilere kadar
              geniş bir yelpazede hizmet veriyoruz. Her ölçekte siparişiniz için
              esnek çözümler sunuyoruz.
            </p>
          </div>

          <div class="featureCard">
            <h4>KalİTE GARANTİSİ</h4>
            <p>
              Tüm ürünlerimiz titiz kalite kontrol süreçlerinden geçer. Tazelik,
              hijyen ve müşteri memnuniyeti bizim için her şeyin başında gelir.
            </p>
          </div>
        </div>
      </div>

      <div class="statsSection" data-aos="fade-up">
        <div class="statsGrid">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="statCard"
            :data-aos="'zoom-in'"
            :data-aos-delay="index * 100"
          >
            <div class="statValue">{{ stat.value }}{{ stat.suffix }}</div>
            <div class="statLabel">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="valuesSection" data-aos="fade-up">
        <h2 class="valuesTitle">DEĞERLERİMİZ</h2>
        <div class="valuesGrid">
          <div class="valueCard" data-aos="flip-left" data-aos-delay="0">
            <div class="valueIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="16 12 12 8 8 12" />
                <line x1="12" y1="16" x2="12" y2="8" />
              </svg>
            </div>
            <h4>MÜKEMMELLİK</h4>
            <p>Her üründe en yüksek kalite standartlarını hedeflİyoruz</p>
          </div>
          <div class="valueCard" data-aos="flip-left" data-aos-delay="100">
            <div class="valueIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h4>Güven</h4>
            <p>Müşterilerimizle uzun vadeli iş ortaklıkları kuruyoruz</p>
          </div>
          <div class="valueCard" data-aos="flip-left" data-aos-delay="200">
            <div class="valueIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                />
              </svg>
            </div>
            <h4>YENİLİKÇİLİK</h4>
            <p>Sektördeki yenilikleri takip ediyor, sürekli gelişiyoruz</p>
          </div>
          <div class="valueCard" data-aos="flip-left" data-aos-delay="300">
            <div class="valueIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z"
                />
                <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" />
              </svg>
            </div>
            <h4>SürdürülebİLİRLİK</h4>
            <p>Çevreye saygılı üretim ve tedarik zinciri süreçleri</p>
          </div>
        </div>
      </div>

      <div class="ctaSection" data-aos="zoom-in">
        <h3>İŞİNİZ İÇİN DOĞRU ADRES</h3>
        <p>
          Kahve ve pasta tedariki için bizimle iletişime geçin. Size özel
          çözümler sunalım.
        </p>
        <button class="ctaBtn" @click="$router.push('/communation')">
          İLETİŞİME GEÇİN
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aboutSection {
  min-height: 100vh;
  padding: 120px 20px 80px;
  position: relative;
  overflow: hidden;
}
s .aboutContainer {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.aboutHeader {
  text-align: center;
  margin-bottom: 80px;
  animation: fadeInUp 0.8s ease-out;
}

.aboutBadge {
  display: inline-block;
  padding: 8px 24px;
  background: #d4a574;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
}

.aboutTitle {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #d4a574;
  font-weight: 800;
  margin: 20px 0;
  font-size: 42px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.titleDecoration {
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #d4a574, transparent);
  margin: 20px auto;
  border-radius: 2px;
}

.aboutContent {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

@media (max-width: 1100px) {
  .aboutContent {
    grid-template-columns: 1fr;
  }
}

.storySection {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.storyCard {
  background: #fff;
  backdrop-filter: blur(20px);
  border: 2px solid #d4a574;
  border-radius: 24px;
  padding: 40px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.storyCard::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.storyCard:hover::before {
  opacity: 1;
}

.storyCard:hover {
  transform: translateY(-10px);
  border-color: #d4a574;
  box-shadow: 0 20px 60px rgba(212, 165, 116, 0.2);
  color: #fff;
  z-index: 1000;
  z-index: 3;
}

.storyCard h3 {
  font-size: 1.8rem;
  color: #d4a574;
  border-bottom: 2px solid #d4a574;
  margin-bottom: 16px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.storyCard p {
  color: #1b0000;
  line-height: 1.8;
  font-size: 16px;
  letter-spacing: 0.3px;
  font-weight: 600;
}

.storyCard strong {
  color: #d4a574;
  font-weight: 600;
}

.featuresSection {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .featuresSection {
    grid-template-columns: 1fr;
  }
}

.featureCard {
  backdrop-filter: blur(20px);
  border: 2px solid #d4a574;
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
}

.featureCard:hover {
  border-color: #d4a574;
  transform: translateY(-10px);
}

.featureCard h4 {
  font-size: 1.2rem;
  color: #d4a574;
  margin-bottom: 10px;
  font-weight: 900;
  text-transform: uppercase;
  border-bottom: 2px solid #d4a574;
  letter-spacing: 1.5px;
}

.featureCard p {
  color: #1b0000;
  line-height: 1.6;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.statsSection {
  margin: 80px 0;
}

.statsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.statCard {
  backdrop-filter: blur(20px);
  border: 2px solid #d4a574;
  border-radius: 20px;
  padding: 40px 20px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.statCard:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(212, 165, 116, 0.2);
}

.statValue {
  font-size: 3rem;
  font-weight: 800;
  background: #d4a574;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.statLabel {
  color: #1b0000;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.valuesSection {
  margin: 110px 0;
  text-align: center;
}

.valuesTitle {
  position: relative;
  display: inline-block;
  margin-bottom: 5%;
  color: #d4a574;
  font-size: 48px;
}

.valuesTitle::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #d4a574, transparent);
}
.valuesGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.valueCard {
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px 30px;
  transition: all 0.4s ease;
}

.valueCard:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px #d4a574;
}

.valueIcon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d4a574 0%, #c89a63 100%);
  border-radius: 50%;
  filter: drop-shadow(0 4px 8px rgba(212, 165, 116, 0.3));
}

.valueIcon svg {
  width: 30px;
  height: 30px;
  color: #fff;
}

.valueCard h4 {
  font-size: 1.5rem;
  color: #d4a574;
  margin-bottom: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  border-bottom: 2px solid #d4a574;
}

.valueCard p {
  color: #1b0000;
  line-height: 1.6;
  letter-spacing: 0.3px;
  font-weight: 500;
}

.ctaSection {
  background: linear-gradient(135deg, #d4a574 0%, #c89a63 100%);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
}

.ctaSection h3 {
  font-size: 36px;
  color: #fff;
  margin-bottom: 16px;
  font-weight: 800;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;
}
.ctaSection h3::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #fff, transparent);
}

.ctaSection p {
  font-size: 1.2rem;
  color: #1b0000;
  margin-bottom: 30px;
  font-weight: 600;
  position: relative;
  z-index: 1;
  letter-spacing: 0.5px;
}

.ctaBtn {
  background: #fff;
  color: #d4a574;
  border: none;
  padding: 16px 48px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
}

.ctaBtn:hover {
  transform: translateY(-3px);
  background: #fff;
}

@media (max-width: 768px) {
  .aboutSection {
    padding: 80px 15px 60px;
  }

  .aboutContent {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .aboutTitle {
    font-size: 2rem;
  }

  .storyCard,
  .featureCard {
    padding: 25px;
  }

  .statsGrid,
  .valuesGrid {
    grid-template-columns: 1fr;
  }

  .ctaSection {
    padding: 40px 25px;
  }

  .ctaSection h3 {
    font-size: 1.8rem;
  }
}
</style>
