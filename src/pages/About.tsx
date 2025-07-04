import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <h1>About Me</h1>

            <div className='container'>
                <p>Hello! I’m the heart behind this cozy little cottagecore space.</p>
                <p>
                    I adore rainy mornings, wildflowers, handwritten letters, and warm bread by the window.
                    This website is my journal of soft moments and simple joys.
                </p>
                <p
                    style={{
                        fontFamily: "'Dancing Script', 'cursive'",
                        fontSize: '1.4rem',
                        marginTop: '2rem',
                    }}
                >
                    “In every walk with nature, one receives far more than he seeks.” — John Muir
                </p>

                <h2 style={{ marginTop: '2rem', color: '#a47148' }}>My Little Joys 🌸</h2>

                <ul style={{ listStyleType: 'none', padding: 0, fontStyle: 'italic' }}>
                    <li>🍞 Warm bread out of the oven</li>
                    <li>📚 Old storybooks with faded covers</li>
                    <li>🌧 Rainy afternoons and candlelight</li>
                    <li>🧺 Hanging fresh laundry in the sun</li>
                    <li>🌼 Wildflowers in glass jars</li>
                </ul>

                <a href='index.html' className='back'>
                    ← Back to Home
                </a>
            </div>

            {/* 🌸 Floating petals */}
            <div className='petals'>
                <div className='petal'></div>
                <div className='petal'></div>
                <div className='petal'></div>
                <div className='petal'></div>
                <div className='petal'></div>
            </div>

            <Link to='journal.html'>My Journal</Link>
        </>
    );
};

export default About;