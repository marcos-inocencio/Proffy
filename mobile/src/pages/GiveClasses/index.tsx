import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';

function GiveClasses () {
  const { goBack } = useNavigation();

  function handleNavigateGoback() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={giveClassesBgImage} 
        style={styles.content} 
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>
      
      <RectButton style={styles.okButton} onPress={handleNavigateGoback}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;