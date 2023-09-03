import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { db } from "@/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const filteredProducts = ref([]);
  const filters = ref({ countries: [], categories: [] });
  const isLoading = ref(false);
  const productsRef = collection(db, "products");
  const categories = ref([
    "Day Tours",
    "Attraction Tickets",
    "Outdoor Activities",
    "Transportation",
    "Food & Dining",
  ]);
  const countries = ref(["Japan", "Korea", "Thailand", "Australia"]);
  const sortBy = ref([
    { title: "Price (low to high)", value: "lowToHigh" },
    { title: "Price (high to low)", value: "highToLow" },
  ]);

  async function getProducts() {
    try {
      isLoading.value = true;

      const productsData = await getDocs(productsRef);
      productsData.forEach((doc) => {
        const product = { id: doc.id, ...doc.data() };
        products.value.push(product);
      });
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }

  const getUniqueProduct = computed(() => {
    return (id) => {
      return products.value.find((product) => {
        return product.id === id;
      });
    };
  });

  function SortProducts(sortBy) {
    if (sortBy === "lowToHigh") {
      filteredProducts.value.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filteredProducts.value.sort((a, b) => b.price - a.price);
    }
  }

  const searchProducts = computed(() => {
    return (keyword) => {
      const results = products.value.filter((product) => {
        return (
          product.name
            .toLowerCase()
            .includes(keyword.toLowerCase().split(/\s+/).join("")) ||
          product.country
            .toLowerCase()
            .includes(keyword.toLowerCase().split(/\s+/).join(""))
        );
      });
      return results;
    };
  });

  function getLatestProducts() {
    const latestProducts = [...products.value];
    latestProducts.sort((a, b) => b.created_at - a.created_at);
    return latestProducts.slice(0, 8);
  }

  function getRandomProducts() {
    const shuffledProducts = [...products.value];
    shuffledProducts.sort(() => Math.random() - 0.5);
    return shuffledProducts.slice(0, 8);
  }

  function getFilteredProducts(keyword, filtersData) {
    isLoading.value = true;

    const { countries, categories } = filtersData;
    let filteredResult = [];

    if (keyword) {
      filteredResult.push(...searchProducts.value(keyword));
    } else {
      filteredResult.push(...products.value);
    }

    if (countries.length !== 0) {
      const result = [];
      countries.forEach((country) => {
        const filteredByCountries = filteredResult.filter((product) => {
          return product.country === country;
        });
        result.push(...filteredByCountries);
      });
      filteredResult = result;
    }

    if (categories.length !== 0) {
      const result = [];
      categories.forEach((category) => {
        const filteredByCategories = filteredResult.filter((product) => {
          return product.category === category;
        });
        result.push(...filteredByCategories);
      });
      filteredResult = result;
    }

    isLoading.value = false;

    return filteredResult;
  }

  async function setProducts() {
    try {
      await addDoc(productsRef, {
        name: "Seafood Dinner Buffet at Kad Kafe Restaurant by Shangri-La Hotel Chiang Mai | Thailand",
        category: "Food & Dining",
        price: 1445,
        country: "Thailand",
        address:
          "89/8 Changklan Rd, Tambon Chang Khlan, Mueang Chiang Mai District, Chiang Mai 50100, Thailand",
        image:
          "https://images.unsplash.com/photo-1588791174744-7e9bf4378277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description:
          "Nestled within the serene embrace of northern Thailand's cultural gem, the Shangri-La Hotel Chiang Mai, lies a culinary haven that promises an unforgettable gastronomic experience - Kad Kafe Restaurant. Set against the backdrop of Chiang Mai's rich heritage and natural beauty, this dining establishment offers much more than just a meal; it offers a journey into the heart of Thai flavors and hospitality. From its enticing menu to its captivating ambiance, here's what you can expect from your visit to Kad Kafe Restaurant.",
        created_at: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error: ", err);
    }
  }

  // setProducts();

  async function updateProducts() {
    await updateDoc(doc(db, "products", "5VRzSF2RUKQe4zU9wnzQ"), {
      description:
        "Set off from Melbourne on a Great Ocean Road trip to see the best that Australia's South Coast has to offer. The famous 150-mile stretch has breathtaking views of the Bass Strait; along the way, you'll glimpse lighthouses, natural rock formations, and beautiful beaches.\n\nBreathe in the fresh air as you stand in awe of the lush forests in Great Otway National Park. Why not meet and greet local wildlife too? Try to spot the koalas and parrots in the foliage. You can even join a self-guided eco tour to learn more about the park's flora and fauna.\n\nContinue your scenic drive to Port Campbell National Park, and see the striking seascape of The Twelve Apostles, a magnificent collection of limestone stacks rising up out of the ocean. For a closer look, head to the Gibson Steps, which lead to a golden stretch of Gibson Beach. The 70-meter-high vertical cliffs are certainly a sight to behold.\n\nThen, head west to a nature trail along the enchanting Loch Ard Gorge, named after the famous 1878 shipwreck. Catch sight of the sunset on crystal clear blue water, flanked by incredible yellow-washed cliffs",
    });
  }

  // updateProducts();
  return {
    products,
    filteredProducts,
    countries,
    categories,
    sortBy,
    filters,
    getUniqueProduct,
    isLoading,
    searchProducts,
    getProducts,
    setProducts,
    getLatestProducts,
    getRandomProducts,
    getFilteredProducts,
    SortProducts,
    updateProducts,
  };
});
