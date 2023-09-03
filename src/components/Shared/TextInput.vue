<template>
  <div class="flex w-full flex-col gap-1.5">
    <label v-if="label" class="text-14-r">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :type="type"
      :maxLength="maxLength"
      :class="[
        'text-18-r h-12 w-full rounded-2xl border border-slate-300 px-4',
        'focus:border-primary focus:outline-none',
        errMsgs.length !== 0 && 'border-error',
        'disabled:bg-gray-100',
      ]"
      required
      @input="handleInput"
    />
    <ul v-if="errMsgs.length !== 0" class="text-sm text-error">
      <li v-for="errMsg in errMsgs" :key="errMsg.$uid">
        {{ errMsg.$message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  type: {
    type: String,
    required: false,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    required: false,
    default: "",
  },
  label: {
    type: String,
    required: false,
    default: "",
  },
  errMsgs: {
    type: Array,
    required: false,
    default: () => [],
  },
  maxLength: {
    type: String,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

function handleInput($event) {
  emit("update:modelValue", $event.target.value);
}
</script>
