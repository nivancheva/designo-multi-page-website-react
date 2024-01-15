import './Company.css'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import Countries from '../components/Countries/Countries'

export default function Company() {
    return (
        <div className="">
            <div className='company-sections about'>
                <picture className='company-img'>
                    <source
                        srcSet="/about/desktop/image-about-hero.jpg"
                        media="(min-width:864px)"
                    />
                    <source
                        srcSet="/about/tablet/image-about-hero.jpg"
                        media="(min-width:640px)"
                    />
                    <img src="/about/mobile/image-about-hero.jpg" />
                </picture>
              
                <div className='about-us_text padding-company'>
                    <h2>About Us</h2>
                    <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
                </div>
            </div>

            <div className='company-sections'>
                <picture className='company-img'>
                    <source
                        srcSet="/about/desktop/image-world-class-talent.jpg"
                        media="(min-width:864px)"
                    />
                    <source
                        srcSet="/about/tablet/image-world-class-talent.jpg"
                        media="(min-width:640px)"
                    />
                    <img src="/about/mobile/image-world-class-talent.jpg" />
                </picture>

                <div className='world-talant_text padding-company'>
                    <h2>World-class talent</h2>
                    <p className='mb-[1.5rem]'>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                    <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.</p>
                </div>
            </div>

            <Countries />

            <div className='company-sections section-gap'>
                <picture className='company-img'>
                    <source
                        srcSet="/about/desktop/image-real-deal.jpg"
                        media="(min-width:864px)"
                    />
                    <source
                        srcSet="/about/tablet/image-real-deal.jpg"
                        media="(min-width:640px)"
                    />
                    <img src="/about/mobile/image-real-deal.jpg" />
                </picture>

                <div className='real-deal_text padding-company'>
                    <h2>The real deal</h2>
                    <p className='mb-[1.5rem]'>As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                    <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </div>
            </div>

            <div className='translateY container'>
                <GetInTouch />
            </div>
        </div>
    )
}