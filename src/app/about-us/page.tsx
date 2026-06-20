import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      {/* 1) Overview of the journal */}
      <div className="journal-card" id="overview">
        <h2>Overview of the journal</h2>
        <p>
          The journal covers a broad range of legal subjects, including constitutional law, criminal law, family law, human rights, environmental law, corporate law, international law, cyber law, and other evolving areas of legal scholarship. By publishing rigorously reviewed and well-researched contributions, the journal seeks to enhance legal knowledge, encourage informed debate, and contribute to the development of legal thought and policy. Through its commitment to academic excellence and ethical publishing standards, the journal serves as a valuable resource for legal education, research, and professional practice.
        </p>
      </div>

      {/* 2) From the Editor’s Desk */}
      <div className="journal-card highlight" id="welcome">
        <h2>From the Editor&apos;s Desk</h2>
        <div className="editor-note">
          <div className="editor-content">
            <div style={{ fontSize: 14, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 14 }}>
                The Dhanamanjuri University Journal of Legal Studies will be a treasure trove of knowledge on various legal and social issues. The first Edition is focused on the various aspects of the new three laws namely, (1) the Bharatiya Nyaya Sanhita, 2023; (2) the Bharatiya Nagarik Suraksha Sanhita, 2023, and (3) the Bharatiya Saksha Adhiniyam, 2023. The Editorial Board sincerely believes that this edition will be an indispensable source of knowledge to the readers. I hope that the articles in this journal will help in contributing to the existing discourse on legal and social issues in our country. Views expressed in this edition are those of the respective authors and do not reflect the views of the Editorial Board of the Dhanamanjuri University Journal of Legal Studies.
              </p>
              <p style={{ marginBottom: 14 }}>
                We welcome all to this new academic venture of Dhanamanjuri University and do sincerely hope that in due course of time the journal will pick up momentum to attract more and more scholars of repute and also create the right zeal among our fraternity and researchers for optimum exposure of their intellectual capacity to the ever changing world of knowledge.
              </p>
              <div style={{ marginTop: 20 }}>
                <p style={{ marginBottom: 15 }}>With Best Wishes.</p>
                <a href="https://dmu.ac.in/" target="_blank" rel="noopener noreferrer" className="editorial-card" style={{ maxWidth: 400, display: "block", textDecoration: "none" }}>
                  <h3>Dr. N. Brajakanta Singh</h3>
                  <p className="designation">Assistant Professor</p>
                  <p>Department of Law, School of Legal Studies, Dhanamanjuri University, Manipur</p>
                  <p className="email">
                    <strong>Email:</strong> <span>editoriallegalofficedmu@gmail.com</span>
                  </p>
                </a>
              </div>
              
              <div style={{ marginTop: 30, padding: 15, backgroundColor: "#f5f5f5", borderRadius: 5, borderLeft: "4px solid var(--dmu-primary)" }}>
                <p style={{ fontWeight: 600, marginBottom: 5, fontSize: 14 }}>Cite This Issue as:</p>
                <p style={{ fontStyle: "italic", fontSize: 14, color: "var(--dmu-primary-dark)", fontWeight: 500 }}>Vol.1 No. 1 DMU.JLS (2025)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3) Journal focus */}
      <div className="journal-card" id="focus">
        <h2>Journal focus</h2>
        <p>
          This journal is devoted to the promotion and dissemination of high-quality legal scholarship through the publication of original and innovative research. It provides a platform for critical examination of legal doctrines, judicial decisions, legislative developments, and contemporary issues affecting legal systems at the national and international levels. The journal seeks to encourage scholarly dialogue that contributes to the advancement of legal knowledge and the strengthening of justice and the rule of law.
        </p>
        <p>
          Recognizing the dynamic nature of law and its interaction with various aspects of society, the journal adopts a broad interdisciplinary approach to legal research. It welcomes studies that explore the relationship between law and other disciplines such as sociology, political science, economics, criminology, public administration, psychology, technology, environmental studies, international relations, and human rights. By encouraging interdisciplinary perspectives, the journal aims to provide a more comprehensive understanding of legal issues and their practical implications in an increasingly complex and interconnected world.
        </p>
        <p>
          The journal publishes research articles, case comments, legislative reviews, book reviews, and empirical studies covering diverse areas of law, including constitutional law, criminal law, family law, corporate law, environmental law, cyber law, labour law, intellectual property law, international law, and emerging legal fields. Through this broad and inclusive scope, the journal strives to foster academic excellence, promote innovative legal thinking, and contribute meaningfully to legal education, policy formulation, and societal development.
        </p>
      </div>

      {/* 4) CALL FOR PAPERS */}
      {/* 4) CALL FOR PAPERS */}
      <div className="journal-card accent" id="highlights">
        <h2>CALL FOR PAPERS</h2>
        <h3 style={{ marginBottom: 5 }}>Dhanamanjuri University of Journal of Legal Studies</h3>
        <p><strong>Volume I, Issue I (2025)</strong></p>

        <p style={{ marginTop: 15 }}>
          The Editorial Board of Dhanamanjuri University of Journal of Legal Studies, a double blind peer-reviewed academic journal published by the Faculty of Law, Dhanamanjuri University, is pleased to invite original and unpublished manuscripts from academicians, researchers, legal practitioners, judges, policymakers, and students for publication in its forthcoming issue.
        </p>
        <p>
          The Journal seeks to promote high-quality legal scholarship and welcomes contributions on contemporary legal issues, emerging challenges, and interdisciplinary perspectives relating to law and justice. Submissions may address any area of law, including but not limited to Constitutional Law, Criminal Law, Human Rights Law, Family Law, Environmental Law, Corporate Law, Intellectual Property Law, International Law, Cyber Law, Labour Law, and allied disciplines.
        </p>

        <h3 style={{ marginTop: 20 }}>Categories of Submission</h3>
        <ul style={{ paddingLeft: 20, marginBottom: 15, lineHeight: 1.8 }}>
          <li><strong>Research Articles:</strong> 5,000–8,000 words (including footnotes)</li>
          <li><strong>Short Articles / Essays:</strong> 3,000–5,000 words (including footnotes)</li>
          <li><strong>Case Comments:</strong> 1,500–3,000 words (including footnotes)</li>
          <li><strong>Legislative Comments / Policy Reviews:</strong> 1,500–3,000 words (including footnotes)</li>
          <li><strong>Book Reviews:</strong> 1,000–2,000 words</li>
        </ul>

        <h3 style={{ marginTop: 20 }}>Submission Guidelines</h3>
        <ul style={{ paddingLeft: 20, marginBottom: 15, lineHeight: 1.8 }}>
          <li>Manuscripts must be original, unpublished, and not under consideration elsewhere.</li>
          <li>All submissions shall be accompanied by an abstract of not more than 250-300 words and 5–6 keywords.</li>
          <li>Authors must follow the Indian Law Institute (ILI) rule of citation.</li>
          <li>The Editorial Board reserves the right to edit submissions for clarity, style, and formatting.</li>
        </ul>

        <h3 style={{ marginTop: 20 }}>Important Dates</h3>
        <ul style={{ paddingLeft: 20, marginBottom: 15, lineHeight: 1.8 }}>
          <li><strong>Release of Call for Papers:</strong> 12th March 2025</li>
          <li><strong>Last Date for Submission:</strong> 16th June 2025</li>
          <li><strong>Notification of Acceptance/Rejection:</strong> Within 13th October 2025</li>
          <li><strong>Publication:</strong> November- December</li>
        </ul>

        <h3 style={{ marginTop: 20 }}>Submission Procedure</h3>
        <p>
          Manuscripts should be submitted electronically in MS Word format as well as in hard copy to:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:editoriallegalofficedmu@gmail.com" style={{ color: "var(--dmu-link)", textDecoration: "underline" }}>editoriallegalofficedmu@gmail.com</a>
        </p>
        <p>
          The subject line of the email should read: <br />
          <em>&quot;Submission for Volume I, Issue I – [Author Name and Paper title]&quot;</em>
        </p>

        <h3 style={{ marginTop: 20 }}>Contact Information</h3>
        <p style={{ lineHeight: 1.8 }}>
          <strong>Dhanamanjuri University of Journal of Legal Studies</strong><br />
          Department of Law, School of Legal Studies, <br />
          Dhanamanjuri University, Manipur<br />
          <strong>Email:</strong> <a href="mailto:editoriallegalofficedmu@gmail.com" style={{ color: "var(--dmu-link)", textDecoration: "underline" }}>editoriallegalofficedmu@gmail.com</a><br />
          <strong>Website:</strong> <a href="https://lmslawcollege.ac.in/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--dmu-link)", textDecoration: "underline" }}>https://lmslawcollege.ac.in/</a>
        </p>
        <p style={{ marginTop: 20, fontStyle: "italic", color: "var(--dmu-text-light)" }}>
          The Editorial Board looks forward to receiving scholarly contributions and fostering meaningful legal discourse through this publication.
        </p>
      </div>
    </>
  );
}
