import { createGlobalStyle } from "styled-components";
import background from "../../images/image-from-rawpixel-id-2581311-png.png"

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* BACKGROUND */

body {
    background: url(${background});
    animation: animateBG 60s infinite linear;
}

@keyframes animateBG {
    from {
      background-position-y: 0px;
    }
    to {
      background-position-y: 1667px;
    }
  }

/* FONTS */
h1 {
    margin-top: 0.4em;
    margin-bottom: 0.4em;
}

.title {
    font-size: 3em;
}
`