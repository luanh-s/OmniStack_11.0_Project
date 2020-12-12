import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking, ScrollView  } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const valor = `${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(incident.value)}`;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${valor}.`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>

                <TouchableOpacity style={styles.detailsButton} onPress={navigateBack} >
                    <Feather name="arrow-left" size={28} color="#E82041"></Feather>
                </TouchableOpacity>
            </View>

            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={styles.incidentContainer}>
                <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>Cidade/UF:</Text>
                    <Text style={styles.incidentValue}>{incident.city}/{incident.uf}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>
                        {Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'BRL',
                        }).format(incident.value)}</Text>

                    {/* <Text style={styles.incidentProperty}>Celular:</Text>
                    <Text style={styles.incidentValue}>{incident.whatsapp}</Text>

                    <Text style={styles.incidentProperty}>Email:</Text>
                    <Text style={styles.incidentValue}>{incident.email}</Text> */}
                </View>


                <View style={styles.contactBox} onPress={() => {}}>
                    <Text style={styles.heroTitle}> Salve o dia!</Text>
                    <Text style={styles.heroTitle}> Seja o herói desse caso.</Text>

                    <Text style={styles.heroDescription}> Entre em contato:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsApp} >
                            <Text style={styles.actionText}> WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={sendMail} >
                            <Text style={styles.actionText}> E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            
        </View>
    );
}