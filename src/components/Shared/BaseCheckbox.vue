<template>
  <div class="flex flex-col gap-1.5">
    <div class="flex items-center">
      <input
        id="checkbox"
        type="checkbox"
        :class="[
          'peer relative h-5 w-5 shrink-0 appearance-none',
          'rounded-md border-2 border-gray-400 bg-white',
          'checked:border-0  checked:bg-primary hover:border-primary ',
        ]"
        :checked="checked"
        @change="onChange($event)"
      />
      <label v-if="label" class="ml-2">{{ label }}<slot /></label>

      <CheckIcon
        class="pointer-events-none absolute hidden h-5 w-5 stroke-white stroke-[4] p-0.5 peer-checked:block"
      />
    </div>
    <ul v-if="errMsgs.length !== 0" class="text-sm text-error">
      <li v-for="errMsg in errMsgs" :key="errMsg.$uid">
        {{ errMsg.$message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { CheckIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  modelValue: {
    type: [Boolean, Array],
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: "",
  },
  value: {
    type: [Boolean, Object],
    required: false,
    default: false,
  },
  errMsgs: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const checked = computed(() => {
  if (props.value) {
    return props.modelValue.includes(props.value);
  } else {
    return props.modelValue;
  }
});

function onChange(event) {
  let newModelValue;

  if (props.value) {
    if (checked.value) {
      newModelValue = props.modelValue.filter((val) => val !== props.value);
    } else {
      newModelValue = [...props.modelValue, props.value];
    }
  } else {
    newModelValue = event.target.checked;
  }
  emit("update:modelValue", newModelValue);
}
</script>
