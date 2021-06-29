<template>
    <div>
        <div class="border">
            <h4 class="text-center pb-5 h3 my-4">Dashboard</h4>
            <div class="py-4 col-md-10 ml-auto mr-auto row justify-content-between">
                <div class="item col-md-5">
                    <a href="/manage-events">
                        <div>
                            <div class="text-center">
                                <img height="100" width="100" src="/images/icons/calendar.png" alt="">
                            </div>
                            <div class="text-center mt-3 h5">
                                Calendar Events
                            </div>
                        </div>
                    </a>
                </div>
                <div class="item col-md-5">
                    <a href="/manage-polling-stations">
                        <div>
                            <div class="text-center">
                                <img height="100" width="100" src="/images/icons/vote.png" alt="">
                            </div>
                            <div class="text-center mt-3 h5">Voting</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="text-center font-weight-bolder py-4">
                @2021 Voter-Edu
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home"
}
</script>

<style scoped lang="scss">

.item {
    height: 300px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.4px 10px -1px rgba(0, 0, 0, 0.29), 0 1.1px 21.9px -1px rgba(0, 0, 0, -0.039), 0 2.1px 36.6px -1px rgba(0, 0, 0, -0.076), 0 3.4px 55.9px -1px rgba(0, 0, 0, -0.081), 0 5.3px 82.7px -1px rgba(0, 0, 0, -0.074), 0 7.9px 118.8px -1px rgba(0, 0, 0, -0.062), 0 11.7px 158.4px -1px rgba(0, 0, 0, -0.049), 0 17.4px 194.5px -1px rgba(0, 0, 0, -0.035), 0 26.3px 226px -1px rgba(0, 0, 0, -0.022), 0 40px 254px -1px rgba(0, 0, 0, -0.01)

}

a {
    text-decoration: none;
    font-weight: 30px;
}
</style>
