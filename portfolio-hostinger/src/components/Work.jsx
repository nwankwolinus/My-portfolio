// eslint-disable-next-line no-unused-vars
import React from 'react'
import WorkItem from '../components/WorkItem'

const data = [
    {
        year: 2018,
        title:  'Senior Sales Engineer at Power Projects Ltd',
        duration: 'till date',
        details: 
        'Motivated Sales Associate with 5 years of experience boosting sales and customer loyalty through individualized service. Resourceful expert at learning customer needs, directing to desirable merchandise and upselling to meet sales quotas. Committed to strengthening customer experiences with positivity and proffessionalism when answering requests and processing sales.'
    },
    {
        year: 2022,
        title:  'Project Engineer at Power Projects Ltd',
        duration: 'till date',
        details: 
        'Well seasoned project personel in preparing, scheduling, coordinating and monitoring projects to comply to applicable best practices, QA/QC policies, performance standards and specifications. Interacting daily with the clients to interpret their needs and requirements and representing them in the field.'

    },
    {
        year: 2020,
        title:  'Web Developer',
        duration: 'Freelancing',
        details: 
        'Passionate developer with intuitive understanding in designing, creating, testing and deployment of a complete web application from start to finish. Developing efficient and maintainable software according to business objectives and needs of clients. Developing functional databases, applications and servers to support websites on back-end'

    },

]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
           <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
           {data. map((item, idx) => (
             <WorkItem
               key={idx}
               year={item.year}
               title={item.title}
               duration={item.duration}
               details={item.details}
             />
           ))}
        </div>
    )
}

export default Work