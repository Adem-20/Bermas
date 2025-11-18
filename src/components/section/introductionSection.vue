<script setup>
import { ref, onMounted } from "vue";
import bermasIcon from "../../assets/introduction/bermasIcon.png";
import introVideo from "../../assets/video/introduction/introductionCoffeVideo.mp4";

const stats = ref([
  { value: 0, target: 100, label: "Taze Kahve", suffix: "%" },
  { value: 0, target: 15, label: "Çeşit Pasta", suffix: "+" },
  { value: 0, target: 300, label: "Mutlu Müşteri", suffix: "+" },
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

  const statsSection = document.querySelector(".introCardContainer");
  if (statsSection) {
    observer.observe(statsSection);
  }
});
</script>

<template>
  <section class="introSection">
    <div class="introContainer">
      <div class="introleft">
        <div class="logoCircleContainer">
          <div class="logoCircle">
            <img :src="bermasIcon" alt="Bermas Icon" class="bermasIcon" />
          </div>
          <h4 class="companyName">Bermas Gıda</h4>
        </div>
      </div>
      <div class="introRight">
        <h3>Tutku İle Hazırlanan Lezzet</h3>
        <p class="introDescription">
          Bermas Gıda olarak, <br />
          kahve ve donuk pasta sektöründe kalite ve güven odaklı hizmet
          sunuyoruz. Öz markamız Kahf Coffee ile premium kahve deneyimini, özel
          üretim donuk pastalarımız ile de taze ve lezzetli tatları işletmelere
          ulaştırıyoruz.
        </p>
        <div class="introCardContainer">
          <div v-for="(stat, index) in stats" :key="index" class="cardIntro">
            <h5>{{ stat.value }}{{ stat.suffix }}</h5>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="videoSection">
      <div class="videoHeader">
        <h3 class="videoTitle">Kahveden Fincana Yolculuk</h3>
        <p class="videoSubtitle">
          Her çekirdeğin özenle seçildiği, ustalıkla kavurulduğu bir deneyim
        </p>
      </div>

      <div class="videoWrapper">
        <div class="introVideo">
          <video
            :src="introVideo"
            muted
            autoplay
            playsinline
            loop
            preload="metadata"
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.videoSection {
  margin: 100px auto;
  animation: fadeInUp 1s ease-out;
}

.videoHeader {
  text-align: center;
  margin-bottom: 50px;
  border-top: 3px solid #d4a574;
  width: 100%;
}

.videoTitle {
  font-size: 48px;
  font-weight: 700;
  color: #d4a574;
  margin: 0 0 16px 0;
  position: relative;
  display: inline-block;
  margin-top: 8%;
}

.videoTitle::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #d4a574, transparent);
}

.videoSubtitle {
  font-size: 18px;
  font-weight: 500;
  color: #666;
  margin: 20px 0 0 0;
  font-style: italic;
}

.videoWrapper {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.introVideo {
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(212, 165, 116, 0.3),
    0 0 0 1px rgba(212, 165, 116, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.introVideo:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 80px rgba(212, 165, 116, 20),
    0 0 0 1px rgba(212, 165, 116, 0.2);
}

.introVideo video {
  display: block;
  width: 100%;
  height: auto;
  min-height: 500px;
  max-height: 400px;
  object-fit: cover;
  background: #000;
  transition: transform 0.4s ease;
}

.introVideo:hover video {
  transform: scale(1.02);
}

@media (max-width: 1024px) {
  .videoSection {
    margin: 60px auto;
    padding: 0 30px;
  }

  .videoTitle {
    font-size: 40px;
  }

  .videoWrapper {
    padding: 0 20px;
  }

  .introVideo video {
    min-height: 400px;
    max-height: 600px;
  }
}

@media (max-width: 768px) {
  .videoSection {
    margin: 40px auto;
    padding: 0 20px;
  }

  .videoHeader {
    margin-bottom: 30px;
  }

  .videoTitle {
    font-size: 32px;
  }

  .videoSubtitle {
    font-size: 16px;
  }

  .videoWrapper {
    padding: 0 15px;
  }

  .introVideo {
    padding: 6px;
    border-radius: 15px;
  }

  .introVideo video {
    min-height: 300px;
    max-height: 450px;
    border-radius: 12px;
  }
}

@media (max-width: 480px) {
  .videoSection {
    margin: 30px auto;
    padding: 0 15px;
  }

  .videoTitle {
    font-size: 28px;
  }

  .videoSubtitle {
    font-size: 14px;
  }

  .videoWrapper {
    padding: 15px;
  }

  .videoDecoration {
    width: 30px;
    height: 30px;
  }

  .videoWrapper:hover .videoDecoration {
    width: 35px;
    height: 35px;
  }

  .introVideo {
    padding: 4px;
    border-radius: 12px;
  }

  .introVideo video {
    min-height: 250px;
    max-height: 350px;
    border-radius: 10px;
  }

  .introVideo:hover {
    transform: translateY(-4px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
