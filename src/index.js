import Desenvolvedor from './pages/desenvolvedor';
import Personagens from './pages/personagens';

const MainNavigator = createBottomTabNavigator({
    Personagens,
    Desenvolvedor
    },

    {
        swipEnabled = true,
        showLabel = false,
    }

)  
export default MainNavigator;
