import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { MovieParams_OpenDetailsAboutMovieScreen as MovieParams } from "../../src/utils/Functions/OpenDetailsAboutMovieScreen";
import { useEffect, useState } from "react";
import CastGridList from "../../src/components/List/CastGridList/CastGridList";
import MovieReviewList from "../../src/components/List/MovieReviewList/MovieReviewList";
import { getMovieDetails } from "../../src/api/moviesAPI";
import type { MovieDetais } from "../../src/types/responseApi/Movie";

export default function DetailsAboutMovie() {

  const {
    id,
    title,
    poster,
    banner,
    rating,
    year,
    duration,
    genre,
    overview,
  } = useLocalSearchParams<MovieParams>();

  const [selectedTab, setSelectedTab] = useState<"about" | "reviews" | "cast">("about");
  const [info, setInfo] = useState<MovieDetais>(null);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovieDetails(Number(id));
      setInfo(data);     
    };
    loadMovies();
  }, []);

  const Conteudo = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Header Image */}
      <Image
        source={{
          uri: banner,
        }}
        style={styles.banner}
      />

      {/* Header Actions */}
      <View style={styles.headerActions}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Movie Info */}
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Image
            source={{
              uri: poster
            }}
            style={styles.poster}
          />

          <View style={styles.titleInfo}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.rating}>
              <Ionicons name="star" size={16} color="#F5C518" />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>

            <View style={styles.meta}>
              <Text style={styles.metaText}>{year}</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>{info.runtime} Minutes</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>{genre}</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => setSelectedTab("about")}>
            <Text style={[styles.tab, selectedTab === "about" && styles.activeTab]}>
              About Movie
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedTab("reviews")}>
            <Text style={[styles.tab, selectedTab === "reviews" && styles.activeTab]}>
              Reviews
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedTab("cast")}>
            <Text style={[styles.tab, selectedTab === "cast" && styles.activeTab]}>
              Cast
            </Text>
          </TouchableOpacity>
        </View>

        {/* About */}
        {selectedTab === "about" && (
          <Text style={styles.description}>{overview}</Text>
        )}

        {/* Cast */}
        {selectedTab === "cast" && <CastGridList movie_id={Number(id)} />}

        {/* Reviews title */}
        {selectedTab === "reviews" && (
          <MovieReviewList movie_id={Number(id)} />
        )}
      </View>
    </ScrollView>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        keyExtractor={() => "static"}
        renderItem={null}
        ListHeaderComponent={Conteudo}
      />
    </View>
  );
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

