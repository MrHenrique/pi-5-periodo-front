<script setup>
import SideBar from '@/components/SideBar.vue'

const msg = 'Éder'
</script>

<template>
  <div>
    <div>
      <div>Teste</div>
      <SideBar :msg="msg" />
    </div>
  </div>
</template>

<style scoped></style>
