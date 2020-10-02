import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
// import { withNavigation } from 'react-navigation'

import ResultDetail from './ResultDetail'

const ResultList = ({ title, results }) => {

    if (!results.length) return null


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('ResultShow', { id: item.id })} 
                        >
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#085C06",
        marginLeft: 15,
        marginVertical: 10
    },
    container: {
        marginBottom: 10
    }
})


export default ResultList