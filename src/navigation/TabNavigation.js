import {createTabNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import CheckList from '../screens/CheckList';
import Map from '../screens/Map';
import TimeLine from '../screens/TimeLine';


export default TabNavigator = createTabNavigator(
    
    {

        Calendar:{
            screen:Calendar
        },

        CheckList:{
            screen:CheckList
        },

        Home:{
            screen:Home
        },
        
        Map:{
            screen:Map
        },

        TimeLine:{
            screen:TimeLine
        }
    },
    {   

        animationEnabled:true,

        tabBarPosition:'bottom',

        navigationOptions:{
            
        },
        
    }
)