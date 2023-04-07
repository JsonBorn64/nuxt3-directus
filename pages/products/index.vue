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

// const { data } = await useAsyncQuery(gql`
//     query {
//         Products {
//             id
//             title
//         }
//     }
// `)