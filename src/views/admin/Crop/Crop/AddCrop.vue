<template>
    <div id="AddCrop">
        <form class="AddCrop-form" v-on:submit.prevent="addCrop">
             <h2>Add Crop</h2>
            <div class="form-group">
                <input type="file" class="box" name="image" v-on:change="attachImage" ref="cropImage">            
            </div>  
            <div class="form-group">
                <input type="name" v-model="cropData.name_en" name="name_bn" id="name_bn" placeholder="Enter crop Name(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="name" v-model="cropData.name_bn" name="name_bn" id="code_bn" placeholder="Enter crop Name(BN)" class="box">
            </div>
            <div class="button">
                <div>
                    <router-link to="/dashboard/crop">
                        <button type="button"> Back </button>
                    </router-link>
                    <button type="submit"> Save </button>
                </div>

            </div>
           
            

        </form>
    </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
    name: 'AddCrop',

   components: {
     
   },

   data() {
     return {
       cropData:{
           image:'',
           name_en: '',
           name_bn: '',
           
       },

        errors: {}
     }
   },

   computed: {
       ...mapState({
           message: state => state.crop.success_message
       })
   },

   watch: {
     
   },

   mounted() {
     
   },

   methods: {
      attachImage: function(){
        //to use some file todo
        this.cropData.image = this.$refs.cropImage.files[0];
        let reader = new FileReader();
        reader.addEventListener('load', function () {
          this.$refs.newCategoryImageDisplay.src = reader.result;
        }.bind(this),false);
        reader.readAsDataURL(this.file);
      },
       addCrop: async function(){
           try {
               let formData = new FormData();
               formData.append('image', this.cropData.image);
               formData.append('name_en', this.cropData.name_en);
               formData.append('name_bn', this.cropData.name_bn);
               

               await this.$store.dispatch('crop/add_crop', formData).then(() => {
                   this.$swal.fire({
                       toast: true,
                       position: 'top-end',
                       icon: 'success',
                       title: this.message,
                       showConfirmButton: false,
                       timer: 1500
                   });

                   this.cropData = {};
               })
           }catch (e) {
               console.log(e);
           }
       }
   }
};
</script>

<style scoped>

#AddCrop{
    display: flex;
    justify-content: center;
    margin-top: 100rem;
}

.AddCrop-form{
    width: 95%;
    position: absolute;
    text-align: center;
    top: 20%;
    padding: 2rem;
    border-radius: .5rem;
    background:#eee;
    box-shadow: var(--box-shadow);
}
.AddCrop-form h2{
    display: flex;
    justify-content: left;
}
 .AddCrop-form .box{
    width: 100%;
    margin: .7rem 0;
    background: rgb(252, 250, 252);
    border-radius: .5rem;
    padding: 1rem;
    font-size: 1rem;
    color: var(--black);
    text-transform: none;
}

.AddCrop-form p{
    font-size: 1.4rem;
    padding: .5rem 0;
    color: var(--light-color);
}

.AddCrop-form p a{
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
::placeholder{
    font-size: 12px;
}

</style>