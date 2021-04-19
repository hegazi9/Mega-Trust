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


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', title: '',
            type: '', url: '',
            company_url: '', description: '',
            location: '',
            img: [],
            fileList: [],
            path: '',
            check: false,
            arr: [],
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
            this.setState({
                check: true
            })
        }
    };

    async _add() {
        if (this.state.name == '' || this.state.description == '' ||  this.state.url == '' || 
        this.state.company_url == '' ||  this.state.type == '' ||  this.state.title == ''   ) {
            alert('Data is Required')
        }
        else if (this.state.img == '' ) {
            alert('Image is Required')
        }
        else {
        this.state.arr.push({
            id : Math.random(),
            company: this.state.name, 
            company_logo: this.state.img[0].uri,
            type: this.state.type, url: this.state.url, created_at: new Date(),
            location: this.state.location, title: this.state.title, description: this.state.description,
            how_to_apply: this.state.how_to_apply, company_url: this.state.company_url
        })
      await AsyncStorage.setItem('ARR', JSON.stringify(this.state.arr[0]));
        this.props.navigation.replace('Home');
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
                            Company Name :
                        </Text>

                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(name) => this.setState({ name })}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder={'name'}
                                placeholderTextColor={'gray'}
                                style={styles.input} />
                        </View>
                        <Text style={styles.username}>
                            Job title :
                        </Text>

                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(title) => this.setState({ title })}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder={'title'}
                                placeholderTextColor={'gray'}
                                style={styles.input} />
                        </View>
                        <Text style={styles.username}>
                            Job Type :
                        </Text>

                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(type) => this.setState({ type })}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder={'type'}
                                placeholderTextColor={'gray'}
                                style={styles.input} />
                        </View>
                        <Text style={styles.username}>
                            Job Url :
                        </Text>

                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(url) => this.setState({ url })}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder={'Url'}
                                placeholderTextColor={'gray'}
                                style={styles.input} />
                        </View>
                        <Text style={styles.username}>
                            Company Url :
                        </Text>

                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(company_url) => this.setState({ company_url })}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder={'Url'}
                                placeholderTextColor={'gray'}
                                style={styles.input} />
                        </View>
                        <Text style={styles.username}>
                            Job Description :
                        </Text>

                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(description) => this.setState({ description })}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder={'description'}
                                placeholderTextColor={'gray'}
                                style={styles.input} />
                        </View>
                        <Text style={styles.username}>
                            Location :
                        </Text>

                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(location) => this.setState({ location })}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder={'location'}
                                placeholderTextColor={'gray'}
                                style={styles.input} />
                        </View>
                       

                        <TouchableOpacity style={styles.btn} onPress={() => {
                            this._add()
                        }}>
                            <Text style={styles.txt_btn}>Add </Text>
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

export default Add;