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
					<li>
						<router-link active-class="active" to="/dashboard/country" exact><i class='bx bxs-chart icon' ></i> Country</router-link>
					</li>

					<li>
						<router-link active-class="active" to="/dashboard/division"><i class='bx bxs-chart icon' ></i> Division</router-link></li>
					<li>
						<router-link active-class="active" to="/dashboard/district"><i class='bx bxs-chart icon' ></i> District</router-link>
					</li>

					<li>
						<router-link active-class="active" to="/dashboard/thana"><i class='bx bxs-chart icon' ></i> Thana</router-link>
					</li>

					<li>
						<router-link active-class="active" to="/dashboard/village"><i class='bx bxs-chart icon' ></i> Village</router-link>
					</li>

                    <li>
                        <router-link active-class="active" to="/dashboard/post_office"><i class='bx bxs-chart icon' ></i> Post-Office</router-link>
                    </li>

                    <li>
                        <router-link active-class="active" to="/dashboard/po"><i class='bx bxs-chart icon' ></i> Poc</router-link>
                    </li>

					<li>
						<router-link active-class="active" to="/dashboard/union"><i class='bx bxs-chart icon' ></i> Union</router-link>
					</li>

					<li>
						<router-link active-class="active" to="/dashboard/location"><i class='bx bxs-chart icon' ></i>All Location</router-link>
					</li>


				</ul>
			</li>
			<li class="divider" data-text="location">Land-Size </li>
			<li><router-link active-class="active" to="/dashboard/land_size"><i class='bx bxs-chart icon' ></i> Land Size</router-link></li>
			<li class="divider" data-text="location">Land Preperation </li>
			<li>
			<ul >
					<li>
						<router-link active-class="active" to="/dashboard/season"><i class='bx bxs-chart icon' ></i> Season </router-link>
					</li> 
					<li>
						<router-link active-class="active" to="/dashboard/land_preperation"><i class='bx bxs-chart icon' ></i> Land Preperation </router-link>
					</li>
			</ul>
			</li>
			<li class="divider" data-text="location">Crop </li>
			<li>
				
				<ul>
					<li> 
						<router-link active-class="active" to="/dashboard/crop"><i class='bx bxs-chart icon' ></i> Crop </router-link> 
					</li>
					<li>
						<router-link active-class="active" to="/dashboard/crop_selection"><i class='bx bxs-chart icon' ></i> Crop Selection</router-link> 
					</li>
				</ul>
			</li>
			<li class="divider" data-text="location">Cultivation </li>
			<li>
				<ul>
					<li>
						<router-link active-class="active" to="/dashboard/cultivation_category"><i class='bx bxs-chart icon' ></i>Cultivation Category</router-link>
					</li>
					<li>
						<router-link active-class="active" to="/dashboard/cultivation_section"><i class='bx bxs-chart icon' ></i> Cultivation Section</router-link>
					</li>
				</ul>
			</li>
			<li class="divider" data-text="location">Setting </li>
			<li>
				<ul>
					<li>
						<router-link active-class="active" to="/dashboard/department"><i class='bx bxs-chart icon' ></i> Department</router-link>
					</li>
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