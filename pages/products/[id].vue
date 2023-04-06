<template>
  <div>
    
    <Head>
      <Title>Nuxt Dojo | {{ product?.data.title }}</Title>
      <Meta name="description" :content="product?.data.description" />
    </Head>

    <ProductDetails :product="product?.data" />
  </div>
</template>

<script setup>

const { id } = useRoute().params
const uri = 'http://113.30.189.66:8055/items/products/' + id

const { data: product } = await useFetch(uri, { key: id })

// if (!product.value) {
//   throw createError({ statusCode: 404, statusMessage: 'Product not found' })
// }

definePageMeta({
  layout: "products",
})
</script>