<template>
    <div class="flex align-items-center justify-content-center flex-column">
        <Toast />
        <h1>Contact me</h1>
        <div class="mb-2">
            <h3>Name: </h3>
            <InputText id="name" type="text" v-model="name" />
        </div>
        <div class="mb-2">
            <h3>Email:</h3>
            <InputText id="email" type="email" v-model="email" />
        </div>
        <div class="mb-2">
            <h3>Message:</h3>
            <TextArea :autoResize="true" rows="5" cols="22" id="message" v-model="message" />
        </div>
        <Button label="Submit" @click="submit()"/>

        <div class="mb-2 flex">
            <Button icon="pi pi-github" class="p-button-rounded p-button-text" @click="route('http://github.com/caaallum')" />
            <Button icon="pi pi-instagram" class="p-button-rounded p-button-text" @click="route('http://instagram.com/callums_03')" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            message: null,
        }
    },
    methods: {
        route(url) {
            window.open(url, '_blank');
        },
        submit() {
            this.$toast.add({severity: 'error', summary: 'Error sending Message', life: 3000});
            //this.$toast.add({severity:'success', summary: 'Message sent', life: 300});
        }
    }
}
</script>
