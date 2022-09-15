import { StackScreenProps } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { Images } from '../../../common/assets';
import { Screen } from '../../../common/components';
import { NavigatorParamList } from '../../../common/navigation';
import { styles } from './styles';

const {height, width} = Dimensions.get('window');
export const SplashScreen: FC<StackScreenProps<NavigatorParamList, 'splash'>> =
  observer(({navigation}) => {
    useEffect(() => {
      fetch();
    });

    async function fetch() {
      try {
        // var res = await ProfileApi.getInstance().getDietPreferences();
        // console.log('Result from screen-> ', res.data.data[0].created_at);
      } catch (err) {
        console.log('ERROR from screen-> ', err);
      }
    }

    return (
      <Screen style={styles.container} preset="fixed">
        <ImageBackground
          source={Images.activeBackground}
          style={styles.container}>
        </ImageBackground>
      </Screen>
    );
  });
