<script>
export default {
  name: "Header"
}
</script>

<template>
  <header>
      <nav class="d-flex justify-content-between align-items-center h-100">

        <div>
          <a href="#" class="d-flex align-items-center">
            <img class="logo me-1" src="/img/logo-boolfolio.png" alt="Logo">
            <h3 class="title d-inline-block mb-0">Boolfolio</h3>
          </a>
        </div>

        <div class="h-100">
          <ul class="d-flex align-items-center mb-0 h-100">
            <li class="header-menu-item">
              <router-link :to="{ name: 'home' }" class="header-menu-link">Home</router-link>
            </li>
            <li class="header-menu-item">
              <router-link :to="{ name: 'projects' }" class="header-menu-link">Projects</router-link>
            </li>
            <li class="header-menu-item">
              <router-link :to="{ name: 'about' }" class="header-menu-link">About</router-link>
            </li>
            <li class="header-menu-item">
              <router-link :to="{ name: 'services' }" class="header-menu-link">Services</router-link>
            </li>
            <li class="header-menu-item">
              <router-link :to="{ name: 'contacts' }" class="header-menu-link">Contacts</router-link>
            </li>
          </ul>
        </div>

        <div>
          <a href="#" class="account d-flex align-items-center">
            <i class="fa-solid fa-circle-user fs-4 me-2"></i>
            <span class="fw-medium">Account</span>
          </a>
        </div>

      </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *; 

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 75px;
    padding: 0 50px;
    background-color: $dirty_white;
    box-shadow: 0 0 20px 4px rgba(0,0,0,0.1);

    nav {
      .logo {
        width: 35px;
      }

      .title {
        color: $danger_red;
      }

      a {
        color: $dark_gray;
      }

      .header-menu-item {
        height: 100%;
        margin: 0 22px;

        &:hover {
          cursor: pointer;
        }

        .header-menu-link {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          font-weight: 500;
          transition: all 0.2s;

          &:hover {
            color: $danger_red;
          }

          &::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: $danger_red;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }

          &.active {
            color: $danger_red;
          }

          &.active::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: $danger_red;
          }
        }

        &:hover .header-menu-link::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }

      .account {
        transition: all 0.2s;

        &:hover {
          color: $danger_red;
        }
      }
    }
  }
</style>