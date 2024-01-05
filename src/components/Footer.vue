<script setup lang="ts"></script>

<template>
  <footer class="footer items-center p-4 bg-base-300 lg:px-16">
    <aside class="items-center grid-flow-col">
      <font-awesome-icon :icon="['fas', 'hashtag']" />
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </aside>
    <nav class="grid-flow-col gap-3 md:place-self-center md:justify-self-end">
      <a href="https://github.com/wuletawwonte/" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" class="fa-xl" />
      </a>
      <a href="https://www.facebook.com/wuletawbeza" target="_blank">
        <font-awesome-icon :icon="['fab', 'facebook']" class="fa-xl" />
      </a>
      <a href="https://www.linkedin.com/in/wuletaw-wonte/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-xl" />
      </a>
    </nav>
  </footer>
</template>
