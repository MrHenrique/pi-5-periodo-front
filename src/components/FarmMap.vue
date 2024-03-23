<template>
    <div style="height:600px; width:1200px">

        <l-map :useGlobalLeaflet="false" :zoom="15" :center="[-18.599053568654103, -46.55767668414138]">
            <l-tile-layer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></l-tile-layer>

            <l-tile-layer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" layer-type="base" name="Topografia"
                atribuition='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'></l-tile-layer>
            <l-control-layers />
           
        </l-map>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlLayers, LMarker } from "@vue-leaflet/vue-leaflet";


export default defineComponent({
    name: 'FarmMap',
    props: {
        markers: {
            type: Array,
            required: false,
            default: () => []
        }
    },
        components: {
        LMap,
        LTileLayer,
        LControlLayers,
        LMarker,
    },
    data() {
        return {
            zoom: 2,
        };
    },
})
</script>

<style></style>