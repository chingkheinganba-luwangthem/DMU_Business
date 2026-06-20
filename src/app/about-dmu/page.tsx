import React from 'react';

type Member = {
  name: string;
  details: string[];
  email: string;
  link: string;
};

export default function AboutDMUPage() {
  const patronInChief: Member[] = [
    {
      name: "Professor (Dr) W. Chandbabu Singh",
      details: ["Vice Chancellor", "Dhanamanjuri University, Manipur"],
      email: "",
      link: "https://dmu.ac.in/"
    }
  ];

  const editorInChief: Member[] = [
    {
      name: "Dr. R K Premila Devi",
      details: ["Associate Professor", "Dean, School of legal studies, DMU"],
      email: "rkpremila@dmu.ac.in",
      link: "https://dmu.ac.in/"
    }
  ];

  const managingEditor: Member[] = [
    {
      name: "Dr. Salam Pramodkanta Singh",
      details: ["Associate Professor", "Department of Law, DMU"],
      email: "drpramodkanta@dmu.ac.in",
      link: "https://dmu.ac.in/"
    }
  ];

  const associateEditors: Member[] = [
    {
      name: "Dr. N. Brajakanta Singh",
      details: ["Assistant Professor", "Department of Law, DMU"],
      email: "Brajakanta84@dmu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. Y. Sarojbala",
      details: ["Assistant Professor", "Department of Law, DMU"],
      email: "saroj@dmu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. Yailiwon Shangh",
      details: ["Assistant Professor", "Department of Law, DMU"],
      email: "shang@dmu.ac.in",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Professor (Dr) Rishikesh Wagle",
      details: ["Professor of Law", "Kathmandu University School of Law"],
      email: "rishi.wagle@ku.edu.np",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Ghulam Shah Adel Alizai (Adel)",
      details: ["Academic Casual, University of Melbourne, Australia;", "Principal Director, Mother International Institute of Education (MIIED)", "Melbourne, Australia"],
      email: "Adel_alizai@yahoo.com",
      link: "https://dmu.ac.in/"
    },
    {
      name: "Dr. Anudeep Kaur",
      details: ["Solicitor, Sydney West Legal and Migration, Australia;", "Steering Committee Member, Indian Women Empower (CMRC), Sydney"],
      email: "Anudeepkaur08@gmail.com",
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
        <h3 style={{ marginTop: 40, marginBottom: 20 }}>Patron-In-Chief</h3>
        {renderCards(patronInChief)}
      </div>

      {/* Editorial Team */}
      <div className="journal-card" id="editorial">
        <h2 style={{ marginBottom: 20 }}>Editorial Board</h2>

        <h3 style={{ marginTop: 20, marginBottom: 20 }}>Editor-In-Chief</h3>
        {renderCards(editorInChief)}

        <h3 style={{ marginTop: 40, marginBottom: 20 }}>Managing Editor</h3>
        {renderCards(managingEditor)}

        <h3 style={{ marginTop: 40, marginBottom: 20 }}>Associate Editors</h3>
        {renderCards(associateEditors)}
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
