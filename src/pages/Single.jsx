import React, { useEffect, useState } from 'react'

import projects from '../projects.json';
import { useParams } from 'react-router-dom';
import Content from '../components/single/Content';
const Single = () => {
    const [data, setData] = useState(null);
    let {p_id} = useParams()
    useEffect(() => {
        setData(projects.projects.filter(item => item.id == p_id))
    }, [])
    useEffect(() => {
        console.log(data)
    }, [data])
    
  return (
    <div className='mt-16 pb-20'>
        <div className='container flex justify-between space-x-16'>
            {!data ? <p>Loading...</p> : <Content project={data[0]}/>}
        </div>
    </div>
  )
}

export default Single