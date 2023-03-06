import { PROJECTS } from "../../data/PROJECTS";

export const AllProjects = () => {
    return PROJECTS;
}

export const ListedProjects = () => {
    const dividedProjects = []
    const projects = AllProjects();
    while (projects.length) {
        //call carousel for each slide
        const ProjPart = projects.splice(0,3);
        dividedProjects.push(ProjPart);
    }
    return dividedProjects;
}