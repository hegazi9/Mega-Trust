import styles from './style';
import React, { Component } from 'react';
import {
    Text, View, ScrollView, TextInput,
    TouchableOpacity, Platform,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import { Icon } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-community/async-storage';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', password: '',
            img: [],
            fileList: [],
            path: '',
            check: false
        };
    }

    _on_selectImg_camera = (image) => {
        let newDataImg = this.state.fileList;
        const source = { uri: image.path };
        let item = {
            id: Date.now(),
            url: source,
            content: image.data,
        };

        newDataImg.push(item);
        this.setState({
            fileList: newDataImg,
            path: item.content,
        });

        this.state.img.push(item.url);
        console.log(this.state.img);

    };

    _take_img_camera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 500,
            compressImageMaxHeight: 500,
            compressImageQuality: 0.7,
            includeBase64: true,
            cropping: true,
        }).then((image) => {
            this._on_selectImg_camera(image);
        });
    };

    _take_img_gallery = () => {
        ImagePicker.openPicker({
            compressImageMaxWidth: 500,
            compressImageMaxHeight: 500,
            compressImageQuality: 0.7,
            includeBase64: true,
            cropping: true,
            multiple: true,
        }).then((image) => {
            this._on_selectImg(image);
        });
    };

    _On_addImg = () => {
        this.ActionSheet.show()

    };

    _on_selectImg = (image) => {
        for (var i = 0; i < image.length; i++) {
            this.state.img.push({ uri: image[i].path });
        }

        console.log(`${JSON.stringify(this.state.img[0].uri)}`);
        // alert( JSON.stringify( this.state.img[0].uri ))
        if (this.state.img) {
            AsyncStorage.setItem('IMG', JSON.stringify(this.state.img[0].uri))
            this.setState({
                check: true
            })
        }
    };

    _Login() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email == '') {
            alert('Email is Empty')
        }
        else if (reg.test(this.state.email) === false) {
            alert('Email is Not Correct')
        }
        else if (this.state.img == '' ) {
            alert('Image is Required')
        }

        else if (this.state.password == '') {
            alert('Password is Empty')
        }
        else {
            this.props.navigation.replace('Home')
            AsyncStorage.setItem('Email', this.state.email)
            AsyncStorage.setItem('Password', this.state.password)
            AsyncStorage.setItem('LOGIN', 'LOGIN')
        }
    }

    render() {
        return (

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : 'position'}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : -200}>
                <ScrollView>
                    <View style={styles.viewImg}>
                        <TouchableOpacity style={styles.img_btn} onPress={this._On_addImg} >
                            <Image style={styles.img}
                                source={this.state.check == false ?
                                    require('../../assets/user.png') :
                                    { uri: `${this.state.img[0].uri}` }

                                }
                            />
                        </TouchableOpacity>
                    </View>
                    <View>

                        <Text style={styles.username}>
                            Eamil :
                        </Text>

                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(email) => this.setState({ email })}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder={'email'}
                                placeholderTextColor={'gray'}
                                style={styles.input} />
                        </View>

                        <Text style={[styles.username, { marginTop: hp('2%') }]}>
                            Password :
                        </Text>

                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(password) => this.setState({ password })}
                                secureTextEntry
                                autoCorrect={false}
                                placeholder={'password'}
                                placeholderTextColor={'gray'}
                                style={styles.input} />
                        </View>

                        <TouchableOpacity style={styles.btn} onPress={() => {
                            this._Login()
                        }}>
                            <Text style={styles.txt_btn}>Sign In</Text>
                        </TouchableOpacity>

                        <ActionSheet
                            ref={o => this.ActionSheet = o}
                            options={['Open Camera', 'Choose from Gallery', 'Cancel']}
                            cancelButtonIndex={2}
                            destructiveButtonIndex={2}
                            onPress={(index) => {
                                if (index == 0)
                                    this._take_img_camera();
                                if (index == 1)
                                    this._take_img_gallery();
                            }}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );

    }
}

export default Login;
