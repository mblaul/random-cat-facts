self.__WB_MANIFEST

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
  
    workbox.precaching.precacheAndRoute([]);
  
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
  }