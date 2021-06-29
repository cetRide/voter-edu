<template>
    <div>
        <div class="col-md-10 ml-auto mr-auto">
            <h4 class="text-center">Ballot Paper Sample</h4>
            <div class="border inst">
                <h5>Voting Instructions</h5>
                <p>
                    - Mark in the space that corresponds to the: <br>
                    &nbsp; &nbsp; a. Name, portrait, and symbol of the Political Party
                    candidate <br>
                    &nbsp; &nbsp; b.Name and portrait of an independent candidate <br>
                    - Make only one mark on a ballot paper within the space
                    provided for marking. <br>
                    - Features of a correctly marked ballot paper <br>
                    - The ballot paper should have a mark against only one
                    candidate<br>
                    - The mark should be within the space <br>
                </p>
            </div>

            <table style="text-align: center;" class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Party/Candidate Symbol</th>
                    <th scope="col">Candidate's Photo and Name</th>
                    <th scope="col">Voter's Mark</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td @click="displayTwo = true">
                        <div>
                            <img height="70" width="70" src="/images/icons/apple.png" alt="">
                        </div>
                        <div>
                            Party XX
                        </div>
                    </td>
                    <td @click="displayTwo = true">
                        <div class="row">
                            <div class="ml-2">
                                <img height="70" width="70" src="/images/icons/man.png" alt="">
                            </div>
                            <div class="cnt">
                                Eneo Bora
                            </div>
                        </div>
                    </td>
                    <td v-tooltip="'Tick within this box'"
                        @focus="handleFocus('box1')"
                        @focusout="handleFocusOut"
                        tabindex="0"
                        class="mark-area ">
                        <img class="vote" id="box1" height="70" width="70" src="/images/icons/tick.png" alt="">
                    </td>
                </tr>
                <tr>
                    <td @click="displayTwo = true">
                        <div>
                            <img height="70" width="70" src="/images/icons/bananas.png" alt="">
                        </div>
                        <div>
                            Party AA
                        </div>
                    </td>
                    <td @click="displayTwo = true">
                        <div class="row">
                            <div lass="ml-2">
                                <img height="70" width="70" src="/images/icons/woman.png" alt="">
                            </div>
                            <div class="cnt">
                                Uza Sera
                            </div>
                        </div>
                    </td>
                    <td v-tooltip="'Tick within this box'"
                        @focus="handleFocus('box2')"
                        @focusout="handleFocusOut"
                        tabindex="0"
                        class="mark-area ">
                        <img class="vote" id="box2" height="70" width="70" src="/images/icons/tick.png" alt="">
                    </td>
                </tr>
                <tr>
                    <td @click="displayTwo = true">
                        <div class="ml-2">
                            <img height="70" width="70" src="/images/icons/mango.png" alt="">
                        </div>
                        <div>
                            Party MM
                        </div>
                    </td>
                    <td @click="displayTwo = true">
                        <div class="row">
                            <div lass="ml-2">
                                <img height="70" width="70" src="/images/icons/pres.png" alt="">
                            </div>
                            <div class="cnt">
                                Panda Ndoto
                            </div>
                        </div>
                    </td>
                    <td v-tooltip="'Tick within this box'"
                        @focus="handleFocus('box3')"
                        @focusout="handleFocusOut"
                        tabindex="0"
                        class="mark-area ">
                        <img class="vote" id="box3" height="70" width="70" src="/images/icons/tick.png" alt="">
                    </td>
                </tr>
                <tr>
                    <td @click="displayTwo = true">
                        <div>
                            <img height="70" width="70" src="/images/icons/orange-juice.png" alt="">
                        </div>
                        <div>
                            Party ZZ
                        </div>
                    </td>
                    <td @click="displayTwo = true">
                        <div class="row">
                            <div class="ml-2">
                                <img height="70" width="70" src="/images/icons/user.png" alt="">
                            </div>
                            <div class="cnt">
                                Mema Mbeleni
                            </div>
                        </div>
                    </td>
                    <td v-tooltip="'Tick within this box'"
                        @focus="handleFocus('box4')"
                        @focusout="handleFocusOut"
                        tabindex="0"
                        class="mark-area ">
                        <img class="vote" id="box4" height="70" width="70" src="/images/icons/tick.png" alt="">
                    </td>
                </tr>
                <tr>
                    <td @click="displayTwo = true">
                        <div>
                            <img height="70" width="70" src="/images/icons/pineapple.png" alt="">
                        </div>
                        <div>
                            Party TT
                        </div>
                    </td>
                    <td @click="displayTwo = true">
                        <div class="row">
                            <div class="ml-2">
                                <img height="70" width="70" src="/images/icons/profile.png" alt="">
                            </div>
                            <div class="cnt">
                                Akili Rembo
                            </div>
                        </div>
                    </td>
                    <td v-tooltip="'Tick within this box'"
                        @focus="handleFocus('box5')"
                        @focusout="handleFocusOut"
                        tabindex="0"
                        class="mark-area ">
                        <img class="vote" id="box5" height="70" width="70" src="/images/icons/tick.png" alt="">
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
        <Dialog modal="true" header="Vote validity" position="top" v-model:visible="display">
            <div class="row">
                <div class="cnt">
                    <i class="pi pi-info-circle"></i>
                </div>
                <div class="cnt">
                    Mark against only one candidate !
                </div>
            </div>
        </Dialog>

        <Dialog modal="true" header="Vote validity" position="top" v-model:visible="displayTwo">
            <div class="row">
                <div class="cnt">
                    <i class="pi pi-info-circle"></i>
                </div>
                <div class="cnt">
                    Mark within the space. Your vote will be spoilt!
                </div>
            </div>
        </Dialog>

    </div>
</template>

<script>
import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog';


export default {
    directives: {
        'tooltip': Tooltip
    },
    data() {
        return {
            display: false,
            displayTwo: false,
            item: null
        }
    },
    components: {
        Dialog
    },
    name: "vote-sample",
    methods: {
        handleFocusOut() {
            this.display = true
        },
        handleFocus(id) {
            if (this.item === null) {
                document.getElementById(id).style.visibility = 'visible'
                this.item = id
            } else {
                this.display = true
            }
        },
        outside() {
            this.displayTwo = true
        }
    }
}
</script>

<style scoped lang="scss">
.vote {
    visibility: hidden;
}

.inst {
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
}

.mark-area {
    position: relative;
    cursor: pointer;
}

.mark-area:hover {
    border: 2px solid rebeccapurple;
}

input[type=checkbox] {
    position: absolute;
    //transform: scale(8.5);
}

.cnt {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

</style>
