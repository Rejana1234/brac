<template>
    <div id="AddCrop">
        <form action="" class="AddCrop-form">
                 <h3>Add Crop</h3>
            <div class="form-group">
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg,.image/jpg" class="box">
            </div>
            <div class="form-group">
                <input type="name" name="name(bn)" id="" placeholder="Enter Union Name(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="name" name="code(en)" id="" placeholder="Enter Union Name(BN)" class="box">
            </div>
 
            <div class="button">
                <level>
                    <button type="submit"> Back </button>
                </level>
                <level>
                    <button type="submit"> Save </button>
                </level>
            </div>
           
 
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddCrop'
   ,
   components: {
     
   },
   data() {
     return {
       
     }
   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
     
   },
   methods: {
     
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
.AddCrop-form h3{
    display: flex;
    justify-content: left;
}
 .AddCrop-form .box{
    width: 100%;
    margin: .7rem 0;
    background: rgb(252, 250, 252);
    border-radius: .5rem;
    padding: 1rem;
    font-size: 12px;
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
</style>