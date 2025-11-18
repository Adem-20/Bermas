<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bermasLogo from "../../assets/header/bermasLogo.png";
const menuItems = ref([
  { id: 1, name: "Ana Sayfa", path: "/" },
  { id: 2, name: "Kahve", path: "/coffe" },
  { id: 3, name: "Pasta", path: "/cake" },
  { id: 4, name: "Hakkımızda", path: "/about" },
  { id: 5, name: "İletişim", path: "/communation" },
]);

const isHeaderVisible = ref(true);
const isMobileMenuOpen = ref(false);
let lastScrollY = 0;
const scrollThreshold = 100;

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Mobil menü açıkken body scroll'u engelle
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Sayfa başındaysak her zaman göster
  if (currentScrollY < scrollThreshold) {
    isHeaderVisible.value = true;
    lastScrollY = currentScrollY;
    return;
  }

  // Aşağı scrollgizle
  if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
    isHeaderVisible.value = false;
  }
  // Yukarı scrollgöster
  else if (currentScrollY < lastScrollY) {
    isHeaderVisible.value = true;
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="colorAnimation">
    <header class="header" :class="{ 'header-hidden': !isHeaderVisible }">
      <div class="container">
        <div class="left">
          <router-link to="/" class="logo " @click="closeMobileMenu">
            <img :src="bermasLogo" alt="Bermas Gıda" />
          </router-link>
        </div>

        <button
          class="hamburger"
          :class="{ active: isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="right" :class="{ active: isMobileMenuOpen }">
          <ul class="navMenu">
            <li class="menuItem" v-for="item in menuItems" :key="item.id">
              <router-link
                :to="item.path"
                class="navLink"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
