<template>
    <div id="AddUnion">
        <form action="" class="AddUnion-form">
                 <h3>Add Union</h3>
            <div class="form-group">
                <select  name="Thana" id="tana" class="box">
                       <option value="Country Name" class="text">Thana Name</option>
                       <option value="Bangladesh">Bangladesh</option>
                       <option value="India">India</option>
                       <option value="Nepal">Nepal</option>
                       <option value="Pakistan">Pakistan</option>
                </select>
            </div>
            <div class="form-group">
                <input type="name" name="name(en)" id="" placeholder="Enter Union Name(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="name" name="name(bn)" id="" placeholder="Enter Union Name(BN)" class="box">
            </div>
            <div class="form-group">
                <input type="text" name="code(en)" id="" placeholder="Enter Union Code(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="text" name="code(bn)" id="" placeholder="Enter Union Code(BN)" class="box">
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
    name: 'AddUnion'
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
#AddUnion{
    display: flex;
    justify-content: center;
    margin-top: 100rem;
}

.AddUnion-form{
    width: 95%;
    position: absolute;
    text-align: center;
    top: 20%;
    padding: 2rem;
    border-radius: .5rem;
    background:#eee;
    box-shadow: var(--box-shadow);
}
.AddUnion-form h3{
    display: flex;
    justify-content: left;
}
 .AddUnion-form .box{
    width: 100%;
    margin: .7rem 0;
    background: rgb(252, 250, 252);
    border-radius: .5rem;
    padding: 1rem;
    font-size: 12px;
    color: var(--black);
    text-transform: none;
}

.AddUnion-form p{
    font-size: 1.4rem;
    padding: .5rem 0;
    color: var(--light-color);
}

.AddUnion-form p a{
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