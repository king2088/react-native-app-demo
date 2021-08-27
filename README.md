# react-native-app-demo

一个采用react native开发的react native 组件及硬件调用的演示app,其中包含了react native的基础组件演示、交互控件演示、列表视图、IOS独有组件、Android独有组件等各类官方组件演示。除此之外还有调用系统原生硬件接口等插件功能的使用

## 安装

```bash
yarn # 或 npm i
```

## 运行(可以将yarn切换成npm)

```bash
yarn start #运行在web端
yarn android #运行及调试在Android端
yarn ios #运行及调试在iOS端
```

## 打包

### android端

- 首先需要生成JS bundle文件，采用如下命令即可

```bash
react-native bundle --platform android --dev false --entry-file App.js  --bundle-output android/app/src/main/assets/index.android.bundle  --assets-dest android/app/src/main/res/
```

- 设置密钥文件
用android studio打开项目到android文件夹  
build -> Generate Signed Bundle or APK -> APK -> 点击create new...填写一堆，然后重新选择此密钥文件  
在android/app/build.gradle 下添加 release部分即第二步生成的密钥信息

```js
signingConfigs {
    // add this start
    release {
        keyAlias 'key0'
        keyPassword '123456'
        storeFile file('rnFramekey.keystore')
        storePassword '123456'
    }
    // add this end
    debug {
        storeFile file('debug.keystore')
        storePassword 'android'
        keyAlias 'androiddebugkey'
        keyPassword 'android'
    }
}
```

- 如何生成apk文件

```bash
./gradlew assembleRelease # mac
gradlew assembleRelease # windows 
```

**注意事项**

如果遇到错误 Error: Duplicate resources  

找到 node_modules -> react-native -> react.gradle 搜索 doFirst 在后面增加如下代码即可

```java
doLast { // 打包后资源文件重复，添加该代码块即可
    def moveFunc = { resSuffix ->
    File originalDir = file("$buildDir/generated/res/react/release/drawable-${resSuffix}");
        if (originalDir.exists()) {
            File destDir = file("$buildDir/../src/main/res/drawable-${resSuffix}");
            ant.move(file: originalDir, tofile: destDir);
        }
    }
    moveFunc.curry("ldpi").call()
    moveFunc.curry("mdpi").call()
    moveFunc.curry("hdpi").call()
    moveFunc.curry("xhdpi").call()
    moveFunc.curry("xxhdpi").call()
    moveFunc.curry("xxxhdpi").call()
}
```

### ios端

- 在ios文件夹下新建bundle文件夹
- 生成JS bundle

```bash
react-native bundle --platform ios --dev false --entry-file App.js  --bundle-output  ios/bundle/index.ios.bundle  --assets-dest ios/bundle
```

- 打开Xcode引入项目文件ios,右键打开项目同项目名的rnFrame的菜单，Add Files to "RNIos"。
- 然后选择bundle文件，在option中选择 Create folder references
- 点击Add(即可把bundle加入到项目当中，注意加入进来的文件夹必须是蓝色)

接着就是xcode的打包操作了
