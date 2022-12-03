import { FontAwesome, Feather, Fontisto, Octicons } from '@expo/vector-icons'; 

const Footbal = ({color, size}) => <FontAwesome name="soccer-ball-o" size={size} color={color} />

export default ({route, color, size}) => {
    switch(route){
        case 'Home':
            return <Octicons name="arrow-switch" size={size} color={color} style={{
                transform: [{ rotate:'90deg' }]
            }}/>
        case 'MoreOptions':
            return <Fontisto name="dollar" size={size} color={color}/>
        case 'Store':
            return <Feather name="shopping-bag" size={size} color={color} />
        case 'Footbal':
            return <Footbal color={color} size={size} />
    }
}