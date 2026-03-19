<script setup>
import { computed, onMounted, ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import RefReactiveDemo from './components/vuejs_base/RefReactiveDemo.vue'
import DirectivesDemo from './components/vuejs_base/DirectivesDemo.vue'
import TwoWayBindingDemo from './components/vuejs_base/TwoWayBindingDemo.vue'
import MethodsComputedWatchDemo from './components/vuejs_base/MethodsComputedWatchDemo.vue'
import PropsEmitsDemo from './components/vuejs_base/PropsEmitsDemo.vue'
import DomRefDemo from './components/vuejs_base/DomRefDemo.vue'
import SlotDemo from './components/vuejs_base/SlotDemo.vue'

const routes = {
  '/ref-reactive': RefReactiveDemo,
  '/directives': DirectivesDemo,
  '/two-way': TwoWayBindingDemo,
  '/methods-computed-watch': MethodsComputedWatchDemo,
  '/props-emits': PropsEmitsDemo,
  '/dom-ref': DomRefDemo,
  '/slot': SlotDemo,
}

function readPathFromHash() {
  // Ví dụ hash: "#/directives" -> path: "/directives"
  const h = window.location.hash
  if (!h || h === '#') return '/ref-reactive'

  const raw = h.startsWith('#/') ? h.slice(1) : h.slice(1) // bỏ '#'
  return raw.startsWith('/') ? raw : `/${raw}`
}

const currentPath = ref(readPathFromHash())

const currentComponent = computed(() => routes[currentPath.value] ?? null)

onMounted(() => {
  // Đồng bộ route khi người dùng refresh trang với hash rỗng
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#/ref-reactive'
    currentPath.value = '/ref-reactive'
  }

  window.addEventListener('hashchange', () => {
    currentPath.value = readPathFromHash()
  })
})
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <div class="layout">
      <nav class="nav">
        <h3>Chọn ví dụ</h3>

        <a
          :class="{ active: currentPath === '/ref-reactive' }"
          href="#/ref-reactive"
        >
          1) `ref` & `reactive`
        </a>

        <a :class="{ active: currentPath === '/directives' }" href="#/directives">
          2) Directives
        </a>

        <a :class="{ active: currentPath === '/two-way' }" href="#/two-way">
          3) `v-model`
        </a>

        <a
          :class="{ active: currentPath === '/methods-computed-watch' }"
          href="#/methods-computed-watch"
        >
          4) Methods/Computed/Watch
        </a>

        <a :class="{ active: currentPath === '/props-emits' }" href="#/props-emits">
          5) Props & Custom Events
        </a>

        <a :class="{ active: currentPath === '/dom-ref' }" href="#/dom-ref">
          6) `ref` DOM
        </a>

        <a :class="{ active: currentPath === '/slot' }" href="#/slot">
          7) Slot
        </a>
      </nav>

      <section class="content">
        <component v-if="currentComponent" :is="currentComponent" />

        <div v-else class="not-found">
          Không tìm thấy route: <b>{{ currentPath }}</b>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.layout {
  display: flex;
  gap: 18px;
  max-width: 980px;
  margin: 0 auto;
}

.nav {
  min-width: 260px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 14px;
}

.nav h3 {
  margin: 0 0 12px;
  font-size: 1.05rem;
}

.nav a {
  display: block;
  padding: 8px 10px;
  border-radius: 10px;
  color: var(--color-text);
  text-decoration: none;
  border: 1px solid transparent;
}

.nav a:hover {
  background: var(--color-background-mute);
  border-color: var(--color-border-hover);
}

.nav a.active {
  background: hsla(160, 100%, 37%, 0.12);
  border-color: hsla(160, 100%, 37%, 0.4);
  color: hsla(160, 100%, 37%, 1);
}

.content {
  flex: 1;
  min-width: 0;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 14px;
}

.not-found {
  color: #b91c1c;
  padding: 12px;
  border: 1px dashed #fca5a5;
  border-radius: 12px;
}
</style>
