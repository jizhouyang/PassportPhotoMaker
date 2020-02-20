import {StyleSheet, Text, TouchableHighlight, View} from "react-native"
import React from "react"

const SuggestionItem= props=> {
    return(
        <TouchableHighlight  onPress={
            ()=>{
                props.handleTextClick(props.suggestionItem)
                props.inputRef.current.blur()
            }
        } underlayColor={'#4A90E2aa'}>
            <View style={styles.suggestionItemContainer}>
                <Text>{props.suggestionItem}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    suggestionItemContainer:{
        width:'100%',
        padding: 10,
        borderBottomWidth:0.6,
        borderBottomColor:'black'
    }

});
export default SuggestionItem