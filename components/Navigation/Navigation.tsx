import NavButton from "./NavButton";

const Navigation = async () => {
  return (
    <div className="grid grid-cols-2 px-20 pt-10">
      <ul className="col-end flex justify-end">
        <NavButton text={"Home"} href={"/"} />
        <NavButton text={"Settings"} href={"/settings"} />
        <NavButton text={"Hidden Settings"} href={"/hiddenSettings"} />
        <NavButton text={"Dashboard"} href={"/dashboard"} />
        <NavButton text={"Test Form"} href={"/testform"} />
      </ul>
    </div>
  );
};

export default Navigation;
