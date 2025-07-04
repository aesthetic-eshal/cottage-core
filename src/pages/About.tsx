import { Link } from 'react-router-dom'
// import '/output.css'

const About = () => {
    return (
        <>
            <style>
                {`
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

/* CSS Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Crimson Text', serif;
    background-color: #fffaf4;
    color: #5b423a;
    line-height: 1.7;
    overflow-x: hidden;
}

/* Typography */
h1 {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(2rem, 5vw, 3rem);
    color: #8b5e3c;
    text-align: center;
    margin-bottom: 1rem;
}

h2 {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(1.5rem, 4vw, 2.2rem);
    color: #6b5c48;
    margin-bottom: 1rem;
}

h3 {
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    color: #5a4033;
    margin-bottom: 0.5rem;
}

/* Header */
header {
    background: linear-gradient(135deg, #f1cebe 0%, #e8d5c4 100%);
    text-align: center;
    padding: clamp(1rem, 4vw, 3rem);
    border-bottom: 2px dashed #734c3f;
    position: relative;
}

header p {
    font-style: italic;
    color: #7e5951;
    margin-top: 0.5rem;
}

/* Main Content */
main {
    padding: clamp(1rem, 4vw, 2rem);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: clamp(1rem, 4vw, 2rem);
}

/* Introduction Section */
.intro {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: clamp(1rem, 4vw, 2rem);
    margin-bottom: 3rem;
    background-color: #fff8f3;
    padding: clamp(1rem, 4vw, 2rem);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.intro img {
    flex: 1 1 300px;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.text {
    flex: 1 1 300px;
    min-width: 250px;
}

/* Buttons */
button {
    background: linear-gradient(135deg, #d3c0b0 0%, #c4b5a3 100%);
    border: none;
    padding: clamp(0.6rem, 2vw, 1rem) clamp(1rem, 3vw, 1.8rem);
    border-radius: 8px;
    cursor: pointer;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    color: #3d2b1f;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button:hover {
    background: linear-gradient(135deg, #bfa58a 0%, #b5a085 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Blog Section */
.blog {
    max-width: 900px;
    margin: 4rem auto;
    background-color: #fffaf3;
    border: 2px dashed #d8cbb7;
    padding: clamp(1rem, 4vw, 2rem);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.blog h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.post {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px dotted #cbbfae;
}

.date {
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    color: #a3917a;
    font-style: italic;
    margin-bottom: 0.5rem;
}

.date .icon {
    margin-right: 6px;
    color: #a3917a;
}

/* Recipe Cards */
.recipe {
    background-color: #fff8f3;
    padding: clamp(1rem, 3vw, 1.5rem);
    border: 1px solid #e3dcd1;
    border-radius: 10px;
    margin-top: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
}

.recipe h3 {
    margin-top: 0;
    color: #6e4b3a;
}

.recipe ul {
    list-style-type: circle;
    margin-left: 1.2rem;
    padding-left: 0;
    color: #4e3b30;
}

.recipe .directions {
    margin-top: 1rem;
    font-style: italic;
    color: #7a6151;
}

/* Quote Section */
.quote {
    margin-top: 3rem;
    padding: clamp(1rem, 3vw, 1.5rem);
    background-color: #f3efe7;
    border-left: 4px solid #cdbba3;
    font-size: clamp(0.9rem, 2vw, 1rem);
    color: #5a4635;
    text-align: center;
    border-radius: 6px;
    position: relative;
}

.quote span {
    display: block;
    margin-top: 0.5rem;
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    color: #9d8974;
}

/* Gallery */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: clamp(0.8rem, 2vw, 1.5rem);
    margin: 2rem 0;
}

.gallery-grid img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border: 4px solid #e2dacb;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.gallery-grid img:hover {
    transform: scale(1.05);
}

/* Craft Section */
.craft-list article {
    background-color: #fffaf3;
    padding: clamp(1rem, 3vw, 1.5rem);
    margin-bottom: 1.5rem;
    border: 1px solid #dcd1b4;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
}

.craft-list article:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.craft-list h3 {
    color: #7c6f57;
}

.craft-list a {
    display: inline-block;
    margin-top: 10px;
    color: #927b5b;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.craft-list a:hover {
    color: #8b5e3c;
}

/* Sections */
.section {
    padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 3vw, 2rem);
    max-width: 1000px;
    margin: 0 auto;
    background-color: #fdfaf6;
    border-top: 2px dashed #c2b9a1;
}

.section h2 {
    text-align: center;
    margin-bottom: 2rem;
}

/* Polaroid Style */
.polaroid {
    width: 100%;
    max-width: 250px;
    padding: 10px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #aaa;
    text-align: center;
    font-style: italic;
    margin: 1rem auto;
    transform: rotate(-2deg);
    transition: transform 0.3s ease;
}

.polaroid:hover {
    transform: rotate(0deg) scale(1.05);
}

/* Floating Petals Animation */
.petals {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1000;
}

.petal {
    position: absolute;
    width: clamp(15px, 3vw, 25px);
    height: clamp(15px, 3vw, 25px);
    background: radial-gradient(circle, #f4a7b9 0%, #e8839c 100%);
    border-radius: 50% 0 50% 0;
    opacity: 0.6;
    animation: fall 12s linear infinite;
}

.petal:nth-child(1) {
    left: 10%;
    animation-delay: 0s;
}

.petal:nth-child(2) {
    left: 30%;
    animation-delay: 2s;
}

.petal:nth-child(3) {
    left: 50%;
    animation-delay: 4s;
}

.petal:nth-child(4) {
    left: 70%;
    animation-delay: 6s;
}

.petal:nth-child(5) {
    left: 90%;
    animation-delay: 8s;
}

@keyframes fall {
    0% {
        top: -10%;
        transform: rotate(0deg);
    }

    100% {
        top: 110%;
        transform: rotate(360deg);
    }
}

/* Back Button */
a.back {
    display: inline-block;
    margin-top: 2rem;
    color: #8b5e3c;
    text-decoration: none;
    border: 1px solid #8b5e3c;
    padding: clamp(0.5rem, 2vw, 0.8rem) clamp(0.8rem, 2vw, 1.2rem);
    border-radius: 10px;
    background-color: #fdf1e7;
    transition: all 0.3s ease;
    font-size: clamp(0.9rem, 2vw, 1rem);
}

a.back:hover {
    background-color: #f2ded0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Footer */
footer {
    text-align: center;
    padding: clamp(1rem, 3vw, 2rem);
    background: linear-gradient(135deg, #f1cebe 0%, #e8d5c4 100%);
    margin-top: 3rem;
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    color: #7e6651;
}

/* Responsive Design */
@media (max-width: 768px) {
    .intro {
        flex-direction: column;
        text-align: center;
    }

    .gallery-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .blog {
        margin: 2rem auto;
    }

    .section {
        border-top: none;
        margin-bottom: 2rem;
    }
}

@media (max-width: 480px) {
    .gallery-grid {
        grid-template-columns: 1fr;
    }

    .intro img {
        max-width: 100%;
    }

    .recipe ul {
        margin-left: 0.8rem;
    }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    body {
        background-color: #fff;
        color: #000;
    }

    .blog,
    .recipe,
    .quote {
        border: 2px solid #000;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    .petal {
        animation: none;
    }

    button:hover,
    .polaroid:hover,
    .gallery-grid img:hover {
        transform: none;
    }
}`}
            </style>

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

                <Link to='/' className='back'>
                    ← Back to Home
                </Link>
                <Link to='/journal' className='back' style={{ marginLeft: '20px' }}>My Journal</Link>
            </div>

            {/* 🌸 Floating petals */}
            <div className='petals'>
                <div className='petal'></div>
                <div className='petal'></div>
                <div className='petal'></div>
                <div className='petal'></div>
                <div className='petal'></div>
            </div>

        </>
    );
};

export default About;