import CommentItem from './CommentItem';

export default function CommentsList({ comments = [] }) {
  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}
