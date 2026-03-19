<script setup>
import { ref } from 'vue'

// v-bind: liên kết thuộc tính
const canSubmit = ref(true)

// v-if/v-else: hiển thị theo trạng thái
const status = ref('success') // success | error | idle

const students = ref([
  { id: 1, name: 'Lê Tuấn Anh', avg: 8.5 },
  { id: 2, name: 'Nguyễn Minh', avg: 7.2 },
  { id: 3, name: 'Trần Hoàng', avg: 6.0 },
])

function toggleStatus() {
  if (status.value === 'success') status.value = 'error'
  else if (status.value === 'error') status.value = 'idle'
  else status.value = 'success'
}
</script>

<template>
  <section class="card">
    <h2>2) Directives: `v-bind`, `v-if/v-else`, `v-for`</h2>

    <div class="row">
      <button type="button" @click="toggleStatus">Đổi trạng thái</button>
      <button type="button" :disabled="!canSubmit" @click="canSubmit = false">
        Nút submit (disabled khi không cho phép)
      </button>
      <button type="button" v-if="!canSubmit" @click="canSubmit = true">Mở lại</button>
    </div>

    <div class="box" :class="status">
      <p v-if="status === 'success'">✅ Đăng nhập thành công</p>
      <p v-else-if="status === 'error'">❌ Có lỗi xảy ra</p>
      <p v-else>👋 Chưa đăng nhập</p>
    </div>

    <h3>Danh sách sinh viên (v-for)</h3>
    <ul class="list">
      <li v-for="(s, i) in students" :key="s.id ?? i">
        <b>{{ s.name }}</b> - Điểm TB: {{ s.avg }}
      </li>
    </ul>
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
  margin: 10px 0;
}
button {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.box {
  border: 1px dashed #aaa;
  border-radius: 12px;
  padding: 12px;
  margin: 10px 0 16px;
}
.box.success {
  background: #ecfdf5;
  color: #065f46;
}
.box.error {
  background: #fef2f2;
  color: #991b1b;
}
.box.idle {
  background: #f8fafc;
  color: #334155;
}
.list {
  margin: 8px 0 0;
  padding-left: 18px;
}
</style>

