import { Children, PropsWithChildren } from "react";

type JbCardType = PropsWithChildren<{
    header? : string
}>

export function JbCard ({header, children} : JbCardType) {
    return <div className="jbcard">
        <div className="jbcard__header">
            <a href="#">{header}</a>
        </div>
        <div className="jbcard__main">
            <p>{children}</p>
        </div>
    </div>
}