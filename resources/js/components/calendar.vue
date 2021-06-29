<template>
<div>
    <h5 class="text-center my-4">Calendar of Events</h5>
    <FullCalendar :events="events" :options="calendarOptions" />
</div>
</template>

<script>
import FullCalendar from 'primevue/fullcalendar';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
    components: {
        FullCalendar
    },
    name: "calendar",
    data() {
        return {
            calendarOptions: {
                plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
                headerToolbar: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            },
            events: [
                {
                    "id": 1,
                    "title": "All Day Event",
                    "start": "2021-06-01"
                },
                {
                    "id": 2,
                    "title": "Long Event",
                    "start": "2021-06-07",
                    "end": "2021-06-10"
                },
                {
                    "id": 3,
                    "title": "Repeating Event",
                    "start": "2021-06-09T16:00:00"
                },
                {
                    "id": 4,
                    "title": "Repeating Event",
                    "start": "2021-06-16T16:00:00"
                },
                {
                    "id": 5,
                    "title": "Conference",
                    "start": "2021-06-11",
                    "end": "2021-06-13"
                },
                {
                    "id": 6,
                    "title": "Meeting",
                    "start": "2021-06-12T10:30:00",
                    "end": "2021-06-12T12:30:00"
                }
            ]
        };
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.fc-header-toolbar) {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
