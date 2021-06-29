require('./bootstrap');
import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import Home from "./components/side-nav.vue";
import MainDash from "./components/home.vue";
import Calendar from "./components/calendar.vue";
import AdminCalendar from "./components/admin-calendar.vue";
import AdminPollingStations from "./components/admin-polling-stations.vue";
import VoteSample from "./components/vote-sample.vue";
import PollingPins from "./components/poling-pins.vue";

import VueGoogleMaps from '@fawmi/vue-google-maps'


const app = createApp({
    components: {
       MainDash, Home, Calendar, AdminCalendar, AdminPollingStations, PollingPins, VoteSample
    }
});
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBHGI89Z5VjR2z7xlO8rLYI0tRZCHsHlRg',
    },
});
app.use(ConfirmationService)

app.use(PrimeVue);
app.mount("#app");
