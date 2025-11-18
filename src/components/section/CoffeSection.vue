<script setup>
import coffeEtiyopya from "../../assets/video/coffeSection/coffeEtiyopya.mp4";
import coffeBrazil from "../../assets/video/coffeSection/coffeBrazil.mp4";
</script>

<template>
  <section class="coffeeSection">
    <div class="sectionHeader">
      <h2 class="sectionTitle">Dünyadan Kahveler</h2>
      <p class="sectionSubtitle">
        En seçkin bölgelerden özenle topladığımız kahve çekirdekleri
      </p>
    </div>

    <div class="coffeeContainer">
      <div class="coffeeVideo" data-aos="fade-right">
        <video
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          class="videoSection"
        >
          <source :src="coffeEtiyopya" type="video/mp4" class="videoVideo" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
        <div class="videoOverlay"></div>
      </div>
      <div class="coffeeContent" data-aos="fade-left">
        <span class="originContent">Orijinal</span>
        <h3 class="coffeeTitle">Etiyopya Kahvesi</h3>
        <div class="titleDecoration"></div>
        <p class="coffeeDescription">
          Etiyopya kahvesi, dünyanın en eski ve en prestijli kahve türlerinden
          biridir. Zengin aroması, çiçeksi ve meyvemsi notalarıyla bilinir.
          Yüksek rakımlarda yetişen bu kahve, benzersiz tat profiliyle kahve
          tutkunlarının favorisi olmuştur.
        </p>
        <button class="coffeeBtn primary">
          <span class="btnText" @click="$router.push('/coffeDetail')"
            >Kahve Çeşitleri ve Detaylar</span
          >
        </button>
      </div>
    </div>

    <div class="border"></div>

    <div class="coffeeContainer reverse">
      <div class="coffeeContent" data-aos="fade-right">
        <span class="originContent">Orijinal</span>
        <h3 class="coffeeTitle">Brezilya Kahvesi</h3>
        <div class="titleDecoration"></div>
        <p class="coffeeDescription">
          Brezilya kahvesi, dünyada en çok üretilen ve tüketilen kahve
          türlerinden biridir. Dengeli gövdesi, düşük asiditesi ve hafif
          çikolata ile fındık notalarıyla tanınır. Geniş tarım alanlarında
          yetişen bu kahve, yumuşak içimi ve karamelimsi aromasıyla hem günlük
          tüketim hem de espresso harmanları için ideal bir seçimdir.
        </p>
        <button class="coffeeBtn primary">
          <span class="btnText" @click="$router.push('/coffeDetail')"
            >Kahve Çeşitleri ve Detaylar</span
          >
        </button>
      </div>
      <div class="coffeeVideo" data-aos="fade-left">
        <video
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
        >
          <source :src="coffeBrazil" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
        <div class="videoOverlay"></div>
      </div>
    </div>
  </section>
</template>
<style scoped>

</style>
