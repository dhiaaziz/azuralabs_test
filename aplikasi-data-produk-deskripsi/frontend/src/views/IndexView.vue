<template>
  <div>
    <div class="w-full">
      <div class="flex justify-end my-5">
        <router-link
          to="/add"
          type="button"
          class="
            text-white
            bg-blue-700
            hover:bg-blue-800
            focus:outline-none focus:ring-4 focus:ring-blue-300
            font-medium
            rounded-full
            text-sm
            px-5
            py-2.5
            text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
        >
          Add Product +
        </router-link>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Description</th>
              <!-- <th scope="col" class="px-6 py-3">Category</th>
                <th scope="col" class="px-6 py-3">Price</th> -->
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b"
              v-for="(product, index) in data"
              :key="index"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {{ product.name }}
              </th>
              <td class="px-6 py-4">{{ product.description }}</td>
              <!-- <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td> -->
              <td class="px-6 py-4 text-right">
                <router-link
                  :to="`/detail/${product.id}`"
                  class="mx-2 font-medium text-gray-600 hover:underline"
                  >Detail</router-link
                >
                <router-link
                  :to="`/edit/${product.id}`"
                  class="mx-2 font-medium text-blue-600 hover:underline"
                  >Edit</router-link
                >
                <div
                  @click="handleDelete(product.id)"
                  class="inline mx-2 font-medium text-red-600 hover:underline"
                >
                  Delete
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  setup() {
    let data = ref([]);

    const getProducts = async () => {
      try {
        const res = await axios.get("/products");
        // console.log(res.data);
        data.value = res.data.data;
      } catch (error) {
        console.log(error);
      }
    };

    const handleDelete = async (id) => {
      try {
        console.log(id);
        const confirmation = confirm("Are you sure?");
        if (!confirmation) {
          return;
        }
        const res = await axios.delete(`/products/${id}`);
        console.log(res.data);
        getProducts();
        // await axios.delete(`/products/${id}`);
        // getProducts();
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      // const countdown = new Countdown(this.time);
      // countdown.start();
      getProducts();
    });

    return {
      data,
      handleDelete,
      // name: "Aplikasi Data Produk Deskripsi",
      // time: "2023-02-28 10:15:00",
      // venue: "",
    };
  },
};
</script>

<style>
</style>