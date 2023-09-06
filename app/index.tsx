// import { Redirect } from 'expo-router';
// import tabs from './route/tabs';


// export default function () {
//   return (
//     <>
//       <Redirect href='/route/tabs/' />
//     </>
//   );
// }

// import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/Colors';
import { LinearGradient } from "expo-linear-gradient";
import Button from '../components/Button';
import { Link, router } from 'expo-router';
export default function () {
  return (
    <LinearGradient
      style={{
        flex: 1
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/images/hero1.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" }
              ]
            }}
          />

          <Image
            source={require("../assets/images/hero3.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" }
              ]
            }}
          />

          <Image
            source={require("../assets/images/hero3.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" }
              ]
            }}
          />

          <Image
            source={require("../assets/images/hero3.jpg")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" }
              ]
            }}
          />
        </View>



        <View style={{
          paddingHorizontal: 22,
          position: "absolute",
          top: 400,
          width: "100%"
        }}>
          <Text style={{
            fontSize: 50,
            // fontSize: 16,
            color: COLORS.white
          }}>Let's Get</Text>
          <Text style={{
            fontSize: 46,

            color: COLORS.white
          }}>Started</Text>

          <View style={{ marginVertical: 22 }}>
            <Text style={{
              fontSize: 16,
              color: COLORS.white,
              marginVertical: 4
            }}>Connect with each other with trade</Text>
            <Text style={{
              fontSize: 16,
              color: COLORS.white,
            }}>Sale, Enjoy Safe and private record</Text>
          </View>



          <Button
            title="Register Now"
            onPress={() => {

              router.push('/signup');
            }}
            style={{
              marginTop: 22,
              width: "100%"
            }}
          />

          <View style={{
            flexDirection: "row",
            marginTop: 12,
            justifyContent: "center"
          }}>
            <Text style={{
              fontSize: 16,
              color: COLORS.white
            }}>Already have an account ?</Text>
            <Pressable
              onPress={() => router.push('/signIn')}
            >
              <Text style={{
                fontSize: 16,
                color: COLORS.white,
                fontWeight: "bold",
                marginLeft: 4
              }}>Login</Text>

            </Pressable>

          </View>
        </View>
      </View>
    </LinearGradient>

  );



}
const style = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  box: {
    borderBlockColor: 'black'
  },
  logo: {
    width: 280,
    height: 280,
    marginLeft: '15%',
    marginTop: '10%'
  }
})
