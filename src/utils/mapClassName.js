const mapClassNameToArray = (className = '', style) => {
  const clsArray = className.trim().split(/\s/);
  return clsArray.map((cls) => style[cls]);
};

export default mapClassNameToArray;
