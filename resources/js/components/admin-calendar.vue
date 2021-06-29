<template>
    <div>
        <div>
            <h4 class="my-4 text-center">Manage Calendar Events</h4>
        </div>
        <div class="mb-4">
            <Button label="Add Event" class="p-button-raised p-button-rounded"
                    icon="pi pi-plus" iconPos="left"
                    @click="display = true"
            ></Button>
        </div>
        <Dialog header="Add an Event"
                :breakpoints="{'960px': '90vw'}"
                position="top"
                v-model:visible="display"
                :style="{width: '40vw'}" :modal="true">
            <div class="col-md-12">
                <label for="title">Event title</label><br>
                <InputText style="width: 100%" id="title" type="text" v-model="form.title"/>
            </div>
            <div class="col-md-12">
                <label for="start">Start</label><br>
                <Calendar style="width: 100%" id="start" v-model="form.start" :showTime="true" :showSeconds="false"/>
            </div>
            <div class="col-md-12">
                <label for="end">End</label> <br>
                <Calendar style="width: 100%" id="end" v-model="form.end" :showTime="true" :showSeconds="false"/>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" @click="display = false" class="p-button-text"/>
                <Button label="Submit" icon="pi pi-plus" autofocus/>
            </template>
        </Dialog>

        <Dialog header="Edit an Event"
                :breakpoints="{'960px': '90vw'}"
                position="top"
                v-model:visible="editDisplay"
                :style="{width: '40vw'}" :modal="true">
            <div class="col-md-12">
                <label for="etitle">Event title</label><br>
                <InputText style="width: 100%" id="etitle" type="text" v-model="form.title"/>
            </div>
            <div class="col-md-12">
                <label for="estart">Start</label><br>
                <Calendar style="width: 100%" id="estart" v-model="form.start" :showTime="true" :showSeconds="false"/>
            </div>
            <div class="col-md-12">
                <label for="eend">End</label> <br>
                <Calendar style="width: 100%" id="eend" v-model="form.end" :showTime="true" :showSeconds="false"/>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" @click="editDisplay = false" class="p-button-text"/>
                <Button label="Edit" icon="pi pi-pencil" autofocus/>
            </template>
        </Dialog>

        <ConfirmDialog></ConfirmDialog>

        <div class="card">
            <DataTable :value="events" responsiveLayout="scroll">
                <Column field="title" header="Event title"></Column>
                <Column field="start" header="Start"></Column>
                <Column field="end" header="End"></Column>
                <Column field="end" header="Action">
                    <template #body="slotProps">
                        <div class="row">
                            <Button v-tooltip="'Edit'" @click="editDisplay = true" icon="pi pi-pencil" class="p-button-sm p-button-rounded p-button-success p-button-outlined"/>
                            <Button v-tooltip="'Delete'" @click="delete" icon="pi pi-trash" class="p-button-sm p-button-rounded p-button-danger p-button-outlined"/>
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>

    </div>
</template>

<script>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tooltip from 'primevue/tooltip';
import ConfirmDialog from 'primevue/confirmdialog';



export default {
    directives: {
        'tooltip': Tooltip
    },
    components: {
        Button, Dialog, InputText, Calendar, DataTable, Column,ConfirmDialog
    },
    name: "admin-calendar",
    data() {
        return {
            display: false,
            editDisplay: false,
            form: {},
            events: [
                {"title": "event 1", "start": "2021-06-07", "end": "2021-06-15"},
                {"title": "event 2", "start": "2021-06-11", "end": "2021-06-13"},
                {"title": "event 3", "start": "2021-06-12", "end": "2021-06-12"},
                {"title": "event 4", "start": "2021-06-16", "end": "2021-06-17"},
            ]
        }
    },
    methods:{
        delete() {
            this.$confirm.require({
                message: 'Do you want to delete this event?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                position: 'top',
                accept: () => {
                    //callback to execute when user confirms the action
                },
                reject: () => {
                    //callback to execute when user rejects the action
                }
            });
        },
    }
}
</script>

<style scoped lang="scss">
.p-button {
    margin-right: .5rem;
}

.p-buttonset {
    .p-button {
        margin-right: 0;
    }
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-dialog .p-button {
    min-width: 6rem;
}
</style>
