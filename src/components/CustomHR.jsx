/* eslint-disable react/prop-types */
const CustomHR = ({color = null, large = false}) => <hr style={{
    borderColor: color ? color : "#EAF6F6",
    borderStyle: "none",
    borderTopStyle: "dotted",
    borderWidth: large ? "2px" : "8px",
    width: large ? "100%" : "7%",
    margin: "0 auto"
  }} 
/>;

  export default CustomHR;