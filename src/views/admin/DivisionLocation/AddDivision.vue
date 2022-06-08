<template>
    <div id="AddDivision">
        <form action="" class="AddDivision-form">
                 <h3>Add Division</h3>
            <div class="form-group">
                <select  name="Country" id="Country" class="box">
                       <option value="Country Name" class="text">Country Name</option>
                       <option value="Bangladesh">Bangladesh</option>
                       <option value="India">India</option>
                       <option value="Nepal">Nepal</option>
                       <option value="Pakistan">Pakistan</option>
                </select>
            </div>
            <div class="form-group">
                <input type="name" name="name(en)" id="" placeholder="Enter Division Name(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="name" name="name(bn)" id="" placeholder="Enter Division Name(BN)" class="box">
            </div>
            <div class="form-group">
                <input type="text" name="code(en)" id="" placeholder="Enter Division Code(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="text" name="code(bn)" id="" placeholder="Enter Division Code(BN)" class="box">
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
    name: 'AddDivision'
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
#AddDivision{
    display: flex;
    justify-content: center;
    margin-top: 100rem;
}

.AddDivision-form{
    width: 95%;
    position: absolute;
    text-align: center;
    top: 20%;
    padding: 2rem;
    border-radius: .5rem;
    background:#eee;
    box-shadow: var(--box-shadow);
}
.AddDivision-form h3{
    display: flex;
    justify-content: left;
}
 .AddDivision-form .box{
    width: 100%;
    margin: .7rem 0;
    background: rgb(252, 250, 252);
    border-radius: .5rem;
    padding: 1rem;
    font-size: 12px;
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