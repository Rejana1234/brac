<template>
    <div id="AddDistrict">
        <form  class="AddDistrict-form" v-on:submit.prevent="addDistrict">
                 <h3>Add District</h3>
            <div class="form-group">
                <select  name="Division" id="division" class="box" v-model="districtData.country_id" @change="getAllDistrict()">
                       <option v-for="(records, index) in country_id" :key="index" :value="records">{{records}}</option>
                       <!-- <option value="Country Name" class="text">Division Name</option>
                       <option value="Bangladesh">Bangladesh</option>
                       <option value="India">India</option>
                       <option value="Nepal">Nepal</option>
                       <option value="Pakistan">Pakistan</option> -->
                </select>
            </div>
            <div class="form-group">
                <input type="name" name="name_en" id="name_en" placeholder="Enter District Name(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="name" name="name_bn" id="name_bn" placeholder="Enter District Name(BN)" class="box">
            </div>
            <div class="form-group">
                <input type="text" name="code_en" id="code_en" placeholder="Enter District Code(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="text" name="code_bn" id="code_bn" placeholder="Enter District Code(BN)" class="box">
            </div>
 
            <div class="button">
                <level>
                    <router-link to="">
                        <button type="button"> Back </button>
                    </router-link>
                </level>

                <level>
                    <button type="submit"> Save </button>
                </level>
            </div>
           
 
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'AddDistrict'
   ,
   components: {
     
   },
   data() {
     return {
         districtData:{
             country_id:'',
             name_en:'',
             name_bn:'',
             code_en:'',
             code_bn:''
         },
         errors: {}
       
     }
   },
   computed: {
     ...mapState({
         message: state => state.district.success_message
     })
   },
   watch: {
     
   },
   mounted() {
     
   },
   methods: {
       addDistrict: async function(){
           try{
               let formData = new FormData();
               formData.append('country_id', this.districtData.country_id);
               formData.append('name_en', this.districtData.name_en);
               formData.append('name_bn', this.districtData.name_bn);
               formData.append('code_en', this.districtData.code_en);
               formData.append('code_bn', this.districtData.code_bn);

               await this.$store.dispatch('district/add_district', formData).then(() => {
                   this.$swal.fire({
                       toast: true,
                       position: 'top-end',
                       icon: 'success',
                       title: this.message,
                       showConfirmButton: false,
                       timer: 1500
                   });

                   this.districtData = {};
               })
               
           }catch (e) {
               console.log(e)
           }
       }
     
   }
};
</script>

<style scoped>
#AddDistrict{
    display: flex;
    justify-content: center;
    margin-top: 100rem;
}

.AddDistrict-form{
    width: 95%;
    position: absolute;
    text-align: center;
    top: 20%;
    padding: 2rem;
    border-radius: .5rem;
    background:#eee;
    box-shadow: var(--box-shadow);
}
.AddDistrict-form h3{
    display: flex;
    justify-content: left;
}
 .AddDistrict-form .box{
    width: 100%;
    margin: .7rem 0;
    background: rgb(252, 250, 252);
    border-radius: .5rem;
    padding: 1rem;
    font-size: 12px;
    color: var(--black);
    text-transform: none;
}

.AddDistrict-form p{
    font-size: 1.4rem;
    padding: .5rem 0;
    color: var(--light-color);
}

.AddDistrict-form p a{
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