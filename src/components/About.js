import React, { useContext, useEffect } from "react";
import NoteContext from "../contex/notes/noteContext";

const About = () => {
  var a = useContext(NoteContext);
//   useEffect(() => {
//     a.update();
//   }, []);
  return (
    <div>
      This is about {a.state.name} and she is in class {a.state.class}
    </div>
  );
};

export default About;
