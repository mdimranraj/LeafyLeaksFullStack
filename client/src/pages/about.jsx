import React from 'react';
import GreenTeam from '../components/greenteam';
import Layout from '../components/Layout/Layout';

function About () {
    return (
    <Layout>  
    <div className='about-container'>
        <div className='intro-text'>
            <h2>What do we offer ?</h2>
            <p>LeafyLeaks is an informative website that intends to provide a one stop destination for all looking for details on plants and plantations for knowledge, research or guidance on maintaining their pots, gardens, fields and farms.
                <br />
                You will find all necessary information pertaining to a plant at one place. We give you a free platform to share your own views, experiences and ideas through our blog post service. Help us out in increasing our knowledge-base, and be a part of this extensive open-source initiative.
            </p>
        </div>
        <GreenTeam /> 
    </div>
    </Layout>  
    )
}
export default About;