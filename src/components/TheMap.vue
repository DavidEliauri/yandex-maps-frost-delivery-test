<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    const mapNode = ref<HTMLDivElement>();
    const mapIsReady = ref(false);

    onMounted(() => {
        // @ts-ignore
        ymaps.ready(() => {
            mapIsReady.value = true;

            // @ts-ignore
            const map = new ymaps.Map(mapNode.value, {
                center: [55.76, 37.64],
                zoom: 7,
            });

            /**
             * Создаем мультимаршрут.
             * Первым аргументом передаем модель либо объект описания модели.
             * Вторым аргументом передаем опции отображения мультимаршрута.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml
             */
            // @ts-ignore
            const multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                    // Описание опорных точек мультимаршрута.
                    referencePoints: [
                        'Владикавказ, ул. Владикавказская 25',
                        'Владикавказ, ул. Хаджи Мамсурова 62',
                        'Владикавказ, проспект Коста 210',
                        'Владикавказ, ул. Калинина 2А',
                    ],
                    params: {
                        viaIndexes: [1, 2],
                    },
                },
                {
                    // // Задаем собственную картинку для последней путевой точки.
                    // wayPointFinishIconLayout: 'default#image',
                    // wayPointFinishIconImageHref: 'images/warehouse.png',
                    // wayPointFinishIconImageSize: [30, 30],
                    // wayPointFinishIconImageOffset: [-15, -15],
                    // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                    boundsAutoApply: true,
                },
            );

            map.geoObjects.add(multiRoute);
        });
    });
</script>

<template>
    <div class="-m-4 mt-0">
        <div
            v-if="mapIsReady === false"
            class="aspect-square w-full animate-pulse rounded-lg bg-slate-200 lg:aspect-video"
        ></div>

        <div
            v-show="mapIsReady"
            ref="mapNode"
            class="aspect-square w-full overflow-hidden rounded-lg lg:aspect-video"
        ></div>
    </div>
</template>
