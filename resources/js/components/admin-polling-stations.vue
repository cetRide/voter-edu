<template>
    <div>
        <div>
            <h4 class="my-4 text-center">Manage Polling Stations</h4>
        </div>
        <div class="mb-4">
            <Button label="Add Polling Station" class="p-button-raised p-button-rounded"
                    icon="pi pi-plus" iconPos="left"
                    @click="display = true"
            ></Button>
        </div>
        <Dialog header="Add a Polling Station"
                :breakpoints="{'960px': '90vw'}"
                position="top"
                v-model:visible="display"
                :style="{width: '40vw'}" :modal="true">
            <div class="col-md-12">
                <label for="name">Name</label><br>
                <InputText style="width: 100%" id="name" type="text" v-model="form.name"/>
            </div>
            <div class="col-md-12">
                <label for="lat">Latitude</label><br>
                <InputText style="width: 100%" id="lat" type="text" v-model="form.latitude"/>            </div>
            <div class="col-md-12">
                <label for="long">Longitude</label> <br>
                <InputText style="width: 100%" id="long" type="text" v-model="form.longitude"/>            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" @click="display = false" class="p-button-text"/>
                <Button label="Submit" icon="pi pi-plus" autofocus/>
            </template>
        </Dialog>

        <Dialog header="Edit a Polling Station"
                :breakpoints="{'960px': '90vw'}"
                position="top"
                v-model:visible="editDisplay"
                :style="{width: '40vw'}" :modal="true">
            <div class="col-md-12">
                <label for="ename">Name</label><br>
                <InputText style="width: 100%" id="ename" type="text" v-model="form.name"/>
            </div>
            <div class="col-md-12">
                <label for="elat">Latitude</label><br>
                <InputText style="width: 100%" id="elat" type="text" v-model="form.latitude"/>
            </div>
            <div class="col-md-12">
                <label for="elong">Longitude</label> <br>
                <InputText style="width: 100%" id="elong" type="text" v-model="form.longitude"/>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" @click="editDisplay = false" class="p-button-text"/>
                <Button label="Edit" icon="pi pi-pencil" autofocus/>
            </template>
        </Dialog>

        <ConfirmDialog></ConfirmDialog>

        <div class="card">
            <DataTable :value="events" responsiveLayout="scroll">
                <Column field="name" header="Name"></Column>
                <Column field="longitude" header="Longitude"></Column>
                <Column field="latitude" header="Latitude"></Column>
                <Column field="latitude" header="Action">
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
    name: "admin-polling-stations",
    data() {
        return {
            display: false,
            editDisplay: false,
            form: {},
            events: [
                {"name": "Station 1", "latitude": "-1.286389", "longitude": "36.817223"},
                {"name": "Station 2", "latitude": "-1.286389", "longitude": "36.817223"},
                {"name": "Station 3", "latitude": "-1.286389", "longitude": "36.817223"},
                {"name": "Station 4", "latitude": "-1.286389", "longitude": "36.817223"},
            ]
        }
    },
    methods:{
        delete() {
            this.$confirm.require({
                message: 'Do you want to delete this polling station ?',
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
