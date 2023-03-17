import { View, Image } from "react-native";

export default function EmojiSticker({ imageSize, stickerSource }) {
    return (
        <View style={{ top: -50, left: 270 }}>
            <Image source={stickerSource} resizeMode="contain" style={{ width: imageSize, height: imageSize }} />
        </View>
    )
}