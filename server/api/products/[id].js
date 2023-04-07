export default defineEventHandler(async (event) => {

    const { id } = event.context.params
    const { directusURL } = useRuntimeConfig()

    const { data } = await $fetch(`${directusURL}/items/products/${id}`)

    return data
})