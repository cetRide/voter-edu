<template>
    <div style="width: 100%">
        <h4 class="text-center my-5">Polling Sattions Map Pins</h4>
        <GMapMap :center="center" :zoom="10" map-type-id="terrain" style="width: 100vw; height: 70vh">
            <GMapCluster :zoomOnClick="true">
                <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
                            @click="center = m.position" />
            </GMapCluster>
        </GMapMap>
    </div>
</template>

<script>
export default {
    name: "poling-pins",

    data() {
        return {
            center: { lat: 51.093048, lng: 6.84212 },
            markers: [
                {
                    position: {
                        lat: 51.093048,
                        lng: 6.84212
                    }
                },
                {
                    position: {
                        lat: 51.198429,
                        lng: 6.69529
                    }
                },
                {
                    position: {
                        lat: 51.165218,
                        lng: 7.067116
                    }
                },
                {
                    position: {
                        lat: 51.09256,
                        lng: 6.84074
                    }
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
