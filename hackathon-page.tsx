import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Trophy, Users, MapPin, Zap, Code, Rocket } from "lucide-react"
import Link from "next/link"

export default function HackathonPage() {
  const googleFormUrl = "https://forms.google.com/your-form-link" // Replace with actual Google Form URL

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">HackFest 2025</span>
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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">March 15-17, 2025</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build the
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 500+ developers, designers, and innovators for 48 hours of coding, creativity, and collaboration.
              Turn your wildest ideas into reality.
            </p>
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
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>500+ Participants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>₹50K in Prizes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>48 Hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Banglore, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What is HackFest?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              HackFest is more than just a hackathon—it's a celebration of innovation, creativity, and the power of
              technology to solve real-world problems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Build & Create</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Develop innovative solutions using cutting-edge technologies. From AI to blockchain, the possibilities
                  are endless.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Network & Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Connect with like-minded individuals, learn from industry experts, and build lasting professional
                  relationships.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Win & Grow</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Compete for amazing prizes, gain recognition, and potentially launch your startup with our investor
                  network.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Event Schedule</h2>
            <p className="text-xl text-gray-300">48 hours of non-stop innovation</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                    Day 1
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Friday, March 15</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>6:00 PM - Registration & Welcome</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>7:00 PM - Opening Ceremony</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>8:00 PM - Team Formation & Hacking Begins</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                    Day 2
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Saturday, March 16</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>9:00 AM - Breakfast & Workshops</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>12:00 PM - Lunch & Mentorship</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>6:00 PM - Dinner & Networking</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge variant="outline" className="border-green-500/30 text-green-300">
                    Day 3
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Sunday, March 17</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>10:00 AM - Final Sprint</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>2:00 PM - Project Submissions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>3:00 PM - Presentations & Judging</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>5:00 PM - Awards & Closing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="prizes" className="py-20 px-4">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">Amazing Prizes</h2>
      <p className="text-xl text-gray-300">₹50,000 in total prizes and opportunities</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-white">1st Place</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-2">₹20,000</div>
          <p className="text-gray-300">Cash prize + Mentorship + Investor meetings</p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 border-gray-400/30 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-white">2nd Place</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-gray-400 mb-2">₹15,000</div>
          <p className="text-gray-300">Cash prize + Tech package + Mentorship</p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 border-amber-600/30 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-white">3rd Place</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-amber-600 mb-2">₹10,000</div>
          <p className="text-gray-300">Cash prize + Tech package</p>
        </CardContent>
      </Card>
    </div>
    <div className="text-center mt-12">
      <p className="text-gray-300 mb-6">
        Plus special category prizes for Best AI Implementation, Most Creative Solution, and People's Choice!
      </p>
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
      >
        <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">
          <Zap className="w-5 h-5 mr-2" />
          Register to Compete
        </Link>
      </Button>
    </div>
    {/* Sponsors Section */}
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Special Thanks to Our Sponsors</h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Example sponsor logos, replace with real sponsor info */}
        <a href="https://sponsor1.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <img src="/sponsors/sponsor1-logo.png" alt="Sponsor 1" className="h-16 mb-2" />
          <span className="text-gray-300 text-sm">Sponsor 1</span>
        </a>
        <a href="https://sponsor2.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <img src="/sponsors/sponsor2-logo.png" alt="Sponsor 2" className="h-16 mb-2" />
          <span className="text-gray-300 text-sm">Sponsor 2</span>
        </a>
        <a href="https://sponsor3.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <img src="/sponsors/sponsor3-logo.png" alt="Sponsor 3" className="h-16 mb-2" />
          <span className="text-gray-300 text-sm">Sponsor 3</span>
        </a>
        {/* Add more sponsors as needed */}
      </div>
      <p className="text-gray-400 text-center mt-4">We are grateful for their generous support!</p>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Who can participate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Anyone! Students, professionals, designers, developers - all skill levels are welcome. You can
                  participate solo or in teams of up to 4 people.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">What should I bring?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Bring your laptop, charger, and any hardware you want to hack with. We'll provide food, drinks, WiFi,
                  and a great atmosphere!
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Is there a cost to participate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Nope! HackFest is completely free. We'll provide meals, snacks, swag, and everything you need for an
                  amazing weekend.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">What if I don't have a team?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  No problem! We'll have team formation sessions at the beginning of the event. Many great projects come
                  from teams that meet at the hackathon.
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
            <p className="text-sm text-gray-400 mt-4">Registration closes March 10th or when we reach capacity</p>
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
              <span className="text-xl font-bold text-white">HackFest 2025</span>
            </div>
            <div className="flex space-x-6 text-gray-300">
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sponsors
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HackFest. All rights reserved. Made with ❤️ for the developer community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
