function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <img
        src="https://links.papareact.com/1m8"
        alt="logo"
        width={50}
        className="rounded-full"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
