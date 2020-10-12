window.addEventListener('keydown', function(e) {
   switch(e.key) {
       case 'SoftRight': //index
       var indexWindow = new MozActivity({
          name: "index",
          data: {}
       })
       indexWindow.onsuccess = function(){}
       break;
       case 'SoftLeft': //kaius
       var kaiusWindow = new MozActivity({
          name: "kaius",
          data: {}
       })
       kaiusWindow.onsuccess = function(){}
       break;
       
   }})
   