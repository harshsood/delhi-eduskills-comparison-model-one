import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { GraduationCap, Download, Share2, CheckCircle2, Phone, User, Mail, Building2, TrendingUp, MapPin, Calendar, Award, DollarSign, Users, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Compare = () => {
  const { toast } = useToast();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedColleges, setSelectedColleges] = useState<string[]>(["", "", ""]);
  const [showRegistrationDialog, setShowRegistrationDialog] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    college: ""
  });

  const courses = [
    "B.A. LL.B. (Hons)",
    "B.Tech Computer Science",
    "MBA",
    "B.Com (Hons)",
    "BBA",
    "B.Sc Nursing",
    "B.Arch",
    "MBBS"
  ];

  const colleges = [
    { id: "du", name: "Delhi University" },
    { id: "lpu", name: "Lovely Professional University" },
    { id: "amity", name: "Amity University" },
    { id: "jamia", name: "Jamia Millia Islamia" },
    { id: "jnu", name: "Jawaharlal Nehru University" }
  ];

  const comparisonData = {
    du: {
      name: "Delhi University",
      rating: 4.5,
      institute: {
        type: "Public",
        estd: 1922,
        location: "Delhi"
      },
      fees: {
        total: "₹50,000",
        perYear: "₹12,500"
      },
      placement: {
        rate: "95%",
        average: "₹6.5 LPA",
        highest: "₹12 LPA"
      },
      admission: {
        exam: "CUET",
        cutoff: "95%"
      },
      facilities: ["Library", "Hostel", "Sports Complex", "Labs", "Cafeteria"]
    },
    lpu: {
      name: "Lovely Professional University",
      rating: 4.4,
      institute: {
        type: "Private",
        estd: 2005,
        location: "Punjab"
      },
      fees: {
        total: "₹2,50,000",
        perYear: "₹62,500"
      },
      placement: {
        rate: "93%",
        average: "₹5.8 LPA",
        highest: "₹42 LPA"
      },
      admission: {
        exam: "LPUNEST",
        cutoff: "75%"
      },
      facilities: ["Library", "Hostel", "Sports Complex", "Labs", "Cafeteria", "Gym", "Medical Center"]
    },
    amity: {
      name: "Amity University",
      rating: 4.3,
      institute: {
        type: "Private",
        estd: 2003,
        location: "Noida"
      },
      fees: {
        total: "₹3,00,000",
        perYear: "₹75,000"
      },
      placement: {
        rate: "92%",
        average: "₹6.2 LPA",
        highest: "₹15 LPA"
      },
      admission: {
        exam: "Amity Entrance",
        cutoff: "80%"
      },
      facilities: ["Library", "Hostel", "Sports Complex", "Labs", "International Exchange"]
    },
    jamia: {
      name: "Jamia Millia Islamia",
      rating: 4.6,
      institute: {
        type: "Central",
        estd: 1920,
        location: "Delhi"
      },
      fees: {
        total: "₹45,000",
        perYear: "₹11,250"
      },
      placement: {
        rate: "94%",
        average: "₹7 LPA",
        highest: "₹18 LPA"
      },
      admission: {
        exam: "JEE",
        cutoff: "92%"
      },
      facilities: ["Library", "Hostel", "Sports Complex", "Labs", "Medical Facility"]
    },
    jnu: {
      name: "Jawaharlal Nehru University",
      rating: 4.7,
      institute: {
        type: "Central",
        estd: 1969,
        location: "Delhi"
      },
      fees: {
        total: "₹40,000",
        perYear: "₹10,000"
      },
      placement: {
        rate: "96%",
        average: "₹7.5 LPA",
        highest: "₹20 LPA"
      },
      admission: {
        exam: "CUET",
        cutoff: "96%"
      },
      facilities: ["Library", "Hostel", "Sports Complex", "Research Centers", "International Programs"]
    }
  };

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
    toast({
      title: "Course Selected",
      description: `${course} will be applied to all colleges for accurate comparison`,
    });
  };

  const handleCollegeSelect = (index: number, collegeId: string) => {
    const newColleges = [...selectedColleges];
    newColleges[index] = collegeId;
    setSelectedColleges(newColleges);

    if (newColleges.filter(Boolean).length >= 2 && selectedCourse && !isRegistered) {
      setShowRegistrationDialog(true);
    }
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!registrationData.name || !registrationData.email || !registrationData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!/^\d{10}$/.test(registrationData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive"
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registrationData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setShowRegistrationDialog(false);
    setIsRegistered(true);
    toast({
      title: "Registration Successful",
      description: "You can now view the comparison and download PDF",
    });
  };

  const handleDownloadPDF = () => {
    if (!isRegistered) {
      toast({
        title: "Registration Required",
        description: "Please complete registration to download comparison",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Download Started",
      description: "Your comparison PDF is being generated...",
    });
  };

  const handleShareWhatsApp = () => {
    if (!isRegistered) {
      toast({
        title: "Registration Required",
        description: "Please complete registration to share comparison",
        variant: "destructive"
      });
      return;
    }
    const text = `Check out this college comparison on Delhi Eduskills for ${selectedCourse}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Delhi Eduskills
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-blue-600">
              Home
            </Link>
            <Link to="/colleges" className="text-sm font-medium transition-colors hover:text-blue-600">
              Colleges
            </Link>
            <Link to="/compare" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1">
              Compare
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Login
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Compare Colleges
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Make informed decisions by comparing colleges side-by-side across fees, placements, facilities and more
          </p>
        </div>

        <Card className="mb-8 border-2 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Step 1: Select Course
            </CardTitle>
            <CardDescription>
              Choose the course you want to compare across different institutions
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Select value={selectedCourse} onValueChange={handleCourseSelect}>
              <SelectTrigger className="w-full md:w-[500px] h-12 border-2 hover:border-blue-400 transition-colors">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedCourse && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="text-sm font-medium text-blue-900">
                  Selected: <span className="font-bold">{selectedCourse}</span>
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mb-8 border-2 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-cyan-50 to-teal-50">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-cyan-600" />
              Step 2: Select Colleges (Up to 3)
            </CardTitle>
            <CardDescription>
              Pick colleges to compare for {selectedCourse || "the selected course"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2 text-slate-700">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    College {index + 1}
                  </label>
                  <Select
                    value={selectedColleges[index]}
                    onValueChange={(value) => handleCollegeSelect(index, value)}
                    disabled={!selectedCourse}
                  >
                    <SelectTrigger className="h-12 border-2 hover:border-cyan-400 transition-colors">
                      <SelectValue placeholder={`Select college ${index + 1}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {colleges.map((college) => (
                        <SelectItem
                          key={college.id}
                          value={college.id}
                          disabled={selectedColleges.includes(college.id)}
                        >
                          {college.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedColleges.filter(Boolean).length >= 2 && selectedCourse && isRegistered && (
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button onClick={handleDownloadPDF} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all">
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
            <Button onClick={handleShareWhatsApp} variant="outline" size="lg" className="border-2 hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all shadow-lg">
              <Share2 className="mr-2 h-5 w-5" />
              Share on WhatsApp
            </Button>
          </div>
        )}

        {selectedColleges.filter(Boolean).length >= 2 && selectedCourse && isRegistered && (
          <div className="space-y-8">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full shadow-lg">
                <Award className="h-6 w-6" />
                <span className="font-bold text-lg">Comparison Results</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {selectedColleges.map((collegeId, index) => {
                if (!collegeId) return null;
                const data = comparisonData[collegeId as keyof typeof comparisonData];
                return (
                  <Card key={index} className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="h-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"></div>
                    <CardHeader className="bg-gradient-to-br from-slate-50 to-white">
                      <CardTitle className="text-xl">{data.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <Badge className="bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-50">
                          ★ {data.rating}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-slate-600 flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-blue-600" />
                          Institute Details
                        </h4>
                        <div className="space-y-2 pl-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Type</span>
                            <Badge variant="outline" className="font-medium">{data.institute.type}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Established
                            </span>
                            <span className="font-medium">{data.institute.estd}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              Location
                            </span>
                            <span className="font-medium">{data.institute.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-3 border-t">
                        <h4 className="font-semibold text-sm text-slate-600 flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          Course Fees
                        </h4>
                        <div className="space-y-2 pl-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Total Fees</span>
                            <span className="font-bold text-green-700 text-base">{data.fees.total}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Per Year</span>
                            <span className="font-medium">{data.fees.perYear}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-3 border-t">
                        <h4 className="font-semibold text-sm text-slate-600 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-purple-600" />
                          Placement Stats
                        </h4>
                        <div className="space-y-2 pl-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Placement Rate</span>
                            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">{data.placement.rate}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Average</span>
                            <span className="font-medium">{data.placement.average}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Highest</span>
                            <span className="font-medium text-purple-700">{data.placement.highest}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-3 border-t">
                        <h4 className="font-semibold text-sm text-slate-600 flex items-center gap-2">
                          <Users className="h-4 w-4 text-orange-600" />
                          Admission
                        </h4>
                        <div className="space-y-2 pl-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Entrance Exam</span>
                            <Badge variant="outline">{data.admission.exam}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Cutoff</span>
                            <span className="font-medium">{data.admission.cutoff}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-3 border-t">
                        <h4 className="font-semibold text-sm text-slate-600">Facilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {data.facilities.map((facility, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {facility}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {selectedColleges.filter(Boolean).length >= 2 && selectedCourse && !isRegistered && (
          <Card className="border-2 border-dashed border-blue-300 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Almost There!
              </h3>
              <p className="text-slate-600 text-center max-w-md mb-6 text-lg">
                Complete your registration to unlock the detailed comparison and download PDF
              </p>
              <Button onClick={() => setShowRegistrationDialog(true)} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl px-8">
                Complete Registration
              </Button>
            </CardContent>
          </Card>
        )}

        {(!selectedCourse || selectedColleges.filter(Boolean).length < 2) && (
          <Card className="border-2 border-dashed shadow-lg">
            <CardContent className="flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-10 w-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-700">Start Your Comparison</h3>
              <p className="text-slate-600 text-center max-w-md text-lg">
                Select a course and at least 2 colleges to see a detailed side-by-side comparison
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={showRegistrationDialog} onOpenChange={setShowRegistrationDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Complete Your Registration
            </DialogTitle>
            <DialogDescription>
              Fill in your details to unlock the comparison and download PDF
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRegistrationSubmit} className="space-y-5 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-slate-700">
                <User className="h-4 w-4 text-blue-600" />
                Full Name *
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={registrationData.name}
                onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
                required
                className="h-11 border-2 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-slate-700">
                <Mail className="h-4 w-4 text-blue-600" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={registrationData.email}
                onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                required
                className="h-11 border-2 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-slate-700">
                <Phone className="h-4 w-4 text-blue-600" />
                Mobile Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="10-digit mobile number"
                value={registrationData.phone}
                onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                required
                maxLength={10}
                className="h-11 border-2 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="college" className="flex items-center gap-2 text-slate-700">
                <Building2 className="h-4 w-4 text-blue-600" />
                Current College/University
              </Label>
              <Input
                id="college"
                placeholder="Optional"
                value={registrationData.college}
                onChange={(e) => setRegistrationData({ ...registrationData, college: e.target.value })}
                className="h-11 border-2 focus:border-blue-500"
              />
            </div>

            <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-base font-semibold shadow-lg" size="lg">
              Complete Registration
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Compare;
