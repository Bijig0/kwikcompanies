type Props = {
  content: string;
};

const toAdminEmailTemplate = (props: Props) => {
  const { content } = props;
  return <div>{content}</div>;
};
