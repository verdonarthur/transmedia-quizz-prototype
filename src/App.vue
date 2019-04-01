<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item" href>Quizz proto</router-link>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <router-link to="/about" class="button is-outlined">
                <span class="icon">
                  <i class="fa fa-home"></i>
                </span>
                <span>About</span>
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </nav>

    <div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
</style>
