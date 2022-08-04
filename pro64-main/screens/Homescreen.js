import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    getWord=(word)=>{
        var searchkeyword word.toLowerCase() var url = "https://rupinwhitehatjr.github.io/dictionary/searchkeyword.json" 
        console.log("https://rupinwhitehatjr.github.io/dictionary/searchkeyword.json") return fetch(url) .then((data)=>{
        if(data.status===200)
        return data.json()
        else
        return null

        .then((response)=>
//console.log(response)
var responseObject = response //var word = responseObject.word //var lexicalCategory = responseObject.results[@].lexicalEntries[@].lexicalcategory.text if(responseObject)
var wordData = responseObject. definitions() //console.log(responseObject.definitions[@]) var definition WordData.description var lexicalCategory wordData.wordtype //console.log(lexicalCategory) this.setState({
"word" : this.state. text, "definition" : definition, "lexicalCategory" : lexicalCategory
>)
else
this.setState({
"word" : this.state.text, "definition" : "Not Found",

this.setState({
    "word" : word
    "lexicalCategory" : lexicalCategory
    "definition" : definition
})
  
    return (
    <View style={styles.container}>
     <TouchableOpacity
style={styles. SearchButton}
    onPress={()=>
this.setState ({ isSearch Pressed: true });
this.getWord (this.state. text) 
}>
    
    <Text style={styles.Text}> 
         SEARCH
     </Text>
     </TouchableOpacity>

     <Text Input
     style={styles.inputBox}
    onChangeText={text => { this.setState({
        text: text, 
        isSearchPressed: false, 
        word : "Loading...", 
        lexicalCategory :'', examples : [] ,
            defination : "" 
        });
    }}
            value={this.state.text} 
            />
    </View>
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});