<script setup>
  import { ref } from "vue";
  // language
  import Input from "../components/elements/Input.vue";
  import Button from "../components/elements/Button.vue";
  import PageAsideLinks from "../components/PageAsideLinks.vue";

  import { HighCode } from 'vue-highlight-code';
  import 'vue-highlight-code/dist/style.css';
  import Alert from "../components/elements/Alert.vue";
  
  // Basic Input Value
  const value = `
  // script
  import { ref } from "vue";
  import Input from "@/components/Input.vue";
  const inputValue = ref('Hello'); 
  
  <template>
    <Input v-model="inputValue" />
    <h3>Input Value: {{ inputValue }} </h3>
  </template>`

  const inputValue = ref('');
  const inputValueWithLabel = ref('');
  const rangeValue = ref('');
  const inputValue_null = ref('');
  const inputValue_validated = ref('');
  const inputValue_required = ref('');
  const inputValue_disbaled = ref('This field is disabled');
  const inputValue_readonly = ref('This field is for read-only');
  const inputValue_readonly_plaintext = ref('This field is for plain text with read-only');
  const inputValue_capitalize = ref('');
  const inputValue_uppercase = ref('');
  const inputValue_lowercase = ref('');
  

  const inputTypesValues = `
  // script
  import { ref } from "vue";
  import Input from "@/components/Input.vue";
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
    { label: 'Range', type: 'range', value: ref('') },
    { label: 'Color', type: 'color', value: ref('') },
  ];
  
  <template>
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
            <Input v-model="item.value.value" :type="item.type" />
          </div>
        </div>
      </div>
    </div>
  </template>`;
  
  const inputRangeValue = `
  // script
  import { ref } from "vue";
  import Input from "@/components/Input.vue";
  const rangeValue = ref('');
  
  <template>
    <Input v-model="rangeValue" :type="'range'" min="20" max="80" required validate />
    <h3>Input Value: {{ rangeValue }} </h3>
  </template>
  `;

  const inputValueWithLabelValue = `
  // script
  import { ref } from "vue";
  import Input from "@/components/Input.vue";
  const inputValueWithLabel = ref('');
  
  <template>
    <Input class="input-rounded" v-model="inputValueWithLabel" label="Input Label" />
    <h3>Input Value: {{ inputValueWithLabel }} </h3>
  </template>
  `;
  
  
  const asideLinks = [
    { path: '#example', name: 'example' },
    { path: '#input-types', name: 'Input types' },
    { path: '#input-type-range', name: 'Input type Range' },
    { path: '#input-with-label', name: 'Input with Label' },
    { path: '#required-disable-readonly', name: 'Required, Disabled, & Readonly' },
    { path: '#readonly-plain-text', name: 'Readonly plain text' },
    { path: '#input-style-formate', name: 'Input Style (Formatter)' },
    { path: '#contextual-states', name: 'Contextual states' },
    { path: '#component-reference', name: 'Component reference' },
    { path: '#download', name: 'Download' },
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
    { label: 'Range', type: 'range', value: ref('') },
    { label: 'Color', type: 'color', value: ref('') },
  ];

  // https://coreui.io/vue/docs/forms/date-picker.html
  
</script>
<script>
export default { name: "InputView" }
</script>

<template>
  <div class="inner-page__wrapper">
    <div class="inner-page__main">
      <h1>Vue Form Input</h1>
      <h2 class="text--light">
        Elevate your <code>&lt;input&gt;</code> elements with custom styling, adjustable sizing, enhanced focus states, validation and more using our Vue 3 <code>&lt;input&gt;</code> components. Create a variety of input types, such as text, password, number, URL, email, search, range, date and more, for a dynamic user experience.
        <br />
      </h2>
      <br />

      <!-- Input Examples -->
      <section class="block-sec mb--4" id="example">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Example</h2>
        </div>
        <div class="block-sec__body">
          <Input class="input-rounded" v-model="inputValue" />
          <h3>
            <span class="text-light">Input Value (Two way binding):</span> <span class="text--primary text--bold">{{ inputValue }}</span>
          </h3>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="value" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Input Types -->
      <section class="block-sec mb--4" id="input-types">
        <div class="block-sec__header mb-3">
          <h2 class="text--white fs--h1 mb--4">Input Types</h2>
          <h3 class="fw--regular">
            The <span class="text--primary fw--bold">&lt;Input /&gt;</span> component defaults to a text input, but you can specify its type using the type prop. This prop supports a range of HTML5 input types including <span class="text--primary"> text, password, email, number, URL, tel, search, date, datetime, datetime-local, month, week, time, range, and color,</span> ensuring compatibility with native browser functionality.
          </h3>
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
                  <Input 
                    class="input-rounded"
                    v-model="item.value.value" 
                    :type="item.type" 
                    :required="item.required"
                    :validate="item.validate"
                    :step="item.step" 
                    :min="item.min" 
                    :max="item.max" 
                    :minlength="item.minlength" 
                    :maxlength="item.maxlength"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="inputTypesValues" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Input Type Range -->
      <section class="block-sec mb--4" id="input-type-range">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Input Type Range</h2>
          <h3 class="text--regular">
            The <span class="text--primary">Range <code>&lt;Input /&gt;</code></span> component for ranges has a default minimum value of 0 and maximum value of 100. 
          </h3>
          <h3 class="text--regular">
            These values can be adjusted using the <span class="text--primary">"min"</span> and <span class="text--primary">"max"</span> properties. 
          </h3>
          <h3 class="text--regular">
            Additionally, range inputs will <span class="text--primary">snap</span> to integer values by default. To increase the level of precision, you can change this behavior by specifying a <span class="text--primary">step</span> value, for example <span class="text--primary">step="0.5"</span>
          </h3>
          
          <hr />
        </div>
        <div class="block-sec__body">
          <Input v-model="rangeValue" :type="'range'" min="20" max="80" required validate />
          <h3>
            <span class="text-light">Input Range Value:</span> <span class="text--primary text--bold">{{ rangeValue }}</span>
          </h3>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="inputRangeValue" theme="dark" lang="Vue" />
          <div class="p--4">
            <Alert type="warning" icon class="rounded mb-0" message="Range inputs, like all input types, return their values as strings. To use the value in mathematical operations or as a number, it may be necessary to convert it to a native number format. This can be done using functions such as <code>Number(value)</code>, <code>parseInt(value, 10)</code>, or <code>parseFloat(value)</code>." />
          </div>
        </div>
      </section>

      <!-- Input with Label -->
      <section class="block-sec mb--4" id="input-with-label">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Input with Label</h2>
        </div>
        <div class="block-sec__body">
          <Input class="input-rounded" v-model="inputValueWithLabel" label="Input Label" />
          <h3>
            <span class="text-light">Input Value:</span> <span class="text--primary text--bold">{{ inputValueWithLabel }}</span>
          </h3>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="inputValueWithLabelValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Input Required/Disabled/Readonly -->
      <section class="block-sec mb--4" id="required-disable-readonly">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Disabled, Readonly &amp; Required</h2>
        </div>
        <div class="block-sec__body">
          <div class="row">
            <div class="col--12 col-lg--6 col-xl--4">
              <Input class="input-rounded" v-model="inputValue_disbaled" label="Disabled" disabled />
            </div>
            <div class="col--12 col-lg--6 col-xl--4">
              <Input class="input-rounded" v-model="inputValue_readonly" label="Readonly" readonly />
            </div>
            <div class="col--12 col-lg--6 col-xl--4">
              <Input class="input-rounded" v-model="inputValue_required" label="Required" validate required />
              <h3>{{ inputValue_required }}</h3>
            </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="inputValueWithLabelValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Plain text with label  -->
      <section class="block-sec mb--4" id="readonly-plain-text">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Plain text with label</h2>
        </div>
        <div class="block-sec__body">
          <Input class="input-rounded" v-model="inputValue_readonly_plaintext" label="Plain Text" readonly plain />
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="inputValueWithLabelValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Input Styling (Capitalize/Uppercase/lowercase) -->
      <section class="block-sec mb--4" id="input-style-formate">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Styling (Formatter)</h2>
        </div>
        <div class="block-sec__body">
          <div class="row">
            <div class="col--12 col-lg--6 col-xl--4">
              <Input class="input-rounded" v-model="inputValue_lowercase" label="Lowercase" lowercase />
              <h3 v-if="inputValue_lowercase" class="text--success">{{ inputValue_lowercase }}</h3>
            </div>
            <div class="col--12 col-lg--6 col-xl--4">
              <Input class="input-rounded" v-model="inputValue_capitalize" label="Capitalize / Camelcase" capitalize />
              <h3 v-if="inputValue_capitalize" class="text--success">{{ inputValue_capitalize }}</h3>
            </div>
            <div class="col--12 col-lg--6 col-xl--4">
              <Input class="input-rounded" v-model="inputValue_uppercase" label="Uppercase" uppercase />
              <h3 v-if="inputValue_uppercase" class="text--success">{{ inputValue_uppercase }}</h3>
            </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="inputValueWithLabelValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Contextual States -->
      <section class="block-sec mb--4" id="contextual-states">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Contextual States</h2>
          <h3>
            Input includes validation styles for valid and invalid states on most form controls.
          </h3>
        </div>
        <div class="block-sec__body">
          <div class="input-types__container">
              <div class="row">
                <div class="col--12 col-lg--5 col-xl--4">
                  <div class="input-types__label">
                    <span class="flex-shrink--0">No State:</span>
                  </div>
                  <span class="text--white">{{ inputValue_null }}</span>
                </div>
                <div class="col--12 col-lg--7 col-xl--8">
                  <div class="input-types__value">
                    <Input class="input-rounded" v-model="inputValue_null" />
                  </div>
                </div>
                <div class="col--12 col-lg--5 col-xl--4">
                  <div class="input-types__label">
                    <span class="flex-shrink--0">Validated/Non-Validated:</span>
                  </div>
                  <span class="text--white">{{ inputValue_validated }}</span>
                </div>
                <div class="col--12 col-lg--7 col-xl--8">
                  <div class="input-types__value">
                    <Input class="input-rounded" v-model="inputValue_validated" validate required />
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="value" theme="dark" lang="Vue" />
        </div>
      </section>   

      <!-- Component Reference -->
      <section class="block-sec mb--4" id="component-reference">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Component Reference</h2>
        </div>
        <div class="block-sec__body"></div>
      </section>

      <!-- Download Component -->
      <section class="block-sec mb--4" id="download">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Download Component</h2>
        </div>
        <div class="block-sec__body">
          <div class="input-types__container">
            <Button variant="primary" rounded size="large" type="button" label="Download Component" iconClass="fa-download" icon iconDirection="end" />
          </div>
        </div>
        <div class="block-sec__footer"></div>
      </section>   

    </div>
    <div class="inner-page__aside">
      <PageAsideLinks :links="asideLinks" />
    </div>
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
      flex-shrink: 0;
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