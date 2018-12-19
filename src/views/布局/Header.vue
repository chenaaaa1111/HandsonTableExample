<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" ></a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>
     
    </ul>

    <ul class="nav navbar-nav d-md-down-none">      
        <li class="nav-item header-item">
          <p style="color:white" class="nav-link"> 设计模式 </p>
        </li>
    </ul>
          <!--<router-link tag="div" to='/'  style="height:55px;" class="nav-link">
            <p><Icon type="compose" size='30' color="#2d8cf0"></Icon></p>
            <p  style="color:white"> 留言管理 </p>
        </router-link> 
      </li> 
        <li class="nav-item header-item">        
        <router-link tag="div" to='/home1'  style="height:55px;" class="nav-link">
            <p><Icon type="stats-bars" size='30' color="#2d8cf0"></Icon></p>
            <p  style="color:white"> 搜索 </p>
        </router-link> 
      </li> 
             <li class="nav-item header-item">    
         <router-link tag="div" to='/home1'  style="height:55px;" class="nav-link">
            <p><Icon type="trophy" size='30' color="#2d8cf0"></Icon></p>
            <p  style="color:white"> 销量排行 </p>
        </router-link> 
      </li>      
    </ul>-->


    <ul class="nav navbar-nav ml-auto">
      
            <li class="nav-item d-md-down-none">
        
        <router-link tag="div" to='/home1'  style="height:55px;" class="nav-link">
            <p><Icon type="android-search" size='30' color="#2d8cf0"></Icon></p>
            <p  style="color:white"> 搜索 </p>
        </router-link> 


      </li>
         <li class="nav-item d-md-down-none">
        <Dropdown>
      <router-link tag="div" to='/'  style="height:55px;" class="nav-link">
            <p><Icon type="grid" size='30' color="#2d8cf0"></Icon></p>
            <p  style="color:white"> 功能 </p>
        </router-link>
        <DropdownMenu slot="list">
            <DropdownItem>项目</DropdownItem>
            <DropdownItem>产品</DropdownItem>
            <DropdownItem>清单</DropdownItem>
            <DropdownItem>制造</DropdownItem>
            <DropdownItem>仓库</DropdownItem>            
            <DropdownItem>报表</DropdownItem>   
        </DropdownMenu>
    </Dropdown>
      </li>

            <li class="nav-item d-md-down-none">
        
        <router-link tag="div" to='/home1'  style="height:55px;" class="nav-link">
            <p><Icon type="android-settings" size='30' color="#2d8cf0"></Icon></p>
            <p  style="color:white"> 设置 </p>
        </router-link> 


      </li>
      <Dropdown class="nav-item">
        <a href="javascript:void(0)">
           <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o">
          <!-- <span class="d-md-down-none">admin</span> -->
          </span>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="alert"></Icon>Updates<span class="badge badge-info">42</span></p>

            
            </Dropdown-item>
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="chatbox-working"></Icon>Messages<span class="badge badge-success">42</span></p>

            </Dropdown-item>
             <Dropdown-item>
              <p class="dropdown-itemp">  <Icon type="chatbox-working"></Icon>Messages<span class="badge badge-danger">42</span></p>

           </Dropdown-item>
              <Dropdown-item divided>
              <p class="dropdown-itemp"><Icon type="android-contact"></Icon> Profile</p>
              </Dropdown-item>
            <Dropdown-item >
               </Dropdown-item>

                 <Dropdown-item > <a href="" @click="Logout"  ><p  class="dropdown-itemp"><Icon type="power"></Icon>Logout</p></a></Dropdown-item>

        </Dropdown-menu>
    </Dropdown>

 
      <li class="nav-item d-md-down-none">
        <!-- <a class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle"></a> -->
        <Icon type="arrow-left-b" size="30" color=blue class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle"></Icon>
      </li>

    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'

export default {
  name: 'header',
  components: {
    navbar,
    
  },
  methods: {
    Logout(e){
         e.preventDefault();
         this.$store.dispatch('LogOut').then(() => {
                this.$router.push({ path: '/login' });
              }).catch(err => {
                this.$message.error(err);
              });
    },
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>

<style type="text/css" scoped>
  .dropdown-itemp{
    text-align: left;
    font-size: 15px;
    padding: 10px;
  }
 .header-item .ivu-dropdown-item{
  padding: 15px;
}
  .header-item{
    width: 130px;
    /*background-color: #20a8d8;*/
    /*background-color: white;*/

    height: 55px;
    
    
  }
  .header-item a{
        color:white !important;

  }

</style>
