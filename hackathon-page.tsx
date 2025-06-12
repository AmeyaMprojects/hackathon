import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Trophy, Users, MapPin, Zap, Code, Rocket, Bot, EthernetPort } from "lucide-react"
import Link from "next/link"

export default function HackathonPage() {
  const googleFormUrl = "https://forms.gle/HpaYtAVtR4LwFdNCA" // Replace with actual Google Form URL

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Hackotsav 2025</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#schedule" className="text-gray-300 hover:text-white transition-colors">
                Schedule
              </a>
              <a href="#prizes" className="text-gray-300 hover:text-white transition-colors">
                Prizes
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </nav>
            <Button
              // ...existing code...
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                Register Now
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-5 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">25th July - 19th August , 2025</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hack
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {""}
                otsav 2025
              </span>
            </h1>
            {/* <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 500+ developers, designers, and innovators for 48 hours of coding, creativity, and collaboration.
              Turn your wildest ideas into reality.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
              >
                <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                  <Rocket className="w-5 h-5 mr-2" />
                  Register for Free
                </Link>
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Learn More
              </Button> */}
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>2 people per team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>₹XXXXK in Prizes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>MultiRound hackathon</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Banglore, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>{/* Sponsors Section */}
      

      <section id="prizes" className=" px-4">
        <div className="container mx-auto">
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-white mb-6 text-center">Special Thanks to Our Sponsors</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <a href="https://www.bcic.in/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <img src="/pic/bcic-removebg-preview.png" alt="BCIC" className="h-40 mb-2" />
                {/* <span className="text-gray-300 text-sm">BCIC</span> */}
              </a>
              <a href="https://www.manipal.edu/mu.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <img src="/pic/manipal-removebg-preview.png" alt="Manipal" className="h-50 mb-2" />
                {/* <span className="text-gray-300 text-sm">Manipal</span> */}
              </a>
              <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <img src="/pic/tcs-removebg-preview.png" alt="TCS" className="h-40 mb-2" />
                {/* <span className="text-gray-300 text-sm">TCS</span> */}
              </a>
            </div>
            {/* <p className="text-gray-400 text-center mt-4">We are grateful for their generous support!</p> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What is Hackotsav?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Ideas to Internships, Hack your way In!
              <br />

              Join the brightest minds across Karnataka for an epic ‘Hackotsav’ focused on
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Track 1: ARTIFICIAL INTELLIGENCE</CardTitle>
              </CardHeader>
              {/* <CardContent>
          <CardDescription className="text-gray-300">
            Build innovative solutions using artificial intelligence, machine learning, and data science to solve real-world challenges.
          </CardDescription>
        </CardContent> */}
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <EthernetPort className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Track 2: CYBER SECURITY</CardTitle>
              </CardHeader>
              {/* <CardContent>
          <CardDescription className="text-gray-300">
            Create impactful web or mobile applications that enhance user experience, accessibility, or community engagement.
          </CardDescription>
        </CardContent> */}
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}

<section
  id="schedule"
  className="relative py-24 px-4 bg-gradient-to-br from-purple-900/60 via-slate-900/80 to-purple-900/60 flex items-center justify-center min-h-screen overflow-hidden"
>
  {/* Decorative background elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
  </div>
  <div className="container mx-auto text-center relative z-10">
    <div className="mb-20">
      <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">Event Schedule</h2>
      <p className="text-2xl text-purple-200 mb-2">Mark your calendars for every milestone!</p>
    </div>
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Registration Closes */}
      <div className="flex items-center space-x-8 bg-white/5 border border-purple-500/20 rounded-2xl shadow-lg px-8 py-8 backdrop-blur-md hover:scale-[1.025] transition-transform">
        <div className="flex-shrink-0 w-48 text-right">
          <Badge variant="outline" className="border-purple-500/60 text-purple-300 text-lg px-6 py-3 font-semibold shadow-md">
            18th July
          </Badge>
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-bold text-white mb-2">Registration Closes</h3>
          <p className="text-lg text-purple-200">Last day to register your team for Hackotsav 2025.</p>
        </div>
      </div>
      {/* Curtain Raiser */}
      <div className="flex items-center space-x-8 bg-white/5 border border-blue-500/20 rounded-2xl shadow-lg px-8 py-8 backdrop-blur-md hover:scale-[1.025] transition-transform">
        <div className="flex-shrink-0 w-48 text-right">
          <Badge variant="outline" className="border-blue-500/60 text-blue-200 text-lg px-6 py-3 font-semibold shadow-md">
            25th July
          </Badge>
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-bold text-white mb-2">Curtain Raiser</h3>
          <p className="text-lg text-blue-200">Kick-off event with keynote speakers and challenge reveal.</p>
        </div>
      </div>
      {/* Finale */}
      <div className="flex items-center space-x-8 bg-white/5 border border-green-500/20 rounded-2xl shadow-lg px-8 py-8 backdrop-blur-md hover:scale-[1.025] transition-transform">
        <div className="flex-shrink-0 w-48 text-right">
          <Badge variant="outline" className="border-green-500/60 text-green-200 text-lg px-6 py-3 font-semibold shadow-md">
            19th August
          </Badge>
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-bold text-white mb-2">Finale</h3>
          <p className="text-lg text-green-200">Final presentations, demos, and awards at MIT Bengaluru Campus.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section id="faq" className="py-10 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Hackotsav 2025 - FAQ</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">1. What is Hackotsav?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Hackotsav is a Karnataka state-wide hackathon organized by Manipal Academy of Higher Education, BCIC, and TCS, bringing together bright minds from Karnataka to solve real-world problems in Artificial Intelligence and Cyber Security. It’s a platform to innovate, learn, and showcase your skills to industry experts.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">2. Who can participate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Students, from 3rd and 4th year of Engineering, MCA 2nd and 3rd year, BCA 2nd Year from Karnataka with an interest in AI, Cybersecurity, and technology innovation are welcome. Prior hackathon experience is not mandatory.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">3. Do I need to know coding to participate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  While coding knowledge is helpful, teams can include members with varied skill sets such as problem-solving, design thinking, business analysis, and domain expertise.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">4. How do I register?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  You can register by scanning the QR code provided on this page or event poster or through the official registration link shared by the organizing team. Registration closes on 18th July 2025.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">5. Is there any registration fee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  No, participation in Hackotsav is completely free.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">6. What is the event timeline?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Registration Closes: 18th July 2025</li>
                  <li>Curtain Raiser: 25th July 2025</li>
                  <li>Finale: 19th August 2025</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">7. Can I participate individually or do I need a team?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Team registrations are allowed with two members in each team.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">8. What kind of problems will we solve?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Real-world industry problems in Artificial Intelligence and Cyber Security, provided by partnering organizations. You will get mentorship and guidance throughout the event.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">9. What do winners and participants get?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Opportunity to work on real-world problems</li>
                  <li>Mentorship from industry experts</li>
                  <li>Industry connections and exposure</li>
                  <li>Top internships and job opportunities</li>
                  <li>Industry-level recognition and certificates</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">10. Will there be mentorship during the event?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Yes. Expert mentors from industry will guide teams throughout the hackathon process.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">11. Where will Hackotsav be held?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Most of the events will be online. The final presentations and award ceremony will be held at the Manipal Institute of Technology, Bengaluru Campus.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">12. Who are the organizers and sponsors?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Hackotsav is organized by Manipal Academy of Higher Education, in collaboration with BCIC and Tata Consultancy Services (TCS).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of innovators for an unforgettable weekend of coding, creativity, and collaboration.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-12 py-6"
            >
              <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                <Rocket className="w-6 h-6 mr-2" />
                Register Now - It's Free!
              </Link>
            </Button>
            <p className="text-sm text-gray-400 mt-4">Registration closes July 18th</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Hackotsav 2025</span>
            </div>
            <div className="flex space-x-6 text-gray-300">
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#prizes" className="hover:text-white transition-colors">
                Sponsors
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hackotsav. All rights reserved.</p>
            <p className="text-xs">
              Made with ❤️ by Ameya Mhatre
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
