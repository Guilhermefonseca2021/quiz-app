import Header from "../components/Header";
import QuizSection from "../components/QuizSection";

export default function LayoutDefault() {
  return (
    <div className="">
        <Header />
        <section className=" p-12 flex justify-center h-full w-full bg-[#271A45]">
          <QuizSection ></QuizSection>
        </section>
    </div>
  )
}
