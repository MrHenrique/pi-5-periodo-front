<template>
    <div class="container flex flex-col ">
        <FarmMap :markers="markers" />
        <span>TESTE</span>
        <span>TESTE</span>
        <span>TESTE</span>
        <span>TESTE</span>
        <span>TESTE</span>
        <span>TESTE</span>
        <span>TESTE</span>
        <span>TESTE</span>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import FarmMap from '@/components/FarmMap.vue';

export default defineComponent({
    name: 'FarmPage',
    components: {
        FarmMap
    },

    data() {
        return {
            markers: [
                { latLng: [-18.599053568654103, -46.55767668414138], desc: "Sensor 1", type: "Umidade" },
                { latLng: [-18.609053568651656, -46.55767698641654], desc: "Sensor 2", type: "Umidade" },
            ]
        };
    }
});
</script>

<style scoped></style>
