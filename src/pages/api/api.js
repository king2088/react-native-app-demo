import React, {Component} from 'react';
import ListComponent from '../../components/listComponent/listComponent';
import apiList from '../../data/apiList';

function ApiScreen({navigation}) {
    return (
        <ListComponent navigation={navigation} data={apiList}></ListComponent>
    );
}

export default ApiScreen