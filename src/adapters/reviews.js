export const adaptReview = (data) => {
  return (
    {
      reviewId: data.id,
      userId: data.user.id,
      userName: data.user.name,
      rating: data.rating,
      comment: data.comment,
      date: data.date,
    }
  );
};
