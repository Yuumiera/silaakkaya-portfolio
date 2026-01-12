import React from 'react'
import { FolderGit2, ExternalLink } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: "SwapShelf",
            description: "Book Exchange Mobile Application. A platform for users to swap books locally.",
            tags: ["Mobile", "Flutter", "Firebase"],
            links: { github: "#" },
            image: "/projects/swapshelf.png"
        },
        {
            title: "Roomie",
            description: "Student Dormitory & Roommate Finder Platform. Helps students find compatible roommates and housing.",
            tags: ["Mobile", "Flutter", "Firebase", "Node.js"],
            links: { github: "#" },
            image: "/projects/roomie.jpg"
        },
        {
            title: "Timora",
            description: "HCI-Based Blog Web Application. Focuses on accessibility and user experience design principles.",
            tags: ["Web", "HCI", "Design"],
            links: { github: "#" },
            image: "/projects/timora.png"
        },
        {
            title: "AI-Driven Food Crisis Prediction",
            description: "Deep Learning Project utilizing satellite and climate data to predict food crises.",
            tags: ["AI", "Deep Learning", "Python"],
            links: { github: "#" },
            image: "/projects/food-crisis.png"
        },
        {
            title: "Credit Score Classification",
            description: "Machine Learning Project to classify credit scores based on financial history.",
            tags: ["ML", "Data Science", "Python"],
            links: { github: "#" },
            image: "/projects/credit-score.jpg"
        },
        {
            title: "Brain Tumor Detection and Analysis Using MATLAB",
            description: "Image-processing application that analyzes brain MRI images to detect tumors using MATLAB.",
            tags: ["MATLAB", "Image Processing", "Healthcare"],
            links: { github: "#" },
            image: "/projects/brain-tumor.png"
        }
    ]

    return (
        <section id="projects">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Projects</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{
                            background: 'var(--card-bg)',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            border: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)'
                                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(56, 189, 248, 0.2)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            {/* Project Image */}
                            {project.image ? (
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            ) : (
                                <div style={{ height: '200px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FolderGit2 size={60} color="var(--primary-color)" style={{ opacity: 0.5 }} />
                                </div>
                            )}

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>


                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>{project.title}</h3>
                                <p style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} style={{
                                            fontSize: '0.8rem',
                                            color: 'var(--primary-color)',
                                            fontFamily: 'monospace'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
