import React from 'react';
import {View, ART} from 'react-native';
const {Path,Text,Surface,Shape,Group,ClippingRectangle} = ART;

export default class DayTimeCircleChart extends React.Component{

    render(){
        return(
            <View style={{height:120, width:120, backgroundColor:"gray"}}>
                <Surface>
                    <Shape height={100} width={100} d={getPath()} fill="#000000"/>
                </Surface>
            </View>
        )
    }
}

const getPath = ()=>{

    path = new Path();

    path.arc(10, 10, 30, 40, true, false, 1);

    return new Path(path);
}