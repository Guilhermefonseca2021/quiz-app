import Header from "../components/Header";
import QuizSection from "../components/QuizSection";

export default function LayoutDefault() {
  return (
<<<<<<< HEAD
    <>
      <section className="flex flex-col min-h-screen w-full justify-center items-center ">
        <div className="head w-full absolute top-0">
          <Header />
        </div>
        <QuizSection />
      </section>
    </>
  );
=======
    <div className="">
        <Header />
        <section className=" p-12 flex justify-center h-full w-full bg-[#271A45]">
          <QuizSection />
        </section>
    </div>
  )
>>>>>>> c4594bb9e733386f0b4d268ecd8751a9033f4d91
}
