import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import VueFullPage from 'vue-fullpage.js'
const app = createApp(App);

// Primevue components
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Timeline from 'primevue/timeline';
import InputText from 'primevue/inputtext';
import TextArea from 'primevue/textarea';

app.component('Toolbar', Toolbar);
app.component('Button', Button);
app.component('Timeline', Timeline);
app.component('InputText', InputText);
app.component('TextArea', TextArea);

// Theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css';
import 'vue-fullpage.js/dist/style.css'

app.use(PrimeVue, { ripple: true });
app.use(VueFullPage)
app.mount('#app');

