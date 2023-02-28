<script setup>
  // language
  import Button from "../components/elements/Button.vue";
  import PageAsideLinks from "../components/PageAsideLinks.vue";

  import { HighCode } from 'vue-highlight-code';
  import 'vue-highlight-code/dist/style.css';
  import Alert from "../components/elements/Alert.vue";
  import ElementInCodeFormate from "../components/ElementInCodeFormate.vue";
  
  // Button Overview
  const overviewValue = `
  // script
  import Button from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--2">
      <Button label="Button Primary" variant="primary" />
      <Button label="Button Secondary" variant="secondary" />
      <Button label="Button Warning" variant="warning" />
      <Button label="Button Danger" variant="danger" />
    </div>    
  </template>`

  // Button Types
  const elementTypes = `
  // script
  import Button from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--2">
      <Button label="I am a Button" variant="dark" />
      <Button 
        path="/elements/input" 
        type="internal" 
        label="I am a link (RouterLink)" 
        variant="dark" />

      <Button 
        path="http://www.google.com" 
        type="external" 
        label="I am a link (Anchor Link)" 
        variant="dark" />
    </div>    
  </template>`

  // Button With Icons
  const buttonWithIconValues = `
  // script
  import Button from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--3">
      <Button 
        variant="primary"
        label="I am a Button with an icon (Start)" 
        icon />
      <Button 
        variant="primary-outline" 
        label="I am a Button with an icon in (End)" 
        icon 
        iconDirection="end" 
        iconClass="fa-arrow-right" />
    </div> 
  </template>`

  // Button Types
  const buttonVariantSolid = `
  // script
  import Button from "@/components/Button.vue";
  const solidButtonVariants = [
    { label:"Primary", variant: "primary" },
    { label:"Secondary", variant: "secondary" },
    { label:"Warning", variant: "warning" },
    { label:"Danger", variant: "danger" },
    { label:"Success", variant: "success" },
    { label:"Info", variant: "info" },
    { label:"White", variant: "white" },
    { label:"Light", variant: "light" },
    { label:"Black", variant: "black" },
    { label:"Dark", variant: "dark" },
  ];
  
  <template>
    <div class="d--flex align-items-center flex--wrap gap--2">
      <Button 
        v-for="button in solidButtonVariants"
        :key="button"
        :label="button.label" 
        :variant="button.variant" 
      />
    </div>  
  </template>`;

  const buttonVariantSolidOutline = `
  // script
  import Button from "@/components/Button.vue";
  const outlineButtonVariants = [
    { label:"Primary", variant: "primary-outline" },
    { label:"Secondary", variant: "secondary-outline" },
    { label:"Warning", variant: "warning-outline" },
    { label:"Danger", variant: "danger-outline" },
    { label:"Success", variant: "success-outline" },
    { label:"Info", variant: "info-outline" },
    { label:"White", variant: "white-outline" },
    { label:"Light", variant: "light-outline" },
    { label:"Black", variant: "black-outline" },
    { label:"Dark", variant: "dark-outline" },
  ];

  <template>
    <div class="d--flex align-items-center flex--wrap gap--2">
      <Button 
        v-for="button in outlineButtonVariants"
        :key="button"
        :label="button.label" 
        :variant="button.variant" 
      />
    </div>    
  </template>`;
 
  const linkVariantValues = `
  // script
  import Button from "@/components/Button.vue";
  
  <template>
    <div class="d--flex align-items-center flex--wrap gap--2">
      <Button label="I am a Link" variant="link" />
      <Button label="I am a Link - Danger" variant="link-danger" />
      <Button label="I am a Link - info" variant="link-info" />
      <Button label="I am a Link - Light" variant="link-light" />
    </div>
  </template>`;

  const blockLevelButtonValues = `
  // script
  import Button from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--3">
      <Button block label="I am a Block level Button" variant="primary" />
      <Button block label="I am a Block level Button" variant="primary-outline" />
    </div>
  </template>`;

  const squiredButtonValues = `
  // script
  import Button from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--3">
      <Button label="I am a squired Button" size="medium" variant="primary" squired />
      <Button label="I am a squired Button" size="medium" variant="primary-outline" squired />
    </div>
  </template>`;

  const disabledValues = `
  // script
  import Button from "@/components/Button.vue";
  
  <template>
    <div class="d--flex gap--3">
      <Button label="I am a disabled Button" size="medium" variant="primary" disabled />
      <Button label="I am a disabled Button" size="medium" variant="primary-outline" disabled />
    </div>
  </template>`;
 
  // ========= [ Aside links ] ========= //
  const asideLinks = [
    { path: '#overview', name: 'overview' },
    { path: '#types', name: 'Element Types' },
    { path: '#with-icon', name: 'Button With Icon' },
    { path: '#sizing', name: 'Sizing' },
    { path: '#variants', name: 'Variants' },
    { path: '#variant-solid-color', name: 'Solid Color Variants' },
    { path: '#variants-outline-color', name: 'Outline Color Variants' },
    { path: '#link-variant', name: 'Link variant' },
    { path: '#block-lovel', name: 'Block Level Buttons' },
    { path: '#pill-style', name: 'Pill Style' },
    { path: '#squired', name: 'Squared Style' },
    { path: '#disabled', name: 'Disabled' },
    { path: '#accessibility', name: 'Accessibility' },
    { path: '#download', name: 'Download' },
  ];

  const solidButtonVariants = [
    { label:"Primary", variant: "primary" },
    { label:"Secondary", variant: "secondary" },
    { label:"Warning", variant: "warning" },
    { label:"Danger", variant: "danger" },
    { label:"Success", variant: "success" },
    { label:"Info", variant: "info" },
    { label:"White", variant: "white" },
    { label:"Light", variant: "light" },
    { label:"Black", variant: "black" },
    { label:"Dark", variant: "dark" },
  ];
  const outlineButtonVariants = [
    { label:"Primary", variant: "primary-outline" },
    { label:"Secondary", variant: "secondary-outline" },
    { label:"Warning", variant: "warning-outline" },
    { label:"Danger", variant: "danger-outline" },
    { label:"Success", variant: "success-outline" },
    { label:"Info", variant: "info-outline" },
    { label:"White", variant: "white-outline" },
    { label:"Light", variant: "light-outline" },
    { label:"Black", variant: "black-outline" },
    { label:"Dark", variant: "dark-outline" },
  ];

  // https://coreui.io/vue/docs/forms/date-picker.html
  
</script>
<script>
export default { name: "ButtonView", components: { ElementInCodeFormate } }
</script>

<template>
  <div class="inner-page__wrapper">
    <div class="inner-page__main">
      <h1>Vue Button</h1>
      <h2 class="text--light">
        Use custom <ElementInCodeFormate label="Button /" class="text--primary fw--bold" /> 
        component for <span class="text--primary">actions in forms, dialogs, and more</span>. 
        <br />
        Includes support for a handful of <span class="text--warning">contextual variations, sizes, states, and more.</span>
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
            <Button label="Button Primary" variant="primary" />
            <Button label="Button Secondary" variant="secondary" />
            <Button label="Button Warning" variant="warning" />
            <Button label="Button Danger" variant="danger-outline" />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="overviewValue" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Elemment Type -->
      <section class="block-sec mb--4" id="types">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Element Types</h2>
          <h3 class="fw--regular">            
            The <ElementInCodeFormate label="Button /" class="text--primary fw--bold" /> component generally renders a 
            <ElementInCodeFormate label="Button /" class="text--primary fw--bold" /> element. However, you can also render an 
            <ElementInCodeFormate label="a /" class="text--primary fw--bold" /> element by providing an 
            <span class="text--primary">path prop value</span>. 
            <br />
            You may also generate vue-router 
            <ElementInCodeFormate label="router-link /" class="text--primary fw--bold" /> 
            when providing a value for the to prop <span class="text--warning">(vue-router is required)</span>.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex gap--2">
            <Button type="button" label="I am a Button" />
            <Button path="/elements/input" type="internal" label="I am a link (RouterLink)" />
            <Button path="http://www.google.com" type="external" label="I am a link (Anchor Link)" />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="elementTypes" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Button with Icon -->
      <section class="block-sec mb--4" id="with-icon">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Button With Icon</h2>
          <h3 class="fw--regular">You may have <ElementInCodeFormate label="Button /" class="text--primary fw--bold" /> with an icon.</h3>
          <Alert class="rounded" variant="danger" icon>
            <i class="fa-solid fa-info-circle"></i>
            <span>
              Note: For adding your custom icon, you need pass font-awesome class through <strong>iconClass</strong> as a prop. 
              <br />
              E.g.: <span class="fw--bold">iconClass="fa-home"</span>
            </span>
            
          </Alert>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex gap--3">
            <Button 
              variant="primary"
              label="I am a Button with an icon (Start)" 
              icon />
            <Button 
              variant="primary-outline" 
              label="I am a Button with an icon in (End)" 
              icon 
              iconDirection="end" 
              iconClass="fa-arrow-right" />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="buttonWithIconValues" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Button Sizing -->
      <section class="block-sec mb--4" id="sizing">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Button Sizing</h2>
          <h3 class="fw--regular">
            You may able to have a <span class="text--primary">various type of buttons</span>. E.g: larger or smaller buttons? 
            <br />
            <span class="text--warning">Specify 'small', 'medium' or 'large' via the size prop.</span>
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex align-items-center flex--wrap gap--2">
            <Button label="I am a Small Size Button" size="small" />
            <Button label="I am a Normal Size Button" />
            <Button label="I am a Medium Size Button" size="medium" />
            <Button label="I am a Large Size Button" size="large" />
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
          <Alert variant="dark">
            <code class="fw--bold text--success">
              primary, secondary, success, danger, warning, info, white, light, black, and dark.
            </code>
          </Alert>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4" id="variant-solid-color">
          <div class="d--flex align-items-center flex--wrap gap--2">
            <Button 
              v-for="button in solidButtonVariants"
              :key="button"
              :label="button.label" :variant="button.variant" 
            />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="buttonVariantSolid" theme="dark" lang="Vue" />
          <div class="px--4 py--2" id="variants-outline-color">
            <h2 class="text--warning mb--1 flex-shrink--0 mb--2 mt--4">Outline color variants</h2>
            <Alert variant="dark">
              <code class="fw--bold text--success">primary-outline, secondary-outline, success-outline, danger-outline, warning-outline, info-outline, white-outline, light-outline, black-outline, and dark.</code>
            </Alert>
            <hr />
            <div class="d--flex align-items-center flex--wrap gap--2 pb--3">
              <Button 
                v-for="button in outlineButtonVariants"
                :key="button"
                :label="button.label" :variant="button.variant" 
              />
            </div>
          </div>
          <HighCode class="code" :codeValue="buttonVariantSolidOutline" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Link -->
      <section class="block-sec mb--4" id="link-variant">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Link Variant</h2>
          <h3 class="fw--regular">
            <span class="text--primary fw--bold">Variant link</span> will render a button with the appearance of a link while maintaining the default padding and size of a button.
          </h3>
          <Alert class="rounded" variant="dark">
            <code class="fw--bold text--primary">link-primary, link-secondary, link-success, link-danger, link-warning, link-info, link-white, link-light, link-black, and link-dark...</code>
          </Alert>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex align-items-center flex--wrap gap--2">
            <Button label="I am a Link" variant="link" />
            <Button label="I am a Link - Danger" variant="link-danger" />
            <Button label="I am a Link - info" variant="link-info" />
            <Button label="I am a Link - Light" variant="link-light" />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="linkVariantValues" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Block Level -->
      <section class="block-sec mb--4" id="block-lovel">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Block Level Button</h2>
          <h3 class="fw--regular">
            Create block level <ElementInCodeFormate label="Button /" class="text--primary fw--bold" />s — those that span the full width of a parent — by setting the 
            <span class="text--primary">block</span> prop.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex gap--3">
            <Button block label="I am a Block level Button" variant="primary" />
            <Button block label="I am a Block level Button" variant="primary-outline" />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="blockLevelButtonValues" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Squired Buttons -->
      <section class="block-sec mb--4" id="squired">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Squired Button</h2>
          <h3 class="fw--regular">
            Prefer <ElementInCodeFormate label="Button /" class="text--primary fw--bold" />s with a more square corner style? 
            Just set the prop <span class="text--primary">squared</span> to true.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex gap--3">
            <Button label="I am a squired Button" size="medium" variant="primary" squired />
            <Button label="I am a squired Button" size="medium" variant="primary-outline" squired />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="squiredButtonValues" theme="dark" lang="Vue" />
        </div>
      </section>

      <!-- Disabled Buttons -->
      <section class="block-sec mb--4" id="disabled">
        <div class="block-sec__header ">
          <h2 class="text--white fs--h1 mb--4">Disabled Button</h2>
          <h3 class="fw--regular">
            Prefer <ElementInCodeFormate label="Button /" class="text--primary fw--bold" />s with a more square corner style? 
            Just set the prop <span class="text--primary">squared</span> to true.
          </h3>
        </div>
        <hr class="my--4" />
        <div class="block-sec__body pb--4">
          <div class="d--flex gap--3">
            <Button label="I am a disbaled Button" size="medium" variant="primary" disbaled />
            <Button label="I am a disbaled Button" size="medium" variant="primary-outline" disbaled />
          </div>
        </div>
        <div class="block-sec__footer">
          <HighCode class="code" :codeValue="disabledValues" theme="dark" lang="Vue" />
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