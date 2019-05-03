import Desenvolvedor from './pages/desenvolvedor';
import Personagens from './pages/personagens';
import { createBottomTabNavigator } from "react-navigation";

const MainNavigator = createBottomTabNavigator(
    {
        Personagens,
        Desenvolvedor
    },
    {
        swipeEnabled = true,
        showLabel = false,
    }

);

export default createBottomTabNavigator(MainNavigator);
