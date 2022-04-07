/**
 * For this component I have to thank three smart guys
 * Jacopo Panzera https://github.com/Sliver02
 * and
 * Andrea Caccia
 * and
 * Shant Sargsyan
 */

 import { useState, useEffect } from 'react';
 import { breakpoints } from '@theme/Variables';
 
 const { xs, sm, md, lg, xl } = breakpoints;
 
 export type ViewportName = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
 
 interface IViewPort {
   width: number;
   height: number;
   viewportName: ViewportName;
 }
 
 const useViewport = (): IViewPort => {
   const [viewport, setViewport] = useState<IViewPort>({
     width: window.innerWidth,
     height: window.innerHeight,
     viewportName: getViewportName(window.innerWidth),
   });
 
   useEffect(() => {
     const handleResize = () => {
       let width = window.innerWidth;
       let height = window.innerHeight;
 
       setViewport({
         width: width,
         height: height,
         viewportName: getViewportName(width),
       });
     };
 
     window.addEventListener('resize', handleResize);
 
     handleResize();
 
     return () => window.removeEventListener('resize', handleResize);
   }, []);
 
   return viewport;
 };
 
 export default useViewport;
 
 const getViewportName = (width: number): ViewportName => {
   if (width >= xs && width < sm) {
     return 'xs';
   } else if (width >= sm && width < md) {
     return 'sm';
   } else if (width >= md && width < lg) {
     return 'md';
   } else if (width >= lg && width < xl) {
     return 'lg';
   } else if (width >= xl) {
     return 'xl';
   }
 
   return 'xs';
 };
 