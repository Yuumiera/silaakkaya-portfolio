import React from 'react'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Me</h2>
                <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--secondary-color)', lineHeight: '1.6' }}>
                        I'm a student at Mugla Sitki Kocman University with a strong interest in Cybersecurity and Artificial Intelligence.
                        Actively developing technical skills through academic projects and self-learning.
                    </p>

                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Education</h3>
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Software Engineering | Mugla Sitki Kocman University</h4>
                        <p style={{ color: 'var(--secondary-color)', fontSize: '1rem' }}>2021 – 2026</p>
                    </div>

                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Community Involvement</h3>
                    <div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Data Science Community (2023 - 2025)</h4>
                        <ul style={{ listStylePosition: 'inside', color: 'var(--secondary-color)', marginTop: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                            <li>Board Member</li>
                            <li>Chairman of the Audit Committee</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
