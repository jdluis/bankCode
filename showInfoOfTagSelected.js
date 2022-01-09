 //Esta Funcion Muestra informacion sobre el numero de tag que hemos seleccionado y su contenido en html.
 //This Function Shows information about the tag number that we have selected and its content in html.
 
 let showInfoOfTagSelected = (tagName) => {
           let  parraf = document.getElementsByTagName(tagName);
            console.log(`Total of Tag Selected (${tagName}): ${parraf.length}`);
         for(let i = 0; i < parraf.length; i++) {
          frase = console.log(`No: ${i}: ${parraf[i].innerHTML}`)
           }
        }
        
        
        showInfoOfTagSelected('p');
