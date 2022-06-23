import { FC, HTMLAttributes, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { WorkSpaceItem } from "@/page/App/components/DataWorkspace/components/WorkSpaceItem"
import { getCanvas } from "@/redux/currentApp/editor/components/componentsSelector"
import { selectAllActionItem } from "@/redux/currentApp/action/actionSelector"
import { splitLineStyle } from "./style"
import { actionListTransformer, componentListTransformer } from "./utils"

interface DataWorkspaceProps extends HTMLAttributes<HTMLDivElement> {}

export const DataWorkspace: FC<DataWorkspaceProps> = (props) => {
  const { className } = props
  const actionList = useSelector(selectAllActionItem)
  // const _actionList = actionListTransformer(actionList)
  const root = useSelector(getCanvas)
  const _componentList = componentListTransformer(root!)
  return (
    <div className={className}>
      {/*<WorkSpaceItem*/}
      {/*  title={`ACTIONS & TRANSFORMERS (${_actionList.length})`}*/}
      {/*  dataList={_actionList}*/}
      {/*/>*/}
      <div css={splitLineStyle} />
      <WorkSpaceItem
        title={`COMPONENTS (${_componentList.length})`}
        dataList={_componentList}
      />
      <div css={splitLineStyle} />
    </div>
  )
}

DataWorkspace.displayName = "DataWorkspace"
