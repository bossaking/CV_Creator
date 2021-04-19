window.onload = function(){

    var editors = document.getElementsByClassName("editor");
    for(let editor of editors){
        ClassicEditor
        .create( editor,{
            toolbar: [ 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ]
        } )
        .catch( error => {
            console.error( error );
        } );
    }
    

        var historyForms = document.getElementsByClassName("history-form");
        for(let historyForm of historyForms){
            historyForm.addEventListener("click", (event) => {
                if(event.target.nodeName == "H4"){
                    historyForm.querySelector("#hidden-content").classList.toggle("d-none");
                }
            }, true);
        }
        
}