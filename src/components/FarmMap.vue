<template>
  <div style="height: 600px; width: 1200px">
    <l-map :useGlobalLeaflet="false" :zoom="15" :center="[-18.599053568654103, -46.55767668414138]">
      <l-control-layers />
      <l-tile-layer
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="Topografia"
        atribuition='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      ></l-tile-layer>
      <l-tile-layer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        layer-type="base"
        name="OpenStreetMap"
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      ></l-tile-layer>
      <l-marker :lat-lng="latLng">
        <l-popup>Fazenda Eder</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LControlLayers, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'

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
    LPopup
  },
  data() {
    return {
      zoom: 2,
      latLng: [-18.599053568654103, -46.55767668414138]
    }
  }
})
</script>

<style></style>
