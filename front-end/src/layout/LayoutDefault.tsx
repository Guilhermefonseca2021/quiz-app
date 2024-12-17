import Header from "../components/Header";
import QuizSection from "../components/QuizSection";

export default function LayoutDefault() {
  return (
    <>
      <section className="flex flex-col min-h-screen w-full justify-center items-center ">
        <div className="head w-full absolute top-0">
          <Header />
        </div>
        <QuizSection />
      </section>
    </>
  );
}
