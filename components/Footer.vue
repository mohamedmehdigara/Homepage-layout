<template>
    <div>
      <a-layout-footer :class="footerPosition">
        Appbase.io ©{{ new Date().getFullYear() }} created by Appbase Inc.
      </a-layout-footer>
    </div>
  </template>
  
<script>
  import { css } from '@emotion/css';
  const footerPosition = css`
    text-align: center;
    background: #04070b;
    color: #fff;
  `;
  export default {
    data() {
      return {
        footerPosition,
      };
    },
  };
  </script>
  