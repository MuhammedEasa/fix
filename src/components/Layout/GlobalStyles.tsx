import { createGlobalStyle } from 'styled-components';
// :root {
//   --Background: #070606;
//   --white: #fff;
//   --light-gray: #dcdcdc;
//   --link-color: #bdbdbd;
//   --green: #2b892e;
//   --emerald: #48d64c;
// }
// :root {
//   --Background: #2a1a4d;
//   --white: #d1c4e9;
//   --light-gray: #9575cd;
//   --link-color: #7e57c2;
//   --green: #4a148c;
//   --emerald: #ab47bc;
// }


// :root {
//   --Background: #000000;
//   --white: #ffffff;
//   --light-gray: #ff00ff;
//   --link-color: #00ffff;
//   --green: #00ff00;
//   --emerald: #ff9900;
// }
 
// :root {
//   --Background: #ffffff;
//   --white: #222222;
//   --light-gray: #aaaaaa;
//   --link-color: #007bff;
//   --green: #198754;
//   --emerald: #28a745;
// }
const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
 

 :root {
  --Background: #fff8e1;
  --white: #5d4037;
  --light-gray: #a1887f;
  --link-color: #000000;
  --green: #6d4c41;
  --emerald: #8d6e63;
}




  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: var(--white);
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--link-color);
        border-radius: 0.5rem;
      }

      &-track {
        background: var(--Background);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .parallax {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .parallax .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: block;
    margin-right: 5rem;
  }

  .not_complete {
    display: none;
  }

  .complete {
  }
`;
