const IdenticalText = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-primary-500" />
        <p className="text-sm text-primary-500">
          Your name is identical to another business name.
        </p>
      </div>
      <p className="text-sm">Cannot its' bad</p>
    </div>
  );
};

export default IdenticalText;
