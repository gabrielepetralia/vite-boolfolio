<script>
export default {
  name: "ProjectCard",

  props: {
    project : Object
  }
}
</script>

<template>
  <div class="col">
    <a href="#">
      <div class="project-card rounded">


        <div class="d-flex justify-content-between align-items-center mb-2">
          <h4 class="project-name mb-0">{{ project.name }}</h4>
          <span class="gp-badge" :class="project.type.slug">{{ project.type.name }}</span>
        </div>

        <div class="d-flex align-items-center my-2">
          <span class="technologies">Technologies : </span>
          <ul class="d-flex align-items-center">
            <li v-for="technology in project.technologies" :key="technology.id">
              <img class="tech-logo me-1" :src="'/img/tech_logos/' + technology.slug + '.png'" :alt="technology.name">
            </li>
          </ul>
        </div>

        <div class="d-flex justify-content-between">
          <p v-if="project.end_date" class="status">Status : <span class="gp-badge completed">Completed</span></p>
          <p v-else class="status">Status : <span class="gp-badge active">Active</span></p>

          <a href="#" class="credit">by <span class="user text-decoration-underline">Gabriele</span></a> <!-- sostituire con nome utente dopo aver fatto l'associazione e link a pagina account -->
        </div>
        

      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/variables" as *;

.project-card {
  padding: 18px;
  transition: all 0.3s;
  margin: 15px 0;
  background-color: $dirty_white;
  box-shadow: 0 0 20px 4px rgba(0,0,0,0.1);

  &:hover {
    transform: scale(1.02);
  }

  .project-name {
    color: $dark_gray;
    font-size: 1.3rem;
  }

  &:hover .project-name {
    color: $danger_red;
  }

  .gp-badge.front-end {
    background-color: #e6cd5e;
  }

  .gp-badge.back-end {
    background-color: #36b4ca;
  }

  .gp-badge.full-stack {
    background-color: #c64b47;
  }

  .tech-logo {
    width: 35px;
  }

  .status,
  .technologies {
    font-weight: 500;
    color: $dark_gray;

    .gp-badge.completed {
      background-color: #63b984;
    }
  
    .gp-badge.active {
      background-color: #c66b47;
    }
  }

  .credit {
    font-size: 0.9rem;
    font-weight: 500;
    color: $dark_gray;

    .user:hover {
      color: $danger_red;
    }
  }

}
</style>