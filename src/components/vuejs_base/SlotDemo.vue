<script setup>
import { computed, ref } from 'vue'
import ModalFrame from './ModalFrame.vue'

const open = ref(false)
const mode = ref('info') // info | warning

const titleText = computed(() => {
  return mode.value === 'info' ? 'Thông báo' : 'Cảnh báo'
})

const bodyText = computed(() => {
  return mode.value === 'info'
    ? 'Đây là modal được điều khiển bởi component cha. Nội dung bên trong do slot quyết định.'
    : 'Modal này thay đổi giao diện thông qua slot mà không cần tạo thêm component riêng.'
})

function showInfo() {
  mode.value = 'info'
  open.value = true
}

function showWarning() {
  mode.value = 'warning'
  open.value = true
}

function closeModal() {
  open.value = false
}
</script>

<template>
  <section class="card">
    <h2>7) Slot (truyền nội dung từ cha -> con)</h2>

    <div class="row">
      <button type="button" @click="showInfo">Mở modal Thông báo</button>
      <button type="button" @click="showWarning">Mở modal Cảnh báo</button>
    </div>

    <ModalFrame :open="open" @close="closeModal">
      <template #title>
        <span>{{ titleText }}</span>
      </template>

      <p class="text">{{ bodyText }}</p>

      <template #footer>
        <button type="button" @click="closeModal">OK</button>
      </template>
    </ModalFrame>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin: 16px 0;
}
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 10px;
}
button {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
.text {
  margin: 0;
  line-height: 1.5;
}
</style>

