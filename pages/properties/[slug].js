import React from 'react';
import Image from 'next/image';
import Carousel from '../../components/properties/Carousel';
import { propertiesArray } from '../../data/propertiesDetails';

export const getStaticPaths = async () => {
    const properties = propertiesArray;
    const paths = properties.map(property => {
        return {
            params: { slug: property.slug }
        }
    })

    return { paths, fallback: false }    
}

export const getStaticProps = async (ctx) => {
    const slug = ctx.params.slug;
    const property = propertiesArray.filter(property => property.slug === slug)[0];
    return {
        props: { property }
    }
}

const Property = ({ property }) => {
    return (
        <>
            <section className="property-details-cont">
                <div className="property-text">
                    <h2>{property.name}</h2>                
                    <h4>{property.address}</h4>                    
                    <article>
                        <p>{property.description}</p>
                    </article>  
                </div>
                <div className="property-img-container">
                    <Image 
                        src={property.image}
                        alt="Office building"
                        objectFit="contain"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="property-detail-img"
                    />
                </div>
                          
            </section>
            <section>
                <Carousel />
            </section>
        </>
    )
}

export default Property;