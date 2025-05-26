import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Article = {
  id: string;
  title: string;
  category: "prevention" | "myth";
  content: string;
  related: string[];
};

type TestingCenter = {
  id: string;
  name: string;
  location: string;
  services: string[];
  rating: number;
};

const articles: Article[] = [
  {
    id: "1",
    title: "HIV Prevention Guide",
    category: "prevention",
    content: "Comprehensive guide on HIV prevention methods including PrEP (99% effective), condom use (85% risk reduction), and regular testing (recommended every 3-6 months for high-risk individuals). Learn about PEP for emergency post-exposure prevention.",
    related: ["2", "3", "5"],
    topicLink: "/education/hiv"
  },
  {
    id: "2",
    title: "HIV Myths Debunked",
    category: "myth",
    content: "Addressing 10 common misconceptions about HIV: 1) HIV can be transmitted through casual contact (false), 2) HIV always leads to AIDS (false with treatment), 3) You can tell if someone has HIV by looking (false - many are asymptomatic).",
    related: ["1", "4", "6"],
    topicLink: "/education/hiv"
  },
  {
    id: "3",
    title: "Safe Sex Practices",
    category: "prevention",
    content: "Detailed guide to safer sex: 1) Consistent condom use reduces STD risk by 85%, 2) Dental dams for oral sex, 3) Regular testing with partners, 4) Limiting partner numbers, 5) Vaccinations (HPV, Hepatitis B).",
    related: ["1", "4", "7"],
    topicLink: "/education/gonorrhea"
  },
  {
    id: "4",
    title: "STD Testing Myths",
    category: "myth",
    content: "Clearing up testing misconceptions: 1) 'I don't need testing if I have no symptoms' (many STDs are asymptomatic), 2) 'Home tests aren't accurate' (FDA-approved tests are 95-99% accurate), 3) 'One negative test means I'm clean' (must account for window periods).",
    related: ["2", "3", "8"],
    topicLink: "/education/hpv"
  },
  {
    id: "5",
    title: "Gonorrhea Antibiotic Resistance",
    category: "prevention",
    content: "30% of gonorrhea cases show antibiotic resistance. Prevention strategies: 1) Consistent condom use, 2) Regular testing, 3) Complete treatment courses, 4) Partner notification and treatment.",
    related: ["3", "6"],
    topicLink: "/education/gonorrhea"
  },
  {
    id: "6",
    title: "Herpes Transmission Facts",
    category: "myth",
    content: "HSV facts: 1) 87% of people with HSV-2 don't know they're infected, 2) Condoms reduce transmission risk by 50%, 3) Antivirals can reduce shedding by 70%, 4) Many acquire HSV-1 genitally through oral sex.",
    related: ["2", "5"],
    topicLink: "/education/herpes"
  },
  {
    id: "7",
    title: "Syphilis Resurgence",
    category: "prevention",
    content: "Syphilis cases increased 300% in some regions. Key prevention: 1) Regular testing (every 3-6 months), 2) Recognizing early symptoms (painless sores), 3) Complete penicillin treatment, 4) Partner notification.",
    related: ["3", "8"],
    topicLink: "/education/syphilis"
  },
  {
    id: "8",
    title: "STD Risk Calculator Explained",
    category: "prevention",
    content: "How our STD Risk Calculator works: 1) Based on CDC risk factors, 2) Considers behaviors, partners and symptoms, 3) Provides personalized recommendations, 4) Not a diagnostic tool but a risk assessment.",
    related: ["4", "7"],
    topicLink: "/education"
  },
  {
    id: "9",
    title: "Emerging STDs: Mycoplasma & Ureaplasma",
    category: "prevention",
    content: "Guide to emerging antibiotic-resistant STIs: 1) Mycoplasma genitalium causes urethritis/cervicitis, 2) Ureaplasma linked to reproductive complications, 3) Require specialized testing, 4) Growing treatment resistance.",
    related: ["5", "7"],
    topicLink: "/education/mycoplasma"
  }
];

const testingCenters: TestingCenter[] = [
  {
    id: "1",
    name: "City Health Clinic",
    location: "123 Main St, Anytown",
    services: ["HIV", "Chlamydia", "Gonorrhea"],
    rating: 4.5
  },
  {
    id: "2",
    name: "Community Testing Center",
    location: "456 Oak Ave, Somewhere",
    services: ["HIV", "Syphilis", "HPV"],
    rating: 4.2
  },
  {
    id: "3",
    name: "At-Home Test Kits",
    location: "Online",
    services: ["HIV", "Hepatitis"],
    rating: 3.9
  }
];

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState<"prevention" | "myth" | "testing">("prevention");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
    (activeTab === "testing" ? false : article.category === activeTab)
  );

  const filteredTestingCenters = testingCenters.filter(center => 
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    center.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleArticle = (id: string) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Navigation */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("prevention")}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === "prevention" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    Prevention Guides
                  </button>
                  <button
                    onClick={() => setActiveTab("myth")}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === "myth" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    Myth Busters
                  </button>
                  <button
                    onClick={() => setActiveTab("testing")}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === "testing" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    Testing Directory
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Search Bar */}
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder={`Search ${activeTab === "testing" ? "testing centers" : "articles"}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                {/* Content */}
                {activeTab !== "testing" ? (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {activeTab === "prevention" ? "Prevention Guides" : "Myth Busters"}
                    </h2>
                    
                    {filteredArticles.length > 0 ? (
                      filteredArticles.map(article => (
                        <div key={article.id} className="border rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleArticle(article.id)}
                            className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                          >
                            <h3 className="font-medium text-gray-800">{article.title}</h3>
                            <i className={`fa-solid ${expandedArticle === article.id ? "fa-chevron-up" : "fa-chevron-down"} text-gray-500`}></i>
                          </button>
                          
                          {expandedArticle === article.id && (
                            <div className="p-4 border-t">
                              <p className="text-gray-700 leading-relaxed mb-4">{article.content}</p>
                              {article.related.length > 0 && (
                                <div>
                                  <h4 className="text-sm font-medium text-gray-600 mb-2">Related Articles:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {article.related.map(relatedId => {
                                      const relatedArticle = articles.find(a => a.id === relatedId);
                                      return relatedArticle ? (
                                        <Link 
                                          key={relatedId}
                                          to={`/education/${relatedArticle.id}`}
                                          className="text-sm text-blue-600 hover:text-blue-800"
                                        >
                                          {relatedArticle.title}
                                        </Link>
                                      ) : null;
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No articles found matching your search.</p>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800">Testing Centers</h2>
                    
                    {filteredTestingCenters.length > 0 ? (
                      filteredTestingCenters.map(center => (
                        <div key={center.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-gray-800">{center.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">{center.location}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <i className="fa-solid fa-star text-yellow-400"></i>
                              <span className="text-gray-700">{center.rating}</span>
                            </div>
                          </div>
                          
                          <div className="mt-3">
                            <h4 className="text-sm font-medium text-gray-600 mb-1">Services:</h4>
                            <div className="flex flex-wrap gap-2">
                              {center.services.map(service => (
                                <span key={service} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No testing centers found matching your search.</p>
                    )}
                  </div>
                )}
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  to="/" 
                  className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
