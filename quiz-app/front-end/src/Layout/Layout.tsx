import Header from "../components/Header";
import Router from "../routes";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="my-4 p-2">
        <Router />
      </div>
    </>
  )
}
