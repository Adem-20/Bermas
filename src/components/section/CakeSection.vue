<script setup>
import { ref } from "vue";
import { cakeCategories } from "../../data/cakeSection.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image from "@/assets/image.png";

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
          <span class="titleText">Pasta Koleksiyonu</span>
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
            <img :src="image" alt="" class="ikonImage" />
            <span>Taze & Donuk</span>
          </div>

          <h3 class="coffeeName">{{ getCurrentCake().name }}</h3>
          <p class="coffeeDesc">{{ getCurrentCake().description }}</p>

          <div class="cakeDetailSection">
            <div class="cakeImageWrapper">
              <div class="imageFrame">
                <img
                  :key="selectedCake"
                  :src="getCurrentCake().image"
                  :alt="getCurrentCake().name"
                  class="cakeImage"
                />
                <div class="imageOverlay"></div>
              </div>
            </div>

            <div class="cakeProperties">
              <div class="propertiesHeader">
                <h4 class="propertiesTitle">Ürün Detayları</h4>
                <div class="titleUnderline"></div>
              </div>

              <div class="propertiesList">
                <div class="propertyItem">
                  <div class="propertyContent">
                    <span class="propertyLabel">Kategori</span>
                    <span class="propertyValue">{{
                      cakeCategories[selectedCategory].name
                    }}</span>
                  </div>
                </div>

                <div class="propertyItem">
                  <div class="propertyContent">
                    <span class="propertyLabel">Net Ağırlık</span>
                    <span class="propertyValue">{{
                      getCurrentCake().netWeight
                    }}</span>
                  </div>
                </div>

                <div class="propertyItem">
                  <div class="propertyContent">
                    <span class="propertyLabel">Dilim Ağırlığı</span>
                    <span class="propertyValue">{{
                      getCurrentCake().sliceWeight
                    }}</span>
                  </div>
                </div>

                <div class="propertyItem">
                  <div class="propertyContent">
                    <span class="propertyLabel">Dilim Sayısı</span>
                    <span class="propertyValue">{{
                      getCurrentCake().sliceCount
                    }}</span>
                  </div>
                </div>

                <div class="propertyItem">
                  <div class="propertyContent">
                    <span class="propertyLabel">Raf Ömrü</span>
                    <span class="propertyValue">{{
                      getCurrentCake().shelfLife
                    }}</span>
                  </div>
                </div>

                <div class="propertyItem">
                  <div class="propertyContent">
                    <span class="propertyLabel">Koli Adedi</span>
                    <span class="propertyValue">{{
                      getCurrentCake().numberOfBoxes
                    }}</span>
                  </div>
                </div>
              </div>

              <a
                :href="trendyolBaseUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="finalButton"
              >
                <span class="btnText">Hemen Satın Al</span>
                <span class="btnGradient"></span>
              </a>
            </div>
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
.ikonImage {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(12);
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

.cakeDetailSection {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 50px;
  margin-top: 0px;
  padding: 40px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(212, 165, 116, 0.05) 100%
  );
  border-radius: 24px;
  align-items: center;
}

.cakeImageWrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  cursor: pointer;
}

.cakeImageWrapper:hover {
  box-shadow: 0 35px 70px rgba(212, 165, 116, 0.3);
}

.imageFrame {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex; 
  align-items: center; 
  justify-content: center;
}

.cakeImage {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: transform 0.7s ease;
}

.cakeImageWrapper:hover .cakeImage {
  transform: scale(1.1);
}

.imageOverlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(44, 24, 16, 0.4), transparent);
  pointer-events: none;
}

.cakeProperties {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
}

.propertiesHeader {
  text-align: left;
  margin-bottom: 10px;
}

.propertiesTitle {
  font-size: 36px;
  font-weight: 700;
  color: #2c1810;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #d4a574 0%, #8b6f47 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.titleUnderline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #d4a574 0%, transparent 100%);
  border-radius: 2px;
}

.propertiesList {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.propertyItem {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(212, 165, 116, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.propertyItem::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.propertyItem:hover::before {
  transform: scaleY(1);
}

.propertyItem:hover {
  transform: translateY(2px);
  box-shadow: 0 8px 20px rgba(212, 165, 116, 0.2);
  background: rgba(255, 255, 255, 1);
}

.propertyContent {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.propertyLabel {
  font-size: 11px;
  color: #999;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.propertyValue {
  font-size: 18px;
  color: #2c1810;
  font-weight: 700;
  line-height: 1.3;
}

/* Satın Al Butonu */
.finalButton {
  position: relative;
  width: 100%;
  padding: 20px 32px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #d4a574 0%, #8b6f47 100%);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(212, 165, 116, 0.3);
}

.finalButton:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(212, 165, 116, 0.5);
}

.btnText {
  font-size: 18px;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.btnGradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.finalButton:hover .btnGradient {
  opacity: 1;
}

/* Responsive Tasarım */
@media (max-width: 1200px) {
  .cakeDetailSection {
    grid-template-columns: 1fr 1fr;
    gap: 35px;
    padding: 30px;
  }

  .propertiesTitle {
    font-size: 30px;
  }

  .cakeImageWrapper {
    min-height: 400px;
  }
}

@media (max-width: 968px) {
  .cakeDetailSection {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 30px 20px;
  }

  .cakeImageWrapper {
    max-width: 550px;
    margin: 0 auto;
    min-height: 450px;
  }

  .propertiesTitle {
    font-size: 28px;
    text-align: center;
  }

  .titleUnderline {
    margin: 0 auto;
  }

  .propertiesList {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
}

@media (max-width: 640px) {
  .cakeDetailSection {
    padding: 25px 15px;
    margin-top: 40px;
  }

  .cakeImageWrapper {
    min-height: 350px;
  }

  .propertiesTitle {
    font-size: 24px;
  }

  .propertiesList {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .propertyItem {
    padding: 16px;
  }

  .propertyLabel {
    font-size: 10px;
  }

  .propertyValue {
    font-size: 16px;
  }

  .finalButton {
    font-size: 16px;
    padding: 18px 24px;
  }

  .btnText {
    font-size: 16px;
  }
}
</style>
