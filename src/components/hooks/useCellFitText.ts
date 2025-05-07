//   import { useRef } from "react";

  
//   export function useCellFitText(cell: HTMLTextAreaElement) {
//     // const ref = useRef<HTMLTextAreaElement>(null);

//     //   Resize the textarea to fit the text
// //   Memoization to avoid infinite re-renders
//   const resize = useCallback(() => {
//     const el = cell.current;
//     if (el) {
//       el.style.height = '1px';
//       el.style.height = el.scrollHeight + 'px';
//     }
//   }, []); // No dependencies, the logic only depends on the ref's current element

//   useLayoutEffect(() => {
//     resize();
//   }, [ resize]);
// }
