<template>
  <!-- ================= [ External anchor link button ] ================= -->
  <template v-if="props.type === 'internal'">
    <RouterLink 
      v-bind="$attrs" 
      :to="props.path" 
      :class="[
        {
          'flex--row-reverse': (iconDirection === 'end'),
          'squired': squired,
          'shadow': shadow,
          'bordered': bordered,
          'disabled': disabled,
          'full-width': block,
        }, 
        buttonSizes, buttonVariants
      ]"
      :disabled="disabled"
      class="button">
      <i v-if="label && icon" class="fa-solid" :class="[iconClass]"></i>
      <span v-if="label">{{ label }}</span>
      <slot v-else />
    </RouterLink>
  </template>
  <!-- ================= [ External anchor link button ] ================= -->
  <template v-else-if="props.type === 'external'">
    <a 
      v-bind="$attrs" 
      :href="props.path" 
      :class="[
        {
          'flex--row-reverse': (iconDirection === 'end'),
          'squired': squired,
          'shadow': shadow,
          'bordered': bordered,
          'disabled': disabled,
          'full-width': block,
        }, 
        buttonSizes, buttonVariants
      ]"
      class="button" 
      :disabled="disabled"
      target="_blank">
      <i v-if="label && icon" class="fa-solid" :class="[iconClass]"></i>
      <span v-if="label">{{ label }}</span>
      <slot v-else />
    </a>
  </template>
    <!-- ================= [ Button ] ================= -->
  <template v-else>
    <button 
      v-bind="$attrs" 
      :type="props.type" 
      :class="[
        {
          'flex--row-reverse': (iconDirection === 'end'),
          'squired': squired,
          'shadow': shadow,
          'bordered': bordered,
          'disabled': disabled,
          'full-width': block,
        }, 
        buttonSizes, buttonVariants
      ]"
      :disabled="disabled"
      class="button">
      <i v-if="label && icon" class="fa-solid" :class="[iconClass]"></i>
      <span v-if="label">{{ label }}</span>
      <slot v-else />
    </button>
  </template>
</template>

<script>
  export default { name: "CustomButton" }
</script>
<script setup>
  import { computed } from "vue";
  const props = defineProps({
    type: {type: String, default: () => 'button'},
    label: { type: String },
    path: { type: String, default: () => '#' },
    icon: { type: Boolean, default: () => false },
    iconClass: { type: String, default: () => 'fa-info-circle' },
    iconDirection: { type: String, default: () => 'start'},
    size: { type: String },
    squired: Boolean,
    shadow: Boolean,
    bordered: Boolean,
    disabled: Boolean,
    block: Boolean,
    variant: { type: String, default: () => 'button--white' },
  });
  
  const buttonSizes = computed(() => {
    switch (props.size) {
      case 'small': return 'button--small';
      case 'medium': return 'button--medium';
      case 'large': return 'button--large';
      default: return 'button';
    }
  });
  const buttonVariants = computed(() => {
    switch (props.variant) {
      case 'primary': return 'button--primary';
      case 'secondary': return 'button--secondary';
      case 'danger': return 'button--danger';
      case 'warning': return 'button--warning';
      case 'success': return 'button--success';
      case 'info': return 'button--info';
      case 'light': return 'button--light';
      case 'white': return 'button--white';
      case 'dark': return 'button--dark';
      case 'black': return 'button--black';
      
      case 'primary--outline': return 'button--primary-outline';
      case 'primary-outline': return 'button--primary-outline';
      case 'secondary--outline': return 'button--secondary-outline';
      case 'secondary-outline': return 'button--secondary-outline';
      case 'danger--outline': return 'button--danger-outline';
      case 'danger-outline': return 'button--danger-outline';
      case 'warning--outline': return 'button--warning-outline';
      case 'warning-outline': return 'button--warning-outline';
      case 'success--outline': return 'button--success-outline';
      case 'success-outline': return 'button--success-outline';
      case 'info--outline': return 'button--info-outline';
      case 'info-outline': return 'button--info-outline';
      case 'light--outline': return 'button--light-outline';
      case 'light-outline': return 'button--light-outline';
      case 'white--outline': return 'button--white-outline';
      case 'white-outline': return 'button--white-outline';
      case 'dark--outline': return 'button--dark-outline';
      case 'dark-outline': return 'button--dark-outline';
      case 'black--outline': return 'button--black-outline';
      case 'black-outline': return 'button--black-outline';

      case 'link': return 'button--link';
      case 'link-primary': return 'button--link-primary';
      case 'link-secondary': return 'button--link-secondary';
      case 'link-danger': return 'button--link-danger';
      case 'link-warning': return 'button--link-warning';
      case 'link-success': return 'button--link-success';
      case 'link-info': return 'button--link-info';
      case 'link-dark': return 'button--link-dark';
      case 'link-black': return 'button--link-black';
      case 'link-light': return 'button--link-light';
      case 'link-white': return 'button--link-white';

      default: return '';
    }
  });
</script>

<style lang="scss">
  .button {
    --button-padding-x: 0.75rem;
    --button-padding-y: 0.4rem;
    --button-font-family: ;
    --button-font-size: 1rem;
    --button-font-weight: 500;
    --button-line-height: 1.5;
    
    --button-color: var(--dark, #252525);
    --button-bg-color: var(--white, #ffffff);

    --button-border-width: 0;
    --button-border-style: solid;
    --button-border-color: var(--black-soft, #4a4a4a);
    --button-border-radius: 0.35rem;

    --button-box-shadow-color: none;

    --button-gap: var(--button-padding-x);

    --button-hover-color: var(--white, #ffffff);
    --button-hover-bg-color: var(--primary, #42b883);
    --button-hover-border-color: var(--primary, #42b883);

    padding: var(--button-padding-y) var(--button-padding-x);
    font-family: var(--button-font-family);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
    line-height: var(--button-line-height);
    
    display: inline-flex;
    align-items: center;
    gap: var(--button-gap);
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    
    background-color: var(--button-bg-color);
    border-radius: var(--button-border-radius);
    color: var(--button-color);
    border: var(--button-border-width) var(--button-border-style) var(--button-border-color);
    box-shadow: 0 5px 10px var(--button-box-shadow-color);
    outline: 0;
    transition: var(--transition, all .3s ease-in);

    &:focus { outline: none; outline-color: transparent; }
    &:is(.full-width) { 
      display: flex;
      width: 100%; 
      justify-content: center !important;
    };
    &:is(.bordered) { --button-border-width: 1px; }
    &:is(.squired) { --button-border-radius: 0; }
    &:is(.shadow) { --button-box-shadow-color: rgba(var(--dark-rgb, #252525), .15); }

    &--small {
      --button-border-radius: calc(0.35rem / 1.3);
      --button-padding-x: calc(0.75rem / 1.4);
      --button-padding-y: calc(0.4rem / 1.4);
      --button-font-size: calc(1rem / 1.15);
    }
    &--medium {
      --button-border-radius: calc(0.35rem + calc(0.35rem / 3));
      --button-padding-x: calc(0.75rem + calc(0.75rem / 3));
      --button-padding-y: calc(0.4rem + calc(0.4rem / 3));
      --button-font-size: 1.1rem;
    }
    &--large {
      --button-border-radius: calc(0.35rem + calc(0.35rem / 2));
      --button-padding-x: calc(0.75rem + calc(0.75rem / 2));
      --button-padding-y: calc(0.4rem + calc(0.4rem / 2));
      --button-font-size: 1.25rem;
    }

    @mixin buttonVariants($color, $bg, $border, $hoverColor, $hoverBg, $hoverBorder) {
      --button-color: #{$color};
      --button-bg-color: #{$bg};
      --button-border-color: #{$border};
      --button-hover-color: #{$hoverColor};
      --button-hover-bg-color: #{$hoverBg};
      --button-hover-border-color: #{$hoverBorder};
    }

    &--primary {
      @include buttonVariants(
        var(--white, #ffffff),
        var(--primary, #42b883),
        var(--primary, #42b883),
        var(--primary, #42b883),
        var(--white, #ffffff),
        var(--primary, #42b883),
      );
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--primary, #42b883),
          var(--transparent, transparent),
          var(--primary, #42b883),
          var(--white, #ffffff),
          var(--primary, #42b883),
          var(--primary, #42b883),
        )
      }
    }
    &--secondary {
      @include buttonVariants(
        var(--white, #ffffff),
        var(--secondary, #2c3e50),
        var(--secondary, #2c3e50),
        var(--secondary, #2c3e50),
        var(--white, #ffffff),
        var(--secondary, #2c3e50),
      );
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--secondary, #2c3e50),
          var(--transparent, transparent),
          var(--secondary, #2c3e50),
          var(--white, #ffffff),
          var(--secondary, #2c3e50),
          var(--secondary, #2c3e50),
        )
      }
    }
    &--danger {
      @include buttonVariants(
        var(--white, #ffffff),
        var(--danger, #d66666),
        var(--danger, #d66666),
        var(--danger, #d66666),
        var(--white, #ffffff),
        var(--danger, #d66666),
      );
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--danger, #d66666),
          var(--transparent, transparent),
          var(--danger, #d66666),
          var(--white, #ffffff),
          var(--danger, #d66666),
          var(--danger, #d66666),
        )
      }
    }
    &--success {
      @include buttonVariants(
        var(--white, #ffffff),
        var(--success, #42b883),
        var(--success, #42b883),
        var(--success, #42b883),
        var(--white, #ffffff),
        var(--success, #42b883),
      );
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--success, #42b883),
          var(--transparent, transparent),
          var(--success, #42b883),
          var(--white, #ffffff),
          var(--success, #42b883),
          var(--success, #42b883),
        )
      }
    }
    &--warning {
      @include buttonVariants(
        var(--dark, #252525),
        var(--warning, #ffc107),
        var(--warning, #ffc107),
        var(--warning, #ffc107),
        var(--dark, #252525),
        var(--warning, #ffc107),
      );
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--warning, #ffc107),
          var(--transparent, transparent),
          var(--warning, #ffc107),
          var(--dark, #252525),
          var(--warning, #ffc107),
          var(--warning, #ffc107),
        )
      }
    }
    &--info {
      @include buttonVariants(
        var(--white, #ffffff),
        var(--info, #17a2b8),
        var(--info, #17a2b8),
        var(--info, #17a2b8),
        var(--white, #ffffff),
        var(--info, #17a2b8),
      );
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--info, #17a2b8),
          var(--transparent, transparent),
          var(--info, #17a2b8),
          var(--white, #ffffff),
          var(--info, #17a2b8),
          var(--info, #17a2b8),
        )
      }
    }
    &--dark {
      @include buttonVariants(
        var(--white, #ffffff),
        var(--dark, #252525),
        var(--dark, #252525),
        var(--dark, #252525),
        var(--white, #ffffff),
        var(--dark, #252525),
      );
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--dark, #252525),
          var(--transparent, transparent),
          var(--dark, #252525),
          var(--white, #ffffff),
          var(--dark, #252525),
          var(--dark, #252525),
        )
      }
    }
    &--black {
      @include buttonVariants(
        var(--white, #ffffff),
        var(--black, #101010),
        var(--black, #101010),
        var(--black, #101010),
        var(--white, #ffffff),
        var(--black, #101010),
      );
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--black, #101010),
          var(--transparent, transparent),
          var(--black, #101010),
          var(--white, #ffffff),
          var(--black, #101010),
          var(--black, #101010),
        )
      }
    }
    &--light {
      @include buttonVariants(
        var(--dark, #252525),
        var(--white-soft, #b4b4b4),
        var(--white-soft, #b4b4b4),
        var(--white-soft, #b4b4b4),
        var(--dark, #252525),
        var(--white-soft, #b4b4b4),
      );
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--white-soft, #b4b4b4),
          var(--transparent, transparent),
          var(--white-soft, #b4b4b4),
          var(--dark, #252525),
          var(--white-soft, #b4b4b4),
          var(--white-soft, #b4b4b4),
        )
      }
    }
    &--white {
      &-outline, &--outline {
        --button-border-width: 1px;
        @include buttonVariants(
          var(--white, #ffffff),
          var(--transparent, transparent),
          var(--white, #ffffff),
          var(--black, #101010),
          var(--white, #ffffff),
          var(--white, #ffffff),
        )
      }
    }
    &--link {
      @include buttonVariants(
        var(--link-color, #42b883),
        var(--transparent, transparent),
        var(--transparent, transparent),
        var(--white, #ffffff),
        var(--primary, #42b883),
        var(--primary, #42b883),
      );
      &-primary, 
      &-secondary, 
      &-info, 
      &-warning, 
      &-danger, 
      &-success, 
      &-dark, 
      &-black, 
      &-white, 
      &-light {
        --link-color: #42b883;
        --link-hover-color: #ffffff;
        --link-hover-bg-color: #42b883;        
        &:hover { text-decoration: underline; }
        @include buttonVariants(
          var(--link-color),
          var(--transparent, transparent),
          var(--transparent, transparent),
          var(--link-hover-color),
          var(--link-hover-bg-color),
          var(--transparent, transparent),
        );
      };
      &-primary { 
        --link-color: var(--primary);
        --link-hover-bg-color: var(--primary);
      } 
      &-secondary { 
        --link-color: var(--secondary);
        --link-hover-bg-color: var(--secondary);
      } 
      &-info { 
        --link-color: var(--info);
        --link-hover-bg-color: var(--info);
      } 
      &-warning { 
        --link-color: var(--warning);
        --link-hover-bg-color: var(--warning);
      }
      &-danger { 
        --link-color: var(--danger);
        --link-hover-bg-color: var(--danger);
      } 
      &-success { 
        --link-color: var(--success);
        --link-hover-bg-color: var(--success);
      } 
      &-dark { 
        --link-color: var(--dark);
        --link-hover-bg-color: var(--dark);
      } 
      &-black { 
        --link-color: var(--black);
        --link-hover-bg-color: var(--black);
      } 
      &-white { 
        --link-color: var(--white);
        --link-hover-color: var(--black);
        --link-hover-bg-color: var(--white);
      } 
      &-light { 
        --link-color: var(--light);
        --link-hover-color: var(--dark);
        --link-hover-bg-color: var(--white-soft);
      }
      
    }
    &:is(:disabled, &.disabled) {
      opacity: 0.55;
      // pointer-events: none;
      user-select: none;
      cursor: not-allowed;
    }
    &:not(:disabled, &.disabled):hover {
      background-color: var(--button-hover-bg-color);
      color: var(--button-hover-color);
      border-color: var(--button-hover-border-color);
      --button-box-shadow-color: rgba(var(--primary-rgb, #42b883), .15);
    }
  }
</style>