import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Index from './pages/index/index'
import Login from './pages/login'
import SobreNos from './pages/sobre nos'
import AddEndereco from './pages/endereço/adicionar-endereco';
import Parcelamento from './pages/parcelamento';

export default function Final() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Index} />
            <Route path='/login' exact={true} component={Login} />
            <Route path='/sobre-nos' component={SobreNos} />
            <Route path='/add-endereco' component={AddEndereco} />
            <Route path='/parcelamento' component={Parcelamento} />
        </Switch>
    </BrowserRouter>
    )
}