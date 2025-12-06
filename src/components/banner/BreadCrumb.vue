<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const items = computed(() => {
  const home = { label: "ANASAYFA", to: "/" };

  const matched = route.matched
    .filter((r) => r.meta && r.meta.breadcrumb)
    .map((r) => {
      const bc = r.meta.breadcrumb;
      const label = typeof bc === "function" ? bc(route) : bc;
      const isLast = r.path === route.matched[route.matched.length - 1].path;
      return { label, to: isLast ? null : r.path };
    });

  return [home, ...matched];
});
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ul>
      <li v-for="(it, i) in items" :key="i">
        <RouterLink v-if="it.to" :to="it.to">{{ it.label }}</RouterLink>
        <span v-else>{{ it.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.breadcrumbs ul {
  display: flex;
  gap: 10px;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  color: #1b0000;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  flex-wrap: wrap;
}
.breadcrumbs a {
  color: #1b0000;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.2s ease;
}
.breadcrumbs a:hover {
  opacity: 1;
}
.breadcrumbs li + li::before {
  content: ">";
  margin: 0 6px 0 2px;
  opacity: 0.6;
}

/* Tablet */
@media (max-width: 1024px) {
  .breadcrumbs ul {
    font-size: 14px;
    gap: 8px;
  }

  .breadcrumbs li + li::before {
    margin: 0 5px 0 2px;
  }
}

/* Tablet - Küçük */
@media (max-width: 768px) {
  .breadcrumbs ul {
    font-size: 12px;
    gap: 6px;
    letter-spacing: 0.5px;
  }

  .breadcrumbs li + li::before {
    margin: 0 4px 0 2px;
  }
}

/* Mobil */
@media (max-width: 480px) {
  .breadcrumbs ul {
    font-size: 10px;
    gap: 5px;
    letter-spacing: 0.3px;
  }

  .breadcrumbs li + li::before {
    margin: 0 3px 0 1px;
  }
}

/* Mobil - Küçük */
@media (max-width: 375px) {
  .breadcrumbs ul {
    font-size: 9px;
    gap: 4px;
  }
}

/* Çok küçük ekranlar */
@media (max-width: 320px) {
  .breadcrumbs ul {
    font-size: 8px;
    gap: 3px;
  }

  .breadcrumbs li + li::before {
    margin: 0 2px 0 1px;
  }
}
</style>
