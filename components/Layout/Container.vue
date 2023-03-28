<template>
    <div>
      <a-layout :class="layoutCls">
          <slot name="container"></slot>
          <app-footer />
      </a-layout>
    </div>
  </template>
  
  <script>
  import Footer from './Footer.vue';
  import { css } from '@emotion/css';
  const layoutCls = css`
    background: #152530;
    color: #fff;
    font-family: Lato;
  `;
  export default {
    name: 'Container',
    components: {
      'app-footer': Footer,
    }
    data() {
      return {
        layoutCls,
      };
    },
    head() {
      return {
        title: 'Movies Store',
      };
    },
    props: {
      title: {
        type: String,
        default: function () {
          return 'Movies Store';
        },
      },
    },
  };
  </script>