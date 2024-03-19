<template>
    <div id="mapContainer">
    </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default defineComponent({
    name: 'FarmMap',
    props: {
        markers: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    setup(props) {
        let map = null;

        onMounted(() => {
            createMapLayer();

            if (props.markers.length) {
                setMarkers()
            }
        });

        onBeforeMount(() => {
            if (map) {
                map.remove();
            }
        })


        const createMapLayer = () => {
            map = L.map('mapContainer').setView([-18.599866771140512, -46.55585309779889], 15)
            L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map)
        }

        const setMarkers = () => {
            props.markers.map((markers) => {
                return L.marker([markers.lat, markers.long], { title: 'Sensor', riseOnHover: true }).addTo(map)
                    .bindPopup(markers.desc)
            })
        }
    }
})
</script>

<style scoped>
#mapContainer {
    width: 40rem;
    height: 40rem;
}
</style>