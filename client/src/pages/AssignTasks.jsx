import React from "react";
import { useParams } from "react-router-dom";

const AssignTasks = () => {
    const { projectId } = useParams(); // Get the projectId from the URL

    return (
        <div>
            <h1>Assign Tasks for Project ID: {projectId}</h1>
            {/* Add task assignment functionality here */}
        </div>
    );
};

export default AssignTasks;
