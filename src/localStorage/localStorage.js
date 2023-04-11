const getJobIds = () => {
  const jobIds = localStorage.getItem("jobIds");
  return JSON.parse(jobIds);
};

const setJobIds = (id) => {
  const jobIds = getJobIds();
  if (jobIds) {
    if (jobIds.includes(id)) {
      return "exists";
    } else {
      const copyJobIds = [...jobIds, id];
      localStorage.setItem("jobIds", JSON.stringify(copyJobIds));
      return "successful";
    }
  } else {
    const newJobIds = [id];
    localStorage.setItem("jobIds", JSON.stringify(newJobIds));
    return "successful";
  }
};

export { getJobIds, setJobIds };
