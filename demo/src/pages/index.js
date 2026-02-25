import { tags } from "ziko/ui"
export const head = {
    title : 'Ziko Server Home Page',
}
export const prerender = false;
const {span} = tags
const App = () =>{
    const ui = tags.p(
        span('Interactive')
            .style({color : "red"})
            .onPtrDown(e=>console.log(e.target))
            .useClient()
            ,
        span('Not Interactive'),
        // span(Ziko.a).useClient()
    )
    return ui
}


export default App