<template>
    <div class="grid justify-content-center align-items-center">
        <Timeline :value="timeline" layout="vertical" align="alternate">
            <template #content="slotProps">
                <h3>{{slotProps.item.title}}</h3>
                <h5>{{slotProps.item.time}}</h5>
                <p>{{slotProps.item.info}}</p>
            </template>
        </Timeline>
    </div>
</template>

<script>


export default {
    data() {
        return {
            timeline: [
                {
                    title: 'Woodlands Academy',
                    time: '2009-2014',
                    info: 'My secondary school was the Woodlands Academy in coventry.',
                },
                {
                    title: 'Coventry City College',
                    time: '2015-2017',
                    info: 'I studied Game Design in College'
                },
                {
                    title: 'Started at NetworkLtd',
                    time: '2019-present',
                },
                {
                    title: 'Software Development with Baltic Apprenticships',
                    time: '2019-2020',
                },
                {
                    title: 'Software Development at Aston University',
                    time: '2021-present'
                }
            ]
        }
    },
}
</script>
