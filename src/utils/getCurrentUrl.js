const getCurrentUrl = () => {
    const currentUrl = window.location.hash.split('#')
    const pathSegs = currentUrl.length > 1 ? currentUrl.slice(1) : "/";
    return `${pathSegs}`;
  }
  
  export default getCurrentUrl;