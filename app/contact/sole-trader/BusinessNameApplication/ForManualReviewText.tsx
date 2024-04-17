const ForManualReviewText = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-primary-500" />
        <p className="text-sm text-primary-500">
          Your name may be available. Secure it before someone else does.
        </p>
      </div>
      <p className="text-sm">
        This business name will be reviewed by our specialist team before final
        registration.
      </p>
    </div>
  );
};

export default ForManualReviewText;
