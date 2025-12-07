const trendyolBaseUrl =
  "https://www.trendyol.com/magaza/kahf-coffee-m-1128809?channelId=1&sst=0&sk=1";

/*=========================== CheeseCake========================= */
import limonluCheesecake from "@/assets/cakeSection/cheesecake/limonluCheesecake.jpg";
import frambuazCheesecake from "@/assets/cakeSection/cheesecake/frambuazCheesecake.jpg";
import lotusCheesecake from "@/assets/cakeSection/cheesecake/lotusCheesecake.jpg";
import sanSebastianCheesecake from "@/assets/cakeSection/cheesecake/sanSebastianCheesecake.jpg";

/*=========================== Ruya Pastalar========================= */
import fistikRuyasi from "@/assets/cakeSection/ruyaPastalar/fistikRuyasi.jpg";
import karaOrmanPasta from "@/assets/cakeSection/ruyaPastalar/karaOrmanPasta.jpg";
import devils from "@/assets/cakeSection/ruyaPastalar/devils.jpg";

/*=========================== Meyveli Pastalar========================= */
import tropikalMeyveli from "@/assets/cakeSection/meyveliPastalar/tropikalMeyveli.png";
import cocostarPasta from "@/assets/cakeSection/meyveliPastalar/cocostarPasta.jpg";
import yabanMersinli from "@/assets/cakeSection/meyveliPastalar/yabanMersinli.jpg";
import visneliKurabiyeli from "@/assets/cakeSection/meyveliPastalar/visneliKurabiyeli.jpg";

/*=========================== Marlenka Çeşitleri========================= */
import balliCevizliMarlenka from "@/assets/cakeSection/marlenka/balliCevizliMarlenka.png";
import balliAntepliMarlenka from "@/assets/cakeSection/marlenka/balliAntepliMarlenka.jpg";

/*=========================== İncir Tahinli ========================= */
import incirCevizli from "@/assets/cakeSection/incir-tahinli/incirCevizli.jpg";
import balliTahinli from "@/assets/cakeSection/incir-tahinli/balliTahinli.png";

/*=========================== Mono Pastalar ========================= */
import latteMonoPasta from "@/assets/cakeSection/monoPastalar/latteMonoPasta.jpg";
import tiramisuMono from "@/assets/cakeSection/monoPastalar/monotiramisu.jpg";
import bellaVistaBeyaz from "@/assets/cakeSection/monoPastalar/bellaVistaBeyaz.jpg";
import bellaVistaSiyah from "@/assets/cakeSection/monoPastalar/bellaVistaSiyah.jpg";
import monoProSiyah from "@/assets/cakeSection/monoPastalar/monoProSiyah.jpg";
import monoSnickerPasta from "@/assets/cakeSection/monoPastalar/monoSnickerPasta.jpg";
import sufleYariPismis from "@/assets/cakeSection/monoPastalar/sufleYariPismis.jpg";
import monoFrambuazliCheesecake from "@/assets/cakeSection/monoPastalar/monoFrambuazliCheesecake.jpg";

/*=========================== kek/Meyveli Kekler ========================= */
import beksKek from "@/assets/cakeSection/kek-meyveliKekler/beksKek.jpg";

/*=========================== Cedric Serisi (Özel Ürünler) ========================= */
import cedricFistikli from "@/assets/cakeSection/cedricSeries/cedricFistikli.jpg";

/*=========================== Mozaik&Ozel Pastalar ========================= */
import mozaikPasta from "@/assets/cakeSection/mozaikVeOzelPastalar/mozaikPasta.png";

/*=========================== Cup Pastalar ========================= */
import kediDiliTiramisuCup from "@/assets/cakeSection/cupPastalar/kediDiliTiramisuCup.jpg";
import tropikalMeyveliCup from "@/assets/cakeSection/cupPastalar/tropikalMeyveliCup.jpg";
import cilekliCikolataliCup from "@/assets/cakeSection/cupPastalar/cilekliCikolataliCup.jpg";
import lotusCup from "@/assets/cakeSection/cupPastalar/lotusCup.jpg";
import antepFistikliDevilsCup from "@/assets/cakeSection/cupPastalar/antepFistikliDevilsCup.jpg";

export const cakeCategories = {
  /*=========================== CheeseCake========================= */
  cheesecake: {
    name: "Cheesecake Çeşitleri",
    items: {
      limonluCheesecake: {
        name: "Limonlu Cheesecake",
        description:
          "Kremsi dokusu ve ferah limon aromasıyla rafine bir cheesecake",
        netWeight: "1600g",
        sliceWeight: "160g",
        sliceCount: "10",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        numberOfBoxes: 12,
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        image: limonluCheesecake,
        trendyolLink: trendyolBaseUrl,
      },
      frambuazCheesecake: {
        name: "Frambuaz Cheesecake",
        description:
          "Kremsi dokusu ve yoğun frambuaz aromasıyla rafine bir cheesecake",
        netWeight: "1600g",
        sliceWeight: "160g",
        sliceCount: "10",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        numberOfBoxes: 12,
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        image: frambuazCheesecake,
        trendyolLink: trendyolBaseUrl,
      },
      lotusCheesecake: {
        name: "Lotus Cheesecake",
        description:
          "Kremsi dokusu ve karamelize Lotus aromasıyla rafine bir cheesecake",
        netWeight: "1600g",
        sliceWeight: "160g",
        sliceCount: "10",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        numberOfBoxes: 12,
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        image: lotusCheesecake,
        trendyolLink: trendyolBaseUrl,
      },
      sanSebastianCheesecake: {
        name: "San Sebastian Cheesecake",
        description:
          "Kremsi dokusu ve hafif karamelize yüzeyiyle rafine bir cheesecake",
        netWeight: "1600g",
        sliceWeight: "160g",
        sliceCount: "10",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        numberOfBoxes: 12,
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        image: sanSebastianCheesecake,
        trendyolLink: trendyolBaseUrl,
      },
    },
  },

  /*=========================== Ruya Pastalar========================= */
  ruyaPastalar: {
    name: "Rüya Pastalar",
    items: {
      fistikRuyasi: {
        name: "Fıstık Rüyası",
        description:
          "Kremsi dokusu ve yoğun fıstık aromasıyla rafine bir lezzet",
        netWeight: "1400g",
        sliceWeight: "140g",
        sliceCount: "10",
        shelfLife: "3 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 12,
        image: fistikRuyasi,
        trendyolLink: trendyolBaseUrl,
      },
      karaOrmanPasta: {
        name: "Kara Orman Pasta",
        description:
          "Kremsi dokusu ve yoğun vişne-çikolata aromasıyla rafine bir lezzet",
        netWeight: "1450g",
        sliceWeight: "145g",
        sliceCount: "10",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: karaOrmanPasta,
        trendyolLink: trendyolBaseUrl,
      },
      devils: {
        name: "Devils",
        description:
          "Kremsi dokusu ve yoğun kakao aromasıyla rafine bir lezzet",
        netWeight: "1500g",
        sliceWeight: "145g",
        sliceCount: "10",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: devils,
        trendyolLink: trendyolBaseUrl,
      },
    },
  },

  /*=========================== Meyveli Pastalar========================= */
  meyveliPastalar: {
    name: "Meyveli Pastalar",
    items: {
      tropikalMeyveliPasta: {
        name: "Tropikal Meyveli Pasta",
        description:
          "Kremsi dokusu ve ferah tropikal meyve aromasıyla rafine bir lezzet.",
        netWeight: "1450g",
        sliceWeight: "145g",
        sliceCount: "10",
        shelfLife: "3 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: tropikalMeyveli,
        trendyolLink: trendyolBaseUrl,
      },
      cocostarPasta: {
        name: "Cocostar Pasta",
        description:
          "Espresso, süt köpüğü ve sıcak süt ile hazırlanan İtalyan klasiği",
        netWeight: "1600g",
        sliceWeight: "160g",
        sliceCount: "10",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 12,
        image: cocostarPasta,
        trendyolLink: trendyolBaseUrl,
      },
      visneliKurabiyeli: {
        name: "Vişneli Kurabiyeli Pasta",
        description:
          "Kremsi dokusu ve yoğun vişne-kurabiye aromasıyla rafine bir lezzet",
        netWeight: "1600g",
        sliceWeight: "160g",
        sliceCount: "10",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: visneliKurabiyeli,
        trendyolLink: trendyolBaseUrl,
      },
      yabanMersinli: {
        name: "Yaban Mersinli Pasta",
        description:
          "Kremsi dokusu ve doğal yaban mersini aromasıyla rafine bir lezzet",
        netWeight: "1600g",
        sliceWeight: "160g",
        sliceCount: "10",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: yabanMersinli,
        trendyolLink: trendyolBaseUrl,
      },
    },
  },

  /*=========================== Marlenka Çeşitleri========================= */
  marlenkaCesitleri: {
    name: "Marlenka Çeşitleri",
    items: {
      balliCevizliMarlenka: {
        name: "Ballı Cevizli Marlenka",
        description:
          "Kremsi dokusu ve doğal bal–ceviz aromasıyla rafine bir lezzet",
        netWeight: "1350g",
        sliceWeight: "169g",
        sliceCount: "8",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 12,
        image: balliCevizliMarlenka,
        trendyolLink: trendyolBaseUrl,
      },
      balliAntepliMarlenka: {
        name: "Ballı Antep Fıstıklı Marlenka",
        description:
          "Kremsi dokusu ve doğal bal–fıstık aromasıyla rafine bir lezzet",
        netWeight: "1350g",
        sliceWeight: "169g",
        sliceCount: "8",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 12,
        image: balliAntepliMarlenka,
        trendyolLink: trendyolBaseUrl,
      },
    },
  },

  /*=========================== incir/tahinli Pasta========================= */
  incirTahinliPastalar: {
    name: "İncir&Tahinli Pastalar",
    items: {
      incirCevizli: {
        name: "İncir Cevizli Pasta",
        description:
          "Kremsi dokusu ve doğal incir–ceviz aromasıyla rafine bir lezzet",
        netWeight: "1280g",
        sliceWeight: "160g",
        sliceCount: "8",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 12,
        image: incirCevizli,
        trendyolLink: trendyolBaseUrl,
      },
      balliTahinli: {
        name: "Ballı Tahinli Pasta",
        description:
          "Kremsi dokusu ve dengeli bal–tahin aromasıyla rafine bir lezzet",
        netWeight: "1600g",
        sliceWeight: "160g",
        sliceCount: "8",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: balliTahinli,
        trendyolLink: trendyolBaseUrl,
      },
    },
  },

  /*=========================== Mono Pastalar ========================= */
  monoPastalar: {
    name: "Mono Pastalar",
    items: {
      latteMonoPasta: {
        name: "Latte Mono Pasta",
        description:
          "Kremsi dokusu ve yumuşak latte aromasıyla rafine bir lezzet",
        netWeight: "1440g",
        sliceWeight: "160g",
        sliceCount: "9",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: latteMonoPasta,
        trendyolLink: trendyolBaseUrl,
      },
      tiramisuMono: {
        name: "Mono Tiramisu Pasta",
        description:
          "Kremsi dokusu ve dengeli kahve–mascarpone aromasıyla rafine bir lezzet",
        netWeight: "1350g",
        sliceWeight: "150g",
        sliceCount: "9",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        trendyolLink: trendyolBaseUrl,
      },
      bellaVistaBeyaz: {
        name: "Bella Vista (Beyaz)",
        description:
          "Kremsi dokusu ve hafif beyaz çikolata aromasıyla rafine bir lezzet",
        netWeight: "1550g",
        sliceWeight: "170g",
        sliceCount: "9",
        shelfLife: "3 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: bellaVistaBeyaz,
        trendyolLink: trendyolBaseUrl,
      },
      bellaVistaSiyah: {
        name: "Bella Vista Siyah",
        description:
          "Kremsi dokusu ve yoğun bitter çikolata aromasıyla rafine bir lezzet",
        netWeight: "1550g",
        sliceWeight: "170g",
        sliceCount: "9",
        shelfLife: "3 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: bellaVistaSiyah,
        trendyolLink: trendyolBaseUrl,
      },
      monoProSiyah: {
        name: "Mono Profiterol Siyah",
        description:
          "Kremsi dokusu ve yoğun çikolata aromasıyla rafine bir lezzet.",
        netWeight: "1350g",
        sliceWeight: "150g",
        sliceCount: "9",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: monoProSiyah,
        trendyolLink: trendyolBaseUrl,
      },
      monoSnickerPasta: {
        name: "Mono Snickers Pasta",
        description:
          "Kremsi dokusu ve karamel–fıstık aromasıyla rafine bir lezzet",
        netWeight: "1530g",
        sliceWeight: "170g",
        sliceCount: "9",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: monoSnickerPasta,
        trendyolLink: trendyolBaseUrl,
      },
      sufleYariPismis: {
        name: "Sufle – Yarı Pişmiş",
        description:
          "Akışkan dokusu ve yoğun kakao aromasıyla rafine bir lezzet",
        netWeight: "1560g",
        sliceWeight: "200g",
        sliceCount: "9",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 9,
        image: sufleYariPismis,
        trendyolLink: trendyolBaseUrl,
      },
      monoFrambuazliCheesecake: {
        name: "Mono Frambuazlı Pasta",
        description:
          "Kremsi dokusu ve canlı frambuaz aromasıyla rafine bir lezzet",
        netWeight: "1350g",
        sliceWeight: "150g",
        sliceCount: "9",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: 12,
        image: monoFrambuazliCheesecake,
        trendyolLink: trendyolBaseUrl,
      },
    },
  },

  /*=========================== Kek/Meyveli Kekler ========================= */
  kekMeyveliKekler: {
    name: "Kek&Meyveli Kekler",
    items: {
      bekskekMeyveli: {
        name: "Beks Kek Meyveli",
        description:
          "Yumuşak dokusu ve doğal meyve aromasıyla rafine bir lezzet",
        netWeight: "-",
        sliceWeight: "-",
        sliceCount: "-",
        shelfLife: "-",
        shelfLifeFrozen: "-",
        thawingTime: "-",
        boxDimensions: "-",
        palletCapacity: "-",
        numberOfBoxes: "-",
        image: beksKek,
        trendyolLink: trendyolBaseUrl,
      },
    },
  },

  /*=========================== Cedric Serisi (Özel Ürünler) ========================= */
  cedricSerisi: {
    name: "Cedric Serisi (Özel Ürünler)",
    items: {
      cedricFistikli: {
        name: "Cedric Fıstıklı",
        description:
          "Kremsi dokusu ve yoğun Antep fıstığı aromasıyla rafine bir lezzet",
        netWeight: "-",
        sliceWeight: "-",
        sliceCount: "-",
        shelfLife: "-",
        shelfLifeFrozen: "-",
        thawingTime: "-",
        boxDimensions: "-",
        palletCapacity: "-",
        numberOfBoxes: "-",
        image: cedricFistikli,
        trendyolLink: trendyolBaseUrl,
      },
      cedricKahve: {
        name: "Cedric Kahve",
        description:
          "Kremsi dokusu ve dengeli kahve aromasıyla rafine bir lezzet",
        netWeight: "-",
        sliceWeight: "-",
        sliceCount: "-",
        shelfLife: "-",
        shelfLifeFrozen: "-",
        thawingTime: "-",
        boxDimensions: "-",
        palletCapacity: "-",
        numberOfBoxes: "-",
        trendyolLink: trendyolBaseUrl,
      },
      cedricLimon: {
        name: "Cedric Limon",
        description:
          "Kremsi dokusu ve ferah limon aromasıyla rafine bir lezzet",
        netWeight: "-",
        sliceWeight: "-",
        sliceCount: "-",
        shelfLife: "-",
        shelfLifeFrozen: "-",
        thawingTime: "-",
        boxDimensions: "-",
        palletCapacity: "-",
        numberOfBoxes: "-",
        trendyolLink: trendyolBaseUrl,
      },
    },
  },

  /*=========================== Mozaik&Ozel Pastalar ========================= */
  mozaikOzelPastalar: {
    name: "Mozaik&Özel Pastalar",
    items: {
      mozaikPasta: {
        name: "Mozaik Pasta",
        description:
          "Yoğun çikolata dokusu ve bisküvi kırıntılarıyla rafine bir lezzet.",
        netWeight: "1800g",
        sliceWeight: "150g",
        sliceCount: "12",
        shelfLife: "-",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: "-",
        image: mozaikPasta,
        trendyolLink: trendyolBaseUrl,
      },
    },
  },
  /*=========================== Cup Pastalar ========================= */
  cupPastalar: {
    name: "Cup Çeşitleri (Küçük Porsiyonlar)",
    items: {
      kediDiliTiramisuCup: {
        name: "Kedi Dili Tiramisu Cup",
        description:
          "Kremsi dokusu ve dengeli kahve–mascarpone aromasıyla rafine bir lezzet",
        netWeight: "-",
        sliceWeight: "-",
        sliceCount: "-",
        shelfLife: "-",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: "-",
        image: kediDiliTiramisuCup,
        trendyolLink: trendyolBaseUrl,
      },
      tropikalMeyveliCup: {
        name: "Tropikal Meyveli Cup",
        description:
          "Yumuşak dokusu ve ferah tropikal meyve aromasıyla rafine bir lezzet",
        netWeight: "-",
        sliceWeight: "-",
        sliceCount: "-",
        shelfLife: "-",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: "-",
        image: tropikalMeyveliCup,
        trendyolLink: trendyolBaseUrl,
      },
      cilekliCikolataliCup: {
        name: "Çilekli Çikolatalı Cup",
        description:
          "Kremsi dokusu ve çilek–çikolata uyumuyla rafine bir lezzet",
        netWeight: "-",
        sliceWeight: "-",
        sliceCount: "-",
        shelfLife: "-",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: "-",
        image: cilekliCikolataliCup,
        trendyolLink: trendyolBaseUrl,
      },
      lotusCup: {
        name: "Lotus Cup",
        description:
          "Kremsi dokusu ve karamelize Lotus aromasıyla rafine bir lezzet",
        netWeight: "1440g",
        sliceWeight: "160g",
        sliceCount: "9",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: "9",
        image: lotusCup,
        trendyolLink: trendyolBaseUrl,
      },
      antepFistikliDevilsCup: {
        name: "Antep Fıstıklı Devils Cup",
        description: "Yoğun kakao–fıstık aromasıyla rafine bir lezzet",
        netWeight: "1440g",
        sliceWeight: "160g",
        sliceCount: "9",
        shelfLife: "4 Gün",
        shelfLifeFrozen: "1 Yıl",
        thawingTime: "1-3 saat",
        boxDimensions: "27x79x30 cm",
        palletCapacity: "24 koli",
        numberOfBoxes: "9",
        image: antepFistikliDevilsCup,
        trendyolLink: trendyolBaseUrl,
      },
    },
  },
};
