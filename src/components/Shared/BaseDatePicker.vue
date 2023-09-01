<template>
  <VDatePicker
    v-model.string="date"
    mode="date"
    expanded
    transparent
    borderless
    locale="en"
    :first-day-of-week="1"
    :attributes="attrs"
    :select-attribute="selectAttr"
    :min-date="new Date()"
    :masks="masks"
    @click="$emit('usageDate', date)"
  />
  <!-- :min-date="new Date().setDate(new Date().getDate() + 1)" -->
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";

const props = defineProps({
  selectedDate: {
    type: String,
    required: false,
    default: "",
  },
});

defineEmits(["usageDate"]);

const date = ref(props.selectedDate);
const attrs = ref([
  {
    dates: new Date(),
    content: {
      style: {
        color: "#57af34",
      },
    },
  },
]);
const selectAttr = ref({
  highlight: {
    style: {
      background: "#869D56",
      height: "32px",
      width: "32px",
    },
    contentStyle: {
      color: "#ffffff",
    },
  },
});
const masks = ref({
  modelValue: "YYYY-MM-DD",
  weekdays: "WW",
  title: "MMM YYYY",
});
</script>

<style lang="scss">
.vc-container {
  .vc-header {
    padding: 0;
    margin-bottom: 24px;
  }
  .vc-weeks {
    padding: 0;
    .vc-weekday {
      color: #666666;
      font-weight: 400;
    }
  }
  .vc-title {
    color: #444444;
    font-weight: 600;
    pointer-events: none;
  }
  .vc-day {
    min-height: 40px;
  }
  .is-today {
    pointer-events: none;
  }
  .vc-day-content {
    color: #444444;
    font-size: var(--vc-text-base);
    font-weight: 700;
    height: 32px;
    width: 32px;
    &:hover {
      background-color: #ecf2e1;
    }
    @media screen and (max-width: 768px) {
      &:hover {
        background-color: transparent;
      }
    }
  }
  .vc-disabled {
    color: #cccccc;
    pointer-events: none;
    text-decoration-line: line-through;
    font-weight: 300;
  }
  .vc-focus {
    box-shadow: none;
  }
  .vc-highlight-content-solid {
    &:hover {
      background-color: transparent;
    }
  }
}
</style>
