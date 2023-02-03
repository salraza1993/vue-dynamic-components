<script setup>
import { computed } from 'vue';

const props = defineProps({
  message: { type: String},
  type: { type: String, default: () => 'light' },
  icon: { type: Boolean },
  iconSize: { type: String, default: '1.2rem' },
  iconClass: { type: String, default: () => 'fa-info-circle' },
  contentClass: { type: String },
});

const alertType = computed(() => {
  switch (props.type) {
    case 'dark': return 'alert--dark';
    case 'dark-outline': return 'alert--dark-outline';
    case 'gray': return 'alert--gray';
    case 'grey': return 'alert--gray';
    case 'gray-outline': return 'alert--gray-outline';
    case 'primary': return 'alert--primary';
    case 'primary-outline': return 'alert--primary-outline';
    case 'danger': return 'alert--danger';
    case 'danger-outline': return 'alert--danger-outline';
    case 'success': return 'alert--success';
    case 'success-outline': return 'alert--success-outline';
    case 'warning': return 'alert--warning';
    case 'warning-outline': return 'alert--warning-outline';
    case 'info': return 'alert--info';
    case 'info-outline': return 'alert--info-outline';
    case 'light-outline': return 'alert--light-outline';
    default: return 'alert--light';
  }
});

</script>
<script>
export default { name: 'AlertComponent' }
</script>

<template>
  <div 
    :class="alertType"
    class="alert-container">
    <div class="alert-container__content" v-if="props.message">
      <div class="alert-container__content__icon" v-if="icon" :style="`--alert-icon-font-size: ${props.iconSize}`">
        <i class="fa-solid" :class="iconClass"></i>
      </div>
      <p>{{ props.message }}</p>
    </div>
    <div class="alert-container__content" :class="contentClass" v-else>
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  .alert {
    &-container {
      --alert-padding-y: 0.65rem;
      --alert-padding-x: 0.9rem;
      --alert-bg-color: var(--white, #e6e6e6);
      --alert-border-color: #cccccc;
      --alert-color: var(--dark, #353535);
      --alert-corner-border-radius: var(--border-radius);
      --alert-margin-bottom: 1rem;
      --alert-icon-font-size: '';
      
      &:is(&.bordered) {
        border: 1px solid var(--alert-border-color);
      }
      background-color: var(--alert-bg-color);
      color: var(--alert-color);
      padding-block: var(--alert-padding-y);
      padding-inline: var(--alert-padding-x);
      margin-bottom: var(--alert-margin-bottom);
      &:is(&.alert-rounded, &.rounded) {
        border-radius: var(--alert-corner-border-radius);
      }
      p:last-child { margin-bottom: 0; }
      &__content {
        position: relative;
        display: flex;
        gap: 1rem;
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
        --alert-bg-color: transparent;
        --alert-border-color: #196d47;
        --alert-color: #196d47;
        border: 1px solid var(--alert-border-color);
      }
    }
    &--danger {
      --alert-bg-color: #f8d7da;
      --alert-border-color: #f5c6cb;
      --alert-color: #8b101c;
      &-outline {
        --alert-bg-color: transparent;
        --alert-border-color: #8b101c;
        --alert-color: #8b101c;
        border: 1px solid var(--alert-border-color);
      }
    }
    &--success {
      --alert-bg-color: #d4edda;
      --alert-border-color: #c3e6cb;
      --alert-color: #155724;
      &-outline {
        --alert-bg-color: transparent;
        --alert-border-color: #155724;
        --alert-color: #155724;
        border: 1px solid var(--alert-border-color);
      }
    }
    &--warning {
      --alert-bg-color: #fff3cd;
      --alert-border-color: #ffeeba;
      --alert-color: #856404;
      &-outline {
        --alert-bg-color: transparent;
        --alert-border-color: #856404;
        --alert-color: #856404;
        border: 1px solid var(--alert-border-color);
      }
    }
    &--info {
      --alert-bg-color: #d1ecf1;
      --alert-border-color: #bee5eb;
      --alert-color: #0c5460;
      &-outline {
        --alert-bg-color: transparent;
        --alert-border-color: #0c5460;
        --alert-color: #0c5460;
        border: 1px solid var(--alert-border-color);
      }
    }
    &--gray {
      --alert-bg-color: #dadada;
      --alert-border-color: #e0e0e0;
      --alert-color: #353535;
      &-outline {
        --alert-bg-color: transparent;
        --alert-border-color: #353535;
        --alert-color: #353535;
        border: 1px solid var(--alert-border-color);
      }
    }
    &--dark {
      --alert-bg-color: #252525;
      --alert-border-color: #cccccc;
      --alert-color: #d1d1d1;
      &-outline {
        --alert-bg-color: transparent;
        --alert-border-color: #252525;
        --alert-color: #252525;
        border: 1px solid var(--alert-border-color);
      }
    }
    &--light {
      &-outline {
        --alert-bg-color: transparent;
        --alert-border-color: #cccccc;
        --alert-color: #cccccc;
        border: 1px solid var(--alert-border-color);
      }
    }
  }
</style>