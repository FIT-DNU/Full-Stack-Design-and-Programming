<script setup>
import { ref } from 'vue'

// v-model: ràng buộc 2 chiều cho form
const studentName = ref('')

const students = ref([
  { id: 1, name: 'Lê Tuấn Anh' },
  { id: 2, name: 'Nguyễn Minh' },
])

function addStudent() {
  const name = studentName.value.trim()
  if (!name) return

  const nextId = students.value.length
    ? Math.max(...students.value.map((s) => s.id)) + 1
    : 1

  students.value.push({ id: nextId, name })
  studentName.value = ''
}
</script>

<template>
  <section class="card">
    <h2>3) Two-way data binding: `v-model`</h2>

    <div class="row">
      <label>
        Tên sinh viên:
        <input
          v-model="studentName"
          type="text"
          placeholder="Nhập tên..."
          @keyup.enter="addStudent"
        />
      </label>
      <button type="button" @click="addStudent">Thêm</button>
    </div>

    <p class="hint">
      Thử gõ vào ô input: giá trị trên giao diện (danh sách bên dưới) sẽ cập nhật khi bấm
      <b>Thêm</b> / nhấn <b>Enter</b>.
    </p>

    <h3>Danh sách (v-for)</h3>
    <ul class="list">
      <li v-for="s in students" :key="s.id">
        {{ s.name }}
      </li>
    </ul>

    <p class="preview">
      Giá trị đang nhập: <b>{{ studentName || '(trống)' }}</b>
    </p>
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
  align-items: center;
  gap: 12px;
  margin: 10px 0 12px;
}
label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 280px;
}
input {
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
button {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
.hint {
  margin: 8px 0 14px;
  color: #374151;
}
.list {
  margin: 0;
  padding-left: 18px;
}
.preview {
  margin-top: 14px;
}
</style>

