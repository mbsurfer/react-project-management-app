import ProjectMenu from "./components/ProjectMenu.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import {useRef, useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProjectModal from "./components/NewProjectModal.jsx";

function generateUniqueResourceId(resources) {
    let id = Math.random()
    while (resources.find(resource => resource.id === id)) {
        id = Math.random()
    }
    return id;
}

function findResourceById(resource, id) {
    const index = resource.findIndex(p => p.id === id);
    return index >= 0 ? index : null;
}

function App() {

    const [projects, setProjects] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState();

    const dialog = useRef();

    function showCreateProject() {
        dialog.current.showModal();
    }

    function createProject(project) {
        const newProjectId = generateUniqueResourceId(projects);
        setProjects((oldProjects) => {
            const newProjects = structuredClone(oldProjects);
            newProjects.push({
                id: newProjectId,
                tasks: [],
                ...project
            });
            return newProjects;
        });

        // select the new project
        setSelectedProjectId(newProjectId);
    }

    function deleteProject(project) {
        setProjects((oldProjects) => {
            const newProjects = structuredClone(oldProjects);
            const projectIndex = findResourceById(newProjects, project.id);
            newProjects.splice(projectIndex, 1);
            return newProjects;
        });
        setSelectedProjectId(null);
    }

    function selectProject(id) {
        setSelectedProjectId(id);
    }


    function createTask(project, taskName) {
        const newTaskId = generateUniqueResourceId(project.tasks);
        setProjects((oldProjects) => {
            const newProjects = structuredClone(oldProjects);
            const projectIndex = findResourceById(newProjects, project.id);
            newProjects[projectIndex].tasks.push({
                id: newTaskId,
                name: taskName,
                completed: false,
                completedAt: null,
                createdAt: new Date()
            });
            return newProjects;
        });
    }

    function completeTask(project, task) {
        setProjects((oldProjects) => {
            const newProjects = structuredClone(oldProjects);
            const projectIndex = findResourceById(newProjects, project.id);
            const newProject = newProjects[projectIndex];
            const taskIndex = findResourceById(newProject.tasks, task.id);

            newProject.tasks[taskIndex].completed = true;
            newProject.tasks[taskIndex].completedAt = new Date();

            return newProjects;
        });
    }

    return (
        <>
            <main className="h-full w-full flex flex-row flex-grow overflow-hidden">
                <ProjectMenu projects={projects} selectedProjectId={selectedProjectId}
                             showCreateProject={showCreateProject} onSelectProject={selectProject}/>
                {(selectedProjectId) && <ProjectDetails onCreateTask={createTask}
                                                        project={projects.find(p => p.id === selectedProjectId)}
                                                        onCompleteTask={completeTask}
                                                        onDeleteProject={deleteProject}
                />}
                {(!selectedProjectId) && <NoProjectSelected showCreateProject={showCreateProject}/>}
                <NewProjectModal ref={dialog} onCreateProject={createProject}/>
            </main>
        </>
    );
}

export default App;
