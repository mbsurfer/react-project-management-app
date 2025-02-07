import {use} from "react";
import {ProjectsContext} from "../store/projects-context.jsx";
import NoProjectSelected from "./NoProjectSelected.jsx";
import ProjectDetails from "./ProjectDetails.jsx";

export default function Project({showCreateProject}) {

    const {projects, tasks, selectedProject} = use(ProjectsContext);

    if (!selectedProject) {
        return <NoProjectSelected showCreateProject={showCreateProject}/>;
    }

    const project = projects.find((project) => project.id === selectedProject);
    const projectTasks = tasks.filter((task) => task.projectId === selectedProject);

    return <ProjectDetails project={project} tasks={projectTasks}/>;
}