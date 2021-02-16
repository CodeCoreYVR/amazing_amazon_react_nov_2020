import { ReviewDetails } from '../ReviewDetails'

export function ReviewList(props) {
  const { reviews } = props

  return (
    <div>
      { reviews && reviews.map((review) => {
        let { rating, body, created_at, reviewer, id } = review
        return (
          <ReviewDetails
            key={id}
            rating={rating}
            body={body}
            reviewer={reviewer ? reviewer : ""}
            createdAt={created_at}
            onDeleteClick={id => props.onReviewDeleteClick(id)}
            {...review}
          />
        )
      })}
    </div>
  )
}
