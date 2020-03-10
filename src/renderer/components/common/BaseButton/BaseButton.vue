
<template>
  <div class="base-button">

    <!-- start type only text -->
    <span class="text-button" v-if="onlyText" @click="$emit('event', $event)">
      <i :class="`iconfont ${icon}`" v-if="icon"></i>
      <slot> </slot>
    </span>
    <!-- end type only text -->

    <!-- start base-button -->
    <button 
      v-else
      :class="{
        'base-button': true,
        'plain-button': type === 'plain',
        'ghost-button': type === 'ghost',
        'danger-button': type === 'danger',
        'base-button-disabled': disabled && type === 'primary',
        'danger-button-disabled': disabled && type === 'danger',
        'plain-button-disabled': disabled && type === 'plain',
      }" 
      :type="nativeType"
      @click="$emit('event', $event)"
      >
        <i :class="`iconfont ${icon}`" v-if="icon"></i>
        <slot> </slot>
      </button>
    <!-- end base-button -->

  </div>
</template>

<script>
export default {
  name: "base-button",
  props: {
    type: {
      type: String,
      default: 'primary', // primary、plain、only-text、ghost、danger
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    },
  },
  data() {
    return {}
  },
  computed: {
    onlyText() {
      return this.type === 'only-text';
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss">
  $text-color-primary: #333 !default;
  $color-primary: #00ac97 !default;
  $color-primary-light-1: mix(#fff, $color-primary, 10%) !default;
  $color-primary-light-9: mix(#fff, $color-primary, 90%) !default;
  $color-primary-disabled: rgba($color-primary, .3) !default;
  $color-primary-light-9-disabled: rgba($color-primary, .2) !default;
  $text-color-primary-disabled: rgba($text-color-primary, .2) !default;

  $color-danger-light-1: mix(#fff, #f56c6c, 10%) !default;
  $color-danger-light-9: mix(#fff, #f56c6c, 90%) !default;
  $color-danger-disabled: rgba(#f56c6c, .3) !default;
  $color-danger-light-9-disabled: rgba(#f56c6c, .2) !default;
  // 主要按钮
  .base-button {
    cursor: pointer;
    padding: 5px 15px;
    background: $color-primary;
    color: #fff;
    font-size: 14px;
    border: none;
    border-radius: 2px;
    outline: none;
    line-height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    .iconfont {
      line-height: 12px;
      font-size: 12px;
      margin-right: 3px;
    }
    &:hover {
      background: $color-primary-light-1;
      color: #fff;
    }
  }

  .base-button-disabled {
    background: $color-primary-disabled;
    &:hover {
      background: $color-primary-disabled;
      cursor: not-allowed;
    }

  }

  // 次要按钮
  .plain-button {
    background: $color-primary-light-9;
    color: $text-color-primary;
    padding: 5px 15px;
    &:hover {
      background: $color-primary;
    }
  }

  .plain-button-disabled {
    background: $color-primary-light-9-disabled;
    color: #fff;
    &:hover {
      background: $color-primary-light-9-disabled;
      cursor: not-allowed;
      color: $text-color-primary-disabled;
    }
  }
  // 危险红色按钮
  .danger-button {
    background: #f56c6c;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: 6px 15px;
    &:hover {
      background: $color-danger-light-1;
      color: #fff;
    }

  }
  .danger-button-disabled {
    background: $color-danger-light-9-disabled;
    border-color: $color-danger-light-9-disabled;
    color: #fff;
    &:hover {
      background: $color-danger-light-9-disabled;
      cursor: not-allowed;
      color: #fff;
    }
  }
  // 背景白色按钮
  .ghost-button {
    background: #fff;
    color: $text-color-primary;
    border: 1px solid #E2E2E2;
    border-radius: 2px;
    padding: 4px 15px;
    &:hover {
      border-color: $color-primary;
    }

  }

  // 文字按钮
  .text-button {
    display: inline-block;
    padding: 7px 15px;
    color: $text-color-primary;
    .iconfont {
      font-size: 12px;
      margin-right: 3px;
    }
    &:hover {
      cursor: pointer;
      color: $color-primary;
    }
  }

</style>