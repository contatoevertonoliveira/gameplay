import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';



export function AppointmentsCreate(){
  const [category, setCategory] = useState('');

  return( 
      <Background>
        <Header
          title="Agendar Partida"
        />

        <Text style={styles.label}>
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>

              <View style={styles.image} />

              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  Selecione um servidor
                </Text>
              </View>
              
              <Feather
                name="chevron-right"
                colors={theme.colors.heading}
                size={18}
              />

            </View>
          </RectButton>
        </View>

      </Background>
  );
}