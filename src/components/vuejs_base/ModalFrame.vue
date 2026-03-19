<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>

<template>
  <div v-if="open" class="backdrop" @click.self="close">
    <div class="modal">
      <header class="header">
        <slot name="title">
          <b>Tiêu đề</b>
        </slot>
      </header>

      <section class="body">
        <slot></slot>
      </section>

      <footer class="footer">
        <slot name="footer">
          <button type="button" @click="close">Đóng</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 999;
}
.modal {
  width: min(720px, 100%);
  background: white;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.header {
  padding: 14px 16px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 1.05rem;
}
.body {
  padding: 14px 16px;
}
.footer {
  padding: 14px 16px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
button {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
</style>

