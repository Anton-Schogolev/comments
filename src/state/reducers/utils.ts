import {CommentType} from "./reducer";

export const addComment = (comms: CommentType[], newCom: CommentType): CommentType[] => {
    if (!newCom.parentIds)
        return [...comms, newCom]
    return comms.map(el => {
        if (newCom.parentIds?.includes(el.id)) {
            const lastEl = newCom.parentIds?.length - 1;
            if (newCom.parentIds[lastEl] === el.id)
                return {
                    ...el,
                    childrenCom: [...(el.childrenCom || []), newCom]
                }
            return {
                ...el,
                childrenCom: el.childrenCom && addComment(el.childrenCom, newCom)
            }
        }
        return el;
    })
}
