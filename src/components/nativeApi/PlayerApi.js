import VideoPlayer from 'react-native-rn-videoplayer';
import React from "react";

const PlayerApi = ({ navigation }) => {
    return (
        <VideoPlayer
            url={"http://antiserver.kuwo.cn/anti.s?rid=MUSIC_189400581&response=res&format=mp4|mkv&type=convert_url"}
            autoPlay={true}//是否自动播放
            lockControl={true}//控件锁定功能
            moreSetting={() => null}//右上角更多按钮 输出null则不显示
            onSmallBack={() => { navigation.goBack() }}
        />
    )
}

export default PlayerApi;