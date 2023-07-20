import NavButton from "./NavButton";

const Navigation = async () => {
  return (
    <div className="grid grid-cols-2 px-20 pt-10">
      <ul className="col-end flex justify-end">
        <NavButton text={"Home"} href={"/"} />
        <NavButton text={"Settings"} href={"/settings"} />
        <NavButton text={"Hidden Settings"} href={"/hiddenSettings"} />
        <NavButton text={"Dashboard"} href={"/dashboard"} />
      </ul>
    </div>
  );
};

export default Navigation;
