/**
 * For this component I have to thank three smart guys
 * Jacopo Panzera https://github.com/Sliver02
 * and
 * Andrea Caccia
 * and
 * Shant Sargsyan
 */

 import { useState, useEffect } from 'react';
 import { NavigatorType } from '@appTypes/GlobalInterfaces';
 
 export type DeviceType = 'desktop' | 'mobile' | 'tablet';
 export type OSType = 'mac os' | 'ios' | 'android' | 'windows' | null;
 export type BrowserType = 'opera' | 'chrome' | 'safari' | 'firefox' | 'edge' | null;
 
 interface IDeviceInfo {
   type: DeviceType;
   os: OSType;
   browser: BrowserType;
 }
 
 const useDevice = () => {
   const [deviceInfo, setDeviceInfo] = useState<IDeviceInfo>({
     type: getDeviceType(),
     os: getOs(),
     browser: getBrowser(),
   });
 
   useEffect(() => {
     if (typeof window !== 'undefined') {
       const getDeviceInfo = () => {
         setDeviceInfo({
           type: getDeviceType(),
           os: getOs(),
           browser: getBrowser(),
         });
       };
 
       window.addEventListener('DOMContentLoaded', getDeviceInfo);
 
       getDeviceInfo();
 
       return () => window.removeEventListener('DOMContentLoaded', getDeviceInfo);
     }
   }, []);
 
   return deviceInfo;
 };
 
 export default useDevice;
 
 export const getDeviceType = (): DeviceType => {
   const useragent = navigator.userAgent;
 
   if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(useragent)) {
     return 'tablet';
   }
 
   if (
     /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
       useragent,
     )
   ) {
     return 'mobile';
   }
 
   return 'desktop';
 };
 
 export const getOs = (): OSType => {
   const platform = (navigator as NavigatorType).userAgentData?.platform || navigator.userAgent;
 
   if (/(Macintosh|MacIntel|MacPPC|Mac68K)/i.test(platform)) {
     return 'mac os';
   }
   if (/(iPhone|iPod|iPad)/i.test(platform)) {
     return 'ios';
   }
   if (/(android)/i.test(platform)) {
     return 'android';
   }
   if (/(Windows|WinCE)/i.test(platform)) {
     return 'windows';
   }
   return null;
 };
 
 export const getBrowser = (): BrowserType => {
   const useragent = navigator.userAgent;
 
   if (/(Opera)/i.test(useragent)) {
     return 'opera';
   }
   if (/(Chrome)/i.test(useragent)) {
     return 'chrome';
   }
   if (/(Safari)/i.test(useragent)) {
     return 'safari';
   }
   if (/(Firefox)/i.test(useragent)) {
     return 'firefox';
   }
   if (/(Edge)/i.test(useragent)) {
     return 'edge';
   }
   return null;
 };
 