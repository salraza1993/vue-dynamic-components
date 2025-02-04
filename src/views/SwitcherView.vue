<script setup>
  // language
  import Button from "../components/elements/Button.vue";
  import PageAsideLinks from "../components/PageAsideLinks.vue";

  import { HighCode } from 'vue-highlight-code';
  import 'vue-highlight-code/dist/style.css';
  import ElementInCodeFormate from "../components/ElementInCodeFormate.vue";
  import Switch from "../components/elements/Switch.vue";
  import { ref, reactive} from "vue";
  import GroupedSwitches from "../components/elements/GroupedSwitches.vue";
  
  // Button Overview
  const overviewValue = `
  // script
  import { ref } from "vue";
  import Switch from "@/components/Switch.vue"
  const switchValue_1 = ref(true);
  const switchValue_2 = ref(false);

  <template>
    <div class="row">
      <div class="col--12 col-lg--6">
        <div class="d--flex align-items--center gap--3 flex--wrap">
          <Switch v-model="switchValue_1" id="switch-1" />
          Switch Checkbox: 
          <code :class="{'text--primary fw--bold': switchValue_1}">
            checked: {{ switchValue_1 }}
          </code>
        </div>
      </div>
      <div class="col--12 col-lg--6">
        <div class="d--flex align-items--center gap--3 flex--wrap">
          <Switch v-model="switchValue_2" id="switch-2" />
          Switch Checkbox: 
          <code :class="{'text--primary fw--bold': switchValue_2}">
            checked: {{ switchValue_2 }}
          </code>
        </div>
      </div>
    </div>
  </template>`
  
 
  // With Label
  const withLabelValue = `
  // script
  import { ref } from "vue";
  import Switch from "@/components/Switch.vue";
  const switchWithLabelValue_1 = ref(true);
  const switchWithLabelValue_2 = ref(false);
  
  <template>
    <div class="row">
      <div class="col--12 col-lg--6">
        <div class="d--flex align-items--center gap--3 flex--wrap">
          <Switch v-model="switchWithLabelValue_1" id="switch-with-label-1" label="Label: Switch Checkbox:" />                 
          <span class="ff--code" :class="{'text--primary fw--bold': switchWithLabelValue_1}">
            checked: {{ switchWithLabelValue_1 }}
          </span>
        </div>
      </div>
      <div class="col--12 col-lg--6">
        <div class="d--flex align-items--center gap--3 flex--wrap">
          <Switch v-model="switchWithLabelValue_2" id="switch-with-label-2" label="Label: Switch Checkbox:" />
          <span class="ff--code" :class="{'text--primary fw--bold': switchWithLabelValue_2}">
            checked: {{ switchWithLabelValue_2 }}
          </span>
        </div>
      </div>
    </div>    
  </template>`
 
  // Required
  const requiredSwitchCodeValue = `
  // script
  import { ref } from "vue";
  import Switch from "@/components/Switch.vue";
  const requiredSwitchValue = ref(false);
  
  <template>
    <div>
      <Switch 
        v-model="requiredSwitchValue" 
        id="switch-required" 
        label="Required Switch Element | This item must contain true value" 
        required />
    </div>    
  </template>`

  // Readonly
  const readonlySwitchCodeValue = `
  // script
  import { ref } from "vue";
  import Switch from "@/components/Switch.vue";
  const readonlySwitchValue = ref(true);
  
  <template>
    <div>
      <Switch 
        v-model="readonlySwitchValue" 
        id="switch-readonly" 
        label="Readonly Switch Element | This element is read-only not clickable" 
        readonly />
    </div>    
  </template>`

  // Disabled
  const disabledSwitchCodeValue = `
  // script
  import { ref } from "vue";
  import Switch from "@/components/Switch.vue";
  const readonlySwitchValue = ref(false);
  
  <template>
    <div>
      <Switch 
        v-model="requiredSwitchValue" 
        id="switch-required" 
        label="Disabled Switch Element | This element is disabled" 
        disabled />
    </div>    
  </template>`

  // Sizing
  const sizingSwitchValue = `
  // script
  import Switch from "@/components/Switch.vue";
  import { reactive } from "vue";

  const switchSizes = reactive([
    { label: 'Size: Small', id: 'switch-small', value: false, size: 'small' },
    { label: 'Size: Regular', id: 'switch-regular', value: false, size: '' },
    { label: 'Size: Medium', id: 'switch-medium', value: false, size: 'medium' },
    { label: 'Size: Large', id: 'switch-large', value: false, size: 'large' },
  ]);
  
  <template>
    <div class="row">
      <div class="col--12 col-lg--3" v-for="switchItem in switchSizes" :key="switchItem.id">
        <Switch 
          :size="switchItem.size" 
          v-model="switchItem.value" 
          :id="switchItem.id" 
          :label="switchItem.label" />
      </div>
    </div>
  </template>`
 
  // ========= [ Aside links ] ========= //
  const asideLinks = [
    { path: '#overview', name: 'overview' },
    { path: '#with-label', name: 'Switch With Label' },
    { path: '#required', name: 'Required' },
    { path: '#readonly', name: 'Readonly' },
    { path: '#disabled', name: 'Disabled' },
    { path: '#sizing', name: 'Sizing' },
    { path: '#grouped', name: 'Grouped Switch Style' },
    { path: '#accessibility', name: 'Accessibility' },
    { path: '#download', name: 'Download' },
  ];

  const switchValue_1 = ref(true);
  const switchValue_2 = ref(false);
  const switchWithLabelValue_1 = ref(true);
  const switchWithLabelValue_2 = ref(false);
  const requiredSwitchValue = ref(false);
  const readonlySwitchValue = ref(true);

  const switchSizes = reactive([
    { label: 'Size: Small', id: 'switch-small', value: false, size: 'small' },
    { label: 'Size: Regular', id: 'switch-regular', value: false, size: '' },
    { label: 'Size: Medium', id: 'switch-medium', value: false, size: 'medium' },
    { label: 'Size: Large', id: 'switch-large', value: false, size: 'large' },
  ]);

  const groupedOptions = reactive([
    { id:'red', label: 'Red', value: false, required: true, },
    { id:'green', label: 'Green', value: true, },
    { id:'yellow', label: 'Yellow (disabled)', value: true, disabled: true },
    { id:'blue', label: 'Blue', value: false, required: true }
  ])
  
</script>
<script>
export default { name: "SwitcherView" }
</script>

<template>
  <div class="inner-page__wrapper">
    <div class="inner-page__main">
      <h1>Vue Switcher</h1>
      <h2 class="text--light">
        <ElementInCodeFormate label="Switch /" class="text--primary fw--bold" />
        A dynamic, fully customizable toggle button aka toggle <code class="text--warning">switch</code>.
      </h2>
      <br />

      <!-- Overview Examples -->
      <section class="block-sec mb--4" id="overview">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Overview</h2>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="row">
            <div class="col--12 col-lg--6">
              <p class="mb--3 d--block">Default value: <code class="text--warning">true</code></p>
              <div class="d--flex align-items--center gap--3 flex--wrap">
                <Switch v-model="switchValue_1" id="switch-1" />
                Switch Checkbox: 
                <span :class="{'text--primary fw--bold': switchValue_1}">
                  checked: <code>{{ switchValue_1 }}</code>
                </span>
              </div>
            </div>
            <div class="col--12 col-lg--6">
              <p class="mb--3 d--block">Default value: <code class="text--warning">false</code></p>
              <div class="d--flex align-items--center gap--3 flex--wrap">
                <Switch v-model="switchValue_2" id="switch-2" />
                Switch Checkbox: 
                <span :class="{'text--primary fw--bold': switchValue_2}">
                  checked: <code>{{ switchValue_2 }}</code>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="overviewValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Switch With Label -->
      <section class="block-sec mb--4" id="with-label">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Switch with Label</h2>
          <h3 class="fw--regular">
            Prefer to add <span class="fw--bold">label</span> with
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="row">
            <div class="col--12 col-lg--6">
              <p class="mb--3 d--block">Default value: <code class="text--warning">true</code></p>
              <div class="d--flex align-items--center gap--3 flex--wrap">
                <Switch v-model="switchWithLabelValue_1" id="switch-with-label-1" label="Label: Switch Checkbox:" />
                <span class="ff--code" :class="{'text--primary fw--bold': switchWithLabelValue_1}">
                  checked: {{ switchWithLabelValue_1 }}
                </span>
              </div>
            </div>
            <div class="col--12 col-lg--6">
              <p class="mb--3 d--block">Default value: <code class="text--warning">false</code></p>
              <div class="d--flex align-items--center gap--3 flex--wrap" >
                <Switch v-model="switchWithLabelValue_2" id="switch-with-label-2" label="Label: Switch Checkbox:" />
                <span class="ff--code" :class="{'text--primary fw--bold': switchWithLabelValue_2}">
                  checked: {{ switchWithLabelValue_2 }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="withLabelValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Required -->
      <section class="block-sec mb--4" id="required">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Switch Required</h2>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div>
            <Switch 
              v-model="requiredSwitchValue" 
              id="switch-required" 
              label="Required Switch Element | This item must contain true value" 
              required />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="requiredSwitchCodeValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Readonly -->
      <section class="block-sec mb--4" id="readonly">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Switch Readonly</h2>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div>
            <Switch 
              v-model="readonlySwitchValue" 
              id="switch-readonly" 
              label="Readonly Switch Element | This element is read-only not clickable" 
              readonly />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="readonlySwitchCodeValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Disabled -->
      <section class="block-sec mb--4" id="disabled">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Switch Disabled</h2>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div>
            <Switch 
              v-model="requiredSwitchValue" 
              id="switch-required" 
              label="Disabled Switch Element | This element is disabled" 
              disabled />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="disabledSwitchCodeValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Sizing -->
      <section class="block-sec mb--4" id="sizing">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Switch Sizing</h2>
          <h3 class="fw--regular">
            Use the size <code class="text--warning">prop</code> to control the size of the <ElementInCodeFormate label="Switch /" class="text--primary fw--bold" />. 
            <br />
            The default size is <code class="text--warning">regular</code>. Supported size values are <code class="text--warning">small, medium and large</code>.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="row">
            <div class="col--12 col-lg--3" v-for="switchItem in switchSizes" :key="switchItem.id">
              <Switch 
                :size="switchItem.size" 
                v-model="switchItem.value" 
                :id="switchItem.id" 
                :label="switchItem.label" />
            </div>
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="sizingSwitchValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Grouped -->
      <section class="block-sec mb--4" id="grouped">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Grouped Switches</h2>
          <h3 class="fw--regular">
            Render groups of <ElementInCodeFormate label="Switch /" class="text--primary fw--bold" />s by setting the prop switches on <ElementInCodeFormate label="GroupedSwitches /" class="text--primary fw--bold" />.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div>
            <GroupedSwitches v-model="groupedOptions" block />
            <hr />
            <GroupedSwitches v-model="groupedOptions" />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="sizingSwitchValue" theme="dark" lang="Vue" />
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