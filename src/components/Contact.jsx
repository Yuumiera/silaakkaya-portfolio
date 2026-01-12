import React from 'react'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Get In Touch</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <a href="mailto:silakkaya12@gmail.com" style={{
                        padding: '2rem',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        textDecoration: 'none',
                        color: 'var(--text-color)'
                    }}>
                        <Mail size={40} color="var(--primary-color)" />
                        <span style={{ fontWeight: '500' }}>silakkaya12@gmail.com</span>
                    </a>

                    <a href="https://www.linkedin.com/in/silaakkaya" target="_blank" rel="noopener noreferrer" style={{
                        padding: '2rem',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        textDecoration: 'none',
                        color: 'var(--text-color)'
                    }}>
                        <Linkedin size={40} color="var(--primary-color)" />
                        <span style={{ fontWeight: '500' }}>LinkedIn</span>
                    </a>

                    <a href="https://github.com/Yuumiera" target="_blank" rel="noopener noreferrer" style={{
                        padding: '2rem',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        textDecoration: 'none',
                        color: 'var(--text-color)'
                    }}>
                        <Github size={40} color="var(--primary-color)" />
                        <span style={{ fontWeight: '500' }}>GitHub</span>
                    </a>

                    <div style={{
                        padding: '2rem',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        color: 'var(--text-color)'
                    }}>
                        <Phone size={40} color="var(--primary-color)" />
                        <span style={{ fontWeight: '500' }}>+90 505 010 8583</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
