var jobs = [];
var educations = [];
var languages = [];
var skills = [];
var hobbies = [];

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
                    case "languages":
                        if (languages.length == 0) {
                            addLanguagesTemplate(historyForm);
                        }
                        break;
                    case "skills":
                        if(skills.length == 0){
                            addSkillsTemplate(historyForm);
                        }
                        break;
                    case "hobbies":
                        if(hobbies.length == 0){
                            addHobbiesTemplate(historyForm);
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
                case "languages":
                    addLanguagesTemplate(historyForm);
                    break;
                case "skills":
                    addSkillsTemplate(historyForm);
                    break;
                case "hobbies":
                    addHobbiesTemplate(historyForm);
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

function expandMinimalizeEdu(historyForm, id) {

    let index = educations.findIndex(e => e.id === id);
    var eduElem = educations[index].data;
    historyForm.querySelector("#form-content").insertBefore(eduElem, historyForm.querySelector('#form-content').childNodes[index + 1]);

    var saveButton = eduElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {
        let index = educations.findIndex(e => e.id === id);
        educations[index].data = eduElem.cloneNode(true);
        addMinimalizeEdu(historyForm, id);
    });

    var deleteButton = eduElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        educations.splice(index, 1);
        eduElem.remove();
    });

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

function addLanguagesTemplate(historyForm) {

    var langElem = document.createElement('div');
    langElem.id = "hidden-content";
    langElem.innerHTML = languages_element;
    historyForm.querySelector("#form-content").insertBefore(langElem, historyForm.querySelector('#new-position-add-button'));

    var saveButton = langElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {

        let language = {};
        language.id = languages.length;
        language.data = langElem.cloneNode(true);

        languages.push(language);

        addMinimalizeLang(historyForm, language.id);
    });

    var deleteButton = langElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        langElem.remove();
    });

}

function addMinimalizeLang(historyForm, id) {

    let index = languages.findIndex(l => l.id === id);

    var minimalLang = document.createElement('div');
    minimalLang.id = "minimalized_content";

    minimalLang.innerHTML = minimilized_content_languages;

    var tmp = historyForm.querySelector("#form-content").childNodes[index + 1];

    minimalLang.querySelector('#lang-title').innerHTML = tmp.querySelector("#input-lang-title").value;
    minimalLang.querySelector('#level').innerHTML = tmp.querySelector("#input-level").value;

    minimalLang.addEventListener("click", (event) => {

        if (event.target.nodeName == "IMG") {
            minimalLang.remove();
            languages.splice(languages.findIndex(l => l.id === id), 1);
        } else {
            expandMinimalizeLang(historyForm, id);
            minimalLang.remove();
        }
    });


    historyForm.querySelector("#form-content").removeChild(historyForm.querySelector('#form-content').childNodes[index + 1]);
    historyForm.querySelector("#form-content").insertBefore(minimalLang, historyForm.querySelector('#form-content').childNodes[index + 1]);
}

function expandMinimalizeLang(historyForm, id) {

    let index = languages.findIndex(l => l.id === id);
    var langElem = languages[index].data;
    historyForm.querySelector("#form-content").insertBefore(langElem, historyForm.querySelector('#form-content').childNodes[index + 1]);

    var saveButton = langElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {
        let index = languages.findIndex(l => l.id === id);
        languages[index].data = langElem.cloneNode(true);
        addMinimalizeLang(historyForm, id);
    });

    var deleteButton = langElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        languages.splice(index, 1);
        langElem.remove();
    });

}

function addSkillsTemplate(historyForm) {

    var skillElem = document.createElement('div');
    skillElem.id = "hidden-content";
    skillElem.innerHTML = skills_element;
    historyForm.querySelector("#form-content").insertBefore(skillElem, historyForm.querySelector('#new-position-add-button'));

    var saveButton = skillElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {

        let skill = {};
        skill.id = skills.length;
        skill.data = skillElem.cloneNode(true);

        skills.push(skill);

        addMinimalizeSkill(historyForm, skill.id);
    });

    var deleteButton = skillElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        skillElem.remove();
    });

}

function addMinimalizeSkill(historyForm, id) {

    let index = skills.findIndex(s => s.id === id);

    var minimalSkill = document.createElement('div');
    minimalSkill.id = "minimalized_content";

    minimalSkill.innerHTML = minimilized_content_skills;

    var tmp = historyForm.querySelector("#form-content").childNodes[index + 1];

    minimalSkill.querySelector('#skill-title').innerHTML = tmp.querySelector("#input-skill-title").value;
    minimalSkill.querySelector('#level').innerHTML = tmp.querySelector("#input-level").value;

    minimalSkill.addEventListener("click", (event) => {

        if (event.target.nodeName == "IMG") {
            minimalSkill.remove();
            skills.splice(skills.findIndex(s => s.id === id), 1);
        } else {
            expandMinimalizeSkill(historyForm, id);
            minimalSkill.remove();
        }
    });


    historyForm.querySelector("#form-content").removeChild(historyForm.querySelector('#form-content').childNodes[index + 1]);
    historyForm.querySelector("#form-content").insertBefore(minimalSkill, historyForm.querySelector('#form-content').childNodes[index + 1]);
}

function expandMinimalizeSkill(historyForm, id) {

    let index = skills.findIndex(s => s.id === id);
    var skillElem = skills[index].data;
    historyForm.querySelector("#form-content").insertBefore(skillElem, historyForm.querySelector('#form-content').childNodes[index + 1]);

    var saveButton = skillElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {
        let index = skills.findIndex(s => s.id === id);
        skills[index].data = skillElem.cloneNode(true);
        addMinimalizeSkill(historyForm, id);
    });

    var deleteButton = skillElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        skills.splice(index, 1);
        skillElem.remove();
    });

}


function addHobbiesTemplate(historyForm) {

    var hobbyElem = document.createElement('div');
    hobbyElem.id = "hidden-content";
    hobbyElem.innerHTML = hobbies_element;
    historyForm.querySelector("#form-content").insertBefore(hobbyElem, historyForm.querySelector('#new-position-add-button'));

    var saveButton = hobbyElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {

        let hobby = {};
        hobby.id = hobbies.length;
        hobby.data = hobbyElem.cloneNode(true);

        hobbies.push(hobby);

        addMinimalizeHobby(historyForm, hobby.id);
    });

    var deleteButton = hobbyElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        hobbyElem.remove();
    });

}

function addMinimalizeHobby(historyForm, id) {

    let index = hobbies.findIndex(h => h.id === id);

    var minimalHobby = document.createElement('div');
    minimalHobby.id = "minimalized_content";

    minimalHobby.innerHTML = minimilized_content_hobbies;

    var tmp = historyForm.querySelector("#form-content").childNodes[index + 1];

    minimalHobby.querySelector('#hobby-title').innerHTML = tmp.querySelector("#input-hobby-title").value;

    minimalHobby.addEventListener("click", (event) => {

        if (event.target.nodeName == "IMG") {
            minimalHobby.remove();
            hobbies.splice(hobbies.findIndex(h => h.id === id), 1);
        } else {
            expandMinimalizeHobby(historyForm, id);
            minimalHobby.remove();
        }
    });


    historyForm.querySelector("#form-content").removeChild(historyForm.querySelector('#form-content').childNodes[index + 1]);
    historyForm.querySelector("#form-content").insertBefore(minimalHobby, historyForm.querySelector('#form-content').childNodes[index + 1]);
}

function expandMinimalizeHobby(historyForm, id) {

    let index = hobbies.findIndex(h => h.id === id);
    var HobbyElem = hobbies[index].data;
    historyForm.querySelector("#form-content").insertBefore(HobbyElem, historyForm.querySelector('#form-content').childNodes[index + 1]);

    var saveButton = HobbyElem.querySelector("#save-button");
    saveButton.addEventListener("click", () => {
        let index = hobbies.findIndex(h => h.id === id);
        hobbies[index].data = HobbyElem.cloneNode(true);
        addMinimalizeHobby(historyForm, id);
    });

    var deleteButton = HobbyElem.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        hobbies.splice(index, 1);
        HobbyElem.remove();
    });

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
                            <input type="text" placeholder="np. hiszpański" class="form-control" id="input-lang-title">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label>Poziom</label>
                            <select class="custom-select" id="input-level">
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
                <div class="form-group text-right">
                <button type="button" class="btn btn-danger" id="delete-button">Usuń</button>
                <button type="button" class="btn btn-success" id="save-button">Zapisz</button>
                </div>
`;


var minimilized_content_languages = `
<hr>
<div class="row align-items-center">
    <div class="col-10 ml-3">
        <label class="row content-lable" id="lang-title">BLA Blas</label>
        <div class="row">
            <label id="level">23.10.1995</label>
        </div>
    </div>
    <div class="col">
        <img src="/img/delete.svg" class="content-additional-image" id="delete-min-button">
    </div>
</div>
`;

var skills_element = `
<hr>
<div class="row">
    <div class="col">
        <div class="form-group">
            <label>Umiejętność</label>
            <input type="text" placeholder="np. obsługa Microsoft Word" class="form-control" id="input-skill-title">
        </div>
    </div>
    <div class="col">
        <div class="form-group">
            <label>Poziom</label>
            <select class="custom-select" id="input-level">
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
<div class="form-group text-right">
<button type="button" class="btn btn-danger" id="delete-button">Usuń</button>
<button type="button" class="btn btn-success" id="save-button">Zapisz</button>
</div>
`;

var minimilized_content_skills = `
<hr>
<div class="row align-items-center">
    <div class="col-10 ml-3">
        <label class="row content-lable" id="skill-title">BLA Blas</label>
        <div class="row">
            <label id="level">23.10.1995</label>
        </div>
    </div>
    <div class="col">
        <img src="/img/delete.svg" class="content-additional-image" id="delete-min-button">
    </div>
</div>
`;

var hobbies_element = `
<hr>

<div class="form-group">
    <label>Hobby</label>
    <input type="text" placeholder="np. wędrówki" class="form-control" id="input-hobby-title">
</div>
<div class="form-group text-right">
<button type="button" class="btn btn-danger" id="delete-button">Usuń</button>
<button type="button" class="btn btn-success" id="save-button">Zapisz</button>
</div>
`;

var minimilized_content_hobbies = `
<hr>
<div class="row align-items-center">
    <div class="col-10 ml-3">
        <label class="row content-lable" id="hobby-title">BLA Blas</label>
    </div>
    <div class="col">
        <img src="/img/delete.svg" class="content-additional-image" id="delete-min-button">
    </div>
</div>
`;