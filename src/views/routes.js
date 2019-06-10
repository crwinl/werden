
import Layout from '../components/layout';
import Home from './home';

export default {
    path: '/',
    name: 'home',
    component: Layout,
    childRoutes: [
        { path: '', component: Home },
    ]
}