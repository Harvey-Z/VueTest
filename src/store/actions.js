const ActionsAAA = ({commit}, obj)=>{
    console.info(obj)
    return commit('mutationsAAA', obj)
}
export {ActionsAAA}