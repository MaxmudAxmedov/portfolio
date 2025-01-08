const elContactId = document.querySelector(".contact-id");
const elContactSection = document.querySelector(".contact");
const elProject = document.querySelector(".project-list");
const elSkills = document.querySelector(".skills-box-list");
import { projects, skills } from "./data.js";

elContactId.addEventListener("click", () => {
    let count = 0;

    const intervalId = setInterval(() => {
        if (count < 2) {
            elContactSection.style.borderColor = "red";
            setTimeout(() => {
                elContactSection.style.borderColor = "white";
            }, 300);
            count++;
        } else {
            clearInterval(intervalId);
            elContactSection.style.borderColor = "white";
        }
    }, 500);
});

function renderSkills(array, node) {
    node.innerHTML = "";
    array.forEach((i) => {
        node.innerHTML += `
            <li>
                <img src=${i.icon} alt="" />
                <strong>${i.title}</strong>
            </li>
        `;
    });
}

renderSkills(skills, elSkills);

function renderProjects(array, node) {
    node.innerHTML = "";
    array.forEach((i) => {
        node.innerHTML += `
        <li class="project-list--item item">
        <img
            src=${i.image}
            alt=""
            class="item-img"
        />
        <div class="item-content">
            <h3 class="item-content-title">${i.title}</h3>
            <p>${i.info}</p>

            <ul class="item-content--list">
                <li class="item-content--list__item">
                    ${i.technology}
                </li>
            </ul>
            <span class="item-content--links">
                <a
                    target="_blank"
                    href=${i.site}
                    >Site</a
                >
                <a
                    target="_blank"
                    href=${i.github}
                    >Github</a
                >
            </span>
        </div>
    </li>
    
        `;
    });
}
renderProjects(projects, elProject);
