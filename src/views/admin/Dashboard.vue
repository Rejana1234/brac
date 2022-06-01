<template>
   <div id="dashboard">

       <div class="body">
           <input type="checkbox" name="" id="menu-toggle">
           <div class="overlay">
               <label for ="menu-toggle">
                   
               </label>

           </div>

           <div class="sidebar">
               <div class="sidebar-container">
                   <div class="brand">
                       <h2>
                           <span class="lab la-staylinked"></span>  
                            vase
                        </h2>
                   </div>
                   <div class="sidebar-avartar">
                          <div>
                               <img src="../../assets/My project.png" width="70px" height="70px" alt=""  >
                          </div>   
                          <div class="avartar-info">
                              <div class="avartar-text">
                                 <h2>alpha ron</h2>
                                <small>123-456-909</small>
                             </div>
                           <span class="las la-angle-double-down"></span>
                         </div>
                    </div>
                    <div class="sidebar-menu">
                        <ul>
                            <li><a href="" class="active">
                                <span class="las la-adjust"></span>
                                <span>Dashboard</span>
                               </a>
                            </li>
                             <li><a href="" >
                                <span class="las la-chart-bar"></span>
                                <span>Dashboard1</span>
                               </a>
                            </li>
                             <li><a href="" >
                                <span class="las la-image"></span>
                                <span>Dashboard2</span>
                               </a>
                            </li>
                             <li><a href="">
                                <span class="las la-user"></span>
                                <span>Dashboard3</span>
                               </a>
                            </li>
                        </ul>
                    </div>
                    <div class="sidebar-card">
                        <div class="side-card-icon">
                            <span class="lab la-codiepie"></span>

                        </div>
                        <div>
                            <h4> Make Adsense</h4>
                            <p>Add ads earn money</p>
                        </div>
                        <button class ="btn btn-main btn-block">Crete Now</button>
                    </div>
               </div>
           </div>

           <div class="main-content">
               <header>
                   
                    <div class="header-title-wrapper">
                        <div>
                            <label for="">
                           <span class="las la-bars"> </span>
                            </label>
                        </div>
                       <div class="header-tittle">
                           <h1>Analytics</h1>
                           <p>Display Something</p>
                       </div>
                    </div>
                   <div class="header-action">
                       <button class="btn btn-main">
                           <span class="las la-user"></span>
                           <!-- image upload -->
                       </button>
                   </div>
               </header>

           </div>
       </div>

    <div class="main">
        <section>
                <h3 class="section-head">Over View</h3>

                <div class="analytics">
            <div class="analytic">
               <div class="analytic-icon">
                   <span class="las la-eye"></span>
               </div>
               <div class="analytic-info">
                   <h4>Total views</h4>
                   <h1>10.3M</h1>
               </div>
            </div>
            <div class="analytic">
               <div class="analytic-icon">
                   <span class="las la-clock"></span>
               </div>
               <div class="analytic-info">
                   <h4>Watch Time (hrs)</h4>
                   <h1>20.3K <small class="text-danger">5%</small> </h1>
               </div>
            </div>
           <div class="analytic">
               <div class="analytic-icon">
                   <span class="las la-users"></span>
               </div>
               <div class="analytic-info">
                   <h4>Subscribers</h4>
                   <h1>1.3K <small class="text-success">13%</small> </h1>
               </div>
           </div>
           <div class="analytic">
               <div class="analytic-icon">
                   <span class="las la-heart"></span>
               </div>
               <div class="analytic-info">
                   <h4>Total likes</h4>
                   <h1>3.4M </h1>
               </div>
           </div>
         </div>
        </section>
          
        <section>
         <div class="block-grid">
             <div class="revenue-card">
               <h3 class="section-head1">Total Revenue</h3>
                 <div class="rev-content">
                     <img src="../../assets/logo.png" alt="" />
                        <div class="rev-info">
                           <h3> Polonear adam</h3>
                           <h1>3.6M <small>Subscribers</small></h1>
                        </div>
                 <div class="rev-sum">
                     <h4>Total income</h4>
                     <h2>$37893</h2>
                 </div>
                 </div>
             </div>
             <div class="graph-card">
                 <h3 class="section-head1">Graph</h3>
                 <div class="graph-content">
                     <div class="graph-head">
                         <div class="icons-wrapper">
                             <div class="icon">
                                 <span class="las la-eye text-main"></span>
                             </div>
                             <div class="icon">
                                 <span class="las la-clock text-success"></span>
                             </div>
                         </div>
                         <div class="graph-select">
                             <select name="" id="">
                                 <option value=""> September</option>
                             </select>
                         </div>
                     </div>
                     <div class="graph-content">
                         <canvas id="revenueChart" width="100%"></canvas>
                     </div>
                 </div>
             </div>
         </div>
       </section>
    </div>
 </div>
</template>
<script>
export default {
   name: 'MyDashboard',
   components: {
     
   },
   mixins: [],
   props: {
     
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
#menu-toggle {
    display: none;
}
#menu-toggle:checked ~ .sidebar {
    left:-250px;
}
#menu-toggle:checked ~ .main-content {
    margin-left: 0px;
    width: 100vw;
}
/* img{
    width: 100%;
    height: auto;
} */
.sidebar {
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 1rem 1.2rem;
    transition: left 300ms;
}

.sidebar-container {
    height: 100%;
    width: 100%;
    background: #fff;
    border-radius: 20px;
    box-shadow: var(--shadow);
    padding: 1.2rem;
    overflow-y: auto;
    
}
.sidebar-container::-webkit-scrollbar {
  width: 10px;
}

.sidebar-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.sidebar-container::-webkit-scrollbar-thumb {
  background: #888;
}

.sidebar-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.sidebar-card {
    background: var(--main-accent) ;
    text-align: center;
    padding:  1rem;
    border-radius: 10px;
    margin-top: 5rem;
    border: 0px solid var(--color-main);
    box-shadow: var(--shadow);
}
.side-card-icon span {
    font-size: 10rem;
    color: var(--color-main);
    display: inline-block;
}
.side-card-icon {
    margin-bottom: .8rem;
}
.side-card-icon + div {
    margin-bottom: 1rem;
}
.side-card-icon + div p {
    margin-bottom: .8rem;
    color: #555
}
.btn {
    padding: .5rem 1rem;
    border: none;
    border-radius: 10px;
}
.btn span {
    font-size: 1.2rem;
    display: inline-block;
    margin-right: .7rem;
}
.btn-main {
    background: var(--color-main);
    color: #fff;
}
.btn-block {
    display: block;
    width: 100%;
}
.sidebar-menu li {
margin-bottom: 1.2rem;
}

.sidebar-menu a {
color: var(--main-text);
display:block;
}
.sidebar-menu a.active {
    background: var(--main-accent);
    border-radius: 7px;
    padding: .8rem;
}
.sidebar-menu a span:first-child {
    display: inline-block ;
    margin-right: .8rem;
    font-size: 1.2rem;
    color: var(--color-main);
}

.main-content{
    margin-left: 300px;
    width: calc(100vw - 300px);
    padding: 1rem 1.2rem;
    transition: margin-left 300ms;
}

.brand {
    padding-top: 1rem;
}
.brand h2{
    color:#444;
}
.brand h2 span{
color: var(--color-main);
font-size: 2.5rem;
display: inline-block;
margin-right: 0.1rem .5rem;
}

.sidebar-avartar {
    display: grid ;
    grid-template-columns: 70px auto;
    align-items: center;
    border: 2px solid var(--main-accent);
    padding: .1rem 0.7rem;
    border-radius: 7px;
    margin: 2rem 0rem;
    /* align-items: baseline; */
}
.avartar-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-tittle-wrapper {
    display: flex;
}
.header-tittle-wrapper label {
    display: inline-block;
    color: var(--color-main);
    margin-right: 2rem;
    font-size: 1.8rem;
}
.header-tittle h1 {
color: rebeccapurple;
font-weight: 600;
}
.header-tittle p {
    color: #666;
    font-size: .9rem;
}
.header-acton button {
    padding: .85rem .2rem;
    font-size: 1rem;
}
main {
    padding-top: 2.5rem;
    margin-left: 300px;
    
}
.analytics {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0rem 2.5rem;
    box-shadow: var(--shadow);
    margin-left: 300px;
    
}
.analytic {
    box-shadow: var(--shadow);
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding-left: 2rem;
    /* margin-left: 345px; */
}
.analytic-info h4 {
    font-weight: 400;
    color: #555;
    font-size: .98rem;
    margin-bottom: .5rem;
}
.analytic-info h1 {
    color: var(--main-text);
    font-weight:600;
}
.analytic-info h1 small {
    font-size: .8rem;
    font-weight: 700;
}
.text-danger {
    color: red
}
.text-success {
    color: #2ec3a3;

}
.text-main {
    color: var(--main-text);
}
.analytic:first-child .analytic-icon {
    background: #dce5ff;
    color: #6883db;
}
.analytic:nth-child(2) .analytic-icon {
    background: #ebf75f;
    color: #2ec3a3;
}
.analytic:nth-child(3) .analytic-icon {
    background: #abf24e;
    color: #0c1014;
}
.analytic:nth-child(4) .analytic-icon {
    background: #e4b266;
    color: #f72707;
}
.analytic-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-right: .8rem;
}
.section-head {
    font-size: 1.4rem;
    color: var(--main-text);
    font-weight: 600;
    margin-left: 300px;
    margin-bottom: 1rem;
}
.section-head1{
    font-size: 1.4rem;
    color: var(--main-text);
    font-weight: 600;
    margin-bottom: 1rem;
}
.block-grid {
    display:grid;
    margin-left: 300px;
    grid-template-columns: 30% auto;
    grid-gap: 0rem 3rem;
}
.rev-content {
    background: #fff;
    box-shadow: var(--shadow);
    border-radius: 15px;
    padding: 1rem 2rem;
    text-align: center;
}
.rev-content img {
    width: 180px;
    margin: 1.5rem 0rem;
}
.rev-info h3 {
    font-weight:600;
    color: var(--main-text);
}
.rev-info h1 {
    font-weight:600;
    margin-top: .4rem;
    color:#555;
}
.rev-info h1 small {
    font-weight:600;
    font-size: 1rem;
}
.rev-sum {
    background: var(--main-accent);
    border: 1px solid var(--color-main);
    padding: 1rem;
    border-radius: 10px;
}
.rev-sum h2 {
    font-weight: 600;
    color: var(--main-text);
}
.rev-sum h4 {
    color:#555;
    font-weight: 400;
    margin-bottom: 5rem;
}
.graph-content {
    border-radius: 15px;
    box-shadow: var(--shadow);
    padding: 1rem;
    background: #fff;
}
.overlay {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    display: none;
    background: rgb(255,255,255,0.5);
}
.overlay label {
    display:block;
    height: 100%;
    width: 100%;
    /* font-size: 2rem;
    color: var(--text-main); */

}
@media only screen and (max-width: 1224px) {
    .sidebar {
        left: -250px;
        z-index: 30;
    }
    .main-content {
        width: 100vw;
        margin-left: 0;
    }
    #menu-toggle:checked ~ .sidebar {
        left: 0;
    }
    #menu-toggle:checked ~ .overlay {
        display:block;
        text-align: right;
    }
    
}
@media only screen and (max-width: 860px) {
    .analytics {
        grid-template-columns: repeat(2, 1fr);
    }
    .block-grid{
        grid-template-columns: 100%;
    }
    .revenue-card {
        order: 2;
    }
    
}
@media only screen and (max-width: 500px) {
    header, .header-tittle-wrapper {
        align-items: center;
    }
    .header-tittle h1 {
        font-size: 1.2rem;
    }
    .header-tittle p {
        display: none;
    }
};
</style>