import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Index from './pages/index/index'
import Login from './pages/login'

export default function Final() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Index} />
            <Route path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
    )
}