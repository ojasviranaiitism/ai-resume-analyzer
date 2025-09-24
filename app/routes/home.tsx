import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <section className="main-section">
          <div className="page-section">
              <h1>Track your Applications & Resume</h1>
              <h2>Review your submissions & AI-powered feedback!</h2>
          </div>
      </section>
  </main>
}
