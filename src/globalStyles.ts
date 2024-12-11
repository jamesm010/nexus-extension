import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  #nexus-toolbar-root {
    all: initial;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    * {
      all: unset;
      box-sizing: border-box;
      line-height: 1.5;
      font-family: inherit;
    }

    input, button {
      all: revert;
      font-family: inherit;
      appearance: none;
      background: none;
      border: none;
      padding: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      
      &:hover {
        opacity: 0.8;
      }
    }

    svg {
      width: 20px;
      height: 20px;
      color: currentColor;
      stroke: currentColor;
      stroke-width: 2;
      fill: none;
    }

    form {
      all: unset;
      width: 100%;
      display: block;
    }
  }
`; 