import React from 'react'
import { useLoaderData } from 'react-router-dom'

const AppliedJobs = () => {

  const data = useLoaderData()
  console.log(data)
  return (
    <div>AppliedJobs</div>
  )
}

export default AppliedJobs