import React from 'react';
import ListComponent from '../../components/listComponent/listComponent';
import homeList from '../../data/homeList';

const HomeScreen = ({ navigation }) => {
    return (
        <ListComponent navigation={navigation} data={homeList}></ListComponent>
    );
}

export default HomeScreen