<template>
  <div class="p-5 border rounded-lg">
    <h1 class="mb-3 text-xl">Add Product</h1>
    <form class="pt-5" @submit.prevent="addProduct">
      <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
          >Name</label
        >
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
          "
          placeholder="John Doe"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Description</label
        >
        <textarea
          v-model="form.description"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
          "
          name="description"
          id=""
        ></textarea>
      </div>
      <div class="flex justify-between">
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
        <input
          type="submit"
          class="
            text-white
            bg-blue-700
            hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            w-full
            sm:w-auto
            px-5
            py-2.5
            text-center
          "
          value="Submit"
        />
        <!-- Submit
        </input> -->
      </div>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";
import router from "@/router";
export default {
  setup() {
    const form = reactive({
      name: "",
      description: "",
    });

    const addProduct = async () => {
      try {
        // const res = await fetch("/api/products", {
        //       method: "POST",
        //       body: JSON.stringify(form),
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //     });
        //     const data = await res.json();
        // console.log(data);
        const res = await axios.post("/products", form);
        // console.log(res);
        router.push("/");
      } catch (err) {
        console.log(err);
      }
    };
    // onMounted(() => {
    //   console.log('hello')
    // })
    return {
      form,
      addProduct,
    };
  },
};
</script>