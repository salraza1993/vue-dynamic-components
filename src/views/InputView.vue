<script setup>
  import { ref } from "vue";
  // language
  import Input from "../components/elements/Input.vue";
  import PageAsideLinks from "../components/PageAsideLinks.vue";
  // import CodeEditor from "../components/CodeEditor.vue";
  // import { CodeEditor } from 'simple-code-editor';

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
  
  const inputValue = ref('Hello');  
  
  // https://coreui.io/vue/docs/forms/date-picker.html
</script>
<script>
export default { name: 'InputView' }
</script>

<template>
  <div class="inner__page__wrapper">
    <main class="inner__page__main">
      <h1>Vue Form Input</h1>
      <h2 class="text--light">
        Create various type inputs such as: text, password, number, url, email, search, range, date and more...
        Vue input components. Give textual form <code>&lt;input&gt;</code>s an upgrade with custom styles, sizing, focus states, validation, and more.
        <br />
      </h2>
      <br />
      <section class="block__section mb--4">
        <h2>Example</h2>
        <Input v-model="inputValue" />
        <h3>Input Value: {{ inputValue }} </h3>
        <HighCode class="code" :codeValue="value" theme="dark" lang="vue" />

        <!-- <CodeEditor>
          // script in vuejs@3
          <br />
          &lt;script setup&gt;
          <br />
          &nbsp;&nbsp; import { ref } from "vue";
          <br />
          &nbsp;&nbsp; // Import <code>&lt;Input&gt;</code> component into your html/template.
          <br />
          &nbsp;&nbsp; import Input from "../components/Input.vue";
          <br />
          &nbsp;&nbsp; const inputValue = ref('Hello');  
          <br />
          &lt;/script&gt;
          <br />
          <br />
          &lt;template&gt;
            <br />
            &nbsp;&nbsp; &lt;Input v-model="inputValue" /&gt;
            <br />
            &nbsp;&nbsp; &lt;h3&gt;Input Value: {{ inputValue }} &lt;/h3&gt;
          <br />
          &lt;/template&gt;
        </CodeEditor> -->
        
      </section>

      <section class="block__section mb--4">
        <h2>Example</h2>
        <div class="row">
          <div class="col--4">
            <Input v-model="inputValue" />
          </div>
          <div class="col--4">
            <Input v-model="inputValue" />
          </div>
          <div class="col--4">
            <Input v-model="inputValue" />
          </div>
        </div>
        <h3>Input Value: {{ inputValue }} </h3>
        <!-- <CodeEditor>
          import Input from "../components/elements/Input.vue";
          <br />
          import Input from "../components/elements/Input.vue";
          <br />
          import { ref } from "vue";
        </CodeEditor> -->
        
      </section>
    </main>
    <aside class="inner__page__aside">
      <PageAsideLinks />
    </aside>
  </div>

</template>
<style lang="scss">
.inner__page {
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