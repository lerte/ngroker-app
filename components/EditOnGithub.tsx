const EditOnGithub = (props) => {
  const { filePath, children, ...rest } = props;
  const href = `https://github.com/lerte/ngroker.com/blob/main/${filePath}`;

  return (
    <a
      {...rest}
      href={href}
    >
      Edit this page on GitHub →
    </a>
  );
};

export default EditOnGithub;
