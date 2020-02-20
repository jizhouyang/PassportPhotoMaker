import React,{useState,useRef} from 'react';
import {Header} from "react-navigation-stack";
import {StyleSheet, View,TextInput,FlatList} from "react-native"
import {Ionicons} from "@expo/vector-icons";
import {categoryOfPassportPhotos} from "../constants/Categories"
import SuggestionItem from "./SuggestionItem"

export const CustomMainPageHeader = props=>{
    const [searchBarRadius,setSearchBarRadius] = useState({BottomRightRadius:20,BottomLeftRadius:20})
    const [visible, setVisible] = useState(false)
    const [suggestionItem,setSuggestionItem] = useState(categoryOfPassportPhotos)
    const [inputText,setInputText] = useState(null)
    const inputRef=useRef(null)
    const handleType=(text)=>{
        setInputText(text)
        const data=categoryOfPassportPhotos.filter(item=>{
            if (item.title.includes(text)){
                return true
            }
            return false
        })
        setSuggestionItem(data)
        props.navigation.setParams({"products": data})
    }

    const handleFocus=()=>{
        setSearchBarRadius({BottomRightRadius:0,BottomLeftRadius:0})
        setVisible(true)
    }

    const handleBlur =()=>{
        setSearchBarRadius({BottomRightRadius:20,BottomLeftRadius:20})
        setVisible(false)
    }



    return(
            <View style={styles.container}>
                <Header {...props} />
                <View style = {styles.searchBarContainer}>
                    <View style={{...styles.searchBarInputContainer, borderBottomRightRadius:searchBarRadius.BottomRightRadius,
                        borderBottomLeftRadius:searchBarRadius.BottomLeftRadius}}>
                        <Ionicons name={'md-search'} size={25}/>
                        <TextInput placeholder={"Search Product"} style={styles.TextInputContainer}
                                   onChangeText={handleType}
                                   onFocus={handleFocus}
                                   onBlur={handleBlur}
                                   value={inputText}
                                   ref={inputRef}
                        />
                    </View>
                    {visible?
                        <View style={{...styles.suggestionBoxContainer,height:suggestionItem.length*40}}>
                            <FlatList
                                keyboardShouldPersistTaps= "always"
                                keyboardDimissMode='on-drag'
                                data={suggestionItem}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={
                                    itemData=> <SuggestionItem
                                        suggestionItem={itemData.item.title}
                                        handleTextClick={handleType}
                                        inputRef={inputRef}
                                    />
                                }
                            />
                        </View>
                        :null}
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
/*        height:150,*/
        width:'100%'
    },
    searchBarContainer:{
        /*height:40,*/
        width: '100%',
        alignItems:'center',
        marginBottom:15
    },
    searchBarInputContainer:{
        width:'85%',
        height:40,
        backgroundColor:'white',
        flexDirection:'row',
        padding:8,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        overflow:'hidden'
    },
    TextInputContainer:{
        fontSize:17,
        marginLeft:15
    },
    suggestionBoxContainer:{
        maxHeight:200,
        backgroundColor:'white',
        width:'85%',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        overflow: "hidden"
    }
});