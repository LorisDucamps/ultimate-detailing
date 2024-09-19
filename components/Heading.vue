<template>
    <component
      :is="`h${level}`"
      :class="computedClass"
      :aria-level="level"
    >
      <slot />
    </component>
  </template>
  
  <script>
  export default {
    props: {
      level: {
        type: String,
        default: 1
      },
      className: {
        type: String,
        default: ''
      }
    },
    computed: {
      computedClass() {
        const baseClasses = {
          1: 'text-4xl font-bold',
          2: 'text-3xl font-semibold',
          3: 'text-2xl font-medium',
          4: 'text-xl font-medium',
          5: 'text-lg font-normal',
          6: 'text-base font-normal'
        };
        return `${baseClasses[this.level]} ${this.className}`;
      }
    }
  }
  </script>