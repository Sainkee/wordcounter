import React, { useState } from "react";

export default function About() {
    const [show,setshow] = useState(true)
  return (
    <div className="flex justify-center w-[80%] gap-5 mx-auto flex-col mt-[10rem] text-white">
      <h2 onClick={()=>setshow(!show)} className="cursor-pointer text-2xl border p-2 ">analyze your text</h2>
      <span className={`${!show?"hidden":"block"}`}>
        Textutils gives you a way to analyze your text quickly and efficently.It
        let you to count word, count charecters or reading time required.It has
        both light and dark mode for better compartable.
      </span>
      <h2 onClick={()=>setshow(!show)} className="cursor-pointer text-2xl border p-2">free to use</h2>
      <span className={`${!show?"hidden":"block"}`}>
        TextUtils is a free charecter counter tool that provided instant
        charecter count and word count statics for a given text. TextUtils
        reports the number of words and charecter. Thus it is suitable for
        writing text with word / charecter limit.
      </span>
      <h2 onClick={()=>setshow(!show)} className="cursor-pointer text-2xl border p-2">browser compatible</h2>
      <span className={`${!show?"hidden":"block"}`}>
        This word counter software works in any web browser such as Chrome ,
        Firefox ,Internet Explorer ,Safari,Opera etc.
      </span>
    </div>
  );
}
