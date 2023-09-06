import { Text, TouchableOpacity, StyleSheet, Platform, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import { Appbar, Button, Dialog, Menu, Portal, Provider } from 'react-native-paper'
import { router } from 'expo-router';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const AppBarsSaleCost = (props: any) => {
    const [visible, setVisible] = React.useState(false);

    const hideDialog = () => setVisible(false);

    return (
        // <TouchableOpacity
        //   style={{
        //     ...styles.AppBars,
        //     ...{ backgroundColor: bgColor },
        //     ...props.style
        //   }}
        //   onPress={props.onPress}
        // >
        //   <Text style={{ fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
        // </TouchableOpacity>
        <Provider>

            <Appbar.Header>
                <Appbar.BackAction onPress={() => { router.back() }} />
                <Appbar.Content title={props.title} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
                <Appbar.Action icon={MORE_ICON} onPress={() => { setVisible(true) }} />
            </Appbar.Header>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Actions>
                        <View style={{ flex: 1 }}>
                            <Menu.Item leadingIcon="redo" onPress={() => { }} title="Redo" />
                            <Menu.Item leadingIcon="undo" onPress={() => { }} title="Undo" />
                            <Menu.Item leadingIcon="content-cut" onPress={() => { }} title="Cut" disabled />
                            <Menu.Item leadingIcon="content-copy" onPress={() => { }} title="Copy" disabled />
                            <Menu.Item leadingIcon="content-paste" onPress={() => { }} title="Paste" />

                            {/* <Button onPress={() => console.log('Cancel')}>Cancel</Button>
                            <Button onPress={() => setVisible(false)}>Ok</Button> */}
                        </View>

                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Provider>


        // <Appbar.Header style={{ backgroundColor: '#ADD8E6' }}>
        //   <Appbar.Content title={props.title} />
        //   <Appbar.Action icon="magnify" onPress={() => { }} />
        //   <Appbar.Action icon="dots-vertical" onPress={() => { }} />
        // </Appbar.Header>
    )
}

export default AppBarsSaleCost