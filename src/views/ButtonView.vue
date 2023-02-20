<script setup>
  // language
  import Button from "../components/elements/Button.vue";
  import PageAsideLinks from "../components/PageAsideLinks.vue";

  import { HighCode } from 'vue-highlight-code';
  import 'vue-highlight-code/dist/style.css';
  import Alert from "../components/elements/Alert.vue";
  
  // Button Overview
  const overviewValue = `
  // script
  import Input from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--2">
      <Button label="Button Primary" variant="primary" rounded />
      <Button label="Button Secondary" variant="secondary" rounded />
      <Button label="Button Warning" variant="warning" rounded />
      <Button label="Button Danger" variant="danger" rounded />
    </div>    
  </template>`

  // Button Types
  const elementTypes = `
  // script
  import Input from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--2">
      <Button label="I am a Button" variant="dark" rounded />
      <Button path="/elements/input" type="internal" label="I am a link (RouterLink)" variant="dark" rounded />
      <Button path="http://www.google.com" type="external" label="I am a link (Anchor Link)" variant="dark" rounded />
    </div>    
  </template>`

  // Button Types
  const buttonVarientSolid = `
  // script
  import Input from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--2">
      <Button label="Primary" variant="primary" rounded />
      <Button label="Secondary" variant="secondary" rounded />
      <Button label="Warning" variant="warning" rounded />
      <Button label="Danger" variant="danger" rounded />
      <Button label="Success" variant="success" rounded />
      <Button label="Info" variant="info" rounded />
      <Button label="White" variant="white" rounded />
      <Button label="Light" variant="light" rounded />
      <Button label="Black" variant="black" rounded />
      <Button label="Dark" variant="dark" rounded />
    </div>    
  </template>`;

  const buttonVarientSolidOutline = `
  // script
  import Input from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--2">
      <Button label="Primary" variant="primary-outline" rounded />
      <Button label="Secondary" variant="secondary-outline" rounded />
      <Button label="Warning" variant="warning-outline" rounded />
      <Button label="Danger" variant="danger-outline" rounded />
      <Button label="Success" variant="success-outline" rounded />
      <Button label="Info" variant="info-outline" rounded />
      <Button label="White" variant="white-outline" rounded />
      <Button label="Light" variant="light-outline" rounded />
      <Button label="Black" variant="black-outline" rounded />
      <Button label="Dark" variant="dark-outline" rounded />
    </div>    
  </template>`;
 
  const asideLinks = [
    { path: '#overview', name: 'overview' },
    { path: '#element-types', name: 'Element Types' },
    { path: '#with-icon', name: 'Button With Icon' },
    { path: '#sizing', name: 'Sizing' },
    { path: '#variants', name: 'Variants' },
    { path: '#variant-solid-color', name: 'Solid Color Variants' },
    { path: '#variants-outline-color', name: 'Outline Color Variants' },
    { path: '#link-variant', name: 'Link variant' },
    { path: '#block-level-buttons', name: 'Block Level Buttons' },
    { path: '#pill-style', name: 'Pill Style' },
    { path: '#squared-style', name: 'Squared Style' },
    { path: '#sisabled', name: 'Disabled' },
    { path: '#group-buttons', name: 'Group Buttons' },
    { path: '#accessibility', name: 'Accessibility' },
    { path: '#download', name: 'Download' },
  ];

  // https://coreui.io/vue/docs/forms/date-picker.html
  
</script>
<script>
export default { name: "ButtonView" }
</script>

<template>
  <div class="inner-page__wrapper">
    <div class="inner-page__main">
      <h1>Vue Button</h1>
      <h2 class="text--light">
        Use custom <code>&lt;Button&gt;</code> component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.
      </h2>
      <br />

      <!-- Overview Examples -->
      <section class="block-sec mb--4" id="overview">
        <div class="block-sec__header">
          <h2 class="text--white fs--h1 mb--4">Overview</h2>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex gap--2">
            <Button label="Button Primary" variant="primary" rounded />
            <Button label="Button Secondary" variant="secondary" rounded />
            <Button label="Button Warning" variant="warning" rounded />
            <Button label="Button Danger" variant="danger-outline" rounded />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="overviewValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Elemment Type -->
      <section class="block-sec mb--4" id="element-types">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Element Types</h2>
          <h3 class="fw--light">
            The <code>&lt;Button&gt;</code> component generally renders a <code>&lt;Button&gt;</code> element. However, you can also render an <code>&lt;a&gt;</code> element by providing an href prop value. You may also generate vue-router <code>&lt;router-link&gt;</code> when providing a value for the to prop (vue-router is required).
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex gap--2">
            <Button type="button" label="I am a Button" rounded />
            <Button path="/elements/input" type="internal" label="I am a link (RouterLink)" rounded />
            <Button path="http://www.google.com" type="external" label="I am a link (Anchor Link)" rounded />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="elementTypes" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Button Sizing -->
      <section class="block-sec mb--4" id="sizing">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Button Sizing</h2>
          <h3 class="fw--light">
            You may able to have a various type of buttons. E.g: larger or smaller buttons? Specify 'small', 'medium' or 'large' via the size prop.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex align-items-center flex--wrap gap--2">
            <Button label="I am a Small Size Button" size="small" rounded />
            <Button label="I am a Normal Size Button" rounded />
            <Button label="I am a Medium Size Button" size="medium" rounded />
            <Button label="I am a Large Size Button" size="large" rounded />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="elementTypes" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Button Variants -->
      <section class="block-sec mb--4" id="variants">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Button Variants</h2>
          <h3 class="mb--2 fw--regular">Use the variant prop to generate the various contextual button variants.</h3>
          <h3 class="mb--2 fw--regular">By default <span class="text--primary"><code>&lt;Button&gt;</code></span> will render with the white variant.</h3>
          <h2 class="text--warning mb--1 flex-shrink--0 mb--2 mt--4">Solid color variants</h2>
          <Alert class="rounded" type="warning" icon message="primary, secondary, success, danger, warning, info, white, light, black, and dark." />
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4" id="variant-solid-color">
          <div class="d--flex align-items-center flex--wrap gap--2">
            <Button label="Primary" variant="primary" rounded />
            <Button label="Secondary" variant="secondary" rounded />
            <Button label="Warning" variant="warning" rounded />
            <Button label="Danger" variant="danger" rounded />
            <Button label="Success" variant="success" rounded />
            <Button label="Info" variant="info" rounded />
            <Button label="White" variant="white" rounded />
            <Button label="Light" variant="light" rounded />
            <Button label="Black" variant="black" rounded />
            <Button label="Dark" variant="dark" rounded />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="buttonVarientSolid" theme="dark" lang="Vue" />
          <div class="px--4 py--2" id="variants-outline-color">
            <h2 class="text--warning mb--1 flex-shrink--0 mb--2 mt--4">Outline color variants</h2>
            <Alert class="rounded" type="warning" icon message="primary-outline, secondary-outline, success-outline, danger-outline, warning-outline, info-outline, white-outline, light-outline, black-outline, and dark.." />
            <hr />
            <div class="d--flex align-items-center flex--wrap gap--2 pb--3">
              <Button label="Primary" variant="primary-outline" rounded />
              <Button label="Secondary" variant="secondary-outline" rounded />
              <Button label="Warning" variant="warning-outline" rounded />
              <Button label="Danger" variant="danger-outline" rounded />
              <Button label="Success" variant="success-outline" rounded />
              <Button label="Info" variant="info-outline" rounded />
              <Button label="White" variant="white-outline" rounded />
              <Button label="Light" variant="light-outline" rounded />
              <Button label="Black" variant="black-outline" rounded />
              <Button label="Dark" variant="dark-outline" rounded />
            </div>
          </div>
          <HighCode class="code" :codeValue="buttonVarientSolidOutline" theme="dark" lang="Vue" />
        </div>
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