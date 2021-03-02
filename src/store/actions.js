const ActionsGlobaldata = ({commit}, obj)=>{
    return commit('mutationsGlobaldata', obj)
}
export { ActionsGlobaldata }

// dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('mutations方法名',值)
// commit：同步操作，写法：this.$store.commit('mutations方法名',值)