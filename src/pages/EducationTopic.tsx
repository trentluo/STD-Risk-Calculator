import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type TopicData = {
  id: string;
  title: string;
  overview: string;
  transmission: string[];
  symptoms: string[];
  prevention: string[];
  treatment: string;
  stats: string[];
  faqs: { question: string; answer: string }[];
};

const topics: Record<string, TopicData> = {
  hpv: {
    id: "hpv",
    title: "HPV (Human Papillomavirus) Guide",
    overview: "HPV is the most common STI with over 100 strains, some causing cancer. Vaccination can prevent most cancer-causing types.",
    transmission: [
      "Skin-to-skin genital contact",
      "Vaginal, anal or oral sex",
      "Mother-to-baby during childbirth (rare)"
    ],
    symptoms: [
      "Often no visible symptoms",
      "Genital warts (low-risk strains)",
      "Abnormal Pap smears (high-risk strains)",
      "Most infections clear within 2 years"
    ],
    prevention: [
      "HPV vaccination (Gardasil 9) prevents 90% of cancer-causing strains",
      "Regular cervical cancer screening for women",
      "Condoms reduce but don't eliminate risk",
      "Mutual monogamy with uninfected partner"
    ],
    treatment: "No treatment for the virus itself. Warts can be treated with medications or procedures. Regular monitoring for high-risk strains.",
    stats: [
      "79 million Americans currently infected (CDC)",
      "14 million new infections annually in US",
      "Vaccination has reduced infections by 86% in teens",
      "90% of cervical cancers caused by HPV"
    ],
    faqs: [
      {
        question: "At what age should you get HPV vaccine?",
        answer: "Recommended at ages 11-12, can be given from age 9 through 45. Most effective when given before sexual activity begins."
      }
    ]
  },
  hepatitis: {
    id: "hepatitis",
    title: "Hepatitis B Risk Guide",
    overview: "Hepatitis B is a liver infection that can become chronic, leading to liver failure or cancer. Vaccine provides lifetime protection.",
    transmission: [
      "Unprotected sex",
      "Sharing needles/syringes",
      "Mother-to-baby during birth",
      "Contact with infected blood"
    ],
    symptoms: [
      "Acute: Fatigue, nausea, abdominal pain, jaundice",
      "Chronic: Often asymptomatic for decades",
      "Can lead to cirrhosis or liver cancer"
    ],
    prevention: [
      "Vaccination (3-dose series provides lifetime immunity)",
      "Using condoms consistently",
      "Avoid sharing personal items like razors",
      "Proper sterilization of medical equipment"
    ],
    treatment: "Acute cases often resolve on their own. Chronic cases may require antiviral medications to suppress the virus.",
    stats: [
      "296 million people live with chronic Hep B globally",
      "1.5 million new infections annually",
      "Vaccine prevents an estimated 1 million deaths/year",
      "90% of infected infants develop chronic infection"
    ],
    faqs: [
      {
        question: "How is hepatitis B different from hepatitis C?",
        answer: "Hep B has a vaccine and can be prevented, while Hep C has no vaccine but is curable with medications. Both can cause chronic infection."
      }
    ]
  },
  trichomoniasis: {
    id: "trichomoniasis",
    title: "Trichomoniasis Infection Guide",
    overview: "Trichomoniasis is a common parasitic STI that's easily treated but often asymptomatic, allowing continued spread.",
    transmission: [
      "Vaginal intercourse",
      "Vulva-to-vulva contact",
      "Sharing sex toys",
      "Mother-to-baby during birth"
    ],
    symptoms: [
      "Women: Frothy discharge, itching, painful urination",
      "Men: Usually asymptomatic but may have urethral discharge",
      "70% of infected people show no symptoms"
    ],
    prevention: [
      "Consistent condom use",
      "Mutual monogamy with tested partner",
      "Regular STI testing",
      "Treatment of all sexual partners"
    ],
    treatment: "Single dose of antibiotics (metronidazole or tinidazole). Partners must be treated simultaneously to prevent reinfection.",
    stats: [
      "2.6 million infections in US annually (CDC)",
      "Most common curable STI globally",
      "Increases HIV transmission risk 3-fold",
      "Only 30% of infected people develop symptoms"
    ],
    faqs: [
      {
        question: "Can you get trichomoniasis from oral or anal sex?",
        answer: "Extremely rare. The parasite primarily infects genital areas and doesn't survive well in mouth or rectum."
      }
    ]
  },
  hiv: {
    id: "hiv",
    title: "Comprehensive HIV/AIDS Guide",
    overview: "Human Immunodeficiency Virus (HIV) attacks the immune system and can lead to AIDS if untreated. Modern medicine has made HIV a manageable chronic condition.",
    transmission: [
      "Unprotected sex (vaginal, anal or oral)",
      "Sharing needles or syringes",
      "Mother-to-child transmission (during pregnancy, delivery or breastfeeding)",
      "Blood transfusions or organ transplants (rare before screening)"
    ],
    symptoms: [
      "Acute phase: Fever, sore throat, rash, fatigue",
      "Clinical latency: May be asymptomatic for years",
      "AIDS phase: Persistent fever, rapid weight loss, opportunistic infections"
    ],
    prevention: [
      "Correct condom use reduces risk by 85%",
      "PrEP prevention medication is 99% effective against HIV",
      "PEP post-exposure prophylaxis (effective within 72 hours)",
      "Avoid sharing needles",
      "Regular testing (every 3-6 months)"
    ],
    treatment: "Antiretroviral therapy (ART) controls viral replication, allowing near-normal lifespan. Early diagnosis and treatment are crucial.",
    stats: [
      "Approximately 38 million people live with HIV globally",
      "1.3 million new infections in 2022",
      "ART has reduced AIDS-related deaths by 64%",
      "95-95-95 targets: 95% know status, 95% on treatment, 95% virally suppressed"
    ],
    faqs: [
      {
        question: "What's the difference between HIV and AIDS?",
        answer: "HIV is the virus, AIDS is the late stage of HIV infection. With treatment, most people with HIV won't develop AIDS."
      },
      {
        question: "What's the window period for HIV testing?",
        answer: "Modern tests can detect HIV 18-45 days after infection. Nucleic acid tests can detect as early as 10-33 days."
      }
    ]
  },
  chlamydia: {
    id: "chlamydia",
    title: "Complete Chlamydia Guide",
    overview: "Chlamydia is one of the most common bacterial STIs, often asymptomatic but can cause serious complications.",
    transmission: ["Vaginal, anal or oral sex", "Mother-to-child transmission"],
    symptoms: [
      "Women: Abnormal discharge, painful urination, painful intercourse",
      "Men: Urethral discharge, testicular pain",
      "50% of women and 30% of men show no symptoms"
    ],
    prevention: [
      "Correct condom use",
      "Regular screening (recommended annually for sexually active women under 25)",
      "Mutually monogamous relationships"
    ],
    treatment: "Antibiotic treatment (azithromycin or doxycycline), avoid sexual activity for 7 days.",
    stats: [
      "Approximately 127 million new cases globally each year",
      "Most frequently reported infectious disease in the US",
      "70% of infected women are asymptomatic"
    ],
    faqs: [
      {
        question: "What happens if chlamydia goes untreated?",
        answer: "Can lead to pelvic inflammatory disease, infertility, ectopic pregnancy and chronic pelvic pain."
      }
    ]
  },
  gonorrhea: {
    id: "gonorrhea",
    title: "Gonorrhea Risk Guide",
    overview: "Gonorrhea is a common bacterial STD that can infect both men and women, often showing no symptoms but leading to serious complications if untreated.",
    transmission: [
      "Unprotected vaginal, anal or oral sex",
      "Mother-to-baby during childbirth"
    ],
    symptoms: [
      "Men: Burning urination, white/yellow/green discharge",
      "Women: Often no symptoms, but may include painful urination, discharge, bleeding between periods",
      "Rectal infection: Discharge, anal itching, soreness"
    ],
    prevention: [
      "Consistent condom use (reduces risk by 85%)",
      "Regular testing (every 3-6 months for high-risk individuals)",
      "Mutual monogamy with tested partner",
      "Prompt treatment of infections"
    ],
    treatment: "Dual antibiotic therapy (ceftriaxone + azithromycin) due to increasing antibiotic resistance.",
    stats: [
      "82 million new cases globally each year (WHO)",
      "30% of cases show antibiotic resistance",
      "Often co-occurs with chlamydia (40% co-infection rate)"
    ],
    faqs: [
      {
        question: "Can gonorrhea be cured?",
        answer: "Yes, with proper antibiotic treatment. However, antibiotic-resistant strains are becoming more common."
      }
    ]
  },
  syphilis: {
    id: "syphilis",
    title: "Syphilis Risk Guide",
    overview: "Syphilis is a bacterial infection that progresses through stages and can cause serious health problems if left untreated.",
    transmission: [
      "Direct contact with syphilis sore during vaginal, anal or oral sex",
      "Mother-to-baby during pregnancy (congenital syphilis)"
    ],
    symptoms: [
      "Primary stage: Painless sore at infection site",
      "Secondary stage: Skin rash, fever, swollen lymph nodes",
      "Latent stage: No visible symptoms",
      "Tertiary stage: Severe complications affecting heart, brain and other organs"
    ],
    prevention: [
      "Consistent condom use (reduces risk by 50-70%)",
      "Regular testing (recommended every 3-6 months for high-risk individuals)",
      "Prompt treatment of infections",
      "Prenatal screening for pregnant women"
    ],
    treatment: "Penicillin injections (single dose for early syphilis, multiple doses for late-stage).",
    stats: [
      "7.1 million new cases globally (WHO 2020)",
      "Cases increased 300% in some regions since 2010",
      "Congenital syphilis cases rising in many countries"
    ],
    faqs: [
      {
        question: "How soon after exposure can syphilis be detected?",
        answer: "Blood tests can detect syphilis 1-3 weeks after sore appears. The sore itself appears 10-90 days after exposure."
      }
    ]
  },
  herpes: {
    id: "herpes",
    title: "Herpes Risk Guide",
    overview: "Herpes is a common viral infection caused by HSV-1 (oral) and HSV-2 (genital). While not curable, it can be managed effectively.",
    transmission: [
      "Skin-to-skin contact with infected area",
      "Oral sex (HSV-1 to genitals)",
      "Vaginal or anal sex (HSV-2)",
      "Mother-to-baby during childbirth"
    ],
    symptoms: [
      "Painful blisters or sores at infection site",
      "Initial outbreak may include fever, body aches",
      "Recurrent outbreaks typically milder",
      "Many people have no noticeable symptoms"
    ],
    prevention: [
      "Condoms reduce transmission risk by 50%",
      "Antiviral medication reduces transmission risk by 50%",
      "Avoid sexual contact during outbreaks",
      "Daily suppressive therapy for frequent outbreaks"
    ],
    treatment: "Antiviral medications (acyclovir, valacyclovir) to control symptoms and reduce outbreaks.",
    stats: [
      "491 million people have HSV-2 globally (WHO)",
      "67% of people under 50 have HSV-1",
      "87% of HSV-2 infected people don't know they have it"
    ],
    faqs: [
      {
        question: "Can you get herpes from a toilet seat?",
        answer: "No, herpes virus dies quickly outside the body and cannot be transmitted via surfaces."
      }
    ]
  },
  mycoplasma: {
    id: "mycoplasma",
    title: "Mycoplasma Genitalium Guide",
    overview: "An emerging STI that's becoming increasingly resistant to antibiotics, often causing urethritis and cervicitis.",
    transmission: [
      "Vaginal or anal intercourse",
      "Oral-genital contact (less common)",
      "Mother-to-baby during childbirth"
    ],
    symptoms: [
      "Men: Urethral discharge, painful urination",
      "Women: Vaginal discharge, pelvic pain",
      "50-80% of infections are asymptomatic"
    ],
    prevention: [
      "Consistent condom use reduces risk by 85%",
      "Regular STI testing (requires specific PCR test)",
      "Mutual monogamy with tested partner",
      "Complete treatment of infections"
    ],
    treatment: "Dual antibiotic therapy (azithromycin + moxifloxacin) due to high resistance rates.",
    stats: [
      "1-2% prevalence in general population",
      "Up to 15% prevalence in high-risk groups",
      "40% resistance to first-line antibiotics",
      "Often misdiagnosed as chlamydia"
    ],
    faqs: [
      {
        question: "How is mycoplasma different from ureaplasma?",
        answer: "Both are similar bacteria, but mycoplasma genitalium is more strongly associated with clinical symptoms and complications."
      }
    ]
  },
  ureaplasma: {
    id: "ureaplasma",
    title: "Ureaplasma Infection Guide",
    overview: "Common bacteria that can cause urethritis and reproductive complications, often existing without symptoms.",
    transmission: [
      "Sexual contact (vaginal, anal, oral)",
      "Mother-to-baby during childbirth",
      "Can colonize without causing infection"
    ],
    symptoms: [
      "Often asymptomatic",
      "Men: Mild urethral discharge",
      "Women: Vaginal discomfort",
      "Linked to preterm birth and infertility"
    ],
    prevention: [
      "Condom use reduces transmission",
      "Testing recommended for symptomatic individuals",
      "Partner testing when infection is diagnosed"
    ],
    treatment: "Doxycycline or azithromycin, though resistance is increasing.",
    stats: [
      "40-80% of sexually active adults carry ureaplasma",
      "More common in women than men",
      "Often found alongside other STIs"
    ],
    faqs: [
      {
        question: "Does ureaplasma always need treatment?",
        answer: "Not always. Treatment is recommended when causing symptoms or reproductive complications."
      }
    ]
  },
  lvg: {
    id: "lvg",
    title: "Lymphogranuloma Venereum (LVG) Guide",
    overview: "A rare but serious form of chlamydia that can cause severe complications if untreated.",
    transmission: [
      "Unprotected vaginal or anal sex",
      "Direct contact with infected sores",
      "More common in MSM populations"
    ],
    symptoms: [
      "Primary stage: Small painless sore",
      "Secondary stage: Swollen lymph nodes, fever",
      "Tertiary stage: Rectal strictures, fistulas"
    ],
    prevention: [
      "Consistent condom use essential",
      "Early treatment prevents complications",
      "Regular screening for high-risk individuals"
    ],
    treatment: "3-week course of doxycycline, longer for advanced cases.",
    stats: [
      "Rare in general population (<1%)",
      "Increasing in MSM populations (5-15%)",
      "Often misdiagnosed initially"
    ],
    faqs: [
      {
        question: "Is LVG curable?",
        answer: "Yes, with proper antibiotic treatment, though advanced cases may require surgery."
      }
    ]
  }
};

// Add additional educational topics
topics.mycoplasma = {
  id: "mycoplasma",
  title: "Mycoplasma Genitalium Guide",
  overview: "An emerging STI that's becoming increasingly resistant to antibiotics, often causing urethritis and cervicitis.",
  transmission: [
    "Vaginal or anal intercourse",
    "Oral-genital contact (less common)",
    "Mother-to-baby during childbirth"
  ],
  symptoms: [
    "Men: Urethral discharge, painful urination",
    "Women: Vaginal discharge, pelvic pain",
    "50-80% of infections are asymptomatic"
  ],
  prevention: [
    "Consistent condom use reduces risk by 85%",
    "Regular STI testing (requires specific PCR test)",
    "Mutual monogamy with tested partner",
    "Complete treatment of infections"
  ],
  treatment: "Dual antibiotic therapy (azithromycin + moxifloxacin) due to high resistance rates.",
  stats: [
    "1-2% prevalence in general population",
    "Up to 15% prevalence in high-risk groups",
    "40% resistance to first-line antibiotics",
    "Often misdiagnosed as chlamydia"
  ],
  faqs: [
    {
      question: "How is mycoplasma different from ureaplasma?",
      answer: "Both are similar bacteria, but mycoplasma genitalium is more strongly associated with clinical symptoms and complications."
    }
  ]
};

topics.ureaplasma = {
  id: "ureaplasma",
  title: "Ureaplasma Infection Guide",
  overview: "Common bacteria that can cause urethritis and reproductive complications, often existing without symptoms.",
  transmission: [
    "Sexual contact (vaginal, anal, oral)",
    "Mother-to-baby during childbirth",
    "Can colonize without causing infection"
  ],
  symptoms: [
    "Often asymptomatic",
    "Men: Mild urethral discharge",
    "Women: Vaginal discomfort",
    "Linked to preterm birth and infertility"
  ],
  prevention: [
    "Condom use reduces transmission",
    "Testing recommended for symptomatic individuals",
    "Partner testing when infection is diagnosed"
  ],
  treatment: "Doxycycline or azithromycin, though resistance is increasing.",
  stats: [
    "40-80% of sexually active adults carry ureaplasma",
    "More common in women than men",
    "Often found alongside other STIs"
  ],
  faqs: [
    {
      question: "Does ureaplasma always need treatment?",
      answer: "Not always. Treatment is recommended when causing symptoms or reproductive complications."
    }
  ]
};

topics.lvg = {
  id: "lvg",
  title: "Lymphogranuloma Venereum (LVG) Guide",
  overview: "A rare but serious form of chlamydia that can cause severe complications if untreated.",
  transmission: [
    "Unprotected vaginal or anal sex",
    "Direct contact with infected sores",
    "More common in MSM populations"
  ],
  symptoms: [
    "Primary stage: Small painless sore",
    "Secondary stage: Swollen lymph nodes, fever",
    "Tertiary stage: Rectal strictures, fistulas"
  ],
  prevention: [
    "Consistent condom use essential",
    "Early treatment prevents complications",
    "Regular screening for high-risk individuals"
  ],
  treatment: "3-week course of doxycycline, longer for advanced cases.",
  stats: [
    "Rare in general population (<1%)",
    "Increasing in MSM populations (5-15%)",
    "Often misdiagnosed initially"
  ],
  faqs: [
    {
      question: "Is LVG curable?",
      answer: "Yes, with proper antibiotic treatment, though advanced cases may require surgery."
    }
  ]
};

// Add new topics to existing topics object
topics.mycoplasma = {
  id: "mycoplasma",
  title: "Mycoplasma Genitalium Guide",
  overview: "An emerging STI that's becoming increasingly resistant to antibiotics, often causing urethritis and cervicitis.",
  transmission: [
    "Vaginal or anal intercourse",
    "Oral-genital contact (less common)",
    "Mother-to-baby during childbirth"
  ],
  symptoms: [
    "Men: Urethral discharge, painful urination",
    "Women: Vaginal discharge, pelvic pain",
    "50-80% of infections are asymptomatic"
  ],
  prevention: [
    "Consistent condom use reduces risk by 85%",
    "Regular STI testing (requires specific PCR test)",
    "Mutual monogamy with tested partner",
    "Complete treatment of infections"
  ],
  treatment: "Dual antibiotic therapy (azithromycin + moxifloxacin) due to high resistance rates.",
  stats: [
    "1-2% prevalence in general population",
    "Up to 15% prevalence in high-risk groups",
    "40% resistance to first-line antibiotics",
    "Often misdiagnosed as chlamydia"
  ],
  faqs: [
    {
      question: "How is mycoplasma different from ureaplasma?",
      answer: "Both are similar bacteria, but mycoplasma genitalium is more strongly associated with clinical symptoms and complications."
    }
  ]
};

topics.ureaplasma = {
  id: "ureaplasma",
  title: "Ureaplasma Infection Guide",
  overview: "Common bacteria that can cause urethritis and reproductive complications, often existing without symptoms.",
  transmission: [
    "Sexual contact (vaginal, anal, oral)",
    "Mother-to-baby during childbirth",
    "Can colonize without causing infection"
  ],
  symptoms: [
    "Often asymptomatic",
    "Men: Mild urethral discharge",
    "Women: Vaginal discomfort",
    "Linked to preterm birth and infertility"
  ],
  prevention: [
    "Condom use reduces transmission",
    "Testing recommended for symptomatic individuals",
    "Partner testing when infection is diagnosed"
  ],
  treatment: "Doxycycline or azithromycin, though resistance is increasing.",
  stats: [
    "40-80% of sexually active adults carry ureaplasma",
    "More common in women than men",
    "Often found alongside other STIs"
  ],
  faqs: [
    {
      question: "Does ureaplasma always need treatment?",
      answer: "Not always. Treatment is recommended when causing symptoms or reproductive complications."
    }
  ]
};

topics.lvg = {
  id: "lvg",
  title: "Lymphogranuloma Venereum (LVG) Guide",
  overview: "A rare but serious form of chlamydia that can cause severe complications if untreated.",
  transmission: [
    "Unprotected vaginal or anal sex",
    "Direct contact with infected sores",
    "More common in MSM populations"
  ],
  symptoms: [
    "Primary stage: Small painless sore",
    "Secondary stage: Swollen lymph nodes, fever",
    "Tertiary stage: Rectal strictures, fistulas"
  ],
  prevention: [
    "Consistent condom use essential",
    "Early treatment prevents complications",
    "Regular screening for high-risk individuals"
  ],
  treatment: "3-week course of doxycycline, longer for advanced cases.",
  stats: [
    "Rare in general population (<1%)",
    "Increasing in MSM populations (5-15%)",
    "Often misdiagnosed initially"
  ],
  faqs: [
    {
      question: "Is LVG curable?",
      answer: "Yes, with proper antibiotic treatment, though advanced cases may require surgery."
    }
  ]
};

export default function EducationTopicPage() {
  const { topic } = useParams();
  
  // Map numeric IDs to topic keys
  const topicMap: Record<string, string> = {
    '1': 'hiv',
    '2': 'chlamydia',
    '3': 'gonorrhea',
    '4': 'hpv',
    '5': 'hepatitis',
    '6': 'trichomoniasis',
    '7': 'mycoplasma',
    '8': 'ureaplasma',
    '9': 'lvg'
  };

  const topicKey = topicMap[topic as string] || topic;
  const topicData = topics[topicKey as string] || {
    title: "Topic Not Found",
    overview: "The requested educational resource does not exist or has been removed."
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">{topicData.title}</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-700 mb-6">{topicData.overview}</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Transmission</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
              {topicData.transmission?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Symptoms</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
              {topicData.symptoms?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Prevention</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
              {topicData.prevention?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Treatment</h2>
            <p className="text-gray-700 mb-6">{topicData.treatment}</p>
            
            {topicData.stats && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistics</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  {topicData.stats.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            
            {topicData.faqs && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4 mb-6">
                  {topicData.faqs.map((faq, i) => (
                    <div key={i} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-medium text-gray-800">{faq.question}</h3>
                      <p className="text-gray-600 mt-1">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            <div className="mt-8">
              <a 
                href="/education" 
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Back to Education Hub
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}