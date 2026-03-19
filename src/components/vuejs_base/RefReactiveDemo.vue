<script setup>
import { reactive, ref } from 'vue'

// ref: giá trị đơn lẻ (số/chuỗi/boolean)
const count = ref(0)

// reactive: object/mảng phức tạp
const student = reactive({
  name: 'Lê Tuấn Anh',
  age: 20,
  graduated: false,
  scores: {
    js: 8,
    vue: 9,
  },
})

function increase() {
  count.value++
}

function toggleGraduated() {
  student.graduated = !student.graduated
}
</script>

<template>
  <section class="card">
    <h2>1) Data: `ref` & `reactive`</h2>

    <div class="row">
      <p>count (ref): <b>{{ count }}</b></p>
      <button type="button" @click="increase">Tăng count</button>
    </div>

    <div class="row">
      <p>
        Họ tên (reactive): <b>{{ student.name }}</b>
        (tuổi: <b>{{ student.age }}</b>)
      </p>
    </div>

    <div class="row">
      <p>
        Trạng thái: <b>{{ student.graduated ? 'Đã tốt nghiệp' : 'Chưa tốt nghiệp' }}</b>
      </p>
      <button type="button" @click="toggleGraduated">Đổi trạng thái</button>
    </div>

    <div class="row">
      <p>
        Điểm JS: <b>{{ student.scores.js }}</b> -
        Điểm Vue: <b>{{ student.scores.vue }}</b>
      </p>
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

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

button:hover {
  background: #f6f6f6;
}
</style>

