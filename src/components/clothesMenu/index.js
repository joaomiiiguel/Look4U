import React, {  useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions
} from 'react-native';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import {clothes,logo} from '../../../assets/api/dataClothes.js';
import Provar from './provar'

var { width } = Dimensions.get("window");


console.disableYellowBox = true;

export default function clothesMenu({camisa,calca,moduleUsed}) {


    const [module, setModule] = useState(2)
    const [dataClothes, setDataClothes] = useState([])
    const [selectCatg, setSelectCatg]=useState(0)
    const [press, setPress]=useState(null)
    const [actualLogo, setActualLogo]=useState(null)
    const [actualName, setActualName]=useState(null)
    const [booleana,setBooleana] = useState(true)
 
    useEffect
    (() =>
      {
        if (booleana)
          setModule(moduleUsed)
      }
    )

    function printPhotos(uri){
      return {uri:uri};
    }
    
    function findLogo(logo){
      let filttedLogos = logo.filter(elemento=>elemento.name===actualLogo)
      return filttedLogos[0].image
    }
    function setAtributes (press,actualLogo,actualName) {
      setPress(press)
      setActualLogo(actualLogo)
      setActualName(actualName)
    }
    async function setarMenu (module) {
      await setBooleana(false)
      await setModule(module)
    }
    function _renderItemClothes(item){
        
        let catg = module;
        if(catg==item.category)
        {
          return(
            <TouchableOpacity onPress={()=>setAtributes(item.id,item.logo,item.name)} style={styles.containerClothes}>
            
              <View style={press==item.id?styles.selectedEffect:styles.divClothes}>
                <Image
                  style={styles.imageClothes}
                  resizeMode="contain"
                  source={printPhotos(item.image)} />
                  
              </View>
              {
                    press==item.id &&
                    
                    <Provar item={item} camisa={camisa} calca={calca} setBooleana={() => setBooleana(true)}/>
              }
            </TouchableOpacity>
            )
        }
      }
    return (
      <View style={{flex:1}}>
          <ScrollView>
          <View style={{flex:1, width:width}}>
              <ImageBackground source={"../../../assets/wallpaper/splash.png"} style={styles.background} >
              
              <View style={styles.container}>
                
                  <View style={styles.leftTab}>
                      {
                        actualLogo &&
                        <View style={styles.optionsLogo}>
                        <Image source={printPhotos(findLogo(logo))} style={styles.logo} resizeMode='contain'></Image>
                        </View>
                      }
                      {
                        module==2 ?
                        <View>
                          <View style={module==2?styles.pressioned:styles.option}>
                          <Image style={styles.camisa} resizeMode='contain' source={require('../../../assets/iconesLeftTab/polo.png')}></Image>
                          <Text style = {styles.textMenu}>Polos</Text>
                          </View>
                        </View>
                        :
                        <TouchableOpacity  onPress={()=>setarMenu(2)}>
                          <View style={module==2?styles.pressioned:styles.option}>
                          <Image style={styles.camisa} resizeMode='contain' source={require('../../../assets/iconesLeftTab/polo.png')}></Image>
                          <Text style = {styles.textMenu}>Polos</Text>
                          </View>
                        </TouchableOpacity>
                        
                      }
                      {
                        module==1 ?
                      <View>
                        <View style={module==1?styles.pressioned:styles.option}>
                        <Image style={styles.camisa}  resizeMode='contain' source={require('../../../assets/iconesLeftTab/camisa.png')}></Image>
                        <Text style = {styles.textMenu}>Camisa</Text>
                        </View>
                      </View>
                      :
                      <TouchableOpacity  onPress={()=>setarMenu(1)}> 
                        <View style={module==1?styles.pressioned:styles.option}>
                        <Image style={styles.camisa}  resizeMode='contain' source={require('../../../assets/iconesLeftTab/camisa.png')}></Image>
                        <Text style = {styles.textMenu}>Camisa</Text>
                        </View>
                      </TouchableOpacity>
                      }
                      {
                        module==3 ?

                        <View>
                          <View style={module==3?styles.pressioned:styles.option}>
                          <Image style={styles.calca} resizeMode='contain' source={require('../../../assets/iconesLeftTab/calca.png')}></Image>
                          <Text style = {styles.textMenu}>Calça</Text>
                          </View>
                        </View>
                        :
                      <TouchableOpacity  onPress={()=>setarMenu(3)}>
                        <View style={module==3?styles.pressioned:styles.option}>
                        <Image style={styles.calca} resizeMode='contain' source={require('../../../assets/iconesLeftTab/calca.png')}></Image>
                        <Text style = {styles.textMenu}>Calça</Text>
                        </View>
                      </TouchableOpacity>
                      }
                      {
                        module==4 ?
                          <View>
                            <View style={module==4?styles.pressioned:styles.option}>
                            <Image style={styles.short}  resizeMode='contain' source={require('../../../assets/iconesLeftTab/short.png')}></Image>
                            <Text style = {styles.textMenu}>Short</Text>
                            </View>
                          </View>
                        :  <TouchableOpacity  onPress={()=>setarMenu(4)}>
                            <View style={module==4?styles.pressioned:styles.option}>
                              <Image style={styles.short}  resizeMode='contain' source={require('../../../assets/iconesLeftTab/short.png')}></Image>
                              <Text style = {styles.textMenu}>Short</Text>
                            </View>
                          </TouchableOpacity>
                      }   
                  </View>

                  <View style={styles.containerPage}>
                      <FlatList data={clothes}
                          numColumns={2}
                          renderItem={({item}) => _renderItemClothes(item)}
                          keyExtractor = { (item,index) => index.toString() }></FlatList>
                  </View>

              </View>
              </ImageBackground>
          </View>
          </ScrollView>
            <View style={styles.footer}>
              <Text style={{fontSize: 24, 
    fontWeight: "700", fontFamily:require('../../../assets/fonts/MazzardH-Bold.otf'), color: "#CECECECE" }}>{actualName} </Text>
            </View>
        </View>
    );

    }