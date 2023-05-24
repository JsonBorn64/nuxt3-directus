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
const route = useRoute();

const { getItemById } = useDirectusItems();
const product = await getItemById({ collection: "products", id: route.params.id });

// const { data: product } = await useFetch(`${useDirectusUrl()}products/${route.params.id}`);

if (!product) showError("No article found, 404");
</script>