import { useQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { GET_ALL_PROJECTS } from "../utils/queries"; // Add the createProject mutation
import { CREATE_PROJECT } from "../utils/mutation";
import auth from "../utils/auth";

const styles = {
    projectContainer: {
        backgroundColor: "gray",
        padding: "4 8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
    },
    projectCard: {
        padding: 8,
        margin: 4,
        backgroundColor: "white",
        cursor: "pointer", // Make the project card clickable
    },
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
    },
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 999,
    }
};

const Projects = () => {
    const [user, setUser] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const { data, loading, refetch } = useQuery(GET_ALL_PROJECTS, { variables: { userId: user?.id }, skip: !user?.id });
    const [createProject] = useMutation(CREATE_PROJECT);
    const navigate = useNavigate(); // Initialize navigate function for routing

    useEffect(() => {
        const user = auth.getUser();
        setUser(user);
    }, []);

    const handleAddProject = async () => {
        try {
            await createProject({
                variables: {
                    name: projectName,
                    description: projectDescription,
                    userId: user.id,
                },
            });
            refetch(); // Refresh project list after creation
            setIsModalOpen(false); // Close the modal after submitting
        } catch (error) {
            console.error("Error creating project", error);
        }
    };

    // Navigate to the project details page
    const handleProjectClick = (projectId) => {
        navigate(`/Task`); // Redirect to task assignment page
    };

    return (
        <div style={styles.projectContainer}>
            {data?.projects?.map((project, index) => (
                <div
                    key={index}
                    style={styles.projectCard}
                    onClick={() => handleProjectClick(project.id)} // Handle click to redirect
                >
                    {project?.name}
                </div>
            ))}

            <button onClick={() => setIsModalOpen(true)}>Add new Project</button>

            {isModalOpen && (
                <>
                    <div style={styles.overlay} onClick={() => setIsModalOpen(false)} />
                    <div style={styles.modal}>
                        <h2>Add New Project</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleAddProject();
                        }}>
                            <div>
                                <label>Project Name</label>
                                <input
                                    type="text"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Project Description</label>
                                <textarea
                                    value={projectDescription}
                                    onChange={(e) => setProjectDescription(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Create Project</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default Projects;

