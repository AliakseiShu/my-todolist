import React from "react";
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";

export default {
    title: 'EditableSpan/Component',
    component: EditableSpan,
}

const changeCallback = action("Changed value")

export const EditableSpanExample = () => {
    return  <EditableSpan onChange={changeCallback} value={'Start value'}/>
}