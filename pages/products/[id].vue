<template>
  <div>
    
    <Head>
      <Title>Nuxt Dojo | {{ product?.title }}</Title>
      <Meta name="description" :content="product?.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { getItemById } = useDirectusItems();
const route = useRoute();

const product = await getItemById({ collection: "products", id: route.params.id });
if (!product) showError("No article found, 404");

definePageMeta({
  layout: "products",
})
</script>