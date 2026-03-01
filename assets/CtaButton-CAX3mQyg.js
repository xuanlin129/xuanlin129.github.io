import{H as e,I as r,J as a,G as c}from"./index-CjfB3xB6.js";import{n as l}from"./index-CNcSnWI1.js";import{A as t}from"./ArrowRight.esm-DAUI3eTE.js";function v(s){const{t:o}=e(),{btnText:n=o("common.more"),target:i}=s;return r.jsxs(d,{onClick:()=>{l(i)},children:[r.jsx(f,{type:"link",children:n}),r.jsxs("div",{className:"arrow",children:[r.jsx(t,{color:"#fff",size:18}),r.jsx(t,{color:"#fff",size:18})]})]})}const d=a.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  & .arrow {
    width: 50px;
    height: auto;
    aspect-ratio: 1;
    background: var(--primary-color);
    border-radius: 50%;
    transition: all 0.4s;
    display: grid;
    place-items: center;
    overflow: hidden;

    & > svg {
      grid-area: 1 / 1;
    }

    & > svg:first-child {
      transform: translateX(0);
      opacity: 1;
    }

    & > svg:last-child {
      transform: translateX(-150%);
      opacity: 0;
    }
  }

  &:hover {
    & > .arrow {
      background: var(--secondary-color);
      transform: scale(1.1);

      & > svg {
        transition:
          transform 0.4s ease,
          opacity 0.4s ease;
      }

      & > svg:first-child {
        transform: translateX(150%);
        opacity: 0;
      }

      & > svg:last-child {
        transform: translateX(0);
        transition:
          transform 0.4s ease 0.2s,
          opacity 0.4s ease 0.2s;
        opacity: 1;
      }
    }
  }
`,f=a(c)`
  && {
    color: var(--dark);
    padding-left: 0;
    font-family: 'EN_Bd';
    font-size: 1.1rem;

    &:hover {
      color: var(--dark) !important;
      background: transparent !important;
    }
  }
`;export{v as C};
