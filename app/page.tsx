              import Navbar from "@/components/Navbar";
              import Hero from "@/components/Hero";
              import Countdown from "@/components/Countdown";
              import Stats from "@/components/Stats";
              import RegisterForm from "@/components/RegisterForm";
              import Ranking from "@/components/Ranking";
              import Prize from "@/components/Prize";
              import Footer from "@/components/Footer";
              import MyPosition from "@/components/MyPosition";
                
              export default function Home() {
                return (
                  <main className="min-h-screen bg-[#090014] text-white">
                    <Navbar />

                    <Hero />

                    <Countdown />

                    <Stats />
                      <MyPosition />
                    <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8">
                      <RegisterForm />
                      <Ranking />
                    </section>

                    <Prize />

                    <Footer />
                  </main>
                );
                  }