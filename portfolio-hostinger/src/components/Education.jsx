import EducationItem from './EducationItem';
import img2 from '../assets/helsinki.png'
import img3 from '../assets/gomycode.webp'
import img4 from '../assets/poly.png'


const data = [
    {
      icon: img2,
      school: "University of Helsinki",
      degree: "ECTS Certification",
      loc: "Online",
      time: "2023 ~ 2024, 1yr",
      description: [
        "GPA: 5 ECTS",
        "Course: Full Stack Open 2023 "
      ],
    },
    {
      icon: img3,
      school: "GOMYCODE Nigeria",
      degree: "Certificate of completion",
      loc: "Lagos, Nigeria",
      time: "2022 ~ 2023, 1 yr",
      description: [
        "Course: Full Stack JS Boothcamp"
       ],
    },
    {
      icon: img4,
      school: "Akanu Ibiam Federal Polytechnic, Unwana",
      degree: "Higher National Diploma",
      loc: "Ebonyi, Nigeria",
      time: "2011 ~ 2016, 5 yrs",
      description: [
        "GPA: 3.26/4.00",
        "Course: Electrical/Electronics Engineering Technology",
        "Option: Power/Machine"
       ],
    }
  ];

  const Education = () => {
    return (
        <div id='education' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
           <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Education</h1>
           {data. map((item, idx) => (
             <EducationItem
               key={idx}
               icon={item.icon}
               school={item.school}
               degree={item.degree}
               loc={item.loc}
               time={item.time}
               description={item.description}
             />
           ))}
        </div>
    )
}

export default Education