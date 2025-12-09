<script setup>
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import espressoFusion from "../../assets/video/coffeeDetailSection/espresso/espressoFusion.mp4";
import turkishCoffeeFusion from "../../assets/video/coffeeDetailSection/traditional/turkishCoffeeFusion.mp4";
import filterCoffeeFusion from "../../assets/video/coffeeDetailSection/traditional/filterCoffeeFusion.mp4";
import frenchCoffeeFusion from "../../assets/video/coffeeDetailSection/traditional/frenchCoffeeFusion.mp4";
import chemexFusion from "../../assets/video/coffeeDetailSection/traditional/chemexFusion.mp4";
import coldBrewFusion from "../../assets/video/coffeeDetailSection/traditional/coldBrewFusion.mp4";
import aeropressFusion from "../../assets/video/coffeeDetailSection/traditional/aeroPress.jpg";
import americanoFusion from "../../assets/video/coffeeDetailSection/espresso/americanoFusion.mp4";
import cappuccinoFusion from "../../assets/video/coffeeDetailSection/espresso/cappuccinoFusion.mp4";
import latteFusion from "../../assets/video/coffeeDetailSection/espresso/latteFusion.mp4";
import nescafeGranul from "../../assets/video/coffeeDetailSection/instant/nescafeGörsel.jpg";
import sutTozu from "../../assets/video/coffeeDetailSection/instant/sutTozu.jpg";

const selectedCategory = ref("espresso");
const selectedCoffee = ref("espresso");
const trendyolBaseUrl =
  "https://www.trendyol.com/magaza/kahf-coffee-m-1128809?channelId=1&sst=0&sk=1";

const coffeeCategories = {
  espresso: {
    name: "Espresso Bazlı",
    items: {
      espresso: {
        name: "Espresso",
        description:
          "Yoğun ve aromalı, çiçeksi notalar içeren premium espresso",
        origin: "Etiyopya Yirgacheffe",
        roast: "Orta-Koyu Kavurma",
        grind: "İnce",
        video: espressoFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "18-20 gram taze çekirdek ince öğütülür",
          "Portafiltre içinde 15kg basınçla tamping yapılır",
          "93°C sıcaklıkta, 9 bar basınçta ekstraksiyon başlatılır",
          "25-30 saniyede 25-30ml espresso elde edilir",
          "Yoğun crema tabakası ile birlikte servis edilir",
        ],
      },
      cappuccino: {
        name: "Cappuccino",
        description:
          "Espresso, süt köpüğü ve sıcak süt ile hazırlanan İtalyan klasiği",
        origin: "İtalya",
        roast: "Orta-Koyu Kavurma",
        grind: "İnce",
        video: cappuccinoFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "Espresso shot hazırlanır",
          "Süt 60-65°C'ye kadar ısıtılır ve köpürtülür",
          "Espresso üzerine eşit oranda süt ve köpük eklenir",
          "1:1:1 oranında espresso, süt ve köpük dengesi sağlanır",
          "İsteğe göre kakao tozu ile servis edilir",
        ],
      },
      latte: {
        name: "Latte",
        description: "Espresso ve bol sütlü, yumuşak ve kremsi kahve deneyimi",
        origin: "İtalya",
        roast: "Orta Kavurma",
        grind: "İnce",
        video: latteFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "Espresso shot hazırlanır",
          "Süt 60-65°C'ye kadar ısıtılır",
          "Espresso üzerine bol miktarda süt eklenir",
          "Üzerine ince bir köpük tabakası eklenir",
          "İsteğe göre latte art yapılabilir",
        ],
      },
      americano: {
        name: "Americano",
        description:
          "Espresso ve sıcak su ile hazırlanan, yumuşak ama güçlü kahve",
        origin: "Amerika",
        roast: "Orta-Koyu Kavurma",
        grind: "İnce",
        video: americanoFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "Double espresso shot hazırlanır",
          "Büyük fincana alınır",
          "90-96°C sıcak su eklenir (1:2 oranında)",
          "Hafifçe karıştırılır",
          "Sıcak olarak servis edilir",
        ],
      },
    },
  },
  traditional: {
    name: "Geleneksel Yöntemler",
    items: {
      turkish: {
        name: "Türk Kahvesi",
        description: "Geleneksel Türk usulü, yoğun ve köpüklü kahve",
        origin: "Brezilya Santos",
        roast: "Orta Kavurma",
        grind: "Çok İnce (Toz)",
        video: turkishCoffeeFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "Çekirdekler toz kıvamında öğütülür",
          "Fincan başına 7-8 gram kahve ve 50ml su cezveye konur",
          "İsteğe göre şeker eklenir ve karıştırılır",
          "Kısık ateşte yavaşça ısıtılır, köpürünce ateşten alınır",
          "Köpük çökünce tekrar ateşe konur",
          "30 saniye dinlendirildikten sonra köpüğü ile servis edilir",
        ],
      },
      french: {
        name: "French Press",
        description: "Yağlı ve dolgun gövdeli, zengin aromaya sahip kahve",
        origin: "Guatemala Antigua",
        roast: "Orta Kavurma",
        grind: "Kaba",
        video: frenchCoffeeFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "French press ön ısıtma yapılır",
          "30 gram kahve kaba öğütülür",
          "500ml 96°C sıcaklıkta su dökülür",
          "Hafifçe karıştırılır, kapak kapatılır",
          "4 dakika demlenir",
          "Piston yavaşça bastırılır ve hemen servis edilir",
        ],
      },
      filter: {
        name: "Filtre Kahve (V60)",
        description: "Temiz ve dengeli, meyve notaları içeren filtre kahve",
        origin: "Kolombiya Supremo",
        roast: "Açık-Orta Kavurma",
        grind: "Orta",
        video: filterCoffeeFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "V60 veya Chemex filtresi sıcak su ile durulanır",
          "15 gram kahve orta incelikte öğütülür",
          "30-40ml su ile blooming yapılır (30 saniye bekletilir)",
          "Spiral hareketlerle toplam 250ml su yavaşça dökülür",
          "3-4 dakikada damlama tamamlanır",
          "Temiz ve berrak kahve servis edilir",
        ],
      },
      chemex: {
        name: "Chemex",
        description:
          "Kalın filtreleme ile son derece temiz ve net fincan profili",
        origin: "Kolombiya",
        roast: "Açık Kavurma",
        grind: "Orta-Kaba",
        video: chemexFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "Chemex filtresi yerleştirilir ve durulanır",
          "40 gram kahve orta-kaba öğütülür",
          "50ml su ile blooming yapılır (45 saniye)",
          "Dairesel hareketlerle 700ml su yavaşça dökülür",
          "4-5 dakikada demleme tamamlanır",
          "Son derece temiz kahve servis edilir",
        ],
      },
      aeropress: {
        name: "AeroPress",
        description: "Hızlı ve pratik, basınçlı demleme yöntemi",
        origin: "Kenya",
        roast: "Orta Kavurma",
        grind: "İnce-Orta",
        video: aeropressFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "AeroPress ters pozisyonda hazırlanır",
          "17 gram kahve ince-orta öğütülür",
          "80°C sıcaklıkta 200ml su eklenir",
          "30 saniye karıştırılır ve 1 dakika beklenir",
          "Filtre takılır, çevrilir ve yavaşça bastırılır",
          "Konsantre kahve sulandırılarak servis edilir",
        ],
      },
      coldBrew: {
        name: "Cold Brew",
        description: "Soğuk su ile uzun demleme, yumuşak ve tatlı profil",
        origin: "Brezilya",
        roast: "Orta-Koyu Kavurma",
        grind: "Kaba",
        video: coldBrewFusion,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "100 gram kahve kaba öğütülür",
          "1 litre soğuk su ile karıştırılır",
          "Kapaklı kapta 12-24 saat buzdolabında bekletilir",
          "Filtre kağıdı ile süzülür",
          "Konsantre olarak saklanır",
          "Suyla veya sütle karıştırılarak buzlu servis edilir",
        ],
      },
    },
  },
  instant: {
    name: "Hazır Ürünler",
    items: {
      nescafe: {
        name: "Granül Kahve",
        description: "Pratik ve lezzetli, anında hazır granül kahve",
        origin: "Karışım",
        roast: "Orta Kavurma",
        grind: "Granül (Hazır)",
        video: nescafeGranul,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "Fincanınıza 1-2 çay kaşığı granül kahve koyun",
          "Sıcak su ekleyin (90-95°C)",
          "İyice karıştırın",
          "İsteğe göre süt ve şeker ekleyin",
          "Hemen servis edin",
        ],
      },
      sutTozu: {
        name: "Süt Tozu",
        description: "Kahveniz için pratik süt tozu çözümü",
        origin: "-",
        roast: "-",
        grind: "Toz",
        video: sutTozu,
        trendyolLink: trendyolBaseUrl,
        steps: [
          "2-3 yemek kaşığı süt tozu alın",
          "Az miktarda ılık su ile karıştırın",
          "Pürüzsüz hale gelene kadar çırpın",
          "Kahvenize ekleyin",
          "İsteğe göre köpürtün",
        ],
      },
    },
  },
};

const handleCategoryChange = (category) => {
  selectedCategory.value = category;
  const firstCoffee = Object.keys(coffeeCategories[category].items)[0];
  selectedCoffee.value = firstCoffee;
};

const handleCoffeeChange = (coffeeKey) => {
  selectedCoffee.value = coffeeKey;
};

const getCurrentCoffee = () => {
  return coffeeCategories[selectedCategory.value].items[selectedCoffee.value];
};

const goToNextCoffee = () => {
  const items = Object.keys(coffeeCategories[selectedCategory.value].items);
  const currentIndex = items.indexOf(selectedCoffee.value);
  const nextIndex = (currentIndex + 1) % items.length;
  selectedCoffee.value = items[nextIndex];
};

const goToPrevCoffee = () => {
  const items = Object.keys(coffeeCategories[selectedCategory.value].items);
  const currentIndex = items.indexOf(selectedCoffee.value);
  const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  selectedCoffee.value = items[prevIndex];
};

const getPrevCoffeeName = () => {
  const items = Object.keys(coffeeCategories[selectedCategory.value].items);
  const currentIndex = items.indexOf(selectedCoffee.value);
  const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  return coffeeCategories[selectedCategory.value].items[items[prevIndex]].name;
};

const getNextCoffeeName = () => {
  const items = Object.keys(coffeeCategories[selectedCategory.value].items);
  const currentIndex = items.indexOf(selectedCoffee.value);
  const nextIndex = (currentIndex + 1) % items.length;
  return coffeeCategories[selectedCategory.value].items[items[nextIndex]].name;
};

// Lightbox için
const visibleRef = ref(false);
const indexRef = ref(0);

const showLightbox = () => {
  const currentCoffee = getCurrentCoffee();
  // Sadece resim ise lightbox göster (video için lightbox açılmasın)
  if (!currentCoffee.video.endsWith('.mp4')) {
    visibleRef.value = true;
    indexRef.value = 0;
  }
};

const onHide = () => {
  visibleRef.value = false;
};
</script>

<template>
  <section class="coffeeDetailSection">
    <div class="coffeeDetailContainer">
      <div class="titleWrapper">
        <h2 class="mainTitle">
          <span class="titleText">Kahve Çeşitleri & Demleme Rehberi</span>
        </h2>
        <p class="subtitle">
          Profesyonel barİsta teknİklerİyle mÜkemmel kahve deneyİmİ
        </p>
      </div>

      <div class="categoryButtons">
        <button v-for="(category, key) in coffeeCategories" :key="key" @click="handleCategoryChange(key)"
          :class="['categoryBtn', { active: selectedCategory === key }]">
          <span class="btnText">{{ category.name }}</span>
          <span class="btnShine"></span>
        </button>
      </div>

      <div class="coffeeDetailButtons">
        <button v-for="(coffee, key) in coffeeCategories[selectedCategory].items" :key="key"
          @click="handleCoffeeChange(key)" :class="['coffeeDetailBtn', { active: selectedCoffee === key }]">
          <span class="pillDot"></span>
          {{ coffee.name }}
        </button>
      </div>

      <div class="coffeeDetailContent">
        <div class="coffeeHeader">
          <div class="coffeeBadge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
            </svg>
            <span>Premium Quality</span>
          </div>

          <h3 class="coffeeName">{{ getCurrentCoffee().name }}</h3>
          <p class="coffeeDesc">{{ getCurrentCoffee().description }}</p>

          <div class="coffeeInfo">
            <div class="infoCard">
              <div class="cardContent">
                <span class="infoLabel">origin</span>
                <span class="infoValue">{{ getCurrentCoffee().origin }}</span>
              </div>
            </div>
            <div class="infoCard">
              <div class="cardContent">
                <span class="infoLabel">Roast</span>
                <span class="infoValue">{{ getCurrentCoffee().roast }}</span>
              </div>
            </div>
            <div class="infoCard">
              <div class="cardContent">
                <span class="infoLabel">Grind</span>
                <span class="infoValue">{{ getCurrentCoffee().grind }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="contentBottom">
          <div class="coffeeDetailVideo">
            <div class="videoFrame" @click="showLightbox"
              :style="{ cursor: getCurrentCoffee().video.endsWith('.mp4') ? 'default' : 'pointer' }">
              <video v-if="getCurrentCoffee().video.endsWith('.mp4')" :key="selectedCoffee" autoplay muted loop
                playsinline preload="metadata">
                <source :src="getCurrentCoffee().video" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>

              <img v-else :src="getCurrentCoffee().video" :alt="getCurrentCoffee().name" />
            </div>
            <div class="videoGradient"></div>
          </div>

          <div class="brewingSteps">
            <div class="stepsHeader">
              <h4 class="stepsHeading">Demleme Adımları</h4>
              <div class="stepsCount">
                {{ getCurrentCoffee().steps.length }} adım
              </div>
            </div>

            <div class="stepsList">
              <div v-for="(step, index) in getCurrentCoffee().steps" :key="index" class="stepItem"
                :style="{ '--stepIndex': index }">
                <div class="stepNumber">
                  <span>{{ index + 1 }}</span>
                </div>
                <p class="stepText">{{ step }}</p>
              </div>
            </div>
            <a :href="trendyolBaseUrl" target="_blank" rel="noopener noreferrer" class="finalButton">
              Hemen Satın Al
            </a>
            <div class="navigationButtons">
              <button @click="goToPrevCoffee" class="navButton prevButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span class="cakeName">{{ getPrevCoffeeName() }}</span>
              </button>
              <button @click="goToNextCoffee" class="navButton nextButton">
                <span class="cakeName">{{ getNextCoffeeName() }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <VueEasyLightbox :visible="visibleRef" :imgs="[getCurrentCoffee().video]" :index="indexRef" @hide="onHide" />
  </section>
</template>
<style scoped>
.videoFrame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.navigationButtons {
  display: flex;
  gap: 30px;
  margin-top: 40px;
  width: 100%;
  justify-content: space-between;
}

.navButton {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #d4a574;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #d4a574;
  cursor: pointer;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.navButton:hover {
  background: #d4a574;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 165, 116, 0.3);
}

.navButton svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.navButton:hover svg {
  transform: translateX(0);
}

.prevButton:hover svg {
  transform: translateX(-3px);
}

.nextButton:hover svg {
  transform: translateX(3px);
}

@media (max-width: 968px) {
  .navigationButtons {
    gap: 12px;
  }

  .navButton {
    font-size: 15px;
    padding: 10px 20px;
  }
}

@media (max-width: 640px) {
  .navigationButtons {
    flex-direction: row;
    gap: 8px;
    margin-top: 30px;
    justify-content: space-between;
  }

  .navButton {
    font-size: 14px;
    padding: 8px 10px;
    justify-content: center;
    gap: 6px;
  }

  .navButton svg {
    width: 16px;
    height: 16px;
  }

  .navButton:hover {
    transform: none;
    background: rgba(255, 255, 255, 0.9);
    color: #d4a574;
    box-shadow: none;
  }

  .navButton:active {
    background: #d4a574;
    color: white;
    transform: scale(0.98);
  }

  .prevButton:hover svg,
  .nextButton:hover svg {
    transform: translateX(0);
  }
}
</style>
