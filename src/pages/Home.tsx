import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
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