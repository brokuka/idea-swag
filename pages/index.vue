<script setup lang="ts">
const { data } = await useFetch('/api/settings')

console.log(data.value)
</script>

<template>
	<button>click</button>
</template>