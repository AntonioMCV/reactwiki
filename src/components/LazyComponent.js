import React, { useEffect, useState } from "react";

function LazyComponent() {
  console.log('%ccarga del lazy component', 'font-size: 24px; font-family: monospace; background: yellow; color: black')
  return (
    <h1>LazyComponent!</h1>
  )
}

export default function LazyComponentToLoad () {
  const [show, setShow] = useState(false)
  useEffect(function(){
    const onChange= (entries) => {
      console.log(entries);
      const el = entries[0]
      console.log(el)
      if(el.isIntersecting) {
        setShow(true)
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    observer.observe(document.getElementById("LazyTrending"))
  })
  return (
    <>
      <div id="LazyTrending">
        {show? <LazyComponent/> : null}
      </div>
    </>
  )
}
