import { createContext, useContext } from "react";
import AuthContext from "../auth/AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { setMessage } = useContext(AuthContext);

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
        } else {
            setMessage("something went wrong");
        }
    }


    return (
        <TaskContext.Provider value={{
            addTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;