import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Index from './pages/index/index'
export default function Final() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Index} />
        </Switch>
    </BrowserRouter>
    )
}