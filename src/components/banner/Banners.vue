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
  gap: 20px;
}

.bannerTitle {
  color: #1b0000;
  font-size: 48px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  line-height: 1.2;
  word-break: break-word;
  flex: 1;
  min-width: 0;
}

.onBanner {
  flex-shrink: 0;
}

/* Tablet - Orta ekranlar */
@media (max-width: 1024px) {
  .banner {
    height: 240px;
  }

  .bannerContent {
    padding: 0 25px;
    gap: 15px;
  }

  .bannerTitle {
    font-size: 36px;
  }
}

/* Tablet - Küçük ekranlar */
@media (max-width: 768px) {
  .banner {
    height: 200px;
    padding: 0 15px;
  }

  .bannerContent {
    flex-direction: row;
    gap: 15px;
    text-align: left;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
  }

  .bannerTitle {
    font-size: 24px;
    flex: 1;
    text-align: left;
  }

  .onBanner {
    flex-shrink: 0;
  }
}

/* Mobil - Orta */
@media (max-width: 480px) {
  .banner {
    height: 180px;
    padding: 0 10px;
  }

  .bannerContent {
    gap: 10px;
    padding: 0 10px;
  }

  .bannerTitle {
    font-size: 20px;
    letter-spacing: 0.5px;
    line-height: 1.2;
  }
}

/* Mobil - Küçük ekranlar */
@media (max-width: 375px) {
  .banner {
    height: 170px;
  }

  .bannerContent {
    gap: 8px;
  }

  .bannerTitle {
    font-size: 18px;
    line-height: 1.2;
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
    gap: 6px;
  }

  .bannerTitle {
    font-size: 16px;
    letter-spacing: 0.3px;
    line-height: 1.2;
  }
}
</style>
