<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>

const { getItems } = useDirectusItems();
const products = await getItems({ collection: "products" });

// const { data: products } = await useFetch(`${useDirectusUrl()}items/products`)

useHead({
    title: 'Nuxt | Merch',
    meta: [
        { name: 'description', content: 'Nuxt 3 Merch' }
    ]
})

</script>

// const { data: products } = await useAsyncQuery(gql`
//     query {
//         products {
//             id
//             title
//             image
//         }
//     }
// `)