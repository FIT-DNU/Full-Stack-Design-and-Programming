<script setup>
import { computed } from 'vue'

const props = defineProps({
  student: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  highlight: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['remove'])

const studentAgeLabel = computed(() => `${props.student.age} tuổi`)

function removeSelf() {
  // emit: component con gửi tín hiệu lên component cha
  emit('remove', props.index)
}
</script>

<template>
  <div class="card" :class="{ highlight }">
    <div class="left">
      <p class="name">
        <b>{{ student.name }}</b>
      </p>
      <p class="meta">
        Tuổi: {{ studentAgeLabel }} - Mã: {{ student.code }}
      </p>
    </div>
    <div class="right">
      <button type="button" @click="removeSelf">Xóa</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.highlight {
  border-color: #10b981;
  background: #ecfdf5;
}
.name {
  margin: 0 0 4px;
}
.meta {
  margin: 0;
  color: #475569;
}
button {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
</style>

