import ProjectMenu from "./components/ProjectMenu.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import {useState} from "react";

const initialProjects = [
    {
        name: "Learning React",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        createdOn: new Date(2024, 11, 29),
        tasks: [
            {
                name: "Task 1",
                completed: false
            }
        ]
    },
    {
        name: "Learning Vue",
        description: "Learning Vue.js for frontend development.",
        createdOn: new Date(2025, 1, 1),
        tasks: [
            {
                name: "My first task!",
                completed: false
            }
        ]
    }
]

function App() {

    const [projects, setProjects] = useState(initialProjects);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    function createProject(project) {
        setProjects((oldProjects) => {
            const newProjects = structuredClone(oldProjects);
            newProjects.push({
                createdOn: new Date(),
                tasks: [],
                ...project
            });
            return newProjects;
        });
        setSelectedProjectIndex(projects.length);
    }

    function selectProject(index) {
        setSelectedProjectIndex(index);
    }

    function createTask(projectIndex, taskName) {
        setProjects((oldProjects) => {
            const newProjects = structuredClone(oldProjects);
            newProjects[projectIndex].tasks.push({
                name: taskName,
                completed: false
            });
            return newProjects;
        });
    }

    function completeTask(projectIndex, taskIndex) {
        setProjects((oldProjects) => {
            const newProjects = structuredClone(oldProjects);
            newProjects[projectIndex].tasks[taskIndex].completed = true;
            return newProjects;
        });
    }

    return (
        <>
            <div className="h-full w-full flex flex-row flex-grow overflow-hidden">
                <ProjectMenu projects={projects} onCreateProject={createProject} onSelectProject={selectProject}
                             selectedProjectIndex={selectedProjectIndex}/>
                <ProjectDetails onCreateTask={createTask} projectIndex={selectedProjectIndex}
                                project={projects[selectedProjectIndex]} onCompleteTask={completeTask}/>
            </div>
        </>
    );
}

export default App;
