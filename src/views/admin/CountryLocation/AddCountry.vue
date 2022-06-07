<template>
    <div id="AddCountry">
        <form action="" class="AddCountry-form">
                 <h2>Add Country</h2>
            <div class="form-group">
                <input type="name" name="name" id="" placeholder="Enter Country Name(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="name" name="name" id="" placeholder="Enter Country Name(BN)" class="box">
            </div>
 
            <button type="submit"> Save </button>
 
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddCountry'
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
#AddCountry{
    display: flex;
    justify-content: center;
    margin-top: 100rem;
}

.AddCountry-form{
    width: 96rem;
    position: absolute;
    text-align: center;
    top: 20%;
    padding: 2rem;
    border-radius: .5rem;
    background:#eee;
    box-shadow: var(--box-shadow);
}
.AddCountry-form h2{
    display: flex;
    justify-content: left;
}
 .AddCountry-form .box{
    width: 100%;
    margin: .7rem 0;
    background: rgb(252, 250, 252);
    border-radius: .5rem;
    padding: 1rem;
    font-size: 1rem;
    color: var(--black);
    text-transform: none;
}

.AddCountry-form p{
    font-size: 1.4rem;
    padding: .5rem 0;
    color: var(--light-color);
}

.AddCountry-form p a{
    color: var(--orange);
    text-decoration: underline;
}

button {
  padding: 7px 7px;
  background-color: rgb(59, 155, 59);
  margin-left: 87rem;
}

button:hover{
    background: var(--orange);
    color: #fff;
}

</style>