var jobs = [];
var educations = [];

window.onload = function () {

    prepareEditor(document);


    var historyForms = document.getElementsByClassName("history-form");

    for (let historyForm of historyForms) {

        historyForm.addEventListener("click", (event) => {

            if (event.target.nodeName == "H4") {

                historyForm.querySelector("#form-content").classList.toggle("d-none");

                if (historyForm.querySelector('#hidden-content') != null) {
                    return;
                }

                switch (historyForm.id) {

                    case "work_experience":
                        if (jobs.length == 0) {
                            addWorkExperticeTemplate(historyForm);
                        }
                        break;
                    case "education":
                        if (educations.length == 0) {
                            addEducationTemplate(historyForm);
                        }
                        break;

                }
            }

        }, true);

        historyForm.querySelector('#new-position-add-button').addEventListener("click", (event) => {

            switch (historyForm.id) {
                case "work_experience":
                    addWorkExperticeTemplate(historyForm);
                    break;
                    case "education":
                        addEducationTemplate(historyForm);
                        break;
            }

        }), true;

    }

}

function addWorkExperticeTemplate(historyForm) {

    var workElem = document.createElement('div');
    workElem.id = "hidden-content";
    workElem.innerHTML = work_element;
    historyForm.querySelector("#form-content").insertBefore(workElem, historyForm.querySelector('#new-position-add-button'));

    prepareEditor(workElem);

    var saveButton = workElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {

        let job = {};
        job.id = jobs.length;
        job.data = workElem.cloneNode(true);

        jobs.push(job);

        addMinimalizeJobExp(historyForm, job.id);
    });

    var deleteButton = workElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        workElem.remove();
    });

}

function addMinimalizeJobExp(historyForm, id) {

    let index = jobs.findIndex(j => j.id === id);

    var minimalJob = document.createElement('div');
    minimalJob.id = "minimalized_content";

    minimalJob.innerHTML = minimilized_content_work;

    var tmp = historyForm.querySelector("#form-content").childNodes[index + 1];

    minimalJob.querySelector('#job-title').innerHTML = tmp.querySelector("#input-job-title").value;
    minimalJob.querySelector('#start-date').innerHTML = tmp.querySelector("#input-start-date").value;
    minimalJob.querySelector('#end-date').innerHTML = tmp.querySelector("#input-end-date").value;
    minimalJob.addEventListener("click", (event) => {

        if (event.target.nodeName == "IMG") {
            minimalJob.remove();
            jobs.splice(jobs.findIndex(j => j.id === id), 1);
        } else {
            expandMinimalizeJobExp(historyForm, id);
            minimalJob.remove();
        }
    });


    historyForm.querySelector("#form-content").removeChild(historyForm.querySelector('#form-content').childNodes[index + 1]);
    historyForm.querySelector("#form-content").insertBefore(minimalJob, historyForm.querySelector('#form-content').childNodes[index + 1]);
}

function expandMinimalizeJobExp(historyForm, id) {

    let index = jobs.findIndex(j => j.id === id);
    var workElem = jobs[index].data;
    historyForm.querySelector("#form-content").insertBefore(workElem, historyForm.querySelector('#form-content').childNodes[index + 1]);

    var saveButton = workElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {
        let index = jobs.findIndex(j => j.id === id);
        jobs[index].data = workElem.cloneNode(true);
        addMinimalizeJobExp(historyForm, id);
    });

    var deleteButton = workElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        jobs.splice(index, 1);
        workElem.remove();
    });

}


function addEducationTemplate(historyForm) {

    var eduElem = document.createElement('div');
    eduElem.id = "hidden-content";
    eduElem.innerHTML = education_element;
    historyForm.querySelector("#form-content").insertBefore(eduElem, historyForm.querySelector('#new-position-add-button'));

    prepareEditor(eduElem);

    var saveButton = eduElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {

        let education = {};
        education.id = educations.length;
        education.data = eduElem.cloneNode(true);

        educations.push(education);

        addMinimalizeEdu(historyForm, education.id);
    });

    var deleteButton = eduElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        eduElem.remove();
    });

}

function addMinimalizeEdu(historyForm, id) {

    let index = educations.findIndex(e => e.id === id);

    var minimalEdu = document.createElement('div');
    minimalEdu.id = "minimalized_content";

    minimalEdu.innerHTML = minimilized_content_education;

    var tmp = historyForm.querySelector("#form-content").childNodes[index + 1];

    minimalEdu.querySelector('#edu-title').innerHTML = tmp.querySelector("#input-edu-title").value;
    minimalEdu.querySelector('#start-date').innerHTML = tmp.querySelector("#input-start-date").value;
    minimalEdu.querySelector('#end-date').innerHTML = tmp.querySelector("#input-end-date").value;
    minimalEdu.addEventListener("click", (event) => {

        if (event.target.nodeName == "IMG") {
            minimalEdu.remove();
            educations.splice(educations.findIndex(e => e.id === id), 1);
        } else {
            expandMinimalizeEdu(historyForm, id);
            minimalEdu.remove();
        }
    });


    historyForm.querySelector("#form-content").removeChild(historyForm.querySelector('#form-content').childNodes[index + 1]);
    historyForm.querySelector("#form-content").insertBefore(minimalEdu, historyForm.querySelector('#form-content').childNodes[index + 1]);
}


function prepareEditor(historyForm) {

    var editors = historyForm.getElementsByClassName("editor");
    for (let editor of editors) {
        ClassicEditor
            .create(editor, {
                toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote']
            })
            .catch(error => {
                console.error(error);
            });
    }

}

var work_element = `
<hr>
<div class="row">
    <div class="col">
        <div class="form-group">
            <label>Nazwa zawodu</label>
            <input type="text" placeholder="np. kierownik sprzedaży" class="form-control" id="input-job-title">
        </div>
    </div>
    <div class="col">
        <div class="form-group">
            <label>Miasto / miejscowość</label>
            <input type="text" autocomplete="off" name="meta.city" placeholder="np. Warszawa"
                class="form-control">
        </div>
    </div>
</div>

<div class="form-group">
    <label>Pracodawca</label>
    <input type="text" placeholder="np. PwC" class="form-control">
</div>

<div class="row">
    <div class="col">
        <div class="form-group">
            <label>Data rozpoczęcia</label>
            <input type="date" autocomplete="off" class="form-control" id="input-start-date">
        </div>
    </div>
    <div class="col">
        <div class="form-group">
            <label>Data zakończenia</label>
            <input type="date" class="form-control" id="input-end-date">
        </div>
    </div>
</div>

<div class="form-group">
    <label>Opis</label>
    <div id="editor" class="editor"></div>

</div>

<div class="form-group text-right">
<button type="button" class="btn btn-danger" id="delete-button">Usuń</button>
<button type="button" class="btn btn-success" id="save-button">Zapisz</button>
</div>

`;

var minimilized_content_work = `
<hr>
<div class="row align-items-center">
    <div class="col-10 ml-3">
        <label class="row content-lable" id="job-title">BLA Blas</label>
        <div class="row">
            <label id="start-date">23.10.1995</label><label class="mx-1">-</label><label id="end-date">23.10.2020</label>
        </div>
    </div>
    <div class="col">
        <img src="/img/delete.svg" class="content-additional-image" id="delete-min-button">
    </div>
</div>
`;

var education_element = `
<hr>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>Stopień / poziom</label>
                            <input type="text" placeholder="np. licencjat" class="form-control" id="input-edu-title">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label>Miasto / miejscowość</label>
                            <input type="text" autocomplete="off" name="meta.city" placeholder="np. Warszawa"
                                class="form-control">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>Szkoła / uczelnia</label>
                    <input type="text" placeholder="np. Politechnika Białostocka" class="form-control">
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>Data rozpoczęcia</label>
                            <input type="date" autocomplete="off" class="form-control" id="input-start-date">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label>Data zakończenia</label>
                            <input type="date" class="form-control" id="input-end-date">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>Opis</label>
                    <div id="editor" class="editor"></div>
                </div>
                <div class="form-group text-right">
<button type="button" class="btn btn-danger" id="delete-button">Usuń</button>
<button type="button" class="btn btn-success" id="save-button">Zapisz</button>
</div>
`;

var minimilized_content_education = `
<hr>
<div class="row align-items-center">
    <div class="col-10 ml-3">
        <label class="row content-lable" id="edu-title">BLA Blas</label>
        <div class="row">
            <label id="start-date">23.10.1995</label><label class="mx-1">-</label><label id="end-date">23.10.2020</label>
        </div>
    </div>
    <div class="col">
        <img src="/img/delete.svg" class="content-additional-image" id="delete-min-button">
    </div>
</div>
`;

var languages_element = `
<hr>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>Język</label>
                            <input type="text" placeholder="np. hiszpański" class="form-control">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label>Poziom</label>
                            <select class="custom-select">
                                <option>Wybierz</option>
                                <option>Język ojczysty / Poziom osoby władającej językiem ojczystym</option>
                                <option>Biegła znajomość w mowie i piśmie</option>
                                <option>Bardzo dobra znajomość</option>
                                <option>Wiedza praktyczna na dobrym poziomie</option>
                                <option>Wiedza praktyczna</option>
                                <option>A1</option>
                                <option>A2</option>
                                <option>B1</option>
                                <option>B2</option>
                                <option>C1</option>
                                <option>C2</option>
                            </select>
                        </div>
                    </div>
                </div>
`;

var skills_element = `
<hr>
<div class="row">
    <div class="col">
        <div class="form-group">
            <label>Umiejętność</label>
            <input type="text" placeholder="np. obsługa Microsoft Word" class="form-control">
        </div>
    </div>
    <div class="col">
        <div class="form-group">
            <label>Poziom</label>
            <select class="custom-select">
                <option>Wybierz poziom</option>
                <option>Zaawansowany</option>
                <option>Doświadczony</option>
                <option>Wprawiony</option>
                <option>Początkujący</option>
                <option>Nowicjusz</option>
            </select>
        </div>
    </div>
</div>
`;


var hobbies_element = `
<hr>

<div class="form-group">
    <label>Hobby</label>
    <input type="text" placeholder="np. wędrówki" class="form-control">
</div>
`;