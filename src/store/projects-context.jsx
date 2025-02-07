import {createContext, useReducer} from "react";

export const ProjectsContext = createContext({
    projects: [],
    tasks: [],
    selectedProject: null,
    completeTask: () => {
    },
    selectProject: () => {
    },
    createProject: () => {
    },
    deleteProject: () => {
    },
    createTask: () => {
    },
});

function generateUniqueResourceId(resources) {
    let id = Math.random()
    while (resources.find(resource => resource.id === id)) {
        id = Math.random()
    }
    return id;
}

function projectsReducer(state, action) {
    if (action.type === 'CREATE_PROJECT') {
        const project = {
            ...action.payload,
            id: generateUniqueResourceId(state.projects),
            tasks: [],
        };
        return {
            ...state,
            selectedProject: project.id,
            projects: state.projects.concat(project),
        };
    }
    if (action.type === 'DELETE_PROJECT') {
        return {
            ...state,
            selectedProject: null,
            projects: state.projects.filter(project => project.id !== action.payload),
        };
    }
    if (action.type === 'SELECT_PROJECT') {
        return {
            ...state,
            selectedProject: action.payload,
        };
    }
    if (action.type === 'CREATE_TASK') {
        const task = {
            ...action.payload,
            createdAt: new Date(),
            completed: false,
            completedAt: null,
            id: generateUniqueResourceId(state.tasks),
            projectId: state.selectedProject,
        };

        return {
            ...state,
            tasks: [...state.tasks, task],
        };
    }
    if (action.type === 'COMPLETE_TASK') {
        return {
            ...state,
            tasks: state.tasks.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        completed: true,
                        completedAt: new Date(),
                    };
                }
                return task;
            }),
        };
    }
    return state;
}

export default function ProjectsContextProvider({children}) {

    const [projectsState, projectsDispatch] = useReducer(projectsReducer, {
        projects: [
            {
                id: 1,
                name: 'Project 1',
                description: 'Description 1',
                dueDate: new Date(),
            },
            {
                id: 2,
                name: 'Project 2',
                description: 'Description 2',
                dueDate: new Date(),
            },
        ],
        tasks: [
            {
                id: 1,
                projectId: 1,
                name: 'Task 1',
                completed: false,
                createdAt: new Date(),
                completedAt: null,
            },
            {
                id: 2,
                projectId: 1,
                name: 'Task 2',
                completed: false,
                createdAt: new Date(),
                completedAt: null,

            },
            {
                id: 3,
                projectId: 2,
                name: 'Task 3',
                completed: false,
                createdAt: new Date(),
                completedAt: null,
            },
            {
                id: 4,
                projectId: 2,
                name: 'Task 4',
                completed: false,
                createdAt: new Date(),
                completedAt: null,
            },
        ],
        selectedProject: undefined,
    });

    function handleSelectProject(id) {
        projectsDispatch({
            type: 'SELECT_PROJECT',
            payload: id,
        });
    }

    function handleCreateProject(project) {
        projectsDispatch({
            type: 'CREATE_PROJECT',
            payload: project,
        });
    }

    function handelDeleteProject(projectId) {
        projectsDispatch({
            type: 'DELETE_PROJECT',
            payload: projectId,
        });
    }

    function handleCreateTask(name) {
        projectsDispatch({
            type: 'CREATE_TASK',
            payload: {
                name,
            },
        });
    }

    function handleCompleteTask(taskId) {
        projectsDispatch({
            type: 'COMPLETE_TASK',
            payload: taskId
        });
    }

    const ctxValue = {
        projects: projectsState.projects,
        tasks: projectsState.tasks,
        selectedProject: projectsState.selectedProject,
        selectProject: handleSelectProject,
        createProject: handleCreateProject,
        deleteProject: handelDeleteProject,
        createTask: handleCreateTask,
        completeTask: handleCompleteTask,
    };

    return (
        <ProjectsContext value={ctxValue}>
            {children}
        </ProjectsContext>
    );
}