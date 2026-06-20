"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">


      {/* Information */}
      <div className="sidebar-card">
        <div className="sidebar-card-header">Information</div>
        <div className="sidebar-card-body">
          <ul>
            <li><Link href="/publication-policy#access-policy">For Readers</Link></li>
            <li><Link href="/authors">For Authors</Link></li>
            <li><Link href="/ethics-policy#reviewer-resp">For Reviewers</Link></li>
            <li><Link href="/publication-policy#archiving">For Librarians</Link></li>
          </ul>
        </div>
      </div>



      {/* Journal Info */}
      <div className="sidebar-card">
        <div className="sidebar-card-header">Journal Details</div>
        <div className="sidebar-card-body">
          <div style={{ fontSize: 13, lineHeight: 2 }}>
            <div>
              <strong>Publisher:</strong> Dhanamanjuri University
            </div>
            <div>
              <strong>Frequency:</strong> Annually
            </div>
            <div>
              <strong>Language:</strong> English
            </div>
            <div>
              <strong>Review:</strong> Double-Blind Peer Review
            </div>
            <div>
              <strong>Access:</strong> Open Access
            </div>
            <div>
              <strong>License:</strong> CC BY 4.0
            </div>
          </div>
        </div>
      </div>

      {/* Indexing */}
      <div className="sidebar-card">
        <div className="sidebar-card-header">Indexed In</div>
        <div className="sidebar-card-body">
          <ul>
            <li><Link href="/about-dmu#indexing">Google Scholar</Link></li>
            <li><Link href="/about-dmu#indexing">DOAJ</Link></li>
            <li><Link href="/about-dmu#indexing">CrossRef</Link></li>
            <li><Link href="/about-dmu#indexing">Indian Citation Index</Link></li>
            <li><Link href="/about-dmu#indexing">BASE (Bielefeld Academic)</Link></li>
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="sidebar-card">
        <div className="sidebar-card-header">Quick Links</div>
        <div className="sidebar-card-body">
          <ul>
            <li><Link href="/authors#guidelines">Author Guidelines</Link></li>
            <li><Link href="/about-dmu#editorial">Editorial Board</Link></li>
            <li><Link href="/publication-policy#peer-review">Peer Review Process</Link></li>
            <li><Link href="/about-dmu#charges">Publication Charges</Link></li>
            <li><Link href="/ethics-policy#copyright">Copyright Policy</Link></li>
            <li><Link href="/ethics-policy#plagiarism">Plagiarism Policy</Link></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
