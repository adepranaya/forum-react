export default function CommentInput() {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex gap-4">
        <div className="size-10 rounded-full overflow-hidden shrink-0">
          <img
            alt="Logged in user avatar"
            className="w-full h-full object-cover"
            data-alt="User profile avatar small"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhSslgszu-FW3dBn4PL6PEdatXJYXWYHdFKJl6hwn1zIzYRUFv-rE9gNKYdvMQIvqhRyYwMq5dwVKfvbVPGrivuzWYGiCU9wF1TRP1oqLAjhXXP3zc4SYL1PY33-BSo9e-3M7Iyi8pQfslRBKc0Koro3Hr3LFxnTTy_8TyKksZYxZ8PvgnG_7beLShr7M9HCit7TmiNi0AEnEUE8xcb9d5DHKpPTJMPtbCwjJHy6AouRYWHaXgS57khOvHRTERnfgBZeD5V-Fd1Q"
          />
        </div>
        <div className="flex-1">
          <textarea
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary min-h-25 placeholder:text-slate-500"
            placeholder="What are your thoughts?"
          ></textarea>
          <div className="flex justify-end mt-3">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
