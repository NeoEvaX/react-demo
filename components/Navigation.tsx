import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";

const Navigation = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid grid-cols-2 px-20 pt-10">
      <ul className="col-end flex justify-end">
        <li className="mr-5">
          <Link
            className="border-b-2 border-blue-600 p-2 align-middle text-base font-medium leading-5 tracking-wide text-black hover:text-black"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="mr-5">
          <Link
            className="p-2 align-middle text-base font-medium leading-5 tracking-wide text-gray-400 hover:text-black"
            href="/settings"
          >
            Settings
          </Link>
        </li>
        {session?.user && (
          <li className="mr-5">
            <Link
              className="p-2 align-middle text-base font-medium leading-5 tracking-wide text-gray-400 hover:text-black"
              href="/hiddenSettings"
            >
              Hidden Settings
            </Link>
          </li>
        )}
        <li className="mr-5">
          <Link
            className="p-2 align-middle text-base font-medium leading-5 tracking-wide text-gray-400 hover:text-black"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
