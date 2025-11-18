<script setup>
import bannerLogo from "../../assets/banners/bannerLogo.png";
import { onMounted, ref } from "vue";

const bannerReady = ref(false);

onMounted(() => {
  // Tarayıcı render'ı tamamladıktan sonra başlat
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bannerReady.value = true;
    });
  });
});
defineProps({
  title: String,
});
import Breadcrumbs from "./BreadCrumb.vue";
</script>

<template>
  <div class="banner" :style="{ backgroundImage: `url(${bannerLogo})` }">
    <div class="bannerOverlay"></div>
    <div class="bannerContent">
      <h1 class="bannerTitle">{{ title }}</h1>
      <Breadcrumbs class="onBanner" />
    </div>
  </div>
</template>

<style scoped>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px) translateZ(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
}

.banner {
  position: relative;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideDown 0.6s ease-out;
  padding: 0 20px;
  /* GPU hızlandırma ve titreme önleme */
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  transform-style: preserve-3d;
}
.banner-ready {
  animation: slideDown 0.35s ease-out forwards;
}

.bannerOverlay {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.bannerContent {
  position: relative; 
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  transform: translateZ(0);
  will-change: transform;
}

.bannerTitle {
  color: #1b0000;
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  line-height: 1.2;
}

.onBanner {
  flex-shrink: 0;
}

/* Tablet - Orta ekranlar */
@media (max-width: 1024px) {
  .banner {
    height: 280px;
  }

  .bannerContent {
    padding: 0 30px;
  }

  .bannerTitle {
    font-size: clamp(28px, 3.5vw, 40px);
  }
}

/* Tablet - Küçük ekranlar */
@media (max-width: 768px) {
  .banner {
    height: 220px;
    padding: 0 15px;
  }

  .bannerContent {
    flex-direction: column;
    gap: 15px;
    text-align: center;
    padding: 0 15px;
  }

  .bannerTitle {
    font-size: clamp(24px, 3vw, 32px);
  }

  .onBanner {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

/* Mobil - Orta */
@media (max-width: 480px) {
  .banner {
    height: 200px;
    padding: 0 10px;
  }

  .bannerContent {
    gap: 12px;
    padding: 0 10px;
  }

  .bannerTitle {
    font-size: clamp(20px, 5vw, 26px);
    letter-spacing: 0.5px;
  }
}

/* Mobil - Küçük ekranlar */
@media (max-width: 375px) {
  .banner {
    height: 180px;
  }

  .bannerTitle {
    font-size: clamp(18px, 5vw, 22px);
  }
}

/* Çok küçük ekranlar */
@media (max-width: 320px) {
  .banner {
    height: 160px;
    padding: 0 8px;
  }

  .bannerContent {
    padding: 0 8px;
    gap: 10px;
  }

  .bannerTitle {
    font-size: 18px;
    letter-spacing: 0.3px;
  }
}
</style>
