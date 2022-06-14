<template>
    <div id="AddSeason">
        <form  class="AddSeason-form" v-on:submit.prevent="addSeasion">
            <h3>Add Season</h3>
            <div class="form-group">
                <input type="name" v-model="seasionData.name_en" name="name(en)" id="" placeholder="Enter Season Name(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="name" v-model="seasionData.name_bn" name="name(bn)" id="" placeholder="Enter Season Name(BN)" class="box">
            </div>
            <div class="form-group">
                <input type="name" v-model="seasionData.cultural_operation" name="cultural_operation" id="" placeholder="Enter Cultural Operation Name(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="date" v-model="seasionData.start_date" name="start date" id="" placeholder="Enter Start Date" class="box">
            </div>
            <div class="form-group">
                <input type="date" v-model="seasionData.end_date" name="end date" id="" placeholder="Enter End Date" class="box">
            </div>

            <div class="button">
                <div>
                     <router-link to="/dashboard/season">
                        <button type="button"> Back </button>
                    </router-link>
                    <button type="submit"> Save </button>
                </div>
            </div>


        </form>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'AddSeason'
        ,
        components: {

        },
        data() {
            return {
                seasionData:{
                    name_en:'',
                    name_bn:'',
                    cultural_operation:'',
                    start_date:'',
                    end_date:''
                },
                errors: {}

            }
        },
        computed: {
            ...mapState({

                message: state => state.seasion.success_message
            })
        },
        watch: {

        },
        mounted() {

        },
        methods: {

            addSeasion: async function(){
                try{
                    let formData = new FormData();

                    formData.append('name_en', this.seasionData.name_en);
                    formData.append('name_bn', this.seasionData.name_bn);
                    formData.append('cultural_operation', this.seasionData.cultural_operation)
                    formData.append('start_date', this.seasionData.start_date);
                    formData.append('end_date', this.seasionData.end_date);

                    await this.$store.dispatch('seasion/add_seasion', formData).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.seasionData = {};
                    })

                }catch (e) {
                    console.log(e)
                }
            }

        }
    };
</script>

<style scoped>
    #AddSeason{
        display: flex;
        justify-content: center;
        margin-top: 100rem;
    }

    .AddSeason-form{
        width: 95%;
        position: absolute;
        text-align: center;
        top: 20%;
        padding: 2rem;
        border-radius: .5rem;
        background:#eee;
        box-shadow: var(--box-shadow);
    }
    .AddSeason-form h3{
        display: flex;
        justify-content: left;
    }
    .AddSeason-form .box{
        width: 100%;
        margin: .7rem 0;
        background: rgb(252, 250, 252);
        border-radius: .5rem;
        padding: 1rem;
        font-size: 12px;
        color: var(--black);
        text-transform: none;
    }

    .AddSeason-form p{
        font-size: 1.4rem;
        padding: .5rem 0;
        color: var(--light-color);
    }

    .AddSeason-form p a{
        color: var(--orange);
        text-decoration: underline;
    }
    button {
        padding: 7px 7px;
        background-color: rgb(59, 155, 59);
        margin-left: 2%;
    }

    button:hover{
        background: var(--orange);
        color: #fff;
    }
    .button{
        margin-left: 89%;
    }
    ::placeholder{
        font-size: 12px;
    }
    .selection option.text{
        font-size: 12px;
    }
</style>