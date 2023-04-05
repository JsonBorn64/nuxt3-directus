<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products?.data">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>

const { data: products } = await useFetch('http://45.91.169.26:8055/items/products')

useHead({
    title: 'Nuxt | Merch',
    meta: [
        { name: 'description', content: 'Nuxt 3 Merch' }
    ]
})

definePageMeta({
    layout: "products",
})
</script>

// const { getItems } = useDirectusItems();
// const products = await getItems({ collection: "Products" });

// const { data: products } = await useAsyncData(
//   'products',
//   () => $fetch('http://localhost:8055/items/Products')
// )
// const { data: products } = await useFetch('https://fakestoreapi.com/products')

// const { data } = await useAsyncQuery(gql`
//     query {
//         Products {
//             id
//             title
//         }
//     }
// `)