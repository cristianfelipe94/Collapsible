function accordion (){

    let collapsible = false;
    let elements= document.querySelectorAll('#accordion');
    let tabOptions = document.querySelectorAll('h3');

    for(let tabOption  of tabOptions){
        let contentBlock= tabOption.nextElementSibling;
        
        tabOption.addEventListener('click', function(){
            if (!collapsible === true){
                contentBlock.className='mostrar';
                collapsible = true;
            } else if (!collapsible === false){
                contentBlock.className='oculto';
                collapsible = false;
            }
        });
    } 
}
