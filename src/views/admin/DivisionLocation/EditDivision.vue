<template>
    <div id="AddDivision">
        <form class="AddDivision-form" v-on:submit.prevent="editDivision">
            <h2>Edit Division</h2>
            <div class="form-group">
                <input type="name" v-model="editDivisionList.name_en" name="name_en" id="name_en" placeholder="Enter Division Name(EN)" class="box">

            </div>
            <div class="form-group">
                <input type="name" v-model="editDivisionList.name_bn" name="name_bn" id="name_bn" placeholder="Enter Division Name(BN)" class="box">
            </div>

            <div class="form-group">
                <input type="name" v-model="editDivisionList.code_en" name="code_en" id="code_en" placeholder="Enter Division Name(EN)" class="box">

            </div>
            <div class="form-group">
                <input type="name" v-model="editDivisionList.code_bn" name="code_bn" id="code_bn" placeholder="Enter Division Name(BN)" class="box">
            </div>

             <div class="button">
                <level>
                    <button type="submit"> Back </button>
                </level>
                <level>
                    <button type="submit"> Edit </button>
                </level>
            </div>

        </form>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'MyEditDivision',

        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                editDivisionList: state => state.division.division,
                message: state => state.division.success_message
            })
        },

        mounted(){
            this.getEditDivision(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                getEditDivision: 'division/edit_division'
            }),

            editDivision: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();

                    formData.append('name_en', this.editDivisionList.name_en);
                    formData.append('name_bn', this.editDivisionList.name_bn);
                    formData.append('code_en', this.editDivisionList.code_en);
                    formData.append('code_bn', this.editDivisionList.code_bn);
                    formData.append('_method', 'PUT');

                    await this.$store.dispatch('division/update_division', {id:id, data:formData}).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.getEditDivision(this.$route.params.id);
                    })

                }catch (e) {
                    console.log(e);
                }
            }
        }
    }
</script>

<style scoped>
    #AddDivision{
        display: flex;
        justify-content: center;
        margin-top: 100rem;
    }

    .AddDivision-form{
        width: 96rem;
        position: absolute;
        text-align: center;
        top: 20%;
        padding: 2rem;
        border-radius: .5rem;
        background:#eee;
        box-shadow: var(--box-shadow);
    }
    .AddDivision-form h2{
        display: flex;
        justify-content: left;
    }
    .AddDivision-form .box{
        width: 100%;
        margin: .7rem 0;
        background: rgb(252, 250, 252);
        border-radius: .5rem;
        padding: 1rem;
        font-size: 1rem;
        color: var(--black);
        text-transform: none;
    }

    .AddDivision-form p{
        font-size: 1.4rem;
        padding: .5rem 0;
        color: var(--light-color);
    }

    .AddDivision-form p a{
        color: var(--orange);
        text-decoration: underline;
    }

    button {
        padding: 7px 7px;
        background-color: rgb(59, 155, 59);
        margin-right: 2%;
        
    }

    button:hover{
        background: var(--orange);
        color: #fff;
    }
    .button{
    margin-left: 89%;
}

</style>