import React from 'react';

type Member = {
  name: string;
  details: string[];
  email: string;
  link: string;
};

export default function AboutDMUPage() {
  const patron: Member[] = [
    {
      name: "Prof. W. Chandbabu Singh",
      details: ["Vice Chancellor", "Dhanamanjuri University, Imphal, Manipur - 795001"],
      email: "patronDJBAR@dmu.ac.in",
      link: "https://dmu.ac.in/"
    }
  ];

  const editorInChief: Member[] = [
    {
      name: "Prof. Ningombam Jayanti",
      details: ["Dean, School of Business Studies", "Dhanamanjuri University, Imphal, Manipur - 795001"],
      email: "editordjbar@dmu.ac.in",
      link: "https://dmu.ac.in/"
    }
  ];

  const editors: Member[] = [
    {
      name: "Dr. Chithung Mary Thomas",
      details: ["Associate Professor", "Department of Commerce, Dhanamanjuri University, Manipur - 795001"],
      email: "editordjbar@dmu.ac.in, chithungmary@dmu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. Aribam Debala Devi",
      details: ["Associate Professor", "Department of Commerce, Dhanamanjuri University, Manipur - 795001"],
      email: "gurudebala@dmu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. Ayekpam Victoria Chanu",
      details: ["Assistant Professor", "Department of Commerce, Dhanamanjuri University, Manipur - 795001"],
      email: "victoriaayekpam@dmu.ac.in",
      link: "https://dmu.ac.in/"
    }
  ];

  const editorialBoard: Member[] = [
    {
      name: "Dr. W. Priyokumar Singh",
      details: ["Assistant Professor", "Department of Commerce", "Dhanamanjuri University, Manipur - 795001"],
      email: "wpriyokumar@dmu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. Th. Priyokumar Singh",
      details: ["Assistant Professor", "Department of Economics", "Dhanamanjuri University, Manipur - 795001"],
      email: "thpriyokumar@dmu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Prof. Ganga Prasad Prasain",
      details: ["Professor", "Manipur University, Canchipur – 795003 and Former Vice Chancellor, Tripura University, Agartala, Tripura"],
      email: "gpprasain@gmail.com",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Prof. B.B. Pradhan",
      details: ["Pro-Vice Chancellor", "SOA University, Khandagiri Square, Bhubaneswar, 751030, India"],
      email: "15bbpradhan@gmail.com",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. Jadi Bala Komaraiah",
      details: ["Senior Professor", "Department of Economics, Banaras Hindu University, Varanasi (UP) - 221005"],
      email: "komaraiah@bhu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Prof. Ch. Ibohal Meitei",
      details: ["Director", "Research & Development Cell, Manipur University, Canchipur, Manipur – 795003"],
      email: "ibmeitei@gmail.com",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Prof. Kh. Rajen Singh",
      details: ["Principal", "DM College of Commerce", "Dhanamanjuri University, Manipur – 795001"],
      email: "rajenkhumanthem12@gmail.com",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. L. Sanatomba Meetei",
      details: ["Assistant Professor", "Department of Economics", "Dhanamanjuri University, Manipur - 795001"],
      email: "drlsanatomba@dmu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. Kiirii Onand Monsang",
      details: ["Assistant Professor", "Department of Commerce", "Dhanamanjuri University, Manipur"],
      email: "kiiriionand@dmu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Prof. Radheshyam Pradhan",
      details: ["Professor", "Central Department of Management, Tribhuvan University, Kirtipur P.O. Box No. 10076, Kathmandu, Nepal – 44600"],
      email: "rspradhan@uniglobe.edu.np",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Prof. A. Ibemcha Chanu",
      details: ["Dean", "Faculty of Commerce & Management Studies, Bodoland University, Kokrajar, P.O. - Rangalikhata, Assam - 783370"],
      email: "ibemcha.chanu@buniv.edu.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Prof. L. Shashikumar Sharma",
      details: ["Professor", "Department of Management, Mizoram University, Aizawl, Mizoram – 796004"],
      email: "lsksharma@mzu.edu.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. Akkarapon Nuemaihon",
      details: ["Associate Professor", "Buriram Rajabhat University, 439, Jira Road, Nai-Muang Sub-district, Muang District, Buriram Province 31000, Thailand"],
      email: "akkarapon.nm@bru.ac.th",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Prof. A. Rajmani Singh",
      details: ["Director, IQAC", "Manipur University, Canchipur, Manipur – 795003"],
      email: "rajaheibam2@gmail.com",
      link: "https://dmu.ac.in/"
    }
  ];

  const renderCards = (members: Member[]) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: 20 }}>
      {members.map((member, index) => (
        <a 
          key={index} 
          href={member.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-card"
          style={{ width: "100%", maxWidth: "350px" }}
        >
          <h3>{member.name}</h3>
          {member.details.map((detail, i) => (
            <p key={i} className={i === 0 ? "designation" : ""}>
              {detail}
            </p>
          ))}
          {member.email && (
            <p className="email">
              <strong>Email:</strong> <span>{member.email}</span>
            </p>
          )}
        </a>
      ))}
    </div>
  );

  return (
    <>
      {/* About DMU */}
      <div className="journal-card" id="about">
        <h2>About DMU</h2>
        <p>Dhanamanjuri University (DMU), Imphal, is a State University established under the Dhanamanjuri University Act, 2017, which came into force on 6 April 2018. The University was established under the National Scheme of Rashtriya Uchchatar Shiksha Abhiyan (RUSA) as a cluster university with the objective of strengthening and expanding access to quality higher education in Manipur.</p>
        <p>Named in honour of Maharani Dhanamanjuri, whose contributions significantly advanced higher education in the State, the University represents a landmark institution in Manipur's educational landscape. DMU was formed by integrating some of the State's most distinguished institutions, including DM College of Science, DM College of Arts, DM College of Commerce, G.P. Women's College, and LMS Law College.</p>
        <p>Located in the heart of Imphal, Dhanamanjuri University offers undergraduate, postgraduate, and research programmes across a wide range of disciplines in the sciences, humanities, commerce, law, and professional studies. The University is committed to fostering academic excellence, research innovation, critical thinking, and social responsibility while preserving the rich cultural heritage of Manipur.</p>
        <p>Through its dedication to quality education, interdisciplinary research, and community engagement, Dhanamanjuri University strives to create a vibrant learning environment that empowers students and scholars to contribute meaningfully to society, the legal profession, and the pursuit of knowledge</p>
        <h3 style={{ marginTop: 40, marginBottom: 20 }}>Patron</h3>
        {renderCards(patron)}
      </div>

      {/* Editorial Team */}
      <div className="journal-card" id="editorial">
        <h2 style={{ marginBottom: 20 }}>Editorial Board</h2>

        <h3 style={{ marginTop: 20, marginBottom: 20 }}>Editor-In-Chief</h3>
        {renderCards(editorInChief)}

        <h3 style={{ marginTop: 40, marginBottom: 20 }}>Editor</h3>
        {renderCards(editors)}

        <h3 style={{ marginTop: 40, marginBottom: 20 }}>Editorial Boards</h3>
        {renderCards(editorialBoard)}
      </div>

      {/* Indexing Section Content */}
      <div className="journal-card" id="indexing">
        <h2>Indexing &amp; Abstracting</h2>
        <p>
          The Journal shall endeavor to be indexed and abstracted in recognized academic databases and search platforms, including Google Scholar, Crossref, Directory of Open Access Journals (DOAJ), ROAD, Indian Citation Index, Manupatra, HeinOnline, Web of Science, Scopus (long-term goal) and other relevant indexing services, subject to eligibility and compliance with their respective criteria.
        </p>
      </div>

      {/* Publication Charges */}
      <div className="journal-card" id="charges">
        <h2>Publication Charges &amp; Subscription</h2>
        <p>1. Charges for single author is Rs. 700/-</p>
        <p>2. Co-authorship is permitted with payment of Rs 1200/- (up to 2 co-authors)</p>
      </div>
    </>
  );
}
