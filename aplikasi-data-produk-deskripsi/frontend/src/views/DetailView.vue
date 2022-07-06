<template>
  <div class="p-5 border rounded-lg">
    <h1 class="mb-3 text-xl">Detail Product</h1>
    <div
      class="py-4 space-y-1 border-b md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0"
    >
      <p class="text-gray-600">Name</p>
      <p>
      {{data.name}}
      </p>
    </div>
    <div
      class="py-4 space-y-1 border-b md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0"
    >
      <p class="text-gray-600">About</p>
      <p>
       {{data.description}}
      </p>
    </div>
    <div class="flex justify-between mt-5">
        <router-link to="/">
          <div
            class="
              rounded-lg
              text-sm
              w-full
              sm:w-auto
              py-2.5
              text-center text-blue-500
            "
          >
            ← Back
          </div>
        </router-link>
        
      </div>
  </div>
</template>


<script>
import { onBeforeMount, reactive } from "@vue/runtime-core";
import axios from "axios";
import route from "@/router";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute()
    let id = route.params.id;
    let data = reactive({});
    
    onBeforeMount(async () => {
      try {
        // const id = route.params.id;
        // console.log(id);
        const res = await axios.get(`/products/${id}`);
        // console.log(res.data.data);
        // data.name = res.data.data.name;
        Object.assign(data, res.data.data);
      } catch (error) {
        console.log(error);
      }

      // axios
      //   .get(`/api/products/${id}`)
      //   .then((response) => {
      //     this.product = response.data;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    });
    return {
      data
    };
  },
};
</script>
