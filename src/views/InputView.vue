<script setup>
  import { ref } from "vue";
  // language
  import Input from "../components/elements/Input.vue";
  import PageAsideLinks from "../components/PageAsideLinks.vue";

  import { HighCode } from 'vue-highlight-code';
  import 'vue-highlight-code/dist/style.css';
  
  const value = `
  // script
  import Input from "@/components/Input.vue";
  const inputValue = ref('Hello'); 
  
  <template>
    <Input v-model="inputValue" />
    <h3>Input Value: {{ inputValue }} </h3>
  </template>`
  
  const inputValue = ref('');
  
  const asideLinks = [
    { path: '#example', name: 'example' },
    { path: '#input-types', name: 'Input types' },
    { path: '#readonly-plain-text', name: 'Readonly plain text' },
    { path: '#disabled', name: 'Disabled' },
  ];

  const inputTypes = [
    { label: 'Text', type: 'text', value: ref('') },
    { label: 'Number', type: 'number', value: ref('') },
    { label: 'Email', type: 'email', value: ref('') },
    { label: 'Password', type: 'password', value: ref('') },
    { label: 'Search', type: 'search', value: ref('') },
    { label: 'Url', type: 'url', value: ref('') },
    { label: 'Tel', type: 'tel', value: ref('') },
    { label: 'Date', type: 'date', value: ref('') },
    { label: 'Time', type: 'time', value: ref('') },
    { label: 'Range', type: 'range', value: ref(''), min:"10", max:"100" },
    { label: 'Color', type: 'color', value: ref('') },
  ]

  // https://coreui.io/vue/docs/forms/date-picker.html
</script>
<script>
export default { name: 'InputView' }
</script>

<template>
  <div class="inner-page__wrapper">
    <main class="inner-page__main">
      <h1>Vue Form Input</h1>
      <h2 class="text--light">
        Create various type inputs such as: text, password, number, url, email, search, range, date and more...
        Vue input components. Give textual form <code>&lt;input&gt;</code>s an upgrade with custom styles, sizing, focus states, validation, and more.
        <br />
      </h2>
      <br />
      <section class="block-sec mb--4" id="example">
        <div class="block-sec__header">
          <h2>Example</h2>
        </div>
        <div class="block-sec__body">
          <Input v-model="inputValue" class="salman" label="Hello" validate />
          <h3>
            <span class="text-light">Input Value:</span> <span class="text--primary text--bold">{{ inputValue }}</span>
          </h3>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="value" theme="dark" lang="Vue" />
        </div>
      </section>

      <section class="block-sec mb--4" id="input-types">
        <div class="block-sec__header">
          <h2>Input Types</h2>
          <p>
            <span class="text--primary fw--bold">&lt;Input /&gt;</span>
            defaults to a text input, but you can set the type prop to one of the supported native browser HTML5 types: 
            <span class="text--primary">text, password, email, number, url, tel, search, date, datetime, datetime-local, month, week, time, range,</span> or <span class="text--primary">color</span>.
          </p>
        </div>
        <div class="block-sec__body">
          <div class="input-types__container">
            <div class="row" v-for="(item, index) in inputTypes" :key="index">
              <div class="col--4">
                <div class="input-types__label">
                  <span class="flex-shrink--0">
                    Type-<span class="text--primary">{{ item.type }}</span>:
                  </span>
                  <span class="text--white" v-if="item.value.value !== ''">{{ item.value }}</span>
                </div>
              </div>
              <div class="col--8">
                <div class="input-types__value">
                  <Input v-model="item.value.value" :type="item.type" :min="item.min" :max="item.max" :step="item.step" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="value" theme="dark" lang="Vue" />
        </div>
      </section>
    </main>
    <aside class="inner-page__aside">
      <PageAsideLinks :links="asideLinks" />
    </aside>
  </div>

</template>
<style lang="scss">
  .inner-page {
    &__wrapper {
      position: relative;
      display: flex;
      gap: calc(1rem + 1vw);
      height: 100%;
    }
    &__main {
      position: relative;
      width: 100%;
    }
    &__aside {
      width: 100%;
      max-width: 300px;
      padding-left: calc(1rem + 1vw);
      border-left: 1px solid var(--border-color);
      position: sticky;
      top: 5vh;
      max-height: 90vh;
    }
  }
</style>