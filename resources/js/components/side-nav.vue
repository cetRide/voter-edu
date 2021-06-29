<template>
    <div class="side-nav-cont">
        <p style="margin-left: .4rem"><i class="pi pi-home"></i> Home</p>
        <p style="margin-left: .4rem"><i class="pi pi-file"></i> Voter Information center</p>
        <Divider />
        <Accordion class="accordion-custom">
            <AccordionTab>
                <template #header>
                    <i class="pi pi-calendar"></i>
                    <span>Events</span>
                </template>
                <p><a href="/manage-events">Manage Events</a></p>
                <p><a href="/view-events">View Calendar</a></p>
            </AccordionTab>
        </Accordion>
        <Divider />
        <Accordion class="accordion-custom">
            <AccordionTab>
                <template #header>
                    <i class="pi pi-check-square"></i>
                    <span>Voting</span>
                </template>
                <p><a href="/polling-stations">View Stations</a></p>
                <p><a href="/manage-polling-stations">Manage Stations</a></p>
                <p><a href="/cast-vote">Cast Vote</a></p>
            </AccordionTab>
        </Accordion>
        <Divider/>
        <Accordion class="accordion-custom">
            <AccordionTab>
                <template #header>
                    <i class="pi pi-compass"></i>
                    <span>Queue</span>
                </template>
                <p>Queue management</p>
                <p>Queue tracking</p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Divider from 'primevue/divider';

export default {
    components: {
        Accordion, AccordionTab ,Divider
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
<style lang="scss" scoped>
.side-nav-cont p {
    cursor: pointer;
}
.side-nav-cont p:hover {
    cursor: pointer;
    color: #008cff;
}

.accordion-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}

.p-accordion p {
    line-height: 1.5;
    margin: 0;
}
</style>
