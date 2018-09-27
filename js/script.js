function accordion (){

    let collapsible = false;
    let elements= document.querySelectorAll('#accordion');
    let tabOptions = document.querySelectorAll('h3');

    for(let tabOption  of tabOptions){
        let contentBlock= tabOption.nextElementSibling;

        contentBlock.className='hide';
        
        tabOption.addEventListener('click', function() {

            if (collapsible !== true){
                contentBlock.className='show';
                collapsible = true;

            } else{
                contentBlock.className='hide';
                collapsible = false;
            }

        });
    } 
}
