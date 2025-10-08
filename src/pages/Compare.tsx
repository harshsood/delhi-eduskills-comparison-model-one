import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { GraduationCap, Download, Share2, CheckCircle2, Phone, User, Mail, Building2, TrendingUp, MapPin, Calendar, Award, DollarSign, Users, BookOpen, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ComparisonSection {
  title: string;
  isOpen: boolean;
}

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

  const [sections, setSections] = useState<Record<string, boolean>>({
    institute: true,
    courses: true,
    fees: true,
    placement: true,
    admission: true,
    ranking: true,
    facilities: true,
    eligibility: true,
    scholarship: true
  });

  const toggleSection = (section: string) => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

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
    { id: "lpu", name: "Lovely Professional University" },
    { id: "amity", name: "Amity University" },
    { id: "du", name: "Delhi University" },
    { id: "jamia", name: "Jamia Millia Islamia" },
    { id: "jnu", name: "Jawaharlal Nehru University" }
  ];

  const comparisonData = {
    lpu: {
      name: "Lovely Professional University",
      shortName: "LPU",
      logo: "🎓",
      rating: 4.3,
      reviews: 1234,
      institute: {
        type: "Private",
        estd: 2005,
        location: "Phagwara, Punjab",
        ownership: "Private University",
        approvedBy: "UGC, BCI, AICTE, PCI, COA",
        accreditation: "NAAC A+"
      },
      courses: {
        total: 200,
        streams: ["Engineering", "Management", "Law", "Design", "Agriculture", "Sciences", "Arts", "Commerce"],
        popular: ["B.Tech", "MBA", "B.A. LL.B.", "BBA", "B.Com"]
      },
      fees: {
        btech: { total: "₹8,00,000", perYear: "₹2,00,000" },
        mba: { total: "₹6,00,000", perYear: "₹3,00,000" },
        ballb: { total: "₹7,50,000", perYear: "₹1,50,000" },
        bcom: { total: "₹3,20,000", perYear: "₹80,000" },
        averagePerYear: "₹2,00,000"
      },
      placement: {
        rate: "90%",
        average: "₹5.2 LPA",
        highest: "₹42 LPA",
        median: "₹4.5 LPA",
        topRecruiters: ["Amazon", "Microsoft", "Cognizant", "TCS", "Infosys", "Wipro"],
        recruitmentReport: "View Placement Details →"
      },
      admission: {
        exam: "LPUNEST",
        cutoff: "75%",
        seats: 15000,
        process: "Online Application → Entrance Test → Merit List → Counselling",
        applicationDeadline: "June 30, 2025"
      },
      ranking: {
        nirf: "Not Ranked",
        indiaToday: "45th",
        timesHigherEducation: "201-250",
        outlook: "AAA+",
        week: "5th (Private)"
      },
      facilities: {
        hostel: { available: true, capacity: "25,000 students", fee: "₹80,000/year" },
        library: { available: true, books: "4,50,000+", digitalResources: "35,000+" },
        labs: { available: true, count: 500, details: "Computer Labs, Engineering Labs, Science Labs" },
        sports: { available: true, details: "Olympic-sized Pool, Cricket Stadium, Basketball, Football, Badminton Courts" },
        cafeteria: { available: true, count: 15 },
        medical: { available: true, details: "24x7 Medical Center with 50+ doctors" },
        transport: { available: true, details: "Bus service to nearby cities" },
        wifi: { available: true, details: "Campus-wide WiFi" },
        gym: { available: true, details: "Fully equipped gymnasium" }
      },
      eligibility: {
        btech: "12th with 60% in PCM",
        mba: "Graduation with 50%",
        ballb: "12th with 50%",
        bcom: "12th with 50%"
      },
      scholarship: {
        available: true,
        types: ["Merit-based", "Need-based", "Sports Quota"],
        amount: "Up to 100% tuition fee waiver",
        details: "Scholarships based on LPUNEST scores and academic performance"
      },
      highlights: [
        "India's largest private university",
        "500+ partner universities worldwide",
        "Patent filing facility available",
        "On-campus startup incubation center"
      ]
    },
    amity: {
      name: "Amity University Noida",
      shortName: "Amity",
      logo: "��",
      rating: 4.0,
      reviews: 987,
      institute: {
        type: "Private",
        estd: 2005,
        location: "Noida, Uttar Pradesh",
        ownership: "Private University",
        approvedBy: "UGC, AICTE, BCI, PCI",
        accreditation: "NAAC A+"
      },
      courses: {
        total: 150,
        streams: ["Engineering", "Management", "Law", "Biotechnology", "Design", "Mass Communication", "Sciences"],
        popular: ["B.Tech", "MBA", "B.A. LL.B.", "BBA", "B.Arch"]
      },
      fees: {
        btech: { total: "₹11,48,000", perYear: "₹2,87,000" },
        mba: { total: "₹11,92,000", perYear: "₹5,96,000" },
        ballb: { total: "₹10,50,000", perYear: "₹2,10,000" },
        bcom: { total: "₹4,44,000", perYear: "₹1,11,000" },
        averagePerYear: "₹2,87,000"
      },
      placement: {
        rate: "92%",
        average: "₹6.2 LPA",
        highest: "₹25 LPA",
        median: "₹5.5 LPA",
        topRecruiters: ["Google", "Deloitte", "Ernst & Young", "KPMG", "Adobe", "Samsung"],
        recruitmentReport: "View Placement Details →"
      },
      admission: {
        exam: "Amity JEE / JEE Main",
        cutoff: "80%",
        seats: 8000,
        process: "Online Application → Entrance Test / JEE Score → Merit List → Counselling",
        applicationDeadline: "July 15, 2025"
      },
      ranking: {
        nirf: "25th (Private)",
        indiaToday: "12th",
        timesHigherEducation: "151-200",
        outlook: "AAA",
        week: "3rd (Private)"
      },
      facilities: {
        hostel: { available: true, capacity: "6,000 students", fee: "₹1,20,000/year" },
        library: { available: true, books: "3,00,000+", digitalResources: "25,000+" },
        labs: { available: true, count: 350, details: "State-of-the-art labs with latest equipment" },
        sports: { available: true, details: "Indoor & Outdoor Sports Complex" },
        cafeteria: { available: true, count: 10 },
        medical: { available: true, details: "Medical Center with ambulance" },
        transport: { available: true, details: "AC Bus service to Delhi-NCR" },
        wifi: { available: true, details: "High-speed WiFi across campus" },
        gym: { available: true, details: "Modern fitness center" }
      },
      eligibility: {
        btech: "12th with 60% in PCM & valid JEE score",
        mba: "Graduation with 50% & valid entrance test",
        ballb: "12th with 50%",
        bcom: "12th with 50%"
      },
      scholarship: {
        available: true,
        types: ["Merit-based", "Need-based"],
        amount: "Up to 75% tuition fee waiver",
        details: "Based on entrance test scores and 12th percentage"
      },
      highlights: [
        "International exchange programs with 300+ universities",
        "Research and innovation centers",
        "Dedicated placement cell",
        "Industry-academia partnerships"
      ]
    },
    du: {
      name: "Delhi University",
      shortName: "DU",
      logo: "🎓",
      rating: 4.5,
      reviews: 2156,
      institute: {
        type: "Public",
        estd: 1922,
        location: "Delhi",
        ownership: "Central University",
        approvedBy: "UGC",
        accreditation: "NAAC A++"
      },
      courses: {
        total: 500,
        streams: ["Arts", "Science", "Commerce", "Law", "Management", "Education"],
        popular: ["B.A.", "B.Sc", "B.Com", "B.A. LL.B.", "MBA"]
      },
      fees: {
        btech: { total: "₹80,000", perYear: "₹20,000" },
        mba: { total: "₹1,20,000", perYear: "₹60,000" },
        ballb: { total: "₹50,000", perYear: "₹10,000" },
        bcom: { total: "₹30,000", perYear: "₹10,000" },
        averagePerYear: "₹12,500"
      },
      placement: {
        rate: "95%",
        average: "₹6.5 LPA",
        highest: "₹18 LPA",
        median: "₹5.8 LPA",
        topRecruiters: ["Deloitte", "EY", "Goldman Sachs", "McKinsey", "BCG", "ICICI Bank"],
        recruitmentReport: "View Placement Details →"
      },
      admission: {
        exam: "CUET",
        cutoff: "95%",
        seats: 50000,
        process: "CUET → Merit List → Online Counselling → Document Verification",
        applicationDeadline: "As per CUET schedule"
      },
      ranking: {
        nirf: "11th",
        indiaToday: "5th",
        timesHigherEducation: "401-500",
        outlook: "AAA+",
        week: "1st (Public)"
      },
      facilities: {
        hostel: { available: true, capacity: "10,000 students", fee: "₹25,000/year" },
        library: { available: true, books: "15,00,000+", digitalResources: "50,000+" },
        labs: { available: true, count: 1000, details: "Research labs across all departments" },
        sports: { available: true, details: "Multiple sports complexes and grounds" },
        cafeteria: { available: true, count: 20 },
        medical: { available: true, details: "Health centers in all colleges" },
        transport: { available: true, details: "DTC bus connectivity" },
        wifi: { available: true, details: "WiFi in most colleges" },
        gym: { available: true, details: "Gyms in select colleges" }
      },
      eligibility: {
        btech: "12th with 60% in PCM & CUET score",
        mba: "Graduation with 50% & entrance test",
        ballb: "12th with 50% & CUET score",
        bcom: "12th with 50% & CUET score"
      },
      scholarship: {
        available: true,
        types: ["Merit-based", "Need-based", "SC/ST/OBC"],
        amount: "Up to 100% fee waiver + stipend",
        details: "Multiple government and university scholarships available"
      },
      highlights: [
        "Oldest and most prestigious university in India",
        "91 colleges under its umbrella",
        "Strong alumni network",
        "Excellent faculty with research focus"
      ]
    },
    jamia: {
      name: "Jamia Millia Islamia",
      shortName: "JMI",
      logo: "🎓",
      rating: 4.6,
      reviews: 1543,
      institute: {
        type: "Central",
        estd: 1920,
        location: "New Delhi",
        ownership: "Central University",
        approvedBy: "UGC",
        accreditation: "NAAC A"
      },
      courses: {
        total: 180,
        streams: ["Engineering", "Architecture", "Humanities", "Sciences", "Social Sciences", "Education", "Law"],
        popular: ["B.Tech", "B.Arch", "B.A.", "MBA", "Mass Communication"]
      },
      fees: {
        btech: { total: "₹2,00,000", perYear: "₹50,000" },
        mba: { total: "₹1,50,000", perYear: "₹75,000" },
        ballb: { total: "₹45,000", perYear: "₹11,250" },
        bcom: { total: "₹30,000", perYear: "₹10,000" },
        averagePerYear: "₹36,562"
      },
      placement: {
        rate: "94%",
        average: "₹7 LPA",
        highest: "₹22 LPA",
        median: "₹6.2 LPA",
        topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Cognizant"],
        recruitmentReport: "View Placement Details →"
      },
      admission: {
        exam: "JEE Main / Jamia Entrance",
        cutoff: "92%",
        seats: 8000,
        process: "Entrance Test → Merit List → Counselling → Admission",
        applicationDeadline: "June 15, 2025"
      },
      ranking: {
        nirf: "3rd",
        indiaToday: "8th",
        timesHigherEducation: "601-800",
        outlook: "AAA",
        week: "2nd (Central)"
      },
      facilities: {
        hostel: { available: true, capacity: "4,000 students", fee: "₹30,000/year" },
        library: { available: true, books: "3,50,000+", digitalResources: "20,000+" },
        labs: { available: true, count: 250, details: "Well-equipped departmental labs" },
        sports: { available: true, details: "Sports grounds and indoor facilities" },
        cafeteria: { available: true, count: 8 },
        medical: { available: true, details: "University Health Centre" },
        transport: { available: true, details: "University bus service" },
        wifi: { available: true, details: "Campus-wide WiFi" },
        gym: { available: true, details: "Fitness center" }
      },
      eligibility: {
        btech: "12th with 60% in PCM & JEE Main",
        mba: "Graduation with 50%",
        ballb: "12th with 50%",
        bcom: "12th with 50%"
      },
      scholarship: {
        available: true,
        types: ["Merit-based", "Need-based", "Minority scholarships"],
        amount: "Up to 100% fee waiver",
        details: "Extensive scholarship programs for deserving students"
      },
      highlights: [
        "Premier central university",
        "Strong focus on research",
        "Diverse student community",
        "Location in heart of Delhi"
      ]
    },
    jnu: {
      name: "Jawaharlal Nehru University",
      shortName: "JNU",
      logo: "🎓",
      rating: 4.7,
      reviews: 1876,
      institute: {
        type: "Central",
        estd: 1969,
        location: "New Delhi",
        ownership: "Central University",
        approvedBy: "UGC",
        accreditation: "NAAC A++"
      },
      courses: {
        total: 100,
        streams: ["Arts", "Sciences", "Languages", "International Studies", "Social Sciences"],
        popular: ["M.A.", "M.Sc", "Ph.D.", "MCA", "MBA"]
      },
      fees: {
        btech: { total: "₹60,000", perYear: "₹15,000" },
        mba: { total: "₹80,000", perYear: "₹40,000" },
        ballb: { total: "₹40,000", perYear: "₹10,000" },
        bcom: { total: "₹30,000", perYear: "₹10,000" },
        averagePerYear: "₹10,000"
      },
      placement: {
        rate: "96%",
        average: "₹7.5 LPA",
        highest: "₹20 LPA",
        median: "₹6.8 LPA",
        topRecruiters: ["UN Organizations", "World Bank", "Research Institutes", "Media Houses", "NGOs"],
        recruitmentReport: "View Placement Details →"
      },
      admission: {
        exam: "CUET / JNU Entrance",
        cutoff: "96%",
        seats: 5000,
        process: "Entrance Exam → Viva Voce (for some courses) → Merit List",
        applicationDeadline: "As per CUET / JNU schedule"
      },
      ranking: {
        nirf: "2nd",
        indiaToday: "2nd",
        timesHigherEducation: "501-600",
        outlook: "AAA++",
        week: "1st (Research)"
      },
      facilities: {
        hostel: { available: true, capacity: "8,000 students", fee: "₹600/year" },
        library: { available: true, books: "6,00,000+", digitalResources: "40,000+" },
        labs: { available: true, count: 150, details: "Advanced research facilities" },
        sports: { available: true, details: "Extensive sports facilities" },
        cafeteria: { available: true, count: 12 },
        medical: { available: true, details: "Health Centre with specialists" },
        transport: { available: true, details: "Internal shuttle service" },
        wifi: { available: true, details: "High-speed WiFi campus-wide" },
        gym: { available: true, details: "Well-equipped gym" }
      },
      eligibility: {
        btech: "Not offered",
        mba: "Graduation with 50%",
        ballb: "Not offered",
        bcom: "Not offered"
      },
      scholarship: {
        available: true,
        types: ["Merit-based", "Research fellowships", "Need-based"],
        amount: "Up to 100% fee waiver + fellowships",
        details: "Generous scholarship and fellowship programs"
      },
      highlights: [
        "India's top research university",
        "World-class faculty",
        "Vibrant campus life",
        "Strong social sciences programs"
      ]
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

    const selectedCollegeData = selectedColleges
      .filter(Boolean)
      .map(id => comparisonData[id as keyof typeof comparisonData]);

    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>College Comparison - Delhi Eduskills</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #1e40af; text-align: center; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          th { background-color: #1e40af; color: white; }
          .section-title { background-color: #e0e7ff; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>College Comparison - ${selectedCourse}</h1>
        <table>
          <tr>
            <th>Criteria</th>
            ${selectedCollegeData.map(c => `<th>${c.name}</th>`).join('')}
          </tr>
          <tr>
            <td class="section-title" colspan="${selectedCollegeData.length + 1}">Institute Details</td>
          </tr>
          <tr>
            <td>Type</td>
            ${selectedCollegeData.map(c => `<td>${c.institute.type}</td>`).join('')}
          </tr>
          <tr>
            <td>Established</td>
            ${selectedCollegeData.map(c => `<td>${c.institute.estd}</td>`).join('')}
          </tr>
          <tr>
            <td>Location</td>
            ${selectedCollegeData.map(c => `<td>${c.institute.location}</td>`).join('')}
          </tr>
          <tr>
            <td>Rating</td>
            ${selectedCollegeData.map(c => `<td>★ ${c.rating}/5 (${c.reviews} reviews)</td>`).join('')}
          </tr>
          <tr>
            <td class="section-title" colspan="${selectedCollegeData.length + 1}">Fees</td>
          </tr>
          <tr>
            <td>Average Per Year</td>
            ${selectedCollegeData.map(c => `<td>${c.fees.averagePerYear}</td>`).join('')}
          </tr>
          <tr>
            <td class="section-title" colspan="${selectedCollegeData.length + 1}">Placement</td>
          </tr>
          <tr>
            <td>Placement Rate</td>
            ${selectedCollegeData.map(c => `<td>${c.placement.rate}</td>`).join('')}
          </tr>
          <tr>
            <td>Average Package</td>
            ${selectedCollegeData.map(c => `<td>${c.placement.average}</td>`).join('')}
          </tr>
          <tr>
            <td>Highest Package</td>
            ${selectedCollegeData.map(c => `<td>${c.placement.highest}</td>`).join('')}
          </tr>
          <tr>
            <td class="section-title" colspan="${selectedCollegeData.length + 1}">Admission</td>
          </tr>
          <tr>
            <td>Entrance Exam</td>
            ${selectedCollegeData.map(c => `<td>${c.admission.exam}</td>`).join('')}
          </tr>
          <tr>
            <td>Cutoff</td>
            ${selectedCollegeData.map(c => `<td>${c.admission.cutoff}</td>`).join('')}
          </tr>
        </table>
        <p style="text-align: center; margin-top: 30px; color: #666;">
          Generated by Delhi Eduskills - Compare Colleges Platform<br>
          ${new Date().toLocaleDateString()}
        </p>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }

    toast({
      title: "PDF Generated",
      description: "Print dialog opened. You can save as PDF from the print options.",
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

  const ComparisonRow = ({ label, values, icon }: { label: string; values: string[]; icon?: React.ReactNode }) => (
    <div className="grid md:grid-cols-4 gap-4 py-3 border-b last:border-b-0">
      <div className="font-medium text-slate-700 flex items-center gap-2">
        {icon}
        {label}
      </div>
      {values.map((value, idx) => (
        <div key={idx} className="text-slate-600">{value}</div>
      ))}
    </div>
  );

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
          <>
            <div className="flex flex-wrap gap-4 mb-8 justify-center sticky top-20 z-40 bg-white/90 backdrop-blur-xl p-4 rounded-lg shadow-lg border">
              <Button onClick={handleDownloadPDF} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button onClick={handleShareWhatsApp} variant="outline" size="lg" className="border-2 hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all shadow-lg">
                <Share2 className="mr-2 h-5 w-5" />
                Share on WhatsApp
              </Button>
            </div>

            <div className="space-y-6">
              {(() => {
                const selectedData = selectedColleges
                  .filter(Boolean)
                  .map(id => comparisonData[id as keyof typeof comparisonData]);

                return (
                  <>
                    {/* College Headers */}
                    <Card className="border-2 shadow-lg overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"></div>
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-4 gap-6">
                          <div className="font-bold text-slate-700">College</div>
                          {selectedData.map((college, idx) => (
                            <div key={idx} className="space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="text-4xl">{college.logo}</div>
                                <div>
                                  <h3 className="font-bold text-lg">{college.shortName}</h3>
                                  <p className="text-sm text-slate-600">{college.institute.location}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                  <span className="ml-1 font-semibold">{college.rating}</span>
                                </div>
                                <span className="text-xs text-slate-500">({college.reviews} reviews)</span>
                              </div>
                              <Button variant="outline" size="sm" className="w-full">
                                Apply Now
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Institute Information */}
                    <Card className="border-2 shadow-lg">
                      <Collapsible open={sections.institute} onOpenChange={() => toggleSection('institute')}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-blue-600" />
                                Institute Information
                              </CardTitle>
                              {sections.institute ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="p-6 space-y-1">
                            <ComparisonRow label="Type" values={selectedData.map(c => c.institute.type)} />
                            <ComparisonRow label="Established" values={selectedData.map(c => c.institute.estd.toString())} icon={<Calendar className="h-4 w-4" />} />
                            <ComparisonRow label="Location" values={selectedData.map(c => c.institute.location)} icon={<MapPin className="h-4 w-4" />} />
                            <ComparisonRow label="Ownership" values={selectedData.map(c => c.institute.ownership)} />
                            <ComparisonRow label="Approved By" values={selectedData.map(c => c.institute.approvedBy)} />
                            <ComparisonRow label="Accreditation" values={selectedData.map(c => c.institute.accreditation)} />
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>

                    {/* Courses */}
                    <Card className="border-2 shadow-lg">
                      <Collapsible open={sections.courses} onOpenChange={() => toggleSection('courses')}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-cyan-600" />
                                Courses Offered
                              </CardTitle>
                              {sections.courses ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="p-6 space-y-1">
                            <ComparisonRow label="Total Courses" values={selectedData.map(c => c.courses.total.toString())} />
                            <ComparisonRow label="Streams" values={selectedData.map(c => c.courses.streams.join(', '))} />
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>

                    {/* Fees */}
                    <Card className="border-2 shadow-lg">
                      <Collapsible open={sections.fees} onOpenChange={() => toggleSection('fees')}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-2">
                                <DollarSign className="h-5 w-5 text-green-600" />
                                Course Fees
                              </CardTitle>
                              {sections.fees ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="p-6 space-y-1">
                            <ComparisonRow label="B.Tech (4 years)" values={selectedData.map(c => c.fees.btech.total)} />
                            <ComparisonRow label="MBA (2 years)" values={selectedData.map(c => c.fees.mba.total)} />
                            <ComparisonRow label="B.A. LL.B. (5 years)" values={selectedData.map(c => c.fees.ballb.total)} />
                            <ComparisonRow label="B.Com (3 years)" values={selectedData.map(c => c.fees.bcom.total)} />
                            <ComparisonRow label="Average Per Year" values={selectedData.map(c => c.fees.averagePerYear)} />
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>

                    {/* Placement */}
                    <Card className="border-2 shadow-lg">
                      <Collapsible open={sections.placement} onOpenChange={() => toggleSection('placement')}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-purple-600" />
                                Placement Statistics
                              </CardTitle>
                              {sections.placement ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="p-6 space-y-1">
                            <ComparisonRow label="Placement Rate" values={selectedData.map(c => c.placement.rate)} />
                            <ComparisonRow label="Average Package" values={selectedData.map(c => c.placement.average)} />
                            <ComparisonRow label="Highest Package" values={selectedData.map(c => c.placement.highest)} />
                            <ComparisonRow label="Median Package" values={selectedData.map(c => c.placement.median)} />
                            <ComparisonRow label="Top Recruiters" values={selectedData.map(c => c.placement.topRecruiters.slice(0, 3).join(', '))} />
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>

                    {/* Admission */}
                    <Card className="border-2 shadow-lg">
                      <Collapsible open={sections.admission} onOpenChange={() => toggleSection('admission')}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-orange-600" />
                                Admission Details
                              </CardTitle>
                              {sections.admission ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="p-6 space-y-1">
                            <ComparisonRow label="Entrance Exam" values={selectedData.map(c => c.admission.exam)} />
                            <ComparisonRow label="Cutoff" values={selectedData.map(c => c.admission.cutoff)} />
                            <ComparisonRow label="Total Seats" values={selectedData.map(c => c.admission.seats.toLocaleString())} />
                            <ComparisonRow label="Application Deadline" values={selectedData.map(c => c.admission.applicationDeadline)} />
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>

                    {/* Rankings */}
                    <Card className="border-2 shadow-lg">
                      <Collapsible open={sections.ranking} onOpenChange={() => toggleSection('ranking')}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-yellow-600" />
                                Rankings & Ratings
                              </CardTitle>
                              {sections.ranking ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="p-6 space-y-1">
                            <ComparisonRow label="NIRF Ranking" values={selectedData.map(c => c.ranking.nirf)} />
                            <ComparisonRow label="India Today Ranking" values={selectedData.map(c => c.ranking.indiaToday)} />
                            <ComparisonRow label="THE Ranking" values={selectedData.map(c => c.ranking.timesHigherEducation)} />
                            <ComparisonRow label="Outlook Rating" values={selectedData.map(c => c.ranking.outlook)} />
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>

                    {/* Facilities */}
                    <Card className="border-2 shadow-lg">
                      <Collapsible open={sections.facilities} onOpenChange={() => toggleSection('facilities')}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-indigo-600" />
                                Infrastructure & Facilities
                              </CardTitle>
                              {sections.facilities ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="p-6 space-y-1">
                            <ComparisonRow label="Hostel" values={selectedData.map(c => c.facilities.hostel.details || 'Available')} />
                            <ComparisonRow label="Hostel Fee" values={selectedData.map(c => c.facilities.hostel.fee)} />
                            <ComparisonRow label="Library" values={selectedData.map(c => `${c.facilities.library.books} books`)} />
                            <ComparisonRow label="Labs" values={selectedData.map(c => `${c.facilities.labs.count}+ labs`)} />
                            <ComparisonRow label="Sports" values={selectedData.map(c => c.facilities.sports.details)} />
                            <ComparisonRow label="WiFi" values={selectedData.map(c => c.facilities.wifi.details)} />
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>

                    {/* Eligibility */}
                    <Card className="border-2 shadow-lg">
                      <Collapsible open={sections.eligibility} onOpenChange={() => toggleSection('eligibility')}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                                Eligibility Criteria
                              </CardTitle>
                              {sections.eligibility ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="p-6 space-y-1">
                            <ComparisonRow label="B.Tech" values={selectedData.map(c => c.eligibility.btech)} />
                            <ComparisonRow label="MBA" values={selectedData.map(c => c.eligibility.mba)} />
                            <ComparisonRow label="B.A. LL.B." values={selectedData.map(c => c.eligibility.ballb)} />
                            <ComparisonRow label="B.Com" values={selectedData.map(c => c.eligibility.bcom)} />
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>

                    {/* Scholarship */}
                    <Card className="border-2 shadow-lg">
                      <Collapsible open={sections.scholarship} onOpenChange={() => toggleSection('scholarship')}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-pink-600" />
                                Scholarships
                              </CardTitle>
                              {sections.scholarship ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="p-6 space-y-1">
                            <ComparisonRow label="Available" values={selectedData.map(c => c.scholarship.available ? 'Yes' : 'No')} />
                            <ComparisonRow label="Types" values={selectedData.map(c => c.scholarship.types.join(', '))} />
                            <ComparisonRow label="Amount" values={selectedData.map(c => c.scholarship.amount)} />
                            <ComparisonRow label="Details" values={selectedData.map(c => c.scholarship.details)} />
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  </>
                );
              })()}
            </div>
          </>
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
