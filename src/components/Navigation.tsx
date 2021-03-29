import Link from "next/link";

const Navigation: React.VFC = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex items-center justify-center bg-gray-100">
            <li className="m-2 text-blue-600">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li className="m-2 text-blue-600">
              <Link href="/posts">
                <a>POSTS</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export { Navigation };