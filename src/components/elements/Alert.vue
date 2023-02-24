<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {type: Boolean, default: true },
  error: {type: Boolean, default: false },
  errorMessage: {type: String, default: "Error Message" },
  dismissible: Boolean,
  message: { type: String},
  varient: { type: String, default: () => 'light' },
  icon: { type: Boolean },
  show: { type: Boolean },
  hide: { type: Boolean },
  squired: { type: Boolean },
  bordered: { type: Boolean },
  inline: { type: Boolean },
  iconSize: { type: String, default: '1.2rem' },
  iconClass: { type: String, default: () => 'fa-info-circle' },
  contentClass: { type: String },
});

const alertVarient = computed(() => {
  switch (props.varient) {
    case 'black': return 'alert--black';
    case 'black-outline': return 'alert--black-outline';
    case 'dark': return 'alert--dark';
    case 'dark-outline': return 'alert--dark-outline';
    case 'primary': return 'alert--primary';
    case 'primary-outline': return 'alert--primary-outline';
    case 'secondary': return 'alert--secondary';
    case 'secondary-outline': return 'alert--secondary-outline';
    case 'danger': return 'alert--danger';
    case 'danger-outline': return 'alert--danger-outline';
    case 'success': return 'alert--success';
    case 'success-outline': return 'alert--success-outline';
    case 'warning': return 'alert--warning';
    case 'warning-outline': return 'alert--warning-outline';
    case 'info': return 'alert--info';
    case 'info-outline': return 'alert--info-outline';
    case 'white': return 'alert--white';
    case 'white-outline': return 'alert--white-outline';
    case 'light-outline': return 'alert--light-outline';
    default: return 'alert--light';
  }
});
const visibilityState = computed(() => {
  if(!props.modelValue) return false;
  else if (props.show) return false
  else if(props.hide) return false
  else return true
});


const emit = defineEmits(["update:modelValue"]);
// const error = ref(props.error)
// const error_message = ref(props.errorMessage)

const dismissAlertHandler = () => {
  emit("update:modelValue", false)
}

</script>
<script>
export default { name: 'AlertComponent' }
</script>

<template>
  <div 
    v-if="visibilityState"
    :class="[
      alertVarient, 
      { 
        'dismissible': dismissible,
        'squired': squired,
        'bordered': bordered,
        'inline': inline 
      },  
    ]"
    class="alert-container">
    <template v-if="message">
      <div class="alert-container__content">
        <div class="alert-container__content__icon" v-if="icon && message" :style="`--alert-icon-font-size: ${iconSize}`">
          <i class="fa-solid" :class="iconClass"></i>
        </div>
        <p>{{ message }}</p>
      </div>
      <span class="alert-container__close" @click="dismissAlertHandler" v-if="dismissible">&times;</span>
    </template>

    <template v-else>
      <div class="alert-container__content" :class="contentClass">
        <slot />
      </div>      
      <span class="alert-container__close" @click="dismissAlertHandler" v-if="dismissible">&times;</span>
    </template>
  </div>
</template>

<style lang="scss">
  .alert {
    &-container {
      --alert-font-family: ;
      --alert-font-size: 1rem;
      --alert-font-weight: 400;
      --alert-line-height: 1.5;

      --alert-padding-y: 0.65rem;
      --alert-padding-x: 0.9rem;
      --alert-bg-color: var(--white, #e6e6e6);
      --alert-color: var(--dark, #353535);
      --alert-margin-bottom: 0.5rem;
      --alert-icon-font-size: '';
      --alert-content-gap: 1rem;      

      --alert-border-width: 0;
      --alert-border-style: solid;
      --alert-border-color: #cccccc;
      --alert-corner-border-radius: 0.35rem;
      --alert-min-height: 45px;

      --alert-close-button-width: calc(var(--alert-min-height) - calc(var(--alert-padding-y) / 1.3));
      --alert-close-bg-color: var(--transparent, transparent);
      --alert-close-color: var(--alert-color);
      --alert-close-bg-hover-color: var(--danger, #d66666);
      --alert-close-hover-color: var(--white, #ffffff);
      --alert-selection-bg-color: var(--alert-color);
      --alert-selection-color: var(--white, #ffffff);
      
      
      *::selection {
        background: var(--alert-selection-bg-color);
        color: var(--alert-selection-color);
      }

      font-family: var(--alert-font-family);
      font-size: var(--alert-font-size);
      font-weight: var(--alert-font-weight);
      line-height: var(--alert-line-height);
      background-color: var(--alert-bg-color);
      color: var(--alert-color);
      padding-block: var(--alert-padding-y);
      padding-inline: var(--alert-padding-x);
      margin-bottom: var(--alert-margin-bottom);
      display: flex;       
      width: 100%; 
      min-height: var(--alert-min-height);
      border: var(--alert-border-width) var(--alert-border-style) var(--alert-border-color);
      border-radius: var(--alert-corner-border-radius);
      
      &:is(.inline) { display: inline-flex; width: auto;}

      &:is(.alert-bordered, .bordered) { --alert-border-width: 1px; }
      &:is(.alert-squired, .squired) { --alert-corner-border-radius: 0; }

      p:last-child { margin-bottom: 0; }

      &:is(.dismissible) {
        padding-inline-end: calc(var(--alert-close-button-width) + var(--alert-padding-x));
      }

      &__close {
        width: var(--alert-close-button-width);
        height: var(--alert-close-button-width);
        text-align: center;
        line-height: calc(var(--alert-close-button-width) / 1.09);
        font-size: calc(var(--alert-font-size) * 1.75);
        position: absolute;
        right: calc(var(--alert-padding-x) / 2.6);
        top: calc(var(--alert-padding-y) / 2.6);
        border-radius: var(--alert-corner-border-radius);
        transition: var(--transition, all 0.3s ease-in);
        background-color: var(--alert-close-bg-color);
        color: var(--alert-close-color);
        &:hover {
          cursor: pointer;
          background-color: var(--alert-close-bg-hover-color);
          color: var(--alert-close-hover-color);
        }
      }

      &__content {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        gap: var(--alert-content-gap);
        &__icon {
          font-size: var(--alert-icon-font-size);
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
          display: grid;
          place-items: center;
        }
      }
    }
    &--primary {
      --alert-bg-color: #a3e6c8;
      --alert-border-color: #196d47;
      --alert-color: #196d47;
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #196d47;
        --alert-color: #196d47;
      }
    }
    &--secondary {
      --alert-bg-color: #909eac;
      --alert-border-color: #1a2a3a;
      --alert-color: #1a2a3a;
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #1a2a3a;
        --alert-color: #1a2a3a;
      }
    }
    &--danger {
      --alert-bg-color: #f8d7da;
      --alert-border-color: #f5c6cb;
      --alert-color: #8b101c;
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #8b101c;
        --alert-color: #8b101c;
      }
    }
    &--success {
      --alert-bg-color: #d4edda;
      --alert-border-color: #c3e6cb;
      --alert-color: #155724;
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #155724;
        --alert-color: #155724;
      }
    }
    &--warning {
      --alert-bg-color: #fff3cd;
      --alert-border-color: #ffeeba;
      --alert-color: #856404;
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #856404;
        --alert-color: #856404;
      }
    }
    &--info {
      --alert-bg-color: #d1ecf1;
      --alert-border-color: #bee5eb;
      --alert-color: #0c5460;
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #0c5460;
        --alert-color: #0c5460;
      }
    }
    &--gray {
      --alert-bg-color: #dadada;
      --alert-border-color: #e0e0e0;
      --alert-color: #353535;
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #353535;
        --alert-color: #353535;
      }
    }
    &--black {
      --alert-bg-color: #151515;
      --alert-border-color: #000000;
      --alert-color: #DDDDDD;
      --alert-selection-color: var(--dark, #151515);
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #151515;
        --alert-color: #151515;
      }
    }
    &--dark {
      --alert-bg-color: #252525;
      --alert-border-color: #cccccc;
      --alert-color: #d1d1d1;
      --alert-selection-color: var(--dark, #151515);
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #252525;
        --alert-color: #252525;
      }
    }
    &--light {
      --alert-bg-color: #dbdada;
      --alert-border-color: #cccccc;
      --alert-color: #252525;
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #dbdada;
        --alert-color: #dbdada;
        --alert-selection-color: var(--dark, #151515);
      }
    }
    &--white {
      --alert-bg-color: #ffffff;
      --alert-border-color: #cccccc;
      --alert-color: #252525;
      &-outline {
        --alert-border-width: 1px;
        --alert-bg-color: transparent;
        --alert-border-color: #ffffff;
        --alert-color: #ffffff;
        --alert-selection-color: var(--dark, #151515);
      }
    }
  }
</style>