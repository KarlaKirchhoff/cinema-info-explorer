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
    tabs: {
        flexDirection: "row",
        marginTop: 0,
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