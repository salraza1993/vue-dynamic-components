<script setup>
  import { ref, reactive } from "vue";
  // language
  import Button from "../components/elements/Button.vue";
  import PageAsideLinks from "../components/PageAsideLinks.vue";

  import { HighCode } from 'vue-highlight-code';
  import 'vue-highlight-code/dist/style.css';
  import ElementInCodeFormate from "../components/ElementInCodeFormate.vue";
  import Select from "../components/elements/Select.vue";
  import Alert from "../components/elements/Alert.vue";
  
  // Select Overview
  const overviewValue = `
  // script
  import { ref } from "vue";
  import Select from "@/components/Select.vue";

  const selectedStringValue = ref('');
  const optionWithArray = [ 'Option 1', 'Option 2', 'Option 3', 'Option 4' ];
  
  const selectedObjectValue = ref('');
  const options = [ 
    { value: 'Option 1', text:'Option 1', },
    { value: 'Option 2', text:'Option 2', }, 
    { value: 'Option 3', text:'Option 3' }, 
    { value: 'Option 4', text:'Option 4', disabled: true }, 
    { value: 'Option 5', text:'Option 5', },
  ];
  
  <template>
    <div class="row">
      <div class="col--12 col-xl--6">
        <Select 
          label="Select with Array of strings" 
          v-model="selectedStringValue" 
          :options="optionWithArray" 
          required 
          validate 
          placeholder="-- Select String Items --" />

        Selected String Value: <strong class="text--primary">{{ selectedStringValue }}</strong>
      </div>
      <div class="col--12 col-xl--6">
        <Select 
          label="Select Label" 
          v-model="selectedObjectValue" 
          :options="options" 
          required 
          validate 
          placeholder="-- Select Object Items --" />

        Selected Object Value: <strong class="text--primary">{{ selectedObjectValue }}</strong>
      </div>
    </div>
    Selected Value: <strong class="text--primary">{{ selectValue }}</strong>
  </template>`

  // Grouped Options
  const groupedOptionsValue = `
  // script
  import { ref, reactive } from "vue";
  import Select from "@/components/Select.vue";

  const selectedValue = ref('');
  const groupedOptions = reactive([
    { value: null, text: 'Please select an option' },
    { value: 'a', text: 'This is First option' },
    { value: 'b', text: 'Selected Option', disabled: true },
    {
      label: 'Grouped options',
      options: [
        { value: 'option value', text: 'Option Name' },
        { value: 'option value', text: 'Option Name' }
      ]
    }
  ]);
  
  <template>
    <div>
      <Select 
        label="Select Label" 
        v-model="selectedValue" 
        :options="groupedOptions" 
        placeholder="-- Select Grouped Items --" />
    </div>
    Selected Value: <strong class="text--primary">{{ selectedValue }}</strong>
  </template>`

  // Option With Array of Strings
  const optionWithArrayValue = `
  // script
  const optionWithArray = [ 'Option 1', 'Option 2', 'Option 3', 'Option 4' ];`

  // Option With Array of Objects
  const optionWithObjectValue = `
  // script
  const optionWithObject = [
    { value: null, text: 'Please select an option' },
    { value: 'a', text: 'This is First option' },
    { value: 'b', text: 'Selected Option', disabled: true },
    {
      label: 'Grouped options',
      options: [
        { value: 'option value', text: 'Option Name' },
        { value: 'option value', text: 'Option Name' }
      ]
    }
  ];`

  // Grouped Options
  const customFieldsOptionsValue = `
  // script
  import { ref } from "vue";
  import Select from "@/components/Select.vue";

  const selectedCustomFields = ref('');
  const customFieldsOptions = [
    { item: 'A', name: 'Option A' },
    { item: 'B', name: 'Option B' },
    { item: 'C', name: 'Option C', notEnabled: true },
    { item: 'D', name: 'Option D' }
  ];
  
  <template>
    <div>
      <Select 
        v-model="selectedCustomFields" 
        :options="customFieldsOptions" 
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
        placeholder="-- Select Items --" />
    </div>
    Selected String Value: <strong class="text--primary">{{ selectedCustomFields }}</strong>
  </template>`

  // Squared Select
  const squaredSelectValue = `
  // script
  import { ref } from "vue";
  import Select from "@/components/Select.vue";

  const selectedSquaredValue = ref('');
  const options = [ 
    { value: 'Option 1', text:'Option 1', },
    { value: 'Option 2', text:'Option 2', }, 
    { value: 'Option 3', text:'Option 3' }, 
    { value: 'Option 4', text:'Option 4', disabled: true }, 
    { value: 'Option 5', text:'Option 5', },
  ];

  <template>
    <div>
      <Select 
        v-model="selectedSquaredValue" 
        :options="squaredOption" 
        required
        placeholder="-- Select String Items --" 
        squired />
        Squired Select Value: <strong class="text--primary">{{ selectedStringValue }}</strong>
    </div>
  </template>`

  // Disabled and Readonly
  const disabledReadonlyValue = `
  import { ref } from "vue";
  import Select from "@/components/Select.vue";

  const selectedStringValue = ref('');
  const optionWithArray = [ 'Option 1', 'Option 2', 'Option 3', 'Option 4' ];
  
  const selectedObjectValue = ref('');
  const options = [ 
    { value: 'Option 1', text:'Option 1', },
    { value: 'Option 2', text:'Option 2', }, 
    { value: 'Option 3', text:'Option 3' }, 
    { value: 'Option 4', text:'Option 4', disabled: true }, 
    { value: 'Option 5', text:'Option 5', },
  ];

  <template>
    <div class="row">
      <div class="col--12 col-xl--6">
        <Select 
          label="Disabled" 
          v-model="selectedStringValue" 
          :options="optionWithArray" 
          disabled />
      </div>
      <div class="col--12 col-xl--6">
        <Select 
          label="Readonly" 
          v-model="selectedObjectValue" 
          :options="options" 
          readonly />
      </div>
    </div>
  </template>`

  // Required
  const requiredValue = `
  import { ref } from "vue";
  import Select from "@/components/Select.vue";
  
  const selectedObjectValue = ref('');
  const options = [ 
    { value: 'Option 1', text:'Option 1', },
    { value: 'Option 2', text:'Option 2', }, 
    { value: 'Option 3', text:'Option 3' }, 
    { value: 'Option 4', text:'Option 4', disabled: true }, 
    { value: 'Option 5', text:'Option 5', },
  ];

  <template>
    <div>
      <Select 
        label="Select Type: Required" 
        v-model="selectedObjectValue" 
        :options="optionWithArray" 
        required />
    </div>
  </template>`

  // Validations
  const validationValue = `
  import { ref } from "vue";
  import Select from "@/components/Select.vue";
  
  const selectedObjectValue = ref('');
  const options = [ 
    { value: 'Option 1', text:'Option 1', },
    { value: 'Option 2', text:'Option 2', }, 
    { value: 'Option 3', text:'Option 3' }, 
    { value: 'Option 4', text:'Option 4', disabled: true }, 
    { value: 'Option 5', text:'Option 5', },
  ];

  <template>
    <div>
      <Select 
        label="Select Type: Required" 
        v-model="selectedObjectValue" 
        :options="optionWithArray" 
        required
        validated />
    </div>
  </template>`

  // https://coreui.io/vue/docs/forms/date-picker.html
  
  const selectedStringValue = ref('');
  const selectedSquaredValue = ref('');
  const optionWithArray = [ 'Option 1', 'Option 2', 'Option 3', 'Option 4' ];
  
  const selectedObjectValue = ref('Option 1');

    const squaredOption = [ 
    { value: 'Option 1', text:'Option 1', },
    { value: 'Option 2', text:'Option 2', }, 
    { value: 'Option 3', text:'Option 3' }, 
    { value: 'Option 4', text:'Option 4', disabled: true }, 
    { value: 'Option 5', text:'Option 5', },
  ];

  const selectedValue = ref('');
  const groupedOptions = reactive([
    { value: null, text: 'Please select an option' },
    { value: 'a', text: 'This is First option' },
    { value: 'b', text: 'Selected Option', disabled: true },
    {
      label: 'Grouped options',
      options: [
        { value: 'option value', text: 'Option Name' },
        { value: 'option value', text: 'Option Name' }
      ]
    }
  ]);
  
  const selectedCustomFields = ref('');
  const customFieldsOptions = [
    { id: 'A', name: 'Option A' },
    { id: 'B', name: 'Option B' },
    { id: 'C', name: 'Option C', notEnabled: true },
    { id: 'D', name: 'Option D' }
  ];
  
  const options = [ 
    { value: 'Option 1', text:'Option 1', },
    { value: 'Option 2', text:'Option 2', }, 
    { value: 'Option 3', text:'Option 3' }, 
    { value: 'Option 4', text:'Option 4', disabled: true }, 
    { value: 'Option 5', text:'Option 5', },
  ];

  // ========= [ Aside links ] ========= //
  const asideLinks = [
    { path: '#overview', name: 'overview' },
    { path: '#grouped-options', name: 'Grouped Options' },
    { path: '#options-property', name: 'Options Property' },
    { path: '#option-fields', name: 'Changing the Option Fields' },
    { path: '#squired', name: 'Squared Style' },
    { path: '#disabled-readonly', name: 'Disabled and Readonly' },
    { path: '#required', name: 'Required' },
    { path: '#validation', name: 'Validation' },
    { path: '#accessibility', name: 'Accessibility' },
    { path: '#download', name: 'Download' },
  ];
  

</script>
<script>
export default { name: "SelectView", components: { Alert } }
</script>

<template>
  <div class="inner-page__wrapper">
    <div class="inner-page__main">
      <h1>Vue Select</h1>
      <h2 class="text--light">
        The custom <ElementInCodeFormate label="Select /" class="text--primary fw--bold" /> using custom styles. 
        <br />
        Optionally specify options based on an 
        <code class="text--warning">array of strings, array of objects</code> 
        <code> or an </code>
        <code class="text--warning">object</code>.
      </h2>
      <br />

      <!-- Overview Examples -->
      <section class="block-sec mb--4" id="overview">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Overview</h2>
          <h3 class="text--regular">
            Generate your select options by passing an array or object to the <code class="text--primary">options</code> props.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="row">
            <div class="col--12 col-xl--6">
              <Select 
                label="Select with Array of strings" 
                v-model="selectedStringValue" 
                :options="optionWithArray" 
                required 
                validate 
                placeholder="-- Select String Items --" />

              Selected String Value: <strong class="text--primary">{{ selectedStringValue }}</strong>
            </div>
            <div class="col--12 col-xl--6">
              <Select 
                label="Select Label" 
                v-model="selectedObjectValue" 
                :options="options" 
                required 
                validate 
                placeholder="-- Select Object Items --" />

              Selected Object Value: <strong class="text--primary">{{ selectedObjectValue }}</strong>
            </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="overviewValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Grouped Options -->
      <section class="block-sec mb--4" id="grouped-options">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Grouped Option</h2>
          <h3 class="text--regular">
            You can even define 
            <code class="text--primary">option groups</code> with the 
            <code class="text--primary">options</code> props.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex gap--2">
           <Select 
            label="Select Label" 
            v-model="selectedValue" 
            :options="groupedOptions" 
            placeholder="-- Select Grouped Items --" />
          </div>
          Selected Value: <strong class="text--primary">{{ selectedValue }}</strong>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="groupedOptionsValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Options Property -->
      <section class="block-sec mb--4" id="options-property">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Options Property</h2>
          <h3 class="text--regular">
            You can even define 
            <code class="fw--bold text--primary">options</code> can be an 
            <code class="fw--bold text--warning">array of strings or objects</code> , or a 
            <code class="fw--bold text--warning">key-value object</code>. Available fields:
          </h3>
          <ul class="fs--regular points mb--3">
            <li><code class="fw--bold text--primary">value</code> : The selected value which will be set on v-model</li>
            <li><code class="fw--bold text--primary">disabled</code> : Disables item for selection</li>
            <li><code class="fw--bold text--primary">text</code> : Display text</li>
          </ul>
          <Alert variant="dark">
            Note: <code class="fw--bold text--primary">value</code> can be a <code class="fw--bold text--primary">String, Number</code>. Avoid using complex types in values.
          </Alert>
        </div>
        <hr class="my--4" id="options-as-array" />
        <div class="block-sec__body pb--4">
          <h2 class="text--white">Options as an <code class="text--primary">Array</code> (array of string)</h2>
          <HighCode class="code" :codeValue="optionWithArrayValue" theme="dark" lang="Javascript" />
          <br />
          <h2 class="text--white">Options as an <code class="text--primary">Array</code> of <code class="text--primary">Objects</code></h2>
          <HighCode class="code" :codeValue="optionWithObjectValue" theme="dark" lang="Javascript" />
        </div>
        <div class="block-sec__footer">
        </div>
      </section>

      <!-- Changing the option field names -->
      <section class="block-sec mb--4" id="option-fields">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Changing the Option Field Names</h2>
          <h3 class="text--regular">
            If you want to customize the <code class="fw--bold text--primary">field</code> property names (for example using name field for display <code class="fw--bold text--primary">text</code>) you can easily change them by setting the 
            <code class="fw--bold text--primary">text-field</code>, <code class="fw--bold text--primary">value-field</code>, and 
            <code class="fw--bold text--primary">disabled-field</code> props to a string that contains the property name you would like to use:
          </h3>
        </div>
        <hr class="my--4" id="options-as-array" />
        <div class="block-sec__body pb--4">
          <div class="d--flex gap--2">
            <Select 
              v-model="selectedCustomFields" 
              :options="customFieldsOptions" 
              value-field="id"
              text-field="name"
              disabled-field="notEnabled"
              placeholder="-- Select Items --" />
          </div>
          Selected String Value: <strong class="text--primary">{{ selectedCustomFields }}</strong>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="customFieldsOptionsValue" theme="dark" lang="Javascript" />
        </div>
      </section>

      <!-- Squired -->
      <section class="block-sec mb--4" id="squired">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Select Squired Style</h2>
          <h3 class="text--regular">
            Generate your select options by passing an array or object to the <code class="text--primary">options</code> props.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div>
            <Select 
              v-model="selectedSquaredValue" 
              :options="squaredOption" 
              placeholder="-- Select String Items --" 
              squired />
              Squired Select Value: <strong class="text--primary">{{ selectedSquaredValue }}</strong>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="squaredSelectValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Disabled and Readonly -->
      <section class="block-sec mb--4" id="disabled-readonly">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Disabled and Readonly</h2>
          <h3 class="text--regular">
            <!-- Generate your select options by passing an array or object to the <code class="text--primary">options</code> props. -->
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="row">
            <div class="col--12 col-xl--6">
              <Select 
                label="Disabled" 
                v-model="selectedObjectValue" 
                :options="optionWithArray" 
                disabled />
            </div>
            <div class="col--12 col-xl--6">
              <Select 
                label="Readonly" 
                v-model="selectedObjectValue" 
                :options="options" 
                readonly />
            </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="disabledReadonlyValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Required -->
      <section class="block-sec mb--4" id="required">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Required</h2>
          <h3 class="text--regular">
            <!-- Generate your select options by passing an array or object to the <code class="text--primary">options</code> props. -->
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div>
            <Select 
              label="Select Type: Required" 
              v-model="selectedObjectValue" 
              :options="optionWithArray" 
              required />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="requiredValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Validated -->
      <section class="block-sec mb--4" id="validation">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Validation</h2>
          <h3 class="text--regular">
            <!-- Generate your select options by passing an array or object to the <code class="text--primary">options</code> props. -->
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <Select 
            label="Select Type: Required" 
            v-model="selectedObjectValue" 
            :options="optionWithArray" 
            required 
            validate />
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="validationValue" theme="dark" lang="Vue" />
        </div>
      </section>


      <!-- Download Component -->
      <section class="block-sec mb--4 py--4" id="download">
        <div class="block-sec__body pb--0 d--flex justify-content--center">
          <Button block variant="primary" size="large" type="button" label="Download Component" iconClass="fa-download" icon iconDirection="end" />
        </div>
      </section>   

    </div>
    <div class="inner-page__aside">
      <PageAsideLinks :links="asideLinks" />
    </div>
  </div>

</template>
<style lang="scss"></style>