<template>
     <section id="sidebar" v-bind:class="{hide: this.isActive}">
		<a href="#" class="brand"><i class='bx bxs-smile icon'></i> BARC </a>
		<div class="sidebar-avartar">
                          <div>
                               <img src="../../assets/My project.png" width="70px" height="70px" alt=""  >
                          </div>   
                          <div class="avartar-info">
                              <div class="avartar-text">
                                 <h4>alpha ron</h4>
                                <small>123-456-909</small>
                             </div>
                           <span class="bx bx-chevron-down icon"></span>
                         </div>
                    </div>
		<ul class="side-menu">
			<li class="divider" data-text="location">Location</li>
			<li>
				<ul>
					<li><a href="/dashboard/country"><i class='bx bxs-chart icon' ></i> Country</a></li>
					<li><a href="/dashboard/division"><i class='bx bxs-chart icon' ></i> Division</a></li>
					<li><a href="/dashboard/district"><i class='bx bxs-chart icon' ></i> District</a></li>
					<li><a href="/dashboard/Thana"><i class='bx bxs-chart icon' ></i> Thana</a></li>
					<li><a href="/dashboard/Union"><i class='bx bxs-chart icon' ></i> Union</a></li>
					<li><a href="/dashboard/village"><i class='bx bxs-chart icon' ></i> Village</a></li>
					<li><a href="/dashboard/PostOffice"><i class='bx bxs-chart icon' ></i> Post-Office</a></li>
				</ul>
			</li>
			<li class="divider" data-text="location">Land-Size </li>
			<li><a href="#"><i class='bx bxs-chart icon' ></i> Land-Size</a></li>
			<li class="divider" data-text="location">Land Preperation </li>
			<li>
			<ul >
					<li><a href="#"><i class='bx bxs-chart icon' ></i> Season</a></li>
			</ul>
			</li>
			<li class="divider" data-text="location">Crop </li>
			<li>
				
				<ul>
					<li><a href="#"><i class='bx bxs-chart icon' ></i> Crop Catagory</a></li>
					<li><a href="#"><i class='bx bxs-chart icon' ></i> Crop Selection</a></li>
				</ul>
			</li>
			<li class="divider" data-text="location">Cultivation </li>
			<li>
				<ul>
					<li><a href="#"><i class='bx bxs-chart icon' ></i> Category</a></li>
					<li><a href="#"><i class='bx bxs-chart icon' ></i> Cultivation Selection</a></li>
				</ul>
			</li>
			<li class="divider" data-text="location">Setting </li>
			<li>
				<ul>
					<li><a href="#"><i class='bx bxs-chart icon' ></i> Language</a></li>
					<li><a href="#"><i class='bx bxs-chart icon' ></i> Department</a></li>
				</ul>
			</li>
			<li class="divider" data-text="location">User Management </li>
			<li>
				<ul>
					<li><a href="#"><i class='bx bxs-chart icon' ></i> User List</a></li>
					<li><a href="#"><i class='bx bxs-chart icon' ></i> Role</a></li>
					<li><a href="#"><i class='bx bxs-chart icon' ></i> Permissions</a></li>
				</ul>
			</li>
			
		</ul>
	</section>
   
</template>

<script>
export default {
   name: 'MySidebar',
   props: ['isActive']
};
</script>
<style lang='' scoped>
</style>