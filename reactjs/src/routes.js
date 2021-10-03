import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Index from './pages/index/index'
import Login from './pages/login'
import SobreNos from './pages/sobre nos'
import AddEndereco from './pages/endereço/adicionar-endereco';
import Parcelamento from './pages/parcelamento';
import Pagamento from './pages/pagamentos';
import Desc from './pages/descricao-produto';
import Feminino from './pages/produtos-femininos';
import Infantil from './pages/produtos-infantis';
import Masculinos from './pages/produtos-masculinos';

export default function Final() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Index} />
            <Route path='/login' exact={true} component={Login} />
            <Route path='/sobre-nos' component={SobreNos} />
            <Route path='/add-endereco' component={AddEndereco} />
            <Route path='/parcelamento' component={Parcelamento} />
            <Route path='/pagamento' component={Pagamento} />
            <Route path='/descricao-produto' component={Desc} />
            <Route path='/produtos-femininos' component={Feminino}/>
            <Route path='/produtos-infantis' component={Infantil}/>
            <Route path='/produtos-masculinos' component={Masculinos}/>
        </Switch>
    </BrowserRouter>
    )
}