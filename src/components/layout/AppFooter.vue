<script setup>
import { ref } from "vue";
import footerBermas from "../../assets/footer/footerBermas.png";
import instagramIcon from "../../assets/icons/instagramIcon.svg";

const menuItems = ref([
  { id: 1, name: "Ana Sayfa", path: "/" },
  { id: 2, name: "Kahve", path: "/coffe" },
  { id: 3, name: "Pasta", path: "/cake" },
  { id: 4, name: "Hakkımızda", path: "/about" },
  { id: 5, name: "İletişim", path: "/communation" },
]);
</script>

<template>
  <footer class="footer">
    <div class="footerContainer">
      <h2 class="footerTitle">Kahf coffe. Her Yudum Bir Sanat Eseri...</h2>

      <section class="footerContent">
        <div class="footerLeft">
          <img :src="footerBermas" alt="Bermas Gıda Logo" class="footerLogo" />
          <p class="footerTagline">Sosyal Medyadan Bizi Takip Edin.</p>
          <a
            href="https://www.instagram.com/kahf.coffee/"
            target="_blank"
            rel="noopener noreferrer"
            class="instagramLink"
          >
            <img
              :src="instagramIcon"
              alt="Kahf Coffee Instagram"
              class="instagramIcon"
            />
            <span class="instagramText">@kahf.coffee</span>
          </a>
        </div>

        <div class="footerRight">
          <div class="footerColumn">
            <h3 class="footerColumnTitle">Hızlı Menü</h3>
            <ul class="footerMenu">
              <li
                class="footerMenuItem"
                v-for="item in menuItems"
                :key="item.id"
              >
                <router-link :to="item.path" class="footerLink">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div class="footerColumn">
            <h3 class="footerColumnTitle">İletişim</h3>
            <div class="footerInfo">
              <p>
                <strong>Tel:</strong><a href="Telefon"> +90 555 555 55 55 </a>
              </p>
              <p>
                <strong>Email:</strong> <a href="E-Posta"> kimkim@gmail.com </a>
              </p>
              <p>
                <strong>Adres:</strong
                ><a href="https://maps.app.goo.gl/dZrQ9Jo2oh12KfWF9">
                  Hallaçlar, 3001. Sk. No:22/A, 20050 Denizli
                  Merkezefendi/Denizli</a
                >
              </p>
            </div>
          </div>

          <div class="footerColumn">
            <h3 class="footerColumnTitle">Çalışma Saatleri</h3>
            <div class="footerInfo">
              <p><strong>Pazartesi-Cuma:</strong> 09:00-20:00</p>
              <p><strong>Cumartesi-Pazar:</strong> 10:00-18:00</p>
            </div>
          </div>
        </div>
      </section>

      <div class="footerCopyright">
        <p>&copy; 2026 Kahf Coffee. Tüm hakları saklıdır.</p>
        <a
          href="https://www.instagram.com/adem_o20/"
          target="_blank"
          rel="noopener noreferrer"
          class="footerSocialLink"
        >
          <img
            :src="instagramIcon"
            alt="Instagram Icon"
            class="instagramIcon"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footerInfo a {
  color: white;
  text-decoration: none;
}
</style>
