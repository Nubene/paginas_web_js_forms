/*  function iniciar() {
    console.log("Iniciado JS")
 }
 
 document.addEventListener('DOMContentLoaded', iniciar) */
 

/*  document.addEventListener('DOMContentLoaded', function () {
    console.log("Iniciado JS, función anónima")
 }) */

/*  document.addEventListener('DOMContentLoaded',  () => 
    console.log("Iniciado JS, función anónima")
 ) */


 import { Form } from './form.js' 

 /* document.addEventListener('DOMContentLoaded',
                         function () {
                               new Main()
                         }
 )  */
 
 document.addEventListener('DOMContentLoaded', () => new Form()) 