import editormobile from '../images/illustration-editor-mobile.svg'
import editordesktop from '../images/illustration-editor-desktop.svg'
import phones from '../images/illustration-phones.svg'
import laptopmobile from '../images/illustration-laptop-mobile.svg'
import laptopdesktop from '../images/illustration-laptop-desktop.svg'
import logo from '../images/logo.svg';




function Body() {

        return (

                <div className="bodycopy">

                        <section className="sectionone">
                                <h2 className='sectiononeh2'>Designed for the future</h2>

                                <div>
                                        <div><img className='editormobile' alt="editormobile" src={editormobile}></img>
                                                <img className='editordesktop' alt="editordesktop" src={editordesktop}></img>
                                        </div>
                                        <div className='sectiononetext'>
                                                <h2>Introducing an <span className='displayblock'>extensible editor</span></h2>
                                                <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                                                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                                                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                                                        change the looks of a blog.</p>

                                                <h2>Robust content <span className='displayblock'>management</span></h2>
                                                <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog
                                                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                                        </div>
                                </div>
                        </section>


                        <section className='sectiontwo'>
                                <div className='bigcircledesktop'>

                                        <img src={phones} className="phones" alt='phones'></img>

                                        <div className='sectiontwotext bigcircle'>
                                                <h2>State of the Art Infrastructure</h2>
                                                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                                                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                                        </div>
                                </div>

                        </section>


                        <section className='sectionthree'>

                                <div >

                                        <img src={laptopmobile} className="laptopmobile" alt='laptopmobile'></img>
                                        <img src={laptopdesktop} className="laptopdesktop" alt='laptopdesktop'></img>
                                        <div className='sectionthreetext'>
                                                <h2>Free, open, simple</h2>
                                                <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports
                                                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                                                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>

                                                <h2>Powerful tooling</h2>
                                                <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                                                        capable of producing even the most complicated sites.</p>

                                        </div>








                                </div>

                        </section>



                        <footer className='flex footer'>
                                <img className="logo" src={logo} alt='logo'></img>
                                <ul><p>Product</p>
                                        <li key='overview'>Overview</li>
                                        <li key='pricing'>Pricing</li>
                                        <li key='marketplace'>Marketplace</li>
                                        <li key='features'>Features</li>
                                        <li key='integrations'>Integrations</li>
                                </ul>
                                <ul><p>Company</p>
                                        <li key='about'>About</li>
                                        <li key='team'>Team</li>
                                        <li key='blog'>Blog</li>
                                        <li key='careers'>Careers</li>


                                </ul>
                                <ul><p>Connect</p>
                                        <li key='contact'>Contact</li>
                                        <li key='newsletter'>Newsletter</li>
                                        <li key='linkedin'>LinkedIn</li>

                                </ul>







                        </footer>

                </div>
        )




}



export default Body;