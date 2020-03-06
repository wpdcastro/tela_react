import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Tabs from './components/Tabs';

const App = () => (
  <View style="flex: 1"> 
    <Header/>
    <ScrollView>
      <SubHeader image="https://ogimg.infoglobo.com.br/in/21461657-09b-df1/FT1086A/652/adamwest.jpg"/>
      <SubHeader image="https://cabanadoleitor.com.br/wp-content/uploads/2019/06/wallpapersden.com_gal-gadot-wonder-woman-1984-movie-portrait_1280x720-560x600.jpg"/>
      <SubHeader image="https://br.web.img2.acsta.net/r_640_360/newsv7/20/03/04/19/09/1272542.jpg"/>
      <SubHeader image="https://cdn.ome.lt/A--BJMXlZntbedTWCNYSlArB5Xg=/570x0/smart/uploads/conteudo/fotos/CAPA-bvs.png"/>
      <SubHeader image="https://jovemnerd.com.br/wp-content/uploads/2017/04/bat-nipples-760x933.jpg"/>
      <Tabs/>
    </ScrollView>
  </View>
);

export default App;