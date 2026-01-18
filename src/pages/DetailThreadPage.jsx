import { ArrowDown, ArrowUp, MessageCircleIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { asyncCreateThreadComment, asyncReceiveThreadDetail } from '../states/threadDetail/action';
import DetailThreadItem from '../components/DetailThreadItem';
import CommentsList from '../components/CommentsList';
import CommentInput from '../components/CommentInput';
import NotFound from '../components/NotFound';

export default function DetailThreadPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { threadDetail = null, authUser = null, loadingBar = {default: 0} } = useSelector(
    (states) => states
  );

  useEffect(() => {
    // Only fetch if id exists and is not a route keyword
    if (id && id !== 'create') {
      dispatch(asyncReceiveThreadDetail(id));
    }
  }, [id, dispatch]);

  const thread = {
    ...threadDetail,
    totalVotes: threadDetail
      ? threadDetail?.upVotesBy?.length - threadDetail?.downVotesBy?.length
      : 0,
    comments: threadDetail?.comments ? threadDetail.comments.map((comment) => ({
      ...comment,
      totalVotes: comment?.upVotesBy?.length - comment?.downVotesBy?.length
    })) : [],
  };

  const onCreateComment = ({ content }) => {
    dispatch(asyncCreateThreadComment({ id, content }));
  };

  if(threadDetail === null && [1,2].includes(loadingBar.default)) {
    return 'loading...'
  }
  if (threadDetail === null) {
    return <NotFound title="Thread Not Found" />;
  }

  return (
    <>
      <article className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <DetailThreadItem {...thread} />
      </article>
      <section id="comments" className="mt-4 flex flex-col gap-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white px-2">
          Comments
        </h3>
        <CommentInput authUser={authUser} submit={onCreateComment} />
        <CommentsList comments={thread.comments} />
      </section>
    </>
  );
}
