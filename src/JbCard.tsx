import { Children, MouseEventHandler, PropsWithChildren, useCallback, useState } from "react";

type JbCardType = PropsWithChildren<{
    header? : string
}>

export function JbCard ({header, children} : JbCardType) {
    const [position, setPosition] = useState({x: 0, y:0})
    const [isRadial, setRadial] = useState(false)

    const handleMovedMouse = useCallback(function (event: any) {
        setPosition({x: event.clientX, y: event.clientY})
    }, [])

    const handleEnteredMouse = useCallback(function () {
        setRadial(true)
    }, [])

    const handleLeavedMouse = useCallback(function () {
        setRadial(false)
    }, [])
    const radial_gradient = (isRadial) 
        ? {background: `radial-gradient(150px 150px at ${position.x}px ${position.y}px, rgb(221, 7, 7) 0%, rgb(0, 0, 0) 100%)`}
        : {background: `rgb(0, 0, 0)`}
    return <div 
        className="jbcard" 
        style={radial_gradient}
        onMouseMove={handleMovedMouse}
        onMouseEnter={handleEnteredMouse}
        onMouseLeave={handleLeavedMouse}
    >
        <div className="jbcard__header">
            <a href="#">{header}</a>
        </div>
        <div className="jbcard__main" >
            <p>{children}</p>
        </div>
    </div>
}