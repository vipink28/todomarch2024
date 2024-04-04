import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { user, setMessage } = useContext(AuthContext);

    const [allTasks, setAllTasks] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [latestTask, setLatestTask] = useState(null);

    // create task
    const addTask = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`http://localhost:5000/tasks`, config);
        console.log(response);
        if (response.status === 201) {
            setMessage("Task created successfully");
            getAllTasks(user.id);
        } else {
            setMessage("something went wrong");
        }
    }


    // update task
    const updateTask = async (formData) => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`http://localhost:5000/tasks/${formData.id}`, config);
        console.log(response);
        if (response.status === 200) {
            setMessage("Task updated successfully");
            getAllTasks(user.id);
        } else {
            setMessage("something went wrong");
        }
    }


    //get all tasks of the user

    const getAllTasks = async (id) => {
        const response = await fetch(`http://localhost:5000/tasks?userid=${id}`, { method: "GET" })
        if (response.ok) {
            const tasks = await response.json();
            setAllTasks(tasks);
            let recent = tasks.slice(-3);
            setRecentTasks(recent);
            let latest = tasks[tasks.length - 1];
            setLatestTask(latest);
        } else {
            console.log("something went wrong");
        }
    }

    useEffect(() => {
        if (user) {
            getAllTasks(user.id);
        }
    }, [user])


    return (
        <TaskContext.Provider value={{
            addTask,
            latestTask,
            recentTasks,
            allTasks,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;