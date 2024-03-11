<script setup lang="ts">
    import TheMap from '@/components/TheMap.vue';
</script>

<template>
    <main class="flex min-h-screen items-center bg-[#F5F5F5]">
        <div class="container flex justify-center">
            <div class="w-full max-w-[600px] rounded-xl bg-white p-5">
                <h1 class="mb-5 text-lg font-medium">Пример работы карты</h1>

                <TheMap />
            </div>
        </div>
    </main>
</template>
