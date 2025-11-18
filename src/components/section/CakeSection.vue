<script setup>
import { ref } from "vue";
import { cakeCategories } from "../../data/cakeSection.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const selectedCategory = ref("cheesecake");
const selectedCake = ref("limonluCheesecake");
const trendyolBaseUrl =
  "https://www.trendyol.com/magaza/kahf-coffee-m-1128809?channelId=1&sst=0&sk=1";

const modules = [Navigation, Pagination];

const handleCategoryChange = (category) => {
  selectedCategory.value = category;
  const firstCake = Object.keys(cakeCategories[category].items)[0];
  selectedCake.value = firstCake;
};

const handleCoffeeChange = (cakeKey) => {
  selectedCake.value = cakeKey;
};

const getCurrentCake = () => {
  return cakeCategories[selectedCategory.value].items[selectedCake.value];
};
</script>

<template>
  <section class="DessertDetailSection">
    <div class="coffeeDetailContainer">
      <div class="titleWrapper">
        <h2 class="mainTitle">
          <span class="titleLine"></span>
          <span class="titleText">Pasta Koleksiyonu & Sunum Rehberi</span>
          <span class="titleLine"></span>
        </h2>
        <p class="subtitle">
          Profesyonel mutfaklar İçİn tazelİk, hız ve tutarlılık
        </p>
      </div>

      <div class="categorySlider">
        <Swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="20"
          :navigation="true"
          :pagination="{ clickable: true }"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }"
        >
          <SwiperSlide v-for="(category, key) in cakeCategories" :key="key">
            <button
              @click="handleCategoryChange(key)"
              :class="['categoryBtn', { active: selectedCategory === key }]"
            >
              <span class="btnText">{{ category.name }}</span>
              <span class="btnShine"></span>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="coffeeDetailButtons">
        <button
          v-for="(coffee, key) in cakeCategories[selectedCategory].items"
          :key="key"
          @click="handleCoffeeChange(key)"
          :class="['coffeeDetailBtn', { active: selectedCake === key }]"
        >
          <span class="pillDot"></span>
          {{ coffee.name }}
        </button>
      </div>

      <div class="coffeeDetailContent">
        <div class="coffeeHeader">
          <div class="coffeeBadge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
              />
            </svg>
            <span>Premium Quality</span>
          </div>

          <h3 class="coffeeName">{{ getCurrentCake().name }}</h3>
          <p class="coffeeDesc">{{ getCurrentCake().description }}</p>

          <div class="cakesInfo">
            <div class="infoCard">
              <div class="cardContent">
                <span class="infoLabel">Net Ağırlık (Pasta)</span>
                <span class="infoValue">{{ getCurrentCake().netWeight }}</span>
              </div>
            </div>
            <div class="infoCard">
              <div class="cardContent">
                <span class="infoLabel"> DİLİM AĞIRLIĞI </span>
                <span class="infoValue">{{
                  getCurrentCake().sliceWeight
                }}</span>
              </div>
            </div>
            <div class="infoCard">
              <div class="cardContent">
                <span class="infoLabel"> DİLİM / Pasta </span>
                <span class="infoValue">{{ getCurrentCake().sliceCount }}</span>
              </div>
            </div>
            <div class="infoCard">
              <div class="cardContent">
                <span class="infoLabel"> Raf ÖMRÜ (+4 °C) </span>
                <span class="infoValue">{{ getCurrentCake().shelfLife }}</span>
              </div>
            </div>
            <div class="infoCard">
              <div class="cardContent">
                <span class="infoLabel"> KOLİ ADEDİ </span>
                <span class="infoValue">{{
                  getCurrentCake().numberOfBoxes
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Yeni Pasta Detay Bölümü -->
        <div class="cakeDetailSection">
          <!-- Sol: Pasta Görseli -->
          <div class="cakeImageWrapper">
            <div class="imageFrame">
              <img 
                :key="selectedCake"
                :src="getCurrentCake().image" 
                :alt="getCurrentCake().name"
                class="cakeImage"
              />
            </div>
            <div class="imageGradient"></div>
          </div>

          <!-- Sağ: Pasta Özellikleri -->
          <div class="cakeProperties">
            <div class="propertiesHeader">
              <h4 class="propertiesTitle">Pasta Detayları</h4>
              <p class="propertiesSubtitle">Ürün Özellikleri ve İçerik Bilgileri</p>
            </div>

            <div class="propertiesList">
              <div class="propertyItem">
                <div class="propertyIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <div class="propertyContent">
                  <span class="propertyLabel">Kategori</span>
                  <span class="propertyValue">{{ cakeCategories[selectedCategory].name }}</span>
                </div>
              </div>

              <div class="propertyItem">
                <div class="propertyIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <div class="propertyContent">
                  <span class="propertyLabel">Net Ağırlık</span>
                  <span class="propertyValue">{{ getCurrentCake().netWeight }}</span>
                </div>
              </div>

              <div class="propertyItem">
                <div class="propertyIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <div class="propertyContent">
                  <span class="propertyLabel">Dilim Ağırlığı</span>
                  <span class="propertyValue">{{ getCurrentCake().sliceWeight }}</span>
                </div>
              </div>

              <div class="propertyItem">
                <div class="propertyIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <div class="propertyContent">
                  <span class="propertyLabel">Dilim Sayısı</span>
                  <span class="propertyValue">{{ getCurrentCake().sliceCount }}</span>
                </div>
              </div>

              <div class="propertyItem">
                <div class="propertyIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <div class="propertyContent">
                  <span class="propertyLabel">Raf Ömrü</span>
                  <span class="propertyValue">{{ getCurrentCake().shelfLife }}</span>
                </div>
              </div>

              <div class="propertyItem">
                <div class="propertyIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <div class="propertyContent">
                  <span class="propertyLabel">Koli Adedi</span>
                  <span class="propertyValue">{{ getCurrentCake().numberOfBoxes }}</span>
                </div>
              </div>
            </div>

            <button class="finalButton">
              Hemen Satın Al
              
               <a> :href="trendyolBaseUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
              <span class="btnGradient"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.DessertDetailSection {
  position: relative;
  padding: 100px 20px;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
}

.categorySlider {
  margin-bottom: 50px;
  align-items: center;
  text-align: center;
  padding: 20px 0;
}

.categorySlider .swiper {
  width: 900px;
  height: 200px;
  padding: 10px 50px 60px;
  margin-bottom: 50px;
}

.categorySlider .swiper-slide {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.categorySlider .categoryBtn {
  width: 100%;
  height: 100%;
}

.categorySlider :deep(.swiper-button-next),
.categorySlider :deep(.swiper-button-prev) {
  color: #d4a574;
  background: rgba(255, 255, 255, 0.9);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(212, 165, 116, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
}

.categorySlider :deep(.swiper-button-next) {
  right: 10px;
}

.categorySlider :deep(.swiper-button-prev) {
  left: 10px;
}

.categorySlider :deep(.swiper-button-next):after,
.categorySlider :deep(.swiper-button-prev):after {
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
}

.categorySlider :deep(.swiper-button-next:hover),
.categorySlider :deep(.swiper-button-prev:hover) {
  background: #d4a574;
  color: white;
}

.categorySlider :deep(.swiper-pagination) {
  position: static !important;
  margin-top: 20px;
  padding-top: 10px;
}

.categorySlider :deep(.swiper-pagination-bullet) {
  background: #d4a574;
  opacity: 0.5;
  width: 8px;
  height: 8px;
}

.categorySlider :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: #d4a574;
}

.cakesInfo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Yeni Pasta Detay Bölümü Stilleri */
.cakeDetailSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 80px;
  align-items: start;
}

.cakeImageWrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.imageFrame {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.cakeImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.cakeImageWrapper:hover .cakeImage {
  transform: scale(1.05);
}

.imageGradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
  pointer-events: none;
}

.cakeProperties {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.propertiesHeader {
  text-align: left;
}

.propertiesTitle {
  font-size: 32px;
  font-weight: 700;
  color: #2c1810;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #d4a574 0%, #8b6f47 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.propertiesSubtitle {
  font-size: 16px;
  color: #666;
  font-weight: 400;
}

.propertiesList {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.propertyItem {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 16px;
  border: 2px solid #f0f0f0;
  transition: all 0.3s ease;
}

.propertyItem:hover {
  border-color: #d4a574;
  box-shadow: 0 8px 24px rgba(212, 165, 116, 0.15);
  transform: translateX(8px);
}

.propertyIcon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #d4a574 0%, #8b6f47 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.propertyIcon svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.propertyContent {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.propertyLabel {
  font-size: 13px;
  color: #999;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.propertyValue {
  font-size: 18px;
  color: #2c1810;
  font-weight: 600;
}

.finalButton {
  position: relative;
  width: 100%;
  padding: 18px 32px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #d4a574 0%, #8b6f47 100%);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.finalButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(212, 165, 116, 0.4);
}

.finalButton a {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.btnGradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.finalButton:hover .btnGradient {
  opacity: 1;
}

/* Responsive Tasarım */
@media (max-width: 1024px) {
  .cakeDetailSection {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .cakeImageWrapper {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .propertiesTitle {
    font-size: 24px;
  }

  .propertiesSubtitle {
    font-size: 14px;
  }

  .propertyItem {
    padding: 16px;
  }

  .propertyIcon {
    width: 40px;
    height: 40px;
  }

  .propertyValue {
    font-size: 16px;
  }

  .finalButton {
    font-size: 16px;
    padding: 16px 24px;
  }
}
</style>