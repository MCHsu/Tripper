import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { db } from "@/stores/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
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
    // console.log(products.value);
    return (id) => {
      return products.value.find((product) => {
        return product.id === id;
      });
    };
  });

  //   const sortedProducts = computed(() => {
  //     return (sortBy) => {
  //       const result=[]

  //       if (sortBy === 'lowToHigh') {
  //        result= filteredProducts.value.sort((a, b) => a.price - b.price);
  //       } else if (sortBy === 'highToLow') {
  //         result=filteredProducts.value.sort((a, b) => b.price - a.price);
  //       }
  // return result
  //     },
  //   });

  function SortProducts(sortBy) {
    // const result = filteredProducts.value;

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
  // function searchProducts(keyword) {
  //   const results = products.value.filter((product) => {
  //     return (
  //       product.name
  //         .toLowerCase()
  //         .indexOf(keyword.toLowerCase().split(/\s+/).join("")) !== -1 ||
  //       product.country
  //         .toLowerCase()
  //         .indexOf(keyword.toLowerCase().split(/\s+/).join("")) !== -1
  //     );
  //   });
  //   filteredProducts.value = results;
  //   console.log("searchResults", filteredProducts.value);
  //   return results;
  // }
  // function searchProducts(keyword) {
  //   const keywords = keyword.split(" ");
  //   const results = [];
  //   // const results = products.value.filter((product) => {
  //   //   product.name.toLowerCase().includes(keywords) ||
  //   //     product.country.toLowerCase().includes(keywords);
  //   // });

  //   keywords.forEach((str) => {
  //     products.value.forEach((item) => {
  //       if (
  //         item.name.toLowerCase().includes(str.toLowerCase()) ||
  //         item.country.toLowerCase().includes(str.toLowerCase()) ||
  //         item.category.toLowerCase().includes(str.toLowerCase())
  //       ) {
  //         results.push(item);
  //       }
  //     });
  //   });
  //   return [...new Set(results)];
  // }

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
    // console.time("start time");
    isLoading.value = true;
    console.log("isLoading", isLoading.value);

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
    // console.timeEnd("start time");
  console.log("isLoading", isLoading.value);
    return filteredResult;
  }
  // function getFilteredProducts(keyword, filtersData) {
  //   console.time("start time");
  //   isLoading.value = true;

  //   const filteredByCountries = [];
  //   const filteredByCategories = [];
  //   const { countries, categories } = filtersData;

  //   if (keyword) {
  //     filteredProducts.value = searchProducts.value(keyword);
  //     if (countries.length === 0 && categories.length === 0) {
  //       isLoading.value = false;
  //       return;
  //     }
  //   } else {
  //     filteredProducts.value = products.value;
  //   }

  //   if (countries.length !== 0) {
  //     countries.forEach((country) => {
  //       const filteredResult = filteredProducts.value.filter((product) => {
  //         return product.country === country;
  //       });
  //       filteredByCountries.push(...filteredResult);
  //     });
  //   }

  //   if (categories.length !== 0) {
  //     categories.forEach((category) => {
  //       const filteredResult = filteredProducts.value.filter((product) => {
  //         return product.category === category;
  //       });
  //       filteredByCategories.push(...filteredResult);
  //     });
  //   }

  //   if (countries.length !== 0 && categories.length !== 0) {
  //     const FilteredProductsResult = filteredByCountries.filter((e) => {
  //       return filteredByCategories.indexOf(e) > -1;
  //     });

  //     filteredProducts.value = FilteredProductsResult;
  //   } else {
  //     filteredProducts.value = [
  //       ...filteredByCountries,
  //       ...filteredByCategories,
  //     ];
  //   }
  //   isLoading.value = false;
  //   console.timeEnd("start time");
  // }

  async function setProducts() {
    try {
      await addDoc(productsRef, {
        name: "Kyoto Suburb Day Tour from Osaka: Amanohashidate, Ine Funaya, & Miyama Kayabuki No Sato | Japan",
        category: "Day Tour",
        price: 2244,
        country: "Japan",
        address:
          "1-3, Dotonbori 1-chome, Chuo-ku, Osaka City, Osaka Prefecture",
        image:
          "https://images.unsplash.com/photo-1681823190775-1aee67c71e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1320&q=80",
        description:
          "Discover the enchanting beauty of Kyoto by the sea on an incredible Tripper Signature Tour. Witness the awe-inspiring 'flying dragon' Amanohashidate, a geological wonder and experience the charm of a bygone era with a serene boat cruise to the Ine Boathouse complex and a leisurely stroll through the picturesque Miyama thatched house village. Enjoy the convenience of private transport as you explore these popular attractions, immersing yourself in the unique landscapes and local architecture that make Kyoto truly magical.",
        created_at: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error: ", err);
    }
  }

  // setProducts();

  return {
    products,
    filteredProducts,
    countries,
    categories,
    sortBy,
    filters,
    getProducts,
    getUniqueProduct,
    // sortedProducts,
    isLoading,
    searchProducts,
    setProducts,
    getLatestProducts,
    getRandomProducts,
    getFilteredProducts,
    SortProducts,
    // getProductsByCategory,
  };
});
