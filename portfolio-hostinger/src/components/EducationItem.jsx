/* eslint-disable react/prop-types */


const EducationItem =({icon,  school,  degree, loc, time, description })=> {
    return (
        <div className=" w-full pr-10 flex flex-row gap-2 items-start justify-center">
        <img className="h-12 w-12" src={icon} />
        <div className="flex flex-col w-[100%] mb-3">
          <div className="flex flex-row justify-between items-center">
            <div className="text-lg font-bold">{school}</div>
            <div className="text-sm text-primary-content">{loc}</div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="text-lg font-bold">{degree}</div>
            <div className="text-sm text-primary-content">{time}</div>
          </div>

          <div>
            {description.map((p, idx) => (
              <p key={idx} className="">{p}</p>
            ))}
          </div>
        </div>
      </div>
  )
    
}

export default EducationItem