import { MovieReviewListItem, ReviewItemComponent } from "./MovieReviewListItem";
import type { MovieReview } from "../../../types/responseApi/Movie";
import { useEffect, useState } from "react";
import { getMovieReview } from "../../../api/moviesAPI";
import { FlatList } from "react-native";
import ActivityIndicator from "../../ActivityIndicator";

type Props = {
  movie_id: number
}

export default function MovieReviewList({ movie_id }: Props) {
  const [reviews, setReviews] = useState<MovieReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovieReview(movie_id);
      setReviews(data);
      setLoading(false);
    };
    loadMovies();
  }, []);

  if (loading) return <ActivityIndicator />;

  const formatedReview: ReviewItemComponent[] = reviews.map((item) => {
    return {
      id: item.id,
      author: item.author_details.username,
      content: item.content,
      rating: item.author_details.rating,
      avatar: item.author_details.avatar_path
    }
  })

  return (
    <FlatList
      data={formatedReview}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <MovieReviewListItem review={item} />
      )}
    />
  )
}
