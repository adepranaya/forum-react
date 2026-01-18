import { ArrowDown, ArrowUp, MessageCircleIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import DetailThreadItem from '../components/DetailThreadItem';
import CommentsList from '../components/CommentsList';

export default function DetailThreadPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { threadDetail = null } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const thread = {
    ...threadDetail,
    totalVotes: threadDetail
      ? threadDetail?.upVotesBy?.length + threadDetail?.downVotesBy?.length
      : 0,
  };

  return (
    <>
      <article className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <DetailThreadItem {...thread} />
      </article>
      <section id="comments" className="mt-4 flex flex-col gap-6">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white px-2">
          Discussion
        </h3>

        <CommentsList comments={thread.comments} />
      </section>
    </>
  );
}
