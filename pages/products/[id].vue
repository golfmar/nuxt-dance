<template lang='pug'>
ProductDetails(:product="product")

</template>
<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//  fetch the products
const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}
</script>
