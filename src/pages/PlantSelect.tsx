import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core"
import { Header } from '../components/Header';

import colors from "../styles/colors"
import fonts from '../styles/fonts';
import { EnviromentButton } from '../components/EnviromentButton';
import { Load } from "../components/Load"
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

interface EnviromentsProps {
    key: string;
    title: string;
}

export default function PlantSelect() {
    const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([])
    // const [plants, setPlants] = useState<PlantProps[]>([])
    const [filteredPlants, setFilteredPlants] = useState<EnviromentsProps[]>([])
    const [enviromentSelected, setEnviromentSelected] = useState<string>("all")
    const [loading, setLoading] = useState(true)

    const { navigate } = useNavigation()

    const handleStart = () => {
        navigate("UserIdentification")
    }

    const handleEnviromentSelected = (key: string) => {
        setEnviromentSelected(key)

        // if(key === "all") {
        //     return setFilteredPlants(plants)
        // }
        // const filtered = plants.filter(plant => 
        //     plants.environments.includes(key)
        // )
        // setFilteredPlants(filtered)
    }

    useEffect(() => {
        
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments')

            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ])

            setLoading(false)
        }

        fetchEnviroment()
    },[])


    if(loading)
        return <Load />


    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Header />

            <Text style={styles.title}>
                Em qual ambiente
            </Text>
            <Text style={styles.subtitle}>
                você quer colocar sua planta?
            </Text>
        </View>

        <FlatList
            data={enviroments}
            renderItem={( { item } ) => (
                <EnviromentButton 
                    title={item.title} 
                    active={item.key === enviromentSelected}
                    onPress={() => handleEnviromentSelected(item.key)}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.enviromentLis}
        />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15,
    },
    subtitle: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20,
    },
    enviromentLis: {
        height: 40,
        justifyContent: "center",
        paddingBottom: 5,
        paddingStart: 32,
        marginVertical: 32,
    }
});
