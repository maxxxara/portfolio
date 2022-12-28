import React, { useEffect, useState } from 'react'
import Project from './Project'
import projects from '../projects.json';
const Projects = () => {
  const [data, setData] = useState(projects.projects)
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className='container' id='projects'>
        {!data ? (<p>Loading...</p>) : (
        <div className='flex flex-col gap-32'>
          {data.map((item, i) => (
            <Project key={i} project={item} imgLeft={i % 2 == 1 ? true : false} />
          ))}
        </div>
        )}
    </div>
  )
}

export default Projects