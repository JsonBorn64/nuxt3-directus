export default defineEventHandler(async (event) => {

    const { directusURL } = useRuntimeConfig()

    const { data } = await $fetch(`${directusURL}/items/products`)

    return data
})