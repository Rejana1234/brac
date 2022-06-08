<template>
    <div id="AddPostOffice">
        <form action="" class="AddPostOffice-form">
                 <h3>Add PostOffice</h3>
            <div  class="form-group">
                <select  name="Village" id="village" class="box" >
                       <option  class="name">Village Name</option>
                       <option  class="name">Bangladesh</option>
                       <option  class="name">India</option>
                       <option  class="name">Nepal</option>
                       <option  class="name">Pakistan</option>
                </select>
            </div>
            <div class="form-group">
                <input type="text" name="code(en)" id="" placeholder="Enter PostOffice Code(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="text" name="code(bn)" id="" placeholder="Enter PostOffice Code(BN)" class="box">
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
    name: 'AddPostOffice'
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
#AddPostOffice{
    display: flex;
    justify-content: center;
    margin-top: 100rem;
}

.AddPostOffice-form{
    width: 95%;
    position: absolute;
    text-align: center;
    top: 20%;
    padding: 2rem;
    border-radius: .5rem;
    background:#eee;
    box-shadow: var(--box-shadow);
}
.AddPostOffice-form h3{
    display: flex;
    justify-content: left;
}
 .AddPostOffice-form .box{
    width: 100%;
    margin: .7rem 0;
    background: rgb(252, 250, 252);
    border-radius: .5rem;
    padding: 1rem;
    font-size: 12px;
    color: var(--black);
    text-transform: none;
}

.AddPostOffice-form p{
    font-size: 1.4rem;
    padding: .5rem 0;
    color: var(--light-color);
}

.AddPostOffice-form p a{
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