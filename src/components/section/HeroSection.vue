<script setup>
import kahfcoPaket from "../../assets/hero/kahfcopaket.png";
import cardSecond from "../../assets/hero/cardSecond.png";
import coffeBean from "../../assets/hero/coffeBean.png";
import coffeBean1 from "../../assets/hero/coffeBean1.png";
import coffeBean2 from "../../assets/hero/coffeBean2.png";
</script>

<template>
  <div class="colorAnimation">
    <section class="hero">
      <div class="rotatingCoffeBeanContainer">
        <div class="coffeeBeanOrbit bean1">
          <img :src="coffeBean" alt="Coffee Bean 1" />
        </div>
        <div class="coffeeBeanOrbit bean2">
          <img :src="coffeBean1" alt="Coffee Bean 2" />
        </div>
        <div class="coffeeBeanOrbit bean3">
          <img :src="coffeBean2" alt="Coffee Bean 3" />
        </div>
        <div class="coffeeBeanOrbit bean4">
          <img :src="coffeBean1" alt="Coffee Bean 4" />
        </div>
        <div class="coffeeBeanOrbit bean5">
          <img :src="coffeBean1" alt="Coffee Bean 2" />
        </div>
      </div>

      <div class="titleContent">
        <h1 class="heroTitle">KAHF COFFE</h1>
        <h2 class="heroSubtitle">Premium Kahve Tedarikçisi</h2>
        <div class="descriptionContent">
          <p class="heroDescription animated-text">
            Özenle seçilmiş çekirdeklerden, ustalıkla hazırlanmış pastalarımıza
            kadar
          </p>
          <p class="HeroSubDescription animated-text">
            Her detayda mükemmelliği yaşayın.
          </p>
          <div class="btnContent">
            <button class="btnCoffe" @click="$router.push('/coffe')">
              Kahvelerimiz
            </button>
            <button class="btnCake" @click="$router.push('/cake')">
              Pastalarımız
            </button>
          </div>
        </div>
      </div>
      <div class="cardContainer">
        <div class="cardOne">
          <h5>Özel Kahve Markamız</h5>
          <img :src="kahfcoPaket" alt="Kahf Co Paket" class="cardOneImg" />
        </div>
        <div class="cardSecond">
          <h5>
            Donuk & Taze
            <img :src="cardSecond" alt="Donuk Pasta" class="cardSecondImg" />
          </h5>
        </div>
      </div>
      <div class="scrollDowns" aria-hidden="true">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
