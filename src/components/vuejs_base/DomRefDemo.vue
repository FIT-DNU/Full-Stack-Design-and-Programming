<script setup>
import { nextTick, ref } from 'vue'

const text = ref('')

// ref: tham chiếu DOM (focus)
const inputEl = ref(null)

async function focusInput() {
  // đảm bảo DOM đã sẵn sàng trước khi focus
  await nextTick()
  inputEl.value?.focus()
}
</script>

<template>
  <section class="card">
    <h2>6) `ref` DOM reference</h2>

    <div class="row">
      <input ref="inputEl" v-model="text" type="text" placeholder="Bấm nút để focus vào đây" />
      <button type="button" @click="focusInput">Focus input</button>
    </div>

    <p class="meta">
      Độ dài chuỗi: <b>{{ text.length }}</b>
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
  gap: 12px;
  align-items: center;
}
input {
  flex: 1;
  min-width: 240px;
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
.meta {
  margin-top: 12px;
  color: #334155;
}
</style>

