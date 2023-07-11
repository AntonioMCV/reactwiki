import React, { useEffect, useState, useRef } from "react";

function LazyComponent() {
  console.log('%ccarga del lazy component', 'font-size: 24px; font-family: monospace; background: yellow; color: black')
  return (
    <h1>LazyComponent!</h1>
  )
}

export default function LazyComponentToLoad () {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(function(){
    const onChange= (entries, observer) => {
      console.log(entries);
      const el = entries[0]
      console.log(el)
      if(el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    observer.observe(elementRef.current)
    return () => observer.disconnect()
  })
  return (
    <>
      <div ref={elementRef}>
        {show? <LazyComponent/> : null}
      </div>
    </>
  )
}
