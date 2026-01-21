import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NowPlaying from "./NowPlaying_NavMovieGridList";
import UpComming from "./UpComming_NavMovieGridList";
import TopRated from "./TopRated_NavMovieGridList";
import Popular from "./Popular_NavMovieGridList";

export default function NavMovieGridList() {
    const [selectedTab, setSelectedTab] = useState<"nowplaying" | "upcoming" | "toprated" | "popular">("nowplaying");

    return (
        <View>
            <View style={styles.tabs}>
                <TouchableOpacity onPress={() => setSelectedTab("nowplaying")}>
                    <Text style={[styles.tab, selectedTab === "nowplaying" && styles.activeTab]}>
                        Now playing
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedTab("upcoming")}>
                    <Text style={[styles.tab, selectedTab === "upcoming" && styles.activeTab]}>
                        Upcoming
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedTab("toprated")}>
                    <Text style={[styles.tab, selectedTab === "toprated" && styles.activeTab]}>
                        Top Rated
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedTab("popular")}>
                    <Text style={[styles.tab, selectedTab === "popular" && styles.activeTab]}>
                        Popular
                    </Text>
                </TouchableOpacity>
            </View>

            {/* About */}
            {selectedTab === "nowplaying" && (
                <NowPlaying />
            )}

            {/* Upcoming */}
            {selectedTab === "upcoming" && (
                <UpComming />
            )}

            {/* Cast */}
            {selectedTab === "toprated" && (
                <TopRated />
            )}

            {/* Cast */}
            {selectedTab === "popular" && (
                <Popular />
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F252D",
    },
    banner: {
        width: "100%",
        height: 260,
    },
    headerActions: {
        position: "absolute",
        top: 50,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    content: {
        padding: 20,
    },
    titleRow: {
        flexDirection: "row",
        marginTop: -60,
    },
    poster: {
        width: 110,
        height: 160,
        borderRadius: 12,
    },
    titleInfo: {
        flex: 1,
        marginLeft: 16,
        justifyContent: "flex-end",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
    },
    ratingText: {
        color: "#fff",
        marginLeft: 6,
        fontWeight: "600",
    },
    meta: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 8,
    },
    metaText: {
        color: "#A1A7B0",
        marginRight: 6,
        fontSize: 12,
    },
    tabs: {
        flexDirection: "row",
        marginTop: 24,
        marginBottom: 12,
    },
    tab: {
        marginRight: 20,
        color: "#A1A7B0",
        fontWeight: "600",
    },
    activeTab: {
        color: "#fff",
        borderBottomWidth: 2,
        borderBottomColor: "#F5C518",
        paddingBottom: 6,
    },
    description: {
        color: "#D1D5DB",
        fontSize: 14,
        lineHeight: 22,
    },
});