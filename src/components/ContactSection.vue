<template>
  <div class="flex align-items-center justify-content-center flex-column">
    <Toast />
    <h1>Contact me</h1>
    <form ref="form" @submit="onSubmit" class="p-fluid">
      <div class="field">
        <span class="p-float-label">
          <InputText
            id="name"
            :class="{ 'p-invalid': nameError}"
            aria-describedby="name-error"
            v-model="nameValue"
          />
          <label for="name">Name</label>
        </span>
        <small class="p-error" id="name-error">{{
          nameError || '&nbsp;'
        }}</small>
      </div>
      <div class="field">
        <span class="p-float-label">
          <InputText 
            id="email"
            :class="{ 'p-invalid': emailError }"
            aria-describedby="email-error"
            v-model="emailValue"
            type="email"
          />
          <label for="email">Email</label>
        </span>
        <small class="p-error" id="email-error">{{
          emailError || '&nbsp;'
        }}</small>
      </div>
      <div class="field">
        <span class="p-float-label">
          <TextArea 
            :autoResize="true"
            rows="5"
            cols="22"
            id="message"
            :class="{ 'p-invalid': messageError }"
            v-model="messageValue"
          />
          <label for="message">Message</label>
        </span>
        <small class="p-error" id="message-error">{{
          messageError || '&nbsp;'
        }}</small>
      </div>
      <div class="field">
        <Button type="submit" label="Submit" />
      </div>
    </form>
    <div class="mb-2 flex">
      <Button icon="pi pi-github" class="p-button-rounded p-button-text" @click="route('http://github.com/caaallum')" />
      <Button icon="pi pi-instagram" class="p-button-rounded p-button-text" @click="route('http://instagram.com/callums_03')" />
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'

const toast = useToast()

const route = (url) => {
  window.open(url, '_blank')
}

const { handleSubmit } = useForm()
const { value: nameValue, errorMessage: nameError } = useField(
  'name',
  v => {
    if (!v) {
      return 'Name is required'
    }
    return true
  }
)
const { value: emailValue, errorMessage: emailError } = useField(
  'email',
  v => {
    if (!v) {
      return 'Email is required'
    }
    return true
  }
)
const { value: messageValue, errorMessage: messageError } = useField(
  'message',
  v => {
    if (!v) {
      return 'Message is required'
    }
    return true
  }
)

const onSubmit = handleSubmit(value => {
  toast.add({severity: 'error', summary: 'Error sending message', life: 3000})
})
</script>
