const AvailableText = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-primary-500" />
        <p className="text-sm text-primary-500">
          Your business name is available!
        </p>
      </div>
      <p className="text-sm">Nice!</p>
    </div>
  );
};

export default AvailableText;
