import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {logos} from '../../assets/images';
import Icons from '../../components/icons';
import {fonts} from '../../services/fonts';
const {height, width} = Dimensions.get('window');

const SigininPage = ({navigation}) => {
  const [isRemember, setisRemember] = useState(false);
  return (
    <ScrollView>
      <StatusBar backgroundColor={'#90CDF9'} barStyle={'dark-content'} />

      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#90CDF9',
            alignItems: 'center',
            width: '100%',
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: fonts.font30,
              marginTop: 10,
              marginBottom: -20,
            }}>
            Login
          </Text>
          <Image
            style={{
              height: width / 2.3,
              width: width / 2,
            }}
            source={logos}
          />
        </View>
        <View
          style={{
            padding: 20,
            marginTop: 20,
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Phone number"
          />
          <TextInput style={styles.TextInput} placeholder="Enter Password" />

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setisRemember(!isRemember)}
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              width: '100%',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Icons
              name={isRemember ? 'check-box' : 'check-box-outline-blank'}
              color={isRemember ? '#21B4BD' : '#21B4BD'}
            />
            <Text style={{color: '#21B4BD', marginLeft: 20}}>
              I read and accept Privacy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.TextInput, styles.Btn]}
            onPress={() => {
              navigation.navigate('TabBar');
            }}>
            <Text style={{color: '#FFFFFF'}}>Login</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
              <Text style={{color: '#F81414'}}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: '#21B4BD'}}>I don't have account.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    width: '100%',
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  Btn: {
    height: 50,
    borderWidth: 0,
    backgroundColor: '#90CDF9',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default SigininPage;
