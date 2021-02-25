import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import styles from './style'
import StyledButton from '../StyledButton'
const CarItem = (props) => {


    const {name, tagline, taglineCTA, image} = props.car;

    return(
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitles}>
                    {tagline}
                    {' '}
                    <Text style={styles.subTitlesCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton
                    type='primary'
                    content={'Custom Order'}
                    onPress={() => {
                        console.log("Custom Order was pressed!")
                    }} />
                <StyledButton
                    type='secondary'
                    content={'Existing Inventory'}
                    onPress={() => {
                        console.log("Existing Inventory was pressed!")
                    }} />
            </View>
            


        </View>
    )
};

export default CarItem;