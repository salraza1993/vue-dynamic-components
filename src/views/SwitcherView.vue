<script setup>
  // language
  import Button from "../components/elements/Button.vue";
  import PageAsideLinks from "../components/PageAsideLinks.vue";

  import { HighCode } from 'vue-highlight-code';
  import 'vue-highlight-code/dist/style.css';
  import ElementInCodeFormate from "../components/ElementInCodeFormate.vue";
  import Switch from "../components/elements/Switch.vue";
  import { ref } from "vue";
  
  // Button Overview
  const overviewValue = `
  // script
  import Input from "@/components/Switch.vue";
  
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
  import Input from "@/components/Switch.vue";
  
  <template>
    <div class="row">
      <div class="col--12 col-lg--6">
        <div class="d--flex align-items--center gap--3 flex--wrap">
          <Switch v-model="switchWithLabelValue_1" id="switch-with-label-1" label="Switch Checkbox:" />                 
          <span class="ff--code" :class="{'text--primary fw--bold': switchWithLabelValue_1}">
            checked: {{ switchWithLabelValue_1 }}
          </span>
        </div>
      </div>
      <div class="col--12 col-lg--6">
        <div class="d--flex align-items--center gap--3 flex--wrap">
          <Switch v-model="switchWithLabelValue_2" id="switch-with-label-2" />
          Switch Checkbox: 
          <span class="ff--code" :class="{'text--primary fw--bold': switchWithLabelValue_2}">
            checked: {{ switchWithLabelValue_2 }}
          </span>
        </div>
      </div>
    </div>    
  </template>`
 
  // ========= [ Aside links ] ========= //
  const asideLinks = [
    { path: '#overview', name: 'overview' },
    { path: '#with-label', name: 'Switch With Label' },
    { path: '#accessibility', name: 'Accessibility' },
    { path: '#download', name: 'Download' },
  ];

  // https://coreui.io/vue/docs/forms/date-picker.html
  const switchValue_1 = ref(true);
  const switchValue_2 = ref(false);
  const switchWithLabelValue_1 = ref(true);
  const switchWithLabelValue_2 = ref(false);
  
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
              <div class="d--flex align-items--center gap--3 flex--wrap">
                <Switch v-model="switchValue_1" id="switch-1" />
                Switch Checkbox: 
                <span class="ff--code" :class="{'text--primary fw--bold': switchValue_1}">
                  checked: {{ switchValue_1 }}
                </span>
              </div>
            </div>
            <div class="col--12 col-lg--6">
              <div class="d--flex align-items--center gap--3 flex--wrap">
                <Switch v-model="switchValue_2" id="switch-2" />
                Switch Checkbox: 
                <span class="ff--code" :class="{'text--primary fw--bold': switchValue_2}">
                  checked: {{ switchValue_2 }}
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
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="row">
            <div class="col--12 col-lg--6">
              <div class="d--flex align-items--center gap--3 flex--wrap">
                <Switch v-model="switchWithLabelValue_1" id="switch-with-label-1" label="Switch Checkbox:" />                 
                <span class="ff--code" :class="{'text--primary fw--bold': switchWithLabelValue_1}">
                  checked: {{ switchWithLabelValue_1 }}
                </span>
              </div>
            </div>
            <div class="col--12 col-lg--6">
              <div class="d--flex align-items--center gap--3 flex--wrap">
                <Switch v-model="switchWithLabelValue_2" id="switch-with-label-2" />
                Switch Checkbox: 
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