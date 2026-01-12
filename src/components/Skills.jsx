import React from 'react'
import {
    Code2,
    Globe,
    Brain,
    Smartphone,
    Database,
    Terminal,
    GitBranch,
    Github,
    Layout,
    Trello,
    Shield,
    Wifi,
    Gamepad2,
    BarChart,
    FileCode,
    Flame
} from 'lucide-react'

const Skills = () => {
    // Skills from CV + Requested Extras (Git, GitHub, Linux, Agile)
    // Removed: Levels as per user request
    const skills = [
        // Programming Languages
        { name: "Python", icon: <Code2 size={40} color="#38bdf8" /> },
        { name: "Java", icon: <Code2 size={40} color="#f59e0b" /> },
        { name: "C#", icon: <Layout size={40} color="#a855f7" /> },
        { name: "R", icon: <BarChart size={40} color="#2563eb" /> },
        { name: "MATLAB", icon: <FileCode size={40} color="#ea580c" /> },

        // Web Development
        { name: "HTML", icon: <Globe size={40} color="#ec4899" /> },
        { name: "CSS", icon: <Globe size={40} color="#3b82f6" /> },
        { name: "JavaScript", icon: <Code2 size={40} color="#eab308" /> },
        { name: "ASP.NET", icon: <Layout size={40} color="#6366f1" /> },

        // AI & Data
        { name: "Machine Learning", icon: <Brain size={40} color="#fb7185" /> },
        { name: "Deep Learning", icon: <Brain size={40} color="#fb7185" /> },
        { name: "Artificial Intelligence", icon: <Brain size={40} color="#10b981" /> },

        // Mobile
        { name: "Flutter", icon: <Smartphone size={40} color="#38bdf8" /> },
        { name: "Dart", icon: <Code2 size={40} color="#38bdf8" /> },

        // Databases
        { name: "MySQL", icon: <Database size={40} color="#0ea5e9" /> },
        { name: "Firebase", icon: <Flame size={40} color="#fca5a5" /> },

        // Game Dev & Other
        { name: "Unity", icon: <Gamepad2 size={40} color="#fff" /> },
        { name: "Cyber Security", icon: <Shield size={40} color="#ef4444" /> },
        { name: "System and Network", icon: <Wifi size={40} color="#94a3b8" /> },

        // Requested Extras
        { name: "Git", icon: <GitBranch size={40} color="#f97316" /> },
        { name: "GitHub", icon: <Github size={40} color="#fff" /> },
        { name: "Linux", icon: <Terminal size={40} color="#cbd5e1" /> },
        { name: "Agile", icon: <Trello size={40} color="#60a5fa" /> }
    ]

    return (
        <section id="skills">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Skills & Expertise</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {skills.map((skill, index) => (
                        <div key={index} style={{
                            background: 'var(--card-bg)',
                            padding: '2rem 1rem',
                            borderRadius: '1rem',
                            border: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            gap: '0.8rem',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)'
                                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)'
                                e.currentTarget.style.borderColor = 'var(--primary-color)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                                e.currentTarget.style.borderColor = 'var(--glass-border)'
                            }}
                        >
                            <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }}>
                                {skill.icon}
                            </div>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', margin: 0 }}>
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
