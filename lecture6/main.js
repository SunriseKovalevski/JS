function Manager(id, progr, proj, name, surname, zarplata, qualification, emplList, projList) {
    this.id = id;
    this.progr = progr;
    this.proj = proj;
    this.zarplata = zarplata ;
    this.name = name;
    this.surname = surname;
    this.qualification = qualification;
    this.emplList = emplList;
    this.projList = projList;
}

function Project(id, name, cost, volume) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.volume = volume;
}

function Programmer(id, name, surname, level, lines, cost) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.level = level;
    this.lines = lines;
    this.cost = cost;
}

function Company(name, money, minus, strings, managers) {
    this.name = name;
    this.money = money;
    this.minus = minus;
    this.strings = strings;
    this.managers = managers;
}

Programmer.prototype.callMyName = function () {
    console.log(this.name);
}



/************/
var company = new Company('My company --->', 10000, 0, 0, []);

let project = [];
for (let i = 0; i < 6; i++) {
    let tempProject = new Project(i, '1', 100*i, 200*i);
    project.push(tempProject);
};

let manager = [];
// Manager(id, progr, proj, name, surname, zarplata, qualification, emplList, projList)
for (let i = 0; i < 6; i++) {
    let tempManager = new Manager(i, [], '', 'name', 'surname', i*100, 1.2, 1, 1);
    manager.push(tempManager);
};

//function Programmer(id, name, surname, level, lines, cost)
let programmer = [];
for (let i = 0; i < 6; i++) {
    let tempProgrammer = new Programmer(i, 'name','surname','junior', 100, 42);
    programmer.push(tempProgrammer);
};


/******Company******/

const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'main-container');
document.body.appendChild(mainContainer);

const companyContainer = document.createElement('div');
companyContainer.setAttribute('class', 'company-container');
companyContainer.style.display = 'flex';
companyContainer.style.borderStyle = 'solid';
mainContainer.appendChild(companyContainer);

const companyMainFrame = document.createElement('div');
companyMainFrame.setAttribute('class', 'company-main-frame');
companyMainFrame.style.borderStyle = 'solid';
companyContainer.appendChild(companyMainFrame);

const companyText = document.createElement('p');
companyText.setAttribute('class', 'company-text');
companyText.innerHTML = 'Компания';
companyMainFrame.appendChild(companyText);

const companyName = document.createElement('p');
companyName.setAttribute('class', 'company-name');
companyName.innerHTML = company.name;
companyMainFrame.appendChild(companyName);

const companyMoney = document.createElement('p');
companyMoney.setAttribute('class', 'company-money');
companyMoney.innerHTML = company.money;
companyMainFrame.appendChild(companyMoney);

const companyMinus = document.createElement('p');
companyMinus.setAttribute('class', 'company-minus');
companyMinus.innerHTML = company.minus;
companyMainFrame.appendChild(companyMinus);

const companyStrings = document.createElement('p');
companyStrings.setAttribute('class', 'company-strings');
companyStrings.innerHTML = company.strings;
companyMainFrame.appendChild(companyStrings);

const companyManagers = document.createElement('p');
companyManagers.setAttribute('class', 'company-managers');
companyMainFrame.appendChild(companyManagers);

/******MANAGERS******/

const managersContainer = document.createElement('div');
managersContainer.setAttribute('class', 'managers-container');
managersContainer.style.borderStyle = 'solid';
managersContainer.style.display = 'flex';
managersContainer.style.textAlign = 'center';
mainContainer.appendChild(managersContainer);

manager.forEach(manager => {
    const managerContainer = document.createElement('div');
    managerContainer.setAttribute('class', 'managers-container');
    managerContainer.style.borderStyle = 'solid';
    managerContainer.style.textAlign = 'center';
    managersContainer.appendChild(managerContainer);

    const managersText = document.createElement('p');
    managersText.setAttribute('class', 'managers-text');
    managersText.innerHTML = 'Менеджеры';
    managerContainer.appendChild(managersText);

    const managersName = document.createElement('p');
    managersName.setAttribute('class', 'managers-name');
    managersName.innerHTML = manager.name;
    managerContainer.appendChild(managersName);

    const managersSurname = document.createElement('p');
    managersSurname.setAttribute('class', 'managers-surname');
    managersSurname.innerHTML = manager.surname;
    managerContainer.appendChild(managersSurname);

    const managersZarplata = document.createElement('p');
    managersZarplata.setAttribute('class', 'managers-zarplata');
    managersZarplata.innerHTML = manager.zarplata;
    managerContainer.appendChild(managersZarplata);

    const managerHire = document.createElement('button');
    managerHire.setAttribute('class', 'manager-hire');
    managerHire.setAttribute('id', manager.id);
    managerHire.innerHTML = 'Нанять холопа';
    managerHire.addEventListener('click', function () {
        console.log(manager.id);
        company.minus += manager.zarplata;
        companyMinus.innerHTML = company.minus;
    companyManagers.innerHTML += manager.name + ' ';
    });
    managerContainer.appendChild(managerHire);
});


/******PROJECTS******/

const projectContainer = document.createElement('div');
projectContainer.setAttribute('class', 'projects-container');
projectContainer.style.borderStyle = 'solid';

projectContainer.style.display = 'flex';
projectContainer.style.textAlign = 'center';
mainContainer.appendChild(projectContainer);

project.forEach(project => {
    const projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('class', 'projects-container');
    projectsContainer.style.borderStyle = 'solid';
    projectsContainer.style.cssFloat = 'left';
    projectContainer.appendChild(projectsContainer);
    
    const projectsText = document.createElement('p');
    projectsText.setAttribute('class', 'projects-text');
    projectsText.innerHTML = 'Проекты';
    projectsContainer.appendChild(projectsText);
    
    const projectsName = document.createElement('p');
    projectsName.setAttribute('class', 'projects-name');
    projectsName.innerHTML = project.name;
    projectsContainer.appendChild(projectsName);
    
    const projectsCost = document.createElement('p');
    projectsCost.setAttribute('class', 'projects-cost');
    projectsCost.innerHTML = project.cost;
    projectsContainer.appendChild(projectsCost);
    
    const projectsVolume = document.createElement('p');
    projectsVolume.setAttribute('class', 'projects-volume');
    projectsVolume.innerHTML = project.volume;
    projectsContainer.appendChild(projectsVolume);
    
    const projectsHire = document.createElement('button');
    projectsHire.setAttribute('class', 'projects-hire');
    projectsHire.setAttribute('id', project.id);
    projectsHire.innerHTML = 'Надыбать<br>проблем';
    projectsHire.addEventListener('click', function() {
        console.log(project.id);
    });
    projectsContainer.appendChild(projectsHire);    
});

/*****PROGRAMMERS*******/

const programmerContainer = document.createElement('div');
programmerContainer.setAttribute('class', 'programmers-container');
programmerContainer.style.borderStyle = 'solid';
programmerContainer.style.display = 'flex';
programmerContainer.style.textAlign = 'center';
mainContainer.appendChild(programmerContainer);

programmer.forEach(programmer => {
    const programmersContainer = document.createElement('div');
    programmersContainer.setAttribute('class', 'programmers-container');
    programmersContainer.style.borderStyle = 'solid';
    programmersContainer.style.cssFloat = 'left';
    programmersContainer.style.textAlign = 'center';
    programmerContainer.appendChild(programmersContainer);
    
    const programmersText = document.createElement('p');
    programmersText.setAttribute('class', 'programmers-text');
    programmersText.innerHTML = 'Погромисты';
    programmersContainer.appendChild(programmersText);
    
    const programmersName = document.createElement('p');
    programmersName.setAttribute('class', 'programmers-name');
    programmersName.innerHTML = programmer.name;
    programmersContainer.appendChild(programmersName);
    
    const programmersSurname = document.createElement('p');
    programmersSurname.setAttribute('class', 'programmers-surname');
    programmersSurname.innerHTML = programmer.surname;
    programmersContainer.appendChild(programmersSurname);

    const programmersLevel = document.createElement('p');
    programmersLevel.setAttribute('class', 'programmers-level');
    programmersLevel.innerHTML = programmer.level;
    programmersContainer.appendChild(programmersLevel);

    const programmersLines = document.createElement('p');
    programmersLines.setAttribute('class', 'programmers-lines');
    programmersLines.innerHTML = programmer.lines;
    programmersContainer.appendChild(programmersLines);

    const programmersCost = document.createElement('p');
    programmersCost.setAttribute('class', 'programmers-cost');
    programmersCost.innerHTML = programmer.cost;
    programmersContainer.appendChild(programmersCost);
    
    const programmersHire = document.createElement('button');
    programmersHire.setAttribute('class', 'programmers-hire');
    programmersHire.setAttribute('id', programmer.id);
    programmersHire.innerHTML = 'Взять по объявлению';
    programmersHire.addEventListener('click', function() {
        console.log(programmer.id);
        company.minus += programmer.cost;
        company.strings += programmer.lines;
        companyMinus.innerHTML = company.minus;
        companyStrings.innerHTML = company.strings;
    });
    programmersContainer.appendChild(programmersHire);
});


/*****next_turn*******/

const nextTurnButton = document.createElement('button');
nextTurnButton.setAttribute('class', 'next-turn-button');
nextTurnButton.innerHTML = 'next turn';
nextTurnButton.style.display = 'flex';
nextTurnButton.style.cssFloat = 'right';
nextTurnButton.addEventListener('click', function() {
    company.money -= company.minus;
    companyMoney.innerHTML = company.money;
    companyMinus.innerHTML = company.minus;
});
document.body.appendChild(nextTurnButton);
