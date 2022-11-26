import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
const app = createApp(App);

// Primevue components
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import ScrollTop from 'primevue/scrolltop';

app.component('Toolbar', Toolbar);
app.component('Button', Button);
app.component('ScrollTop', ScrollTop);

// Theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css';


app.use(PrimeVue, { ripple: true });

app.mount('#app');

