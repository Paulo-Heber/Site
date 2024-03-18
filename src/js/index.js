let inputsConteiner = document.getElementsByClassName('projectSelection')
let projects = document.getElementsByClassName('projectInfos')
let inputs = document.querySelectorAll('input')
let projectsSelectors = Array.from(inputs);

inputsConteiner[0].addEventListener('click', () => (
    projectsSelectors.map((input, index) => {
        input.checked ? projects[index].classList.remove('hidden') : projects[index].classList.add('hidden')
    })
))


