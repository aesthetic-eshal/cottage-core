import { Link } from 'react-router-dom';
// import '/output.css'

const Home = () => {
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
            <header>
                <h1>Welcome to the Cottage</h1>
                <p>A Cozy Corner of The Internet</p>
                <Link to='/about'>About Me</Link>
            </header>

            <main>
                <section className='intro'>
                    <img src='/sky.jpg' alt='Cottage in nature' />
                    <div className='text'>
                        <div className='petals'></div>
                        <div className='recipe'>
                            <h3>🍞 Rustic Country Bread</h3>
                            <ul>
                                <li>3 cups flour</li>
                                <li>1 tsp salt</li>
                                <li>1 tsp instant yeast</li>
                                <li>1.5 cups warm water</li>
                            </ul>
                            <p className='directions'>
                                Mix all ingredients. Cover and let rise overnight. Bake at 450°F for 30 mins
                                in a Dutch oven. Let cool on a linen towel.
                            </p>
                        </div>

                        <h2>Embrace Simplicity</h2>
                        <p>
                            Cottagecore celebrates a return to traditional skills and a simpler lifestyle, surrounded by nature,
                            flowers, and tea.
                        </p>
                        <button id='teaButton'>Brew Some Tea 🍵</button>
                    </div>
                </section>

                <section className='blog'>
                    <h2>🌼 Cottage Journal</h2>

                    <article className='post'>
                        <h3>A Morning in the Garden</h3>
                        <p className='date'>July 3, 2025</p>
                        <p>
                            The sun rose gently over the hills as I picked fresh lavender and rosemary. The birds sang like tiny
                            flutes in the breeze. I brewed chamomile tea and journaled under the old oak tree.
                        </p>
                    </article>

                    <article className='post'>
                        <h3>Rainy Day Musings</h3>
                        <p className='date'>
                            <span className='icon'>🖋️</span> June 15, 2025
                        </p>
                        <p>
                            The rain whispered against the cottage windows all day. I spent hours knitting a cream wool shawl and
                            reading old letters by candlelight. A perfect slow day.
                        </p>
                    </article>

                    <article className='post'>
                        <h3>Baking with Berries</h3>
                        <p className='date'>June 28, 2025</p>
                        <p>
                            Today I baked a wild blackberry tart. The smell of vanilla and butter filled the cottage. I shared a
                            slice with the neighbor's cat, who purred in approval.
                        </p>
                    </article>

                    <div className='recipe'>
                        <h3>🍞 Rustic Country Bread</h3>
                        <ul>
                            <li>3 cups flour</li>
                            <li>1 tsp salt</li>
                            <li>1 tsp instant yeast</li>
                            <li>1.5 cups warm water</li>
                        </ul>
                        <p className='directions'>
                            Mix all ingredients. Cover and let rise overnight. Bake at 450°F for 30 mins in a Dutch oven. Let cool
                            on a linen towel.
                        </p>
                    </div>

                    <aside className='quote'>
                        <p>
                            'Adopt the pace of nature — her secret is patience.' <span>– Ralph Waldo Emerson</span>
                        </p>
                    </aside>
                </section>

                {/* 📷 Photo Gallery */}
                <section id='photo-gallery' className='section'>
                    <h2>Photo Gallery</h2>
                    <div className='gallery-grid'>
                        <img src='/Aesthetic.jpg' alt='Wildflower Field' />
                        <img src='/image.webp' alt='Vintage Tea Set' />
                        <img src='/pintrest.jpg' alt='Cottage Window' />
                    </div>
                </section>

                {/* 🧵 Craft & DIY Corner */}
                <section id='craft-diy' className='section'>
                    <h2>Craft & DIY Corner</h2>
                    <div className='craft-list'>
                        <article>
                            <h3>Pressed Flower Bookmarks</h3>
                            <p>Learn to make delicate bookmarks with wildflowers and parchment paper.</p>
                            <a href='#'>View Tutorial</a>
                        </article>
                        <article>
                            <h3>Beeswax Candles</h3>
                            <p>A step-by-step guide to hand-rolling rustic beeswax candles.</p>
                            <a href='#'>View Tutorial</a>
                        </article>
                    </div>
                </section>
            </main>

            <footer>
                <p>Handcrafted with love ◡̈</p>
            </footer>
        </>
    );
};

export default Home;