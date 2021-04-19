window.onload = function(){

    $('.dropify').dropify({
        messages: {
            'default': 'Kliknij lub przeciągnij tutaj swoje zdjęcie, aby je przesłać.\n(rozszerzenia: jpg, jpeg, png)',
            'replace': 'Kliknij lub przeciągnij tutaj swoje zdjęcie, aby je przesłać.',
            'remove':  'Usuń',
            'error':   'Ooops, coś poszło nie tak.'
        }
    });

    let additionalInfoBlock = document.getElementById("additional-informations");
    let additionalInfoButton = document.getElementById("additionalInfoButton");
    additionalInfoButton.onclick = function(){

        additionalInfoBlock.classList.toggle("open");

        if(additionalInfoBlock.classList.contains('open')){
            additionalInfoButton.innerHTML = "Dodatkowe informacje &#x21d1;";
        }else{
            additionalInfoButton.innerHTML = "Dodatkowe informacje &#x21d3;";
        }

        return false;
    }

}

// $(function(){
//     $('#driverLicenses').selectpicker();
//   });
