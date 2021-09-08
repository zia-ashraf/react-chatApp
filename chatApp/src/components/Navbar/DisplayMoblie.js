export default displayMobile = () => {
  return (
    <Toolbar>
      <IconButton
        {...{
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          "aria-haspopup": "true",
        }}
      >
        <MenuIcon />
      </IconButton>
      <div>{femmecubatorLogo}</div>
    </Toolbar>
  );
};
