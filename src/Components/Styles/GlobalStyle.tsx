import { createGlobalStyle } from "styled-components";
import background from "../../images/image-from-rawpixel-id-2581311-png.png";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* BACKGROUND */

@media screen and (min-width: 800px) {
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
}

/* FONTS */
h1 {
    margin-top: 0.4em;
    margin-bottom: 0.4em;
}

.title {
    font-size: 2em;
    margin-bottom: 0;
}

.subtitle {
    text-decoration: none;
    margin-bottom: 1em;
}

a, a:visited {
    color: #000;
}

.points {
    margin-top: -0.4em;
    color: #2ab72a;
}

.negative {
    color: #e35e4c;
}
`;
