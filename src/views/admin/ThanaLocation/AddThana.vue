<template>
    <div id="AddThana">
        <form action="" class="AddThana-form">
                 <h2>Add Thana</h2>
            <div class="form-group">
                <input type="name" name="name" id="" placeholder="Enter Thana Name(EN)" class="box">
            </div>
            <div class="form-group">
                <input type="name" name="name" id="" placeholder="Enter Thana Name(BN)" class="box">
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
    name: 'AddThana'
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
#AddThana{
    display: flex;
    justify-content: center;
    margin-top: 100rem;
}

.AddThana-form{
    width: 95%;
    position: absolute;
    text-align: center;
    top: 20%;
    padding: 2rem;
    border-radius: .5rem;
    background:#eee;
    box-shadow: var(--box-shadow);
}
.AddThana-form h2{
    display: flex;
    justify-content: left;
}
 .AddThana-form .box{
    width: 100%;
    margin: .7rem 0;
    background: rgb(252, 250, 252);
    border-radius: .5rem;
    padding: 1rem;
    font-size: 1rem;
    color: var(--black);
    text-transform: none;
}

.AddThana-form p{
    font-size: 1.4rem;
    padding: .5rem 0;
    color: var(--light-color);
}

.AddThana-form p a{
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