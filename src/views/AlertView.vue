<script setup>
  // language
  import Button from "../components/elements/Button.vue";
  import PageAsideLinks from "../components/PageAsideLinks.vue";

  import { HighCode } from 'vue-highlight-code';
  import 'vue-highlight-code/dist/style.css';
  import ElementInCodeFormate from "../components/ElementInCodeFormate.vue";
  import Alert from "../components/elements/Alert.vue";
  import { ref, reactive } from "vue";
  
  // Button Overview
  const overviewValue = `
  // script
  import Input from "@/components/Alert.vue";
  
  <template>
    <div>
      <Alert message="Default Alert" />
      <Alert message="Default Alert with Icon" icon  />
      <Alert 
        varient="success" 
        icon 
        iconClass="fa-check-circle" 
        message="Success Alert: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laborum." />
    </div>    
  </template>`;

  const visibleStateValue = `
  // script
  import { ref } from "vue";
  import Input from "@/components/Alert.vue";

  const dangerAlert = ref(true);
  const successAlert = ref(true);
  
  <template>
    <div>
      <Alert 
        varient="danger" 
        dismissible 
        v-model="dangerAlert"
        message="Danger Alert: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laborum." />

      <Alert 
        varient="success" 
        dismissible 
        v-model="successAlert"
        message="Success Alert: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laborum." />
    </div>    
  </template>`;

  const solidVarientsValue = `
  // script
  import { reactive } from "vue";
  import Input from "@/components/Alert.vue";

  const solidVariants = reactive([
    { message: 'Primary Alert', variant: 'primary' },
    { message: 'Secondary Alert', variant: 'secondary' },
    { message: 'Danger Alert', variant: 'danger' },
    { message: 'Warning Alert', variant: 'warning' },
    { message: 'Info Alert', variant: 'info' },
    { message: 'Success Alert', variant: 'success' },
    { message: 'White Alert', variant: 'white' },
    { message: 'Light Alert', variant: 'light' },
    { message: 'Black Alert', variant: 'black' },
    { message: 'Dark Alert', variant: 'dark' },
  ]);
  
  <template>
    <div>            
      <Alert 
        v-for="alert in solidVariants" 
        :key="alert"
        :varient="alert.variant" 
        :message="alert.message" />
    </div>
  </template>`;

  const outlineVarientsValue = `
  // script
  import { reactive } from "vue";
  import Input from "@/components/Alert.vue";

  const outlineVariants = reactive([
    { message: 'Primary Alert', variant: 'primary-outline' },
    { message: 'Secondary Alert', variant: 'secondary-outline' },
    { message: 'Danger Alert', variant: 'danger-outline' },
    { message: 'Warning Alert', variant: 'warning-outline' },
    { message: 'Info Alert', variant: 'info-outline' },
    { message: 'Success Alert', variant: 'success-outline' },
    { message: 'White Alert', variant: 'white-outline' },
    { message: 'Light Alert', variant: 'light-outline' },
    { message: 'Black Alert', variant: 'black-outline' },
    { message: 'Dark Alert', variant: 'dark-outline' },
  ]);
  
  <template>
    <div>            
      <Alert 
        v-for="alert in outlineVariants" 
        :key="alert"
        :varient="alert.variant" 
        :message="alert.message" />
    </div>
  </template>`;

  // ========= [ Aside links ] ========= //
  const asideLinks = [
    { path: '#overview', name: 'overview' },
    { path: '#visible-state', name: 'Visible state' },
    { path: '#variants', name: 'Variants' },
    { path: '#variant-solid-color', name: 'Solid Color Variants' },
    { path: '#variants-outline-color', name: 'Outline Color Variants' },
    { path: '#additional-content', name: 'Additional Content Inside' },
    { path: '#Dismissible', name: 'Dismissible' },
    { path: '#auto-dismissing', name: 'Auto dismissing' },
    { path: '#fading', name: 'Fading' },
    { path: '#accessibility', name: 'Accessibility' },
    { path: '#download', name: 'Download' },
  ];

  // https://coreui.io/vue/docs/forms/date-picker.html

  const dangerAlert = ref(true);
  const successAlert = ref(true);
  const solidVariants = reactive([
    { message: 'Primary Alert', variant: 'primary' },
    { message: 'Secondary Alert', variant: 'secondary' },
    { message: 'Danger Alert', variant: 'danger' },
    { message: 'Warning Alert', variant: 'warning' },
    { message: 'Info Alert', variant: 'info' },
    { message: 'Success Alert', variant: 'success' },
    { message: 'White Alert', variant: 'white' },
    { message: 'Light Alert', variant: 'light' },
    { message: 'Black Alert', variant: 'black' },
    { message: 'Dark Alert', variant: 'dark' },
  ]);

  const outlineVariants = reactive([
    { message: 'Primary Alert', variant: 'primary-outline' },
    { message: 'Secondary Alert', variant: 'secondary-outline' },
    { message: 'Danger Alert', variant: 'danger-outline' },
    { message: 'Warning Alert', variant: 'warning-outline' },
    { message: 'Info Alert', variant: 'info-outline' },
    { message: 'Success Alert', variant: 'success-outline' },
    { message: 'White Alert', variant: 'white-outline' },
    { message: 'Light Alert', variant: 'light-outline' },
    { message: 'Black Alert', variant: 'black-outline' },
    { message: 'Dark Alert', variant: 'dark-outline' },
  ]);
</script>
<script>
export default { name: "AlertView" }
</script>

<template>
  <div class="inner-page__wrapper">
    <div class="inner-page__main">
      <h1>Vue Alert</h1>
      <h2 class="text--light"> 
        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
      </h2>
      <br />

      <!-- Overview Examples -->
      <section class="block-sec mb--4" id="overview">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Examples</h2>
          <h3 class="fw--regular">
            <ElementInCodeFormate label="Alerts /" class="text--primary fw--bold" />
            are available for any length of text, as well as in various variants. 
            e.g.: <span class="text--primary fw--bold">primary, success, danger...</span>
          </h3>
          <h3 class="fw--regular">
            <Alert varient="warning" contentClass="flex--column align-items--start gap--2 pb--2">
              <span class="mb--0"><strong>Note:</strong> You may able to add the content in two ways. through:</span>
              <ul>
                <li>Passing a props as 
                  <code class="text--primary fw--bold">message</code> along with <code class="text--primary fw--bold">icon</code>. See example below
                </li>
                <li>Passing content just like a HTML tag. 
                  <ElementInCodeFormate label="Alert" class="text--primary fw--bold" />
                  your conent
                  <ElementInCodeFormate label="Alert /" class="text--primary fw--bold" />
                  See example below
                </li>
              </ul>
            </Alert>
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div>            
            <Alert message="Default Alert" />
            <Alert message="Default Alert with Icon" icon  />
            <Alert varient="success" icon iconClass="fa-check-circle" message="Success Alert: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laborum." />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="overviewValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Visible States -->
      <section class="block-sec mb--4" id="visible-state">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Visible state</h2>
          <h3 class="fw--regular">
            Use the <code class="text--primary">show/hide</code> prop to control the visibility state of the <ElementInCodeFormate label="Alerts /" class="text--primary fw--bold" />. 
          </h3>
          <h3 class="fw--regular">By default alerts are shown. Set the prop <code class="text--primary">show/hide</code> to explicitly display them.</h3>
          <h3 class="fw--regular">The show prop accepts boolean true or false to show and hide the alert respectively.</h3>
          <hr />
          <h3 class="fw--regular">
            <strong><code class="text--primary">v-model</code> support:</strong>
            <br />
            You can use the <code class="text--primary">v-model</code> <code class="text--warning">directive</code> to create two-way data bindings on the show prop as in 
            <code class="text--primary">v-model="{your variable name with value of true}"</code> above. 
            Useful when you use <code class="text--primary">dismissible</code> because when user closes the alert, your variable will be updated. 
            <Alert class="mt--3 text--warning" varient="dark" message="Do not use the show prop when using v-model." icon />
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div>            
            <Alert 
              varient="danger" 
              dismissible 
              v-model="dangerAlert"
              message="Danger Alert: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laborum." />

            <Alert 
              varient="success" 
              dismissible 
              v-model="successAlert"
              message="Success Alert: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laborum." />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="visibleStateValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Contextual Variants -->
      <section class="block-sec mb--4" id="variants">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Contextual Variants</h2>
          <h3 class="fw--regular">
            For proper styling of <ElementInCodeFormate class="text--primary fw--bold" label="Alert /" />, use one of the four required contextual variants by setting the variant prop to one of the following: info, success, warning or danger. The default is info.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4" id="variant-solid-color">
          <h2 class="text--warning flex-shrink--0">Solid color variants</h2>
          <Alert varient="dark" class="mb--3">
            <code class="fw--bold text--success">primary-outline, secondary-outline, success-outline, danger-outline, warning-outline, info-outline, white-outline, light-outline, black-outline, and dark.</code>
          </Alert>
          <div>            
            <Alert 
              v-for="alert in solidVariants" 
              :key="alert"
              :varient="alert.variant" 
              :message="alert.message" />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="solidVarientsValue" theme="dark" lang="Vue" />
          <div class="px--4 py--2" id="variants-outline-color">
            <h2 class="text--warning mb--1 flex-shrink--0 mb--2 mt--4">Outline color variants</h2>
            <Alert varient="dark">
              <code class="fw--bold text--success">primary-outline, secondary-outline, success-outline, danger-outline, warning-outline, info-outline, white-outline, light-outline, black-outline, and dark.</code>
            </Alert>
            <hr />
            <div style="background-color: #bfbfbf; --border-radius: 0.5rem" class="p--3 mb--3 rounded">
              <Alert 
                v-for="alert in outlineVariants" 
                :key="alert"
                :varient="alert.variant" 
                :message="alert.message" />
            </div>
          </div>
          <HighCode class="code" :codeValue="outlineVarientsValue" theme="dark" lang="Vue" />
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