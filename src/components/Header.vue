<template>
  <div class="shadow">
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <router-link to="/">
        <b-navbar-brand>English? Easy...</b-navbar-brand>
      </router-link>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          <!-- Using 'button-content' slot -->
          <template>
            <router-link to="/info">
              <em> <i class="fas fa-info"></i></em>
            </router-link>
          </template>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  
};
</script>
<style>
i {
  color: white;
  font-size: 1.5rem;
}
.bg-danger {
  background-color: rgb(241, 11, 11);
}
</style>

