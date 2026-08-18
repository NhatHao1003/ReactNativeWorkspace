import { useState } from "react";
import { Pressable, View , StyleSheet, Text} from "react-native";

export function Button(){
    const [isSaved, setIsSaved] = useState(false);
    const touchArea = { top: 8, bottom: 8, left: 8, right: 8 };

    const handleSave = () => {
        setIsSaved(true);
    };

    const handleReset = () => {
        setIsSaved(false);
    };

    return (
        <View style={styles.wrapper}>
            <Pressable
                onPress={handleSave}
                disabled={isSaved}
                hitSlop={touchArea}
                accessibilityRole="button"
                accessibilityLabel="Luu thong tin sinh vien"
                accessibilityHint="Nhan de luu thong tin hien tai"
                accessibilityState={{ disabled: isSaved, busy: false }}
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                    isSaved && styles.buttonDisabled,
                ]}
            >
                {({ pressed }) => (
                    <Text style={styles.buttonText}>
                        {pressed ? "Dang nhan Luu" : "Luu"}
                    </Text>
                )}
            </Pressable>

            <Pressable
                onPress={handleReset}
                disabled={!isSaved}
                hitSlop={touchArea}
                accessibilityRole="button"
                accessibilityLabel="Dat lai trang thai luu"
                accessibilityHint="Nhan de quay ve trang thai chua luu"
                accessibilityState={{ disabled: !isSaved, busy: false }}
                style={({ pressed }) => [
                    styles.button,
                    styles.secondaryButton,
                    pressed && styles.buttonPressed,
                    !isSaved && styles.buttonDisabled,
                ]}
            >
                {({ pressed }) => (
                    <Text style={styles.buttonText}>
                        {pressed ? "Dang nhan Dat lai" : "Dat lai"}
                    </Text>
                )}
            </Pressable>

            <Text style={styles.statusText}>
                {isSaved ? "Trang thai: da luu" : "Trang thai: chua luu"}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        width: 300,
        marginVertical: 40,
        gap: 12,
    },
    button: {
        backgroundColor: "#1E7FD7",
        borderRadius: 5,
        width: "100%",
        minHeight: 52,
        paddingVertical: 14,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#1E7FD7",
    },
    secondaryButton: {
        backgroundColor: "#ffffff",
    },
    buttonPressed: {
        transform: [{ scale: 0.98 }],
        borderWidth: 2,
    },
    buttonDisabled: {
        opacity: 0.55,
    },
    buttonText: {
        color: "#1C2434",
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
    },
    statusText: {
        textAlign: "center",
        color: "#1C2434",
        fontSize: 14,
    },
})