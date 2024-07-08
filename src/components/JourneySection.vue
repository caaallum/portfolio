<template>
  <div class="flex flex-column justify-content-center align-items-center">
    <h1>Journey</h1>
    <Timeline :value="timeline" layout="vertical" align="alternate">
      <template #content="slotProps">
        <h3>{{slotProps.item.title}}</h3>
        <h5>{{slotProps.item.time}}</h5>
        <Button :id="slotProps.item.id" label="Read More" icon="pi pi-external-link" class="p-button-text" @click="toggle($event)" />
        <Dialog :header="slotProps.item.title" v-model:visible="slotProps.item.display" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}">
          <p>{{slotProps.item.readMore}}</p>
        </Dialog>
      </template>
    </Timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const timeline = ref([
  {
    id: 0,
    title: 'Woodlands Academy',
    time: '2009-2014',
    display: false,
    readMore: 'I attended Woodlands Academy in Tile Hill Coventry from the ages of 11 to 16. ',
  },
  {
    id: 1,
    title: 'City College Coventry',
    time: '2015-2017',
    display: false,
    readMore: 'I studied Game Development at City College Coventry',
  },
  {
    id: 2,
    title: 'Started at NetworkLtd',
    time: '2019-present',
    display: false,
    readMore: 'Working at Network has been amazing giving me the opportunity to work on many different projects and improve my skills as a developer.',
  },
  {
    id: 3,
    title: 'Software Development with Baltic Apprenticships',
    time: '2019-2020',
    display: false,
    readMore: 'I started at Network through baltic on a BTEC Level 3. Completing the course with a Distinction',
  },
])

const toggle = (e) => {
  timeline.value.every(t => t.display = false)
  timeline.value[e.currentTarget.id].display = !timeline.value[e.currentTarget.id].display;
}
</script>
