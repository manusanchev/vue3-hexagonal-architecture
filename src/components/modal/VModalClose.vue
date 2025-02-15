<script setup lang="ts">
import { X } from 'lucide-vue-next';

</script>

<template>
  <div class="absolute top-4 right-4">
    <div class="hover:bg-neutral-100 rounded-lg p-1.5 transition-colors cursor-pointer">
      <X :size="16" class="text-sm text-neutral-800" />
    </div>
  </div>
</template>
