import { View, Image } from "react-native";
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    withSpring,
} from 'react-native-reanimated';

export default function EmojiSticker({ imageSize, stickerSource }) {
    // after import statements, add the following line

    const AnimatedImage = Animated.createAnimatedComponent(Image);
    const scaleImage = useSharedValue(imageSize);
    const onDoubleTap = useAnimatedGestureHandler({
        onActive: () => {
            if (scaleImage.value) {
                scaleImage.value = scaleImage.value * 2;
            }
        },
    });
    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });


    return (
        <View style={{ top: -350 }}>
            <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
                <AnimatedImage
                    source={stickerSource}
                    resizeMode="contain"
                    style={[imageStyle, { width: imageSize, height: imageSize }]}
                />
            </TapGestureHandler>
        </View>
    );
}
