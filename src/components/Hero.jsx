import React from 'react'

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            background: 'radial-gradient(circle at top right, rgba(251, 113, 133, 0.1), transparent 40%)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap-reverse',
                gap: '2rem'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Hi, I'm</h2>
                    <h1 style={{ fontSize: '5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, var(--primary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1.2', paddingBottom: '10px' }}>
                        Sila Akkaya
                    </h1>
                    <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '2.5rem' }}>
                        Software Engineering Student
                    </h3>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#projects" style={{
                            padding: '1rem 2rem',
                            background: 'var(--primary-color)',
                            color: '#0f172a',
                            fontWeight: '600',
                            borderRadius: '0.5rem',
                            textDecoration: 'none'
                        }}>
                            View Projects
                        </a>
                        <a href="#contact" style={{
                            padding: '1rem 2rem',
                            border: '1px solid var(--primary-color)',
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            borderRadius: '0.5rem',
                            textDecoration: 'none'
                        }}>
                            Contact Me
                        </a>
                    </div>
                </div>

                <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        width: '350px',
                        height: '350px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--primary-color)',
                        boxShadow: '0 0 50px rgba(251, 113, 133, 0.3)'
                    }}>
                        <img src="profile.jpg" alt="Sila Akkaya" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
