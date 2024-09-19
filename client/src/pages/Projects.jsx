import { useQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { GET_ALL_PROJECTS } from "../utils/queries"; 
import { CREATE_PROJECT, UPDATE_PROJECT } from "../utils/mutation";
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
        fontFamily: "'Poppins', sans-serif", 
    },
    projectCard: {
        padding: 8,
        margin: 4,
        backgroundColor: "white",
        cursor: "pointer",
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
        borderRadius: "8px",
        width: "400px",
        textAlign: "center", 
        fontFamily: "'Poppins', sans-serif", 
    },
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 999,
    },
    input: {
        width: "100%", 
        padding: "10px",
        margin: "10px 0",
        borderRadius: "4px",
        border: "1px solid #ccc",
        boxSizing: "border-box", 
        fontFamily: "'Poppins', sans-serif", 
    },
    label: {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
        color: "orange", 
        textAlign: "left",
        fontFamily: "'Poppins', sans-serif", 
    },
    button: {
        backgroundColor: "orange", 
        color: "white", 
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        marginTop: "20px",
        transition: "background-color 0.3s ease", 
        fontFamily: "'Poppins', sans-serif", 
    },
    buttonHover: {
        backgroundColor: "#e67600", 
    }
};

const Projects = () => {
    const [user, setUser] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const { data, loading, refetch } = useQuery(GET_ALL_PROJECTS, { variables: { userId: user?.id }, skip: !user?.id });
    const [createProject] = useMutation(CREATE_PROJECT);
    const navigate = useNavigate();

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
            refetch(); 
            setIsModalOpen(false); 
        } catch (error) {
            console.error("Error creating project", error);
        }
    };

    const handleProjectClick = (projectId) => {
        navigate(`/Task?project=${projectId}`);
    };

    return (
        <div style={styles.projectContainer}>
            {data?.projects?.map((project, index) => (
                <div
                    key={index}
                    style={styles.projectCard}
                    onClick={() => handleProjectClick(project.id)} 
                >
                    {project?.name}
                </div>
            ))}

            <button
                style={styles.button}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                onClick={() => setIsModalOpen(true)}
            >
                Add New Project
            </button>

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
                                <label style={styles.label}>Project Name</label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label style={styles.label}>Project Description</label>
                                <textarea
                                    style={styles.input}
                                    value={projectDescription}
                                    onChange={(e) => setProjectDescription(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" style={styles.button}>
                                Create Project
                            </button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default Projects;
