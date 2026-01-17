import { View, Text, Image, StyleSheet } from "react-native";

export type ReviewItemComponent = {
    id: string;
    author: string;
    content: string;
    rating: number;
    avatar?: string;
}

type Props = {
    review: ReviewItemComponent
};

export function MovieReviewListItem({ review }: Props) {
    return (
        <View style={styles.container}>
            {/* Avatar */}
            <Image
                source={{
                    uri:
                        review.avatar ??
                        "https://i.pravatar.cc/150?img=12",
                }}
                style={styles.avatar}
            />

            {/* Content */}
            <View style={styles.rightContent}>
                <View style={styles.header}>
                    <Text style={styles.author}>{review.author}</Text>
                    <Text style={styles.rating}>{review.rating}</Text>
                </View>

                <Text numberOfLines={4} style={styles.content}>{review.content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#1F2933",
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
    },

    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 12,
    },

    rightContent: {
        flex: 1,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },

    author: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
    },

    rating: {
        color: "#3B82F6", // azul da nota (6.3)
        fontSize: 14,
        fontWeight: "600",
    },

    content: {
        color: "#D1D5DB",
        fontSize: 14,
        lineHeight: 20,
    },
});