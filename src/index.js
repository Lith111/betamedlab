import ReactDom from "react-dom/client";
import React from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'
const root = ReactDom.createRoot(document.getElementById("root"));
// هذا الكود الخاص بعملية الترجمة و وصول للغة المحدد عن طريق كوكيز
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    suportedLngs:['en','ar'],
    detection: {
      order: [ 'cookie', 'htmlTag','localStorage',  'path', 'subdomain'],
     caches:["cookie"]
    },
    backend:{
      loadPath:'/assests/locales/{{lng}}/translation.json'
    },
    react:{
     useSuspense : false ,
    }
  });

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>

 )