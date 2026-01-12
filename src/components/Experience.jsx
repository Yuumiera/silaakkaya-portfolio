import React from 'react'

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Experience</h2>

                <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--primary-color)' }}>
                    {/* Item 1 */}
                    <div style={{ marginBottom: '3rem', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            left: '-2.6rem',
                            top: '0',
                            width: '1.2rem',
                            height: '1.2rem',
                            background: 'var(--primary-color)',
                            borderRadius: '50%'
                        }}></div>

                        <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Software Engineering Intern</h3>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>WORLDNMORE | Izmir</h4>
                        <span style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', display: 'block', marginBottom: '1rem' }}>Jul 2024 – Aug 2024</span>

                        <p style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>
                            Worked on a web application project for a corporate company using ASP.NET technology.
                        </p>
                        <ul style={{ listStylePosition: 'inside', color: 'var(--secondary-color)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Actively contributed to both frontend and backend development.</li>
                            <li>Provided technical and design solutions for the project.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
