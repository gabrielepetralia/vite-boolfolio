<script>
import axios from 'axios';
import { store } from '../../data/store';

import ProjectCard from "../partials/cards/ProjectCard.vue"

export default {
  name: "Projects",

  components: {
    ProjectCard
  },

  data() {
    return {
      store,
      projects: []
    }
  },

  methods: {
    getApi() {
      axios.get(store.apiUrl + 'projects')
        .then(res => {
          this.projects = res.data;
        })
    }
  },

  mounted() {
    this.getApi();
  }
}
</script>

<template>
  <div class="projects">
    <div class="gp-container">
   
      <h1 class="text-center page-title mb-4">Projects</h1>

      <div class="row row-cols-2 project-cards-container">
        <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"/>
      </div> 

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;
  .projects {
    padding: 40px 0;
  }
</style>