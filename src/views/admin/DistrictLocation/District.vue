<template>
   <div id="Districts">
   <div class="add-District">
      <button class="add_new"><i class="fa-solid fa-circle-plus"></i> Add New</button>
   </div>
 
   <div class="field">
      <div for="entries">Show:
         <select  name="entries" id="entries">
         <option value="10">10</option>
         <option value="20">20</option>
         <option value="30">30</option>
         <option value="40">40</option>
         </select>
         Entries
      </div>
      <div class="search" ><i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search District" ></div>
  </div>	
 
<table summary="This table shows how to create responsive tables using Datatables' extended functionality" class="table table-bordered table-hover dt-responsive">
        
        <thead>
          <tr>
             <th>#SL No</th>
            <th>District</th>
             <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
             <td>1</td>
            <td>Gazipur</td>   
            <td colspan="2">
               <button class="Edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
               <button class="delete"><i class="fa-solid fa-trash"></i>  Delete</button>
            </td>
          </tr>
          <tr>
             <td>1</td>
            <td>Dhaka</td>   
            <td colspan="2">
               <button class="Edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
               <button class="delete"><i class="fa-solid fa-trash"></i>  Delete</button>
            </td>
          </tr>
          <tr>
             <td>1</td>
            <td>Feni</td>   
            <td colspan="2">
               <button class="Edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
               <button class="delete"><i class="fa-solid fa-trash"></i>  Delete</button>
            </td>
          </tr>
          <tr>
             <td>1</td>
            <td>Shirajgonj</td>   
            <td colspan="2">
               <button class="Edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
               <button class="delete"><i class="fa-solid fa-trash"></i>  Delete</button>
            </td>
          </tr>
          <tr>
             <td>1</td>
            <td>Chadpur</td>   
            <td colspan="2">
               <button class="Edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
               <button class="delete"><i class="fa-solid fa-trash"></i>  Delete</button>
            </td>
          </tr>
          <tr>
             <td>1</td>
            <td>Tangail</td>   
            <td colspan="2">
               <button class="Edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
               <button class="delete"><i class="fa-solid fa-trash"></i>  Delete</button>
            </td>
          </tr>
          <tr>
             <td>1</td>
            <td>Meherpur</td>   
            <td colspan="2">
               <button class="Edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
               <button class="delete"><i class="fa-solid fa-trash"></i>  Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="field">

         <div><h5> Showing 1 to 10 of 57 entries</h5> </div>       
        <div class="pagination">          
           <a href="#">Previous&laquo;</a>
           <a class="active" href="#">1</a>
           <a href="#">2</a>
           <a href="#">3</a>
           <a href="#">4</a>
           <a href="#">Next&raquo;</a>
        </div>      
      </div>
</div>

</template>
<script>
export default {
   name: 'MyDistrict',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
   data() {
        return {
            isActive: false,
            isShow: false,
        };
    },
    methods: {
        myFunction() {
            this.isActive = !this.isActive;
        }
    },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');




.table {
    width: 100%;
    text-align: center;
    margin-bottom: 0.5%;
}
.add-District{
   margin-left: 89%;
   margin-bottom: 3%;
}
.select{
   align-items:baseline;
}


button {
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: 10px;
    color: #ffffff;
}
.Edit{
   padding: 5px 5px;
    color: #ffffff;
    background-color: #02cf4a;
    margin-right: 7px;
    font-size: 10px;
}
.delete{
   padding: 5px 5px;
    color: #ffffff;
    background-color: #f13535;
    font-size: 10px;
}
.add_new {
    padding: 10px 20px;
    color: #ffffff;
    background-color: #02cf4a;
    
}
.field{
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 1%;
   
}

input {
    padding: 10px 20px;
    margin: 0 10px;
    outline: none;
    border: 1px solid #02cf4a;
    border-radius: 6px;
    color:black;
}
.select{
   margin-left: 0%;
   margin-bottom: 2%;
}
.select label input{
margin-left: 317%;
}

  table.dataTable th,
  table.dataTable td {
    white-space: nowrap;
    
  }
  table th{
     text-align: center;
  }
  .p {
    text-align: center;
    padding-top: 140px;
    font-size: 14px;
  }
  
.pagination {
  display: inline-block;
  /* margin-left: 70%;
  margin-top: 1%; */
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
}

.pagination a:hover:not(.active) {background-color: #ddd;}

.pagination a:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination a:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
::placeholder {
    color: #0a0a0a;
}

::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 


</style>