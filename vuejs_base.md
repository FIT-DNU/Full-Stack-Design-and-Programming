# Hướng dẫn `src/components/vuejs_base/`

Thư mục `src/components/vuejs_base/` chứa các component demo (ví dụ) nhằm minh hoạ các khái niệm Vue 3 trong bài “VueJS cơ bản”.

Các component sẽ được “điều hướng” theo kiểu tự route (không dùng `vue-router`) bằng cơ chế `hash` URL trong `src/App.vue`.

## 1) Cách chạy / chuyển ví dụ

Trong `src/App.vue`, mình có khai báo một `routes` map từ `path` sang component, ví dụ:

- `/ref-reactive` -> `RefReactiveDemo`
- `/directives` -> `DirectivesDemo`
- `/two-way` -> `TwoWayBindingDemo`
- `/methods-computed-watch` -> `MethodsComputedWatchDemo`
- `/props-emits` -> `PropsEmitsDemo`
- `/dom-ref` -> `DomRefDemo`
- `/slot` -> `SlotDemo`

Vì dùng `hash`, bạn mở ví dụ bằng URL dạng:

- `http://localhost:<port>/#/ref-reactive`
- `http://localhost:<port>/#/directives`
- `http://localhost:<port>/#/two-way`
- `http://localhost:<port>/#/methods-computed-watch`
- `http://localhost:<port>/#/props-emits`
- `http://localhost:<port>/#/dom-ref`
- `http://localhost:<port>/#/slot`

Trong thanh điều hướng của `App.vue`, các thẻ `<a>` đã gắn sẵn `href="#/..."` để bạn bấm chọn.

## 2) Danh sách component trong `vuejs_base/`

### `RefReactiveDemo.vue` — `ref` & `reactive`
Đường dẫn: `src/components/vuejs_base/RefReactiveDemo.vue`

- Dùng `ref()` cho giá trị đơn lẻ:
  - `count` (số) và tăng bằng hàm `increase()`
- Dùng `reactive()` cho object:
  - `student` với các trường `name`, `age`, `graduated`, `scores`
- Minh hoạ reactivity:
  - Bấm “Tăng count” làm `count` cập nhật ngay.
  - Bấm “Đổi trạng thái” làm `student.graduated` đổi giữa “Đã tốt nghiệp” và “Chưa tốt nghiệp”.

Các phần template chủ yếu dùng:
- `{{ ... }}` để hiển thị dữ liệu phản hồi
- toán tử điều kiện `student.graduated ? ... : ...`

### `DirectivesDemo.vue` — `v-bind`, `v-if/v-else`, `v-for`
Đường dẫn: `src/components/vuejs_base/DirectivesDemo.vue`

Component minh hoạ:
- `v-bind` (viết tắt `:`) qua thuộc tính:
  - nút “submit” dùng `:disabled="!canSubmit"`
- `v-if / v-else-if / v-else` để hiển thị trạng thái:
  - `status` có 3 giá trị: `success | error | idle`
- `v-for` để duyệt danh sách `students`:
  - hiển thị `s.name` và `s.avg`

Hàm `toggleStatus()` thay đổi chuỗi `status` theo vòng lặp.

### `TwoWayBindingDemo.vue` — `v-model` (2 chiều)
Đường dẫn: `src/components/vuejs_base/TwoWayBindingDemo.vue`

Component minh hoạ Two-way binding với form:
- `v-model="studentName"` gắn 2 chiều với input text
- `@keyup.enter="addStudent"`: nhấn Enter để thêm sinh viên
- `students` (mảng) được render bằng `v-for`

Bạn có thể thử:
- Gõ tên vào input → chữ hiển thị “Giá trị đang nhập” tự cập nhật
- Bấm “Thêm” hoặc nhấn Enter → thêm item vào danh sách, đồng thời input được reset về rỗng.

### `MethodsComputedWatchDemo.vue` — methods, computed, watch
Đường dẫn: `src/components/vuejs_base/MethodsComputedWatchDemo.vue`

Gồm 3 phần:

1) **Methods**
- `increaseMath()`, `increaseVue()`: tăng điểm
- `resetScores()`: reset về giá trị ban đầu

2) **Computed**
- `average`: điểm trung bình (tính từ `mathScore` và `vueScore`)
- `averageLabel`: quy đổi `average` sang nhãn “Giỏi / Khá / Cần cố gắng”

3) **Watchers**
- `watch(average, ...)` tăng `averageChanges` mỗi khi `average` thay đổi
- watch cho `keyword` để mô phỏng xử lý “tốn thời gian” (debounce):
  - nhập từ khoá → chờ `450ms` rồi mới lọc ra `suggestions`
  - hiển thị “Đang tìm...” khi đang debounce

### `PropsEmitsDemo.vue` — props (1 chiều cha -> con) + custom event (emit)
Đường dẫn: `src/components/vuejs_base/PropsEmitsDemo.vue`

Component này quản lý dữ liệu cha và render nhiều component con:
- `students` là state ở component cha
- `highlighted` là biến bật/tắt style highlight cho component con
- `totalStudents` là `computed` theo `students.length`

Truyền dữ liệu xuống con bằng **props**:
- `:student="s"`
- `:index="i"`
- `:highlight="highlighted"`

Nhận tín hiệu từ con bằng custom event:
- con phát `@remove="removeStudent"` khi bấm nút xóa
- cha xử lý `removeStudent(index)` và dùng `students.value.splice(...)` để xoá.

Con tương ứng:
- `src/components/vuejs_base/StudentCard.vue`

### `StudentCard.vue` — component con (nhận props, emit event)
Đường dẫn: `src/components/vuejs_base/StudentCard.vue`

Component con dùng:
- `defineProps()` để nhận:
  - `student` (Object)
  - `index` (Number)
  - `highlight` (Boolean)
- `defineEmits(['remove'])` để khai báo event custom

Phần logic:
- `studentAgeLabel` là `computed` để format tuổi (`"${props.student.age} tuổi"`)
- nút “Xóa” gọi `removeSelf()`:
  - `emit('remove', props.index)`

### `DomRefDemo.vue` — `ref` để tham chiếu DOM
Đường dẫn: `src/components/vuejs_base/DomRefDemo.vue`

Minh hoạ cách dùng `ref` không chỉ cho state mà còn cho DOM element:
- `const inputEl = ref(null)`
- template dùng `ref="inputEl"` ở `<input>`
- hàm `focusInput()`:
  - dùng `await nextTick()` để đảm bảo DOM sẵn sàng
  - gọi `inputEl.value?.focus()`

Sau đó hiển thị `text.length` để bạn thấy state vẫn phản hồi bình thường.

### `SlotDemo.vue` — Slot (truyền nội dung cha -> con)
Đường dẫn: `src/components/vuejs_base/SlotDemo.vue`

Component minh hoạ slot qua một modal khung:
- có 2 nút:
  - “Mở modal Thông báo”
  - “Mở modal Cảnh báo”
- `SlotDemo` điều khiển `open` và `mode`
- Truyền nội dung vào `ModalFrame` bằng slot:
  - `#title` để nhét tiêu đề
  - nội dung body đặt trực tiếp giữa tag `ModalFrame ...`
  - `#footer` nhét nút `OK`

Component khung modal:
- `src/components/vuejs_base/ModalFrame.vue`

### `ModalFrame.vue` — component con dùng slot
Đường dẫn: `src/components/vuejs_base/ModalFrame.vue`

Props & events:
- `defineProps({ open: Boolean })`: modal hiển thị khi `open = true`
- `defineEmits(['close'])`: phát `close` khi bấm “Đóng” hoặc click nền (backdrop)

Slot:
- `slot name="title"`: mặc định “Tiêu đề” nếu cha không truyền
- `<slot></slot>`: body
- `slot name="footer"`: mặc định nút “Đóng” nếu cha không truyền footer

## 3) Cách thêm một ví dụ mới (mở rộng thư mục)

Bạn chỉ cần:
1. Tạo file component mới trong `src/components/vuejs_base/` (ví dụ `MyNewDemo.vue`)
2. Import component đó vào `src/App.vue`
3. Thêm vào `routes` một mapping mới (ví dụ `/my-new` -> `MyNewDemo`)
4. (Tuỳ chọn) thêm một link trong thanh điều hướng để bấm chọn.

> Gợi ý: nếu bạn theo đúng format hiện tại, việc “route theo hash” sẽ tự hoạt động.

