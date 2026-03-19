<script setup>
import { computed, ref } from 'vue'
import StudentCard from './StudentCard.vue'

// props: dữ liệu truyền 1 chiều từ cha -> con
const students = ref([
  { id: 1, code: 'SV001', name: 'Lê Tuấn Anh', age: 20 },
  { id: 2, code: 'SV002', name: 'Nguyễn Minh', age: 19 },
  { id: 3, code: 'SV003', name: 'Trần Hoàng', age: 21 },
])

const highlighted = ref(true)

const totalStudents = computed(() => students.value.length)

function removeStudent(index) {
  students.value.splice(index, 1)
}
</script>

<template>
  <section class="card">
    <h2>5) Props & Custom Events (emit)</h2>

    <p class="stat">
      Tổng sinh viên: <b>{{ totalStudents }}</b>
    </p>

    <label class="toggle">
      <input type="checkbox" v-model="highlighted" />
      Bật highlight cho component con
    </label>

    <div class="list">
      <StudentCard
        v-for="(s, i) in students"
        :key="s.id"
        :student="s"
        :index="i"
        :highlight="highlighted"
        @remove="removeStudent"
      />
    </div>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin: 16px 0;
}
.stat {
  margin: 0 0 12px;
}
.toggle {
  display: block;
  margin-bottom: 14px;
  cursor: pointer;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

