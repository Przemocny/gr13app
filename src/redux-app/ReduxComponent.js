import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { actions } from './store'

// redux
// krótko o hooks
// krótko o jest i TDD



const onInit = (props)=>{
    const {startLoadingPosts, loadPostsWithSuccess, loadPostsWithFailure} = props

    startLoadingPosts()

    setTimeout(()=>{
        if (Math.random() > 0.5){
            loadPostsWithSuccess({posts:['post1','post2','post3']})
        }
        else{
            loadPostsWithFailure({msg:'błąd serwera, prosimy spróbować ponownie'})
        }
    }, 3000)
}

const ReduxComponent = (props) => {
    useEffect(()=>{
        onInit(props)
    },[]) // hooks

    return <div style={{padding:20}}>
        <div>ReduxComponent</div>
        <div>{JSON.stringify(props)}</div>
    </div>
}

// store redux -> props
const mapStateToProps = (bigStore) => ({ ...bigStore.posts })

const mapDispatchToActions = { ...actions }

// HOC - connect
export default connect(mapStateToProps, mapDispatchToActions)(ReduxComponent)