<script setup>
import { computed, ref, watch } from 'vue'

// Methods + Computed + Watchers trong một demo

// 1) Methods
const mathScore = ref(8)
const vueScore = ref(7)

function increaseMath() {
  mathScore.value = Math.min(10, mathScore.value + 0.5)
}

function increaseVue() {
  vueScore.value = Math.min(10, vueScore.value + 0.5)
}

function resetScores() {
  mathScore.value = 8
  vueScore.value = 7
}

// 2) Computed properties
const average = computed(() => (mathScore.value + vueScore.value) / 2)

const averageLabel = computed(() => {
  if (average.value >= 8) return 'Giỏi'
  if (average.value >= 6.5) return 'Khá'
  return 'Cần cố gắng'
})

// 3) Watchers
const averageChanges = ref(0)
watch(average, () => {
  averageChanges.value++
})

// Ví dụ watch cho xử lý "tốn thời gian" (giả lập debounce)
const keyword = ref('')
const isSearching = ref(false)
const suggestions = ref([])

const data = ['Vue', 'JavaScript', 'HTML', 'CSS', 'Vite', 'Composition API']
let timerId = null

watch(keyword, (newValue) => {
  const q = newValue.trim().toLowerCase()

  if (timerId) clearTimeout(timerId)

  if (!q) {
    isSearching.value = false
    suggestions.value = []
    return
  }

  isSearching.value = true
  suggestions.value = []

  timerId = setTimeout(() => {
    suggestions.value = data.filter((x) => x.toLowerCase().includes(q))
    isSearching.value = false
  }, 450)
})
</script>

<template>
  <section class="card">
    <h2>4) Methods, Computed & Watchers</h2>

    <div class="scores">
      <div class="row">
        <div class="block">
          <h3>Điểm Toán (Methods)</h3>
          <p>
            Hiện tại: <b>{{ mathScore }}</b>
          </p>
          <button type="button" @click="increaseMath">Tăng +0.5</button>
        </div>

        <div class="block">
          <h3>Điểm Vue (Methods)</h3>
          <p>
            Hiện tại: <b>{{ vueScore }}</b>
          </p>
          <button type="button" @click="increaseVue">Tăng +0.5</button>
        </div>
      </div>

      <div class="actions">
        <button type="button" @click="resetScores">Reset điểm</button>
      </div>

      <div class="computed">
        <h3>Computed: điểm trung bình</h3>
        <p>
          Average: <b>{{ average }}</b> ({{ averageLabel }})
        </p>
        <p>
          averageChanges (watch): <b>{{ averageChanges }}</b>
        </p>
      </div>
    </div>

    <hr />

    <div class="search">
      <h3>Watch example: tìm gợi ý (debounce)</h3>
      <label class="searchRow">
        Từ khóa:
        <input
          v-model="keyword"
          type="text"
          placeholder="Nhập: vue, html, vite..."
        />
      </label>

      <p v-if="isSearching" class="status">Đang tìm...</p>
      <ul v-else class="list">
        <li v-for="(s, i) in suggestions" :key="i">{{ s }}</li>
        <li v-if="!suggestions.length">Chưa có dữ liệu</li>
      </ul>
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
.scores {
  padding-bottom: 8px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.block {
  flex: 1;
  min-width: 280px;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 12px;
}
button {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  margin-top: 8px;
}
.actions {
  margin-top: 12px;
}
.computed {
  margin-top: 16px;
  border: 1px dashed #aaa;
  border-radius: 12px;
  padding: 12px;
}
.searchRow {
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
.status {
  margin: 10px 0;
  color: #0f766e;
}
.list {
  margin: 8px 0 0;
  padding-left: 18px;
}
hr {
  margin: 16px 0;
}
</style>

