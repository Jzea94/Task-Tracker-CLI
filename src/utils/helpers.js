

export const setDate = () => {

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  }
  const currentTime = new Date().toLocaleString('en-US', options);

  return currentTime;
}


export const setId = () => {
  
}