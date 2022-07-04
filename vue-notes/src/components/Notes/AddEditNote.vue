<script setup>
import {ref} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  modelType: {
    type: String,
    default: ''
  },
  placeHolder:{
    type:String,
    default: 'Add a note'
  },
  label:{
    type:String,
    default:''
  }
})
const emit = defineEmits([
  'update:modelValue'
]);
const textAreaRef = ref();
const focusTextArea = () => {
  textAreaRef.value.focus();
}
defineExpose({
  focusTextArea
})
</script>
<template>
  <div :class="`note-composer ${modelType} u-margin-bottom-small`">
    <label class="note-composer__label" v-if="label" for="textArea">{{ label }}</label>
    <textarea name="textArea" ref="textAreaRef" v-model="modelValue" class="note-composer__text"
              placeholder="Add a note" @input="$emit('update:modelValue',modelValue)"></textarea>
    <slot name="buttons"></slot>
  </div>
</template>

<style lang="scss" scoped>
.note-composer {
  @include card(2);
  height: 10em;
  width: 100%;
  background-color: $color-primary-dark;
  border-radius: $border-radius-m;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em 1em;

  &.bg-blue {
    background-color: $color-tertiary-dark;
  }
  &__label{
    align-self: start;
    font-size: $font-size-M;
    font-weight: $font-weight-medium;
    color: $color-white;
  }
  &__text {
    font-size: $font-size-M;
    margin-top: 0.5rem;
    width: 100%;
    flex: 1;
    resize: none;
    border-radius: 4px;
    padding: 0.25em;
  }
}

:slotted(.note-composer__button.btn) {
  margin: 0.5em 0 0.25em auto;
  padding: 0.5em 1em;
  border-radius: $border-radius-sm;


  &:disabled {
    background-color: rgba($color-primary, 0.6);
    color: $color-grey-light-3;
  }
}

:slotted(.note-composer__button.btn) {
  background-color: $color-primary;
  color: $color-white;

  &:not(:disabled) {

    &:visited, &:link {
      color: $color-white;
      font-weight: bold;
    }

    &:hover, &:active, &:focus:focus-visible {
      background-color: $color-primary-light;
    }
  }

}

:slotted(.bg-blue .note-composer__button.btn) {
  background-color: $color-tertiary;
  &:not(:disabled) {

    &:visited, &:link {
      color: red;
    }

    &:hover, &:active, &:focus:focus-visible {
      background-color: $color-tertiary-light;
    }
  }
}
</style>

