import { ReactElement, ReactNode } from "react"

function Loading({ open }: { open?: boolean }): ReactElement<ReactNode> {
    
  return <span className="loading loading-spinner loading-xs"></span>
}

export default Loading
