import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import styles from './style'

const CarItem = (props) => {
    return(
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitles}>Starting at $69,940</Text>
            </View>

        </View>
    )
};

export default CarItem;